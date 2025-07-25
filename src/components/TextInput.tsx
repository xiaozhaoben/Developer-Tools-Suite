import React, { useState } from 'react';
import { Code, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TextInputProps {
  onTextContent: (content: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ onTextContent }) => {
  const { t } = useTranslation();
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onTextContent(content);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 text-gray-700 dark:text-dark-300">
        <Code className="w-5 h-5" />
        <span className="font-medium">{t('paste_nginx_log_content')}</span>
      </div>
      
      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('paste_nginx_log_content_placeholder')}
          className="w-full h-40 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-dark-700 dark:border-dark-600 dark:text-white"
        />
        
        <div className="absolute bottom-2 right-2 text-xs text-gray-400 dark:text-dark-500">
          {t('ctrl_enter_to_parse')}
        </div>
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={!content.trim()}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 dark:bg-blue-700 dark:hover:bg-blue-600"
      >
        <Zap className="w-4 h-4" />
        {t('parse_logs')}
      </button>
    </div>
  );
};