
import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { GenerationPanel } from './components/GenerationPanel';
import type { Generator, GenerationType } from './types';
import { enhancePromptWithGemini } from './services/geminiService';
import { INITIAL_GENERATORS } from './constants';
import { GeneratorsPage } from './components/pages/GeneratorsPage';
import { PromptPage } from './components/pages/PromptPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { CustomGeneratorIcon } from './components/icons/GeneratorIcons';

type Page = 'generators' | 'prompt' | 'gallery' | 'settings';

const App: React.FC = () => {
  const [generators, setGenerators] = useState<Generator[]>(INITIAL_GENERATORS);
  const [selectedGeneratorIds, setSelectedGeneratorIds] = useState<string[]>(['leonardo', 'pika']);
  const [prompt, setPrompt] = useState('A futuristic cityscape with neon lights');
  const [generationType, setGenerationType] = useState<GenerationType>('Image');
  const [isLoading, setIsLoading] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<{ type: GenerationType, content: string } | null>(null);
  const [page, setPage] = useState<Page>('generators');

  const handleSelectGenerator = (id: string) => {
    setSelectedGeneratorIds(prev =>
      prev.includes(id) ? prev.filter(gid => gid !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    if (!prompt || selectedGeneratorIds.length === 0) return;
    setIsLoading(true);
    setGeneratedResult(null);

    // Simulate API call and credit deduction
    setTimeout(() => {
      setGenerators(prev =>
        prev.map(gen =>
          selectedGeneratorIds.includes(gen.id)
            ? { ...gen, creditsUsed: Math.min(gen.creditsTotal, gen.creditsUsed + 10) }
            : gen
        )
      );

      // Simulate a result based on type
      if (generationType === 'Image') {
        setGeneratedResult({ type: 'Image', content: `https://picsum.photos/seed/${Math.random()}/512` });
      } else if (generationType === 'Video') {
        setGeneratedResult({ type: 'Video', content: 'Video generation successful (simulation).' });
      } else {
        setGeneratedResult({ type: 'Text', content: 'Text generation successful (simulation).' });
      }

      setIsLoading(false);
    }, 2000);
  };

  const handleEnhancePrompt = useCallback(async () => {
    if (!prompt) return;
    setIsEnhancing(true);
    try {
      const enhanced = await enhancePromptWithGemini(prompt);
      setPrompt(enhanced);
    } catch (error) {
      console.error("Failed to enhance prompt:", error);
    } finally {
      setIsEnhancing(false);
    }
  }, [prompt]);
  
  const handleAddGenerator = (newGeneratorData: { name: string; creditsTotal: number, accountUrl?: string }) => {
    const newGenerator: Generator = {
      id: `custom-${Date.now()}`,
      name: newGeneratorData.name,
      icon: CustomGeneratorIcon,
      creditsUsed: 0,
      creditsTotal: newGeneratorData.creditsTotal,
      refreshTime: 'Manual',
      accountUrl: newGeneratorData.accountUrl,
    };
    setGenerators(prev => [...prev, newGenerator]);
  };

  const renderPage = () => {
    switch (page) {
      case 'generators':
        return (
          <div className="flex flex-col md:flex-row gap-6 h-full">
            <GeneratorsPage
              generators={generators}
              selectedGeneratorIds={selectedGeneratorIds}
              onSelectGenerator={handleSelectGenerator}
              onAddGenerator={handleAddGenerator}
            />
            <div className="w-full lg:w-1/3">
              <GenerationPanel
                prompt={prompt}
                setPrompt={setPrompt}
                generationType={generationType}
                setGenerationType={setGenerationType}
                onGenerate={handleGenerate}
                onEnhance={handleEnhancePrompt}
                isLoading={isLoading}
                isEnhancing={isEnhancing}
                result={generatedResult}
              />
            </div>
          </div>
        );
      case 'prompt':
        return <PromptPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <h1>Page not found</h1>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white flex flex-col lg:flex-row p-4 sm:p-6 lg:p-8 gap-6">
      <Sidebar currentPage={page} setPage={setPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
