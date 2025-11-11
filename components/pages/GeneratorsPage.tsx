
import React, { useState } from 'react';
import type { Generator } from '../../types';
import { GeneratorCard } from '../GeneratorCard';
import { AddGeneratorModal } from '../AddGeneratorModal';

interface GeneratorsPageProps {
  generators: Generator[];
  selectedGeneratorIds: string[];
  onSelectGenerator: (id: string) => void;
  onAddGenerator: (data: { name: string; creditsTotal: number; accountUrl?: string }) => void;
}

export const GeneratorsPage: React.FC<GeneratorsPageProps> = ({
  generators,
  selectedGeneratorIds,
  onSelectGenerator,
  onAddGenerator,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-1 lg:w-2/3">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">My AI Generators</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Generator
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {generators.map(gen => (
          <GeneratorCard
            key={gen.id}
            generator={gen}
            isSelected={selectedGeneratorIds.includes(gen.id)}
            onSelect={() => onSelectGenerator(gen.id)}
          />
        ))}
      </div>
      {isModalOpen && <AddGeneratorModal onClose={() => setIsModalOpen(false)} onAddGenerator={onAddGenerator} />}
    </div>
  );
};
