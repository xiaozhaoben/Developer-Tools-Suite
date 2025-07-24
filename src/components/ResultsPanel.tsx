import React from 'react';
import { Download, Copy, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { ParseResult } from '../types';
import { CommandCard } from './CommandCard';
import { useTranslation } from 'react-i18next';

interface ResultsPanelProps {
  result: ParseResult;
  onClearResults: () => void;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ result, onClearResults }) => {
  const { t } = useTranslation();
  
  const handleDownloadAll = () => {
    const content = result.commands.map(cmd => cmd.curl).join('\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `curl-commands-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyAll = async () => {
    const content = result.commands.map(cmd => cmd.curl).join('\n\n');
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.error('Failed to copy all commands:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{t('parse_results')}</h2>
          <button
            onClick={onClearResults}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {t('clear_results')}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">
              {t('commands_generated', { count: result.commands.length })}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">
              {t('errors', { count: result.errors.length })}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">
              {t('total_lines_processed', { count: result.total })}
            </span>
          </div>
        </div>
        
        {result.commands.length > 0 && (
          <div className="flex gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
            >
              <Copy className="w-4 h-4" />
              {t('copy_all')}
            </button>
            
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              {t('download')}
            </button>
          </div>
        )}
      </div>
      
      {/* Errors */}
      {result.errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-5 h-5 text-red-500" />
            <span className="font-medium text-red-800">{t('parsing_errors')}</span>
          </div>
          <ul className="space-y-1">
            {result.errors.map((error, index) => (
              <li key={index} className="text-sm text-red-700">
                • {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Commands */}
      {result.commands.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {t('generated_curl_commands', { count: result.commands.length })}
          </h3>
          
          <div className="space-y-4">
            {result.commands.map((command, index) => (
              <CommandCard key={command.id} command={command} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};