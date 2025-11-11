
import React, { useState } from 'react';

interface AddGeneratorModalProps {
  onClose: () => void;
  onAddGenerator: (data: { name: string; creditsTotal: number; accountUrl?: string }) => void;
}

export const AddGeneratorModal: React.FC<AddGeneratorModalProps> = ({ onClose, onAddGenerator }) => {
  const [name, setName] = useState('');
  const [creditsTotal, setCreditsTotal] = useState(100);
  const [accountUrl, setAccountUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && creditsTotal > 0) {
      onAddGenerator({ name, creditsTotal, accountUrl });
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-generator-title"
    >
      <div 
        className="bg-[#161B22] border border-gray-700 rounded-xl p-6 w-full max-w-md m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="add-generator-title" className="text-xl font-bold text-white mb-4">Add New Generator</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="generator-name" className="block text-sm font-medium text-purple-400 mb-1">
              Generator Name
            </label>
            <input
              id="generator-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., My Custom AI"
              required
              className="w-full bg-[#0D1117] border border-purple-500/50 rounded-lg p-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="total-credits" className="block text-sm font-medium text-purple-400 mb-1">
              Total Credits
            </label>
            <input
              id="total-credits"
              type="number"
              value={creditsTotal}
              onChange={(e) => setCreditsTotal(parseInt(e.target.value, 10) || 0)}
              required
              min="1"
              className="w-full bg-[#0D1117] border border-purple-500/50 rounded-lg p-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="account-url" className="block text-sm font-medium text-purple-400 mb-1">
              Account URL (Optional)
            </label>
            <input
              id="account-url"
              type="url"
              value={accountUrl}
              onChange={(e) => setAccountUrl(e.target.value)}
              placeholder="https://example.com/my-account"
              className="w-full bg-[#0D1117] border border-purple-500/50 rounded-lg p-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-transparent border border-gray-600 text-gray-300 font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#28233E] border border-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-[#3a325a] transition-colors"
            >
              Add Generator
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
