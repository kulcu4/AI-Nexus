
import React from 'react';
import type { GenerationType } from '../types';
import { SparklesIcon } from './icons/NavIcons';

interface GenerationPanelProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  generationType: GenerationType;
  setGenerationType: (type: GenerationType) => void;
  onGenerate: () => void;
  onEnhance: () => void;
  isLoading: boolean;
  isEnhancing: boolean;
  result: { type: GenerationType, content: string } | null;
}

const GenerationTypeCheckbox: React.FC<{
    label: GenerationType;
    isChecked: boolean;
    onChange: (label: GenerationType) => void;
}> = ({ label, isChecked, onChange }) => (
    <label className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white transition-colors">
        <div className={`w-5 h-5 rounded-md flex items-center justify-center border-2 transition-all ${isChecked ? 'bg-[#9D4EDD] border-[#9D4EDD]' : 'border-gray-600'}`}>
            {isChecked && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
            )}
        </div>
        <span>{label}</span>
    </label>
);

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


export const GenerationPanel: React.FC<GenerationPanelProps> = ({
  prompt,
  setPrompt,
  generationType,
  setGenerationType,
  onGenerate,
  onEnhance,
  isLoading,
  isEnhancing,
  result
}) => {
  const types: GenerationType[] = ['Image', 'Video', 'Text'];

  return (
    <div className="bg-[#161B22] border border-gray-700 rounded-xl p-6 sticky top-8 space-y-6">
      <div>
        <label className="block text-sm font-medium text-purple-400 mb-2">Description</label>
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic cityscape..."
            className="w-full h-32 bg-[#0D1117] border border-purple-500/50 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
          />
          <button
            onClick={onEnhance}
            disabled={isEnhancing}
            className="absolute bottom-2 right-2 flex items-center gap-1 text-xs bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 px-2 py-1 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isEnhancing ? <LoadingSpinner /> : <SparklesIcon />}
            Enhance
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {types.map(type => (
          <GenerationTypeCheckbox
            key={type}
            label={type}
            isChecked={generationType === type}
            onChange={() => setGenerationType(type)}
          />
        ))}
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading}
        className="w-full flex justify-center items-center bg-[#28233E] border border-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-[#3a325a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#161B22] focus:ring-purple-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading && <LoadingSpinner />}
        {isLoading ? 'Generating...' : 'Generate'}
      </button>

      {result && (
        <div className="border-t border-gray-700 pt-4 mt-4">
          <h3 className="text-purple-400 font-semibold mb-2">Result</h3>
          <div className="bg-[#0D1117] p-3 rounded-lg break-words">
            {result.type === 'Image' ? (
              <img src={result.content} alt="Generated" className="rounded-md w-full" />
            ) : (
              <p className="text-gray-300">{result.content}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
