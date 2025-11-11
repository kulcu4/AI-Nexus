
import React from 'react';
import type { Generator } from '../types';

interface GeneratorCardProps {
  generator: Generator;
  isSelected: boolean;
  onSelect: () => void;
}

const CustomCheckbox: React.FC<{ checked: boolean; disabled: boolean }> = ({ checked, disabled }) => (
    <div className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
        checked && !disabled ? 'bg-[#9D4EDD] border-[#9D4EDD]' : 'bg-transparent border-2 border-gray-600'
    } ${disabled ? 'border-gray-700 bg-gray-800' : ''}`}>
        {checked && !disabled && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
        )}
    </div>
);


export const GeneratorCard: React.FC<GeneratorCardProps> = ({ generator, isSelected, onSelect }) => {
  const percentage = generator.creditsTotal > 0 ? (generator.creditsUsed / generator.creditsTotal) * 100 : 0;
  const isDepleted = generator.creditsUsed >= generator.creditsTotal;

  return (
    <div
      className={`
        bg-[#161B22] border border-gray-700 rounded-xl p-4 flex flex-col h-52 transition-all duration-300
        ${isDepleted ? 'opacity-50' : 'cursor-pointer hover:border-purple-600'}
        ${isSelected && !isDepleted ? 'border-purple-500 ring-2 ring-purple-500/50' : ''}
      `}
      onClick={!isDepleted ? onSelect : undefined}
      role="checkbox"
      aria-checked={isSelected}
      aria-disabled={isDepleted}
      tabIndex={isDepleted ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if (!isDepleted) onSelect();
        }
      }}
    >
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
                <generator.icon className="w-6 h-6 text-gray-300" />
                <h3 className="font-bold text-lg text-white">{generator.name}</h3>
            </div>
            <CustomCheckbox checked={isSelected} disabled={isDepleted} />
        </div>
        
        <div className="flex-grow"></div>
        
        <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-medium">
                    {generator.creditsUsed} / {generator.creditsTotal} credits
                </span>
                <span className={`text-sm ${isDepleted ? 'text-gray-500' : 'text-gray-400'}`}>{generator.refreshTime}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    </div>
  );
};
