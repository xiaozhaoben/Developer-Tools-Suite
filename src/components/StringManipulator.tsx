import React, { useState } from 'react';
import { Type, Copy, Download, RotateCcw, Zap, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const StringManipulator: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [leftChar, setLeftChar] = useState('"');
  const [rightChar, setRightChar] = useState('"');
  const [result, setResult] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // 根据当前语言提供示例文本
  const getPlaceholderText = () => {
    const examples: Record<string, string> = {
      'zh-CN': '湖北子午设计有限公司\n宜昌高新区仓鸟百货商行\n湖北寻珑鳞商贸有限公司\n骏尚通讯（湖北）有限公司\n湖北新语通科技有限公司\n黄石茵宝楼科技有限公司\n随县顺金石业有限公司\n潜江市柳一柳电子商务有限公司',
      'en': 'ABC Corporation\nXYZ Industries\nGlobal Solutions Ltd\nTech Innovations Inc\nCreative Minds LLC\nDigital Dynamics Corp\nFuture Enterprises\nInnovative Systems Co',
      'ja': '株式会社日本デザイン\n東京インターナショナル株式会社\n大阪商事会社\n神戸テクノロジー株式会社\n名古屋グローバルビジネス\n福岡ソフトウェア会社\n北海道イノベーション社\n広島システムズ合同会社',
      'ko': '한국디자인주식회사\n서울글로벌무역\n부산테크솔루션\n대구소프트웨어주식회사\n인천국제비즈니스\n광주인포메이션주식회사\n대전이노베이션회사\n울산시스템즈유한회사',
      'fr': 'Solutions Françaises SARL\nTechnologies Européennes SA\nDesign Créatif SAS\nInnovations Numériques\nSystèmes Intelligents SARL\nGlobal Services SAS\nDigital Solutions France SA\nCreative Enterprises SARL',
      'de': 'Deutsche Design GmbH\nEuropäische Technologie AG\nKreativlösungen GmbH\nInnovative Systeme KG\nGlobale Dienste GmbH\nTechnische Lösungen AG\nDeutsche Software GmbH\nKreative Ideen KG',
      'es': 'Diseño Español S.L.\nTecnologías Europeas S.A.\nSoluciones Creativas S.L.\nInnovaciones Digitales\nSistemas Inteligentes S.L.\nServicios Globales S.A.\nSoluciones Tecnológicas España S.L.\nEmpresas Creativas S.L.'
    };
    
    return examples[i18n.language] || examples['en'];
  };

  const handleProcess = () => {
    if (!inputText.trim()) return;
    
    const lines = inputText.split('\n').filter(line => line.trim());
    const processedLines = lines.map(line => `${leftChar}${line.trim()}${rightChar}`);
    setResult(processedLines);
  };

  const handleClear = () => {
    setInputText('');
    setResult([]);
    setLeftChar('"');
    setRightChar('"');
  };

  const handleCopy = async () => {
    const content = result.join('\n');
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleDownload = () => {
    const content = result.join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `processed-strings-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const presetOptions = [
    { name: t('double_quotes'), left: '"', right: '"' },
    { name: t('single_quotes'), left: "'", right: "'" },
    { name: t('parentheses'), left: '(', right: ')' },
    { name: t('square_brackets'), left: '[', right: ']' },
    { name: t('curly_braces'), left: '{', right: '}' },
    { name: t('angle_brackets'), left: '<', right: '>' },
    { name: t('backticks'), left: '`', right: '`' },
    { name: t('sql_quotes'), left: "'", right: "'," },
  ];

  const handlePresetSelect = (preset: { left: string; right: string }) => {
    setLeftChar(preset.left);
    setRightChar(preset.right);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-dark-800 dark:border-dark-700">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t('string_manipulator_title')}</h2>
          </div>
          
          <p className="text-sm text-gray-600 mb-6 dark:text-dark-300">
            {t('string_manipulator_desc2')}
          </p>

          {/* Character Configuration */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-dark-300">
                  {t('left_character')}
                </label>
                <input
                  type="text"
                  value={leftChar}
                  onChange={(e) => setLeftChar(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-dark-700 dark:border-dark-600 dark:text-white"
                  placeholder={t('enter_left_character')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-dark-300">
                  {t('right_character')}
                </label>
                <input
                  type="text"
                  value={rightChar}
                  onChange={(e) => setRightChar(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-dark-700 dark:border-dark-600 dark:text-white"
                  placeholder={t('enter_right_character')}
                />
              </div>
            </div>

            {/* Preset Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-dark-300">
                {t('quick_presets')}
              </label>
              <div className="flex flex-wrap gap-2">
                {presetOptions.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => handlePresetSelect(preset)}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors dark:bg-dark-700 dark:text-dark-300 dark:hover:bg-dark-600"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-dark-300">
              {t('preview_format')}
            </label>
            <div className="bg-gray-50 rounded-md p-3 font-mono text-sm text-gray-800 dark:bg-dark-700 dark:text-dark-300">
              {leftChar}<span className="text-blue-600 dark:text-blue-400">{t('your_text_here')}</span>{rightChar}
            </div>
          </div>

          {/* Input Text Area */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-dark-300">
              {t('input_text')}
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={getPlaceholderText()}
              className="w-full h-48 p-4 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-dark-700 dark:border-dark-600 dark:text-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleProcess}
              disabled={!inputText.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              <Zap className="w-4 h-4" />
              {t('process_text')}
            </button>
            
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors dark:bg-dark-600 dark:hover:bg-dark-500"
            >
              <RotateCcw className="w-4 h-4" />
              {t('clear_all')}
            </button>
          </div>
        </div>

        {/* Info Panel */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 dark:bg-green-900/20 dark:border-green-800">
          <h3 className="font-medium text-green-900 mb-2 dark:text-green-300">{t('how_to_use')}</h3>
          <ul className="text-sm text-green-800 space-y-1 dark:text-green-200">
            <li>• {t('how_to_use_item1')}</li>
            <li>• {t('how_to_use_item2')}</li>
            <li>• {t('how_to_use_item3')}</li>
            <li>• {t('how_to_use_item4')}</li>
          </ul>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {result.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 dark:bg-dark-800 dark:border-dark-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('processed_results', { count: result.length })}
              </h3>
              
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? t('copied') : t('copy_all')}
                </button>
                
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors dark:bg-green-700 dark:hover:bg-green-600"
                >
                  <Download className="w-4 h-4" />
                  {t('download')}
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto dark:bg-dark-700">
              <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap dark:text-dark-300">
                {result.join('\n')}
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center dark:bg-dark-800 dark:border-dark-700">
            <div className="text-gray-400 mb-4 dark:text-dark-500">
              <Type className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 dark:text-white">
              {t('no_text_processed_yet')}
            </h3>
            <p className="text-gray-600 dark:text-dark-300">
              {t('no_text_processed_yet_desc')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};