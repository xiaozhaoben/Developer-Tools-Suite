import React, { useState } from 'react';
import { Type, Copy, Download, RotateCcw, Zap, Check } from 'lucide-react';

export const StringManipulator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [leftChar, setLeftChar] = useState('"');
  const [rightChar, setRightChar] = useState('"');
  const [result, setResult] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

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
    { name: 'Double Quotes', left: '"', right: '"' },
    { name: 'Single Quotes', left: "'", right: "'" },
    { name: 'Parentheses', left: '(', right: ')' },
    { name: 'Square Brackets', left: '[', right: ']' },
    { name: 'Curly Braces', left: '{', right: '}' },
    { name: 'Angle Brackets', left: '<', right: '>' },
    { name: 'Backticks', left: '`', right: '`' },
    { name: 'SQL Quotes', left: "'", right: "'," },
  ];

  const handlePresetSelect = (preset: { left: string; right: string }) => {
    setLeftChar(preset.left);
    setRightChar(preset.right);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Type className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">String Manipulator</h2>
          </div>
          
          <p className="text-sm text-gray-600 mb-6">
            Add custom characters to the beginning and end of each line in your text.
          </p>

          {/* Character Configuration */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Left Character(s)
                </label>
                <input
                  type="text"
                  value={leftChar}
                  onChange={(e) => setLeftChar(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter left character(s)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Right Character(s)
                </label>
                <input
                  type="text"
                  value={rightChar}
                  onChange={(e) => setRightChar(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter right character(s)"
                />
              </div>
            </div>

            {/* Preset Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Presets
              </label>
              <div className="flex flex-wrap gap-2">
                {presetOptions.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => handlePresetSelect(preset)}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preview Format
            </label>
            <div className="bg-gray-50 rounded-md p-3 font-mono text-sm text-gray-800">
              {leftChar}<span className="text-blue-600">your text here</span>{rightChar}
            </div>
          </div>

          {/* Input Text Area */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input Text (one item per line)
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="湖北子午设计有限公司&#10;宜昌高新区仓鸟百货商行&#10;湖北寻珑鳞商贸有限公司&#10;骏尚通讯（湖北）有限公司&#10;湖北新语通科技有限公司&#10;黄石茵宝楼科技有限公司&#10;随县顺金石业有限公司&#10;潜江市柳一柳电子商务有限公司"
              className="w-full h-48 p-4 border border-gray-300 rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleProcess}
              disabled={!inputText.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Zap className="w-4 h-4" />
              Process Text
            </button>
            
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>

        {/* Info Panel */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-medium text-green-900 mb-2">How to Use</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Enter text with one item per line</li>
            <li>• Set custom left and right characters</li>
            <li>• Use presets for common formats</li>
            <li>• Process and copy/download results</li>
          </ul>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6">
        {result.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Processed Results ({result.length} items)
              </h3>
              
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy All'}
                </button>
                
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap">
                {result.join('\n')}
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Type className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No text processed yet
            </h3>
            <p className="text-gray-600">
              Enter some text and configure the characters to see the processed results here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};