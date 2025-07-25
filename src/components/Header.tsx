import React, { useState } from 'react';
import { Wrench, Code, Globe, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  const languages = [
    { code: 'zh-CN', name: t('chinese') },
    { code: 'en', name: t('english') },
    { code: 'ja', name: t('japanese') },
    { code: 'ko', name: t('korean') },
    { code: 'fr', name: t('french') },
    { code: 'de', name: t('german') },
    { code: 'es', name: t('spanish') }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 dark:bg-dark-900 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('developer_tools_suite')}
              </h1>
              <p className="text-sm text-gray-600 dark:text-dark-300">
                {t('essential_tools_for_developers')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* 主题切换按钮 */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-dark-800"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            
            {/* 语言切换下拉菜单 */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-dark-400 dark:hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{t('language')}</span>
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:bg-dark-800 dark:border-dark-700">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language === language.code
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-dark-300 dark:hover:bg-dark-700'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-400">
              <Code className="w-4 h-4" />
              <span>{t('production_ready')}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};