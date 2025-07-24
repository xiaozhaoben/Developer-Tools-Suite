import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 语言资源文件
const resources = {
  'zh-CN': {
    translation: {
      // Header 组件
      'developer_tools_suite': '开发者工具套件',
      'essential_tools_for_developers': '开发者必备工具',
      'production_ready': '生产就绪',
      'language': '语言',
      'english': '英语',
      'chinese': '中文',
      'japanese': '日语',
      'korean': '韩语',
      'french': '法语',
      'german': '德语',
      'spanish': '西班牙语',
      
      // App 组件 (标签页)
      'nginx_log_parser': 'Nginx日志解析器',
      'nginx_log_parser_desc': '将nginx日志转换为curl命令',
      'string_manipulator': '字符串操作器',
      'string_manipulator_desc': '为字符串添加自定义字符',
      
      // NginxLogParser 组件
      'import_nginx_logs': '导入Nginx日志',
      'upload_log_file_or_paste_log_content': '上传日志文件或粘贴日志内容以生成curl命令',
      'upload_file': '上传文件',
      'paste_content': '粘贴内容',
      'settings_saved_successfully': '设置保存成功！',
      'supported_format': '支持的格式',
      'supported_format_desc': '此解析器支持包含以下字段的JSON格式nginx日志：',
      'no_logs_processed_yet': '尚未处理日志',
      'no_logs_processed_yet_desc': '上传日志文件或粘贴日志内容以在此处查看生成的curl命令。',
      
      // StringManipulator 组件
      'string_manipulator_title': '字符串操作器',
      'string_manipulator_desc2': '在文本每行的开头和结尾添加自定义字符。',
      'left_character': '左侧字符',
      'right_character': '右侧字符',
      'quick_presets': '快速预设',
      'preview_format': '预览格式',
      'input_text': '输入文本（每行一项）',
      'process_text': '处理文本',
      'clear_all': '清除所有',
      'how_to_use': '如何使用',
      'how_to_use_item1': '输入每行一项的文本',
      'how_to_use_item2': '设置自定义左右字符',
      'how_to_use_item3': '使用预设获取常用格式',
      'how_to_use_item4': '处理并复制/下载结果',
      'no_text_processed_yet': '尚未处理文本',
      'no_text_processed_yet_desc': '输入一些文本并配置字符以在此处查看处理结果。',
      'processed_results': '处理结果 ({{count}} 项)',
      'copy_all': '全部复制',
      'download': '下载',
      'copied': '已复制!',
      'double_quotes': '双引号',
      'single_quotes': '单引号',
      'parentheses': '括号',
      'square_brackets': '方括号',
      'curly_braces': '花括号',
      'angle_brackets': '尖括号',
      'backticks': '反引号',
      'sql_quotes': 'SQL引号',
      'enter_left_character': '输入左侧字符',
      'enter_right_character': '输入右侧字符',
      'your_text_here': '你的文本在这里',
      
      // FileUpload 组件
      'upload_nginx_log_file': '上传nginx日志文件',
      'drag_and_drop_or_click': '拖放或点击选择.log或.txt文件',
      'failed_to_read_file': '读取文件失败，请重试。',
      'please_upload_valid_log_file': '请上传有效的日志文件(.log或.txt)',
      
      // TextInput 组件
      'paste_nginx_log_content': '粘贴nginx日志内容',
      'paste_nginx_log_content_placeholder': '在此粘贴您的nginx日志条目...（每行一条）\n\n示例:\n/path/to/log.access.log:{"remote_addr":"192.168.1.1","method":"POST","uri":"/api/endpoint"...}',
      'ctrl_enter_to_parse': 'Ctrl+Enter 解析',
      'parse_logs': '解析日志',
      
      // ConfigPanel 组件
      'advanced_configuration': '高级配置',
      'target_host': '目标主机',
      'target_host_placeholder': 'localhost:3000',
      'target_host_desc': '在生成的curl命令中使用的主机/域名',
      'protocol': '协议',
      'default_content_type': '默认内容类型',
      'timeout_seconds': '超时（秒）',
      'include_original_headers': '包含原始头部',
      'pretty_print_json': '美化打印JSON',
      'follow_redirects': '跟随重定向 (-L 标志)',
      'save_settings': '保存设置',
      'reset_to_default': '重置为默认',
      
      // ResultsPanel 组件
      'parse_results': '解析结果',
      'clear_results': '清除结果',
      'commands_generated': '{{count}} 个命令已生成',
      'errors': '{{count}} 个错误',
      'total_lines_processed': '{{count}} 行已处理',
      'parsing_errors': '解析错误',
      'generated_curl_commands': '生成的Curl命令 ({{count}})',
      
      // CommandCard 组件
      'copy': '复制',
      'hide_original_log': '隐藏原始日志',
      'show_original_log': '显示原始日志',
      'original_log': '原始日志',
      'curl_command': 'Curl命令'
    }
  },
  'en': {
    translation: {
      // Header 组件
      'developer_tools_suite': 'Developer Tools Suite',
      'essential_tools_for_developers': 'Essential tools for developers',
      'production_ready': 'Production Ready',
      'language': 'Language',
      'english': 'English',
      'chinese': 'Chinese',
      'japanese': 'Japanese',
      'korean': 'Korean',
      'french': 'French',
      'german': 'German',
      'spanish': 'Spanish',
      
      // App 组件 (标签页)
      'nginx_log_parser': 'Nginx Log Parser',
      'nginx_log_parser_desc': 'Convert nginx logs to curl commands',
      'string_manipulator': 'String Manipulator',
      'string_manipulator_desc': 'Add custom characters to strings',
      
      // NginxLogParser 组件
      'import_nginx_logs': 'Import Nginx Logs',
      'upload_log_file_or_paste_log_content': 'Upload a log file or paste log content to generate curl commands',
      'upload_file': 'Upload File',
      'paste_content': 'Paste Content',
      'settings_saved_successfully': 'Settings saved successfully!',
      'supported_format': 'Supported Format',
      'supported_format_desc': 'This parser supports JSON-formatted nginx logs with the following fields:',
      'no_logs_processed_yet': 'No logs processed yet',
      'no_logs_processed_yet_desc': 'Upload a log file or paste log content to see the generated curl commands here.',
      
      // StringManipulator 组件
      'string_manipulator_title': 'String Manipulator',
      'string_manipulator_desc2': 'Add custom characters to the beginning and end of each line in your text.',
      'left_character': 'Left Character(s)',
      'right_character': 'Right Character(s)',
      'quick_presets': 'Quick Presets',
      'preview_format': 'Preview Format',
      'input_text': 'Input Text (one item per line)',
      'process_text': 'Process Text',
      'clear_all': 'Clear All',
      'how_to_use': 'How to Use',
      'how_to_use_item1': 'Enter text with one item per line',
      'how_to_use_item2': 'Set custom left and right characters',
      'how_to_use_item3': 'Use presets for common formats',
      'how_to_use_item4': 'Process and copy/download results',
      'no_text_processed_yet': 'No text processed yet',
      'no_text_processed_yet_desc': 'Enter some text and configure the characters to see the processed results here.',
      'processed_results': 'Processed Results ({{count}} items)',
      'copy_all': 'Copy All',
      'download': 'Download',
      'copied': 'Copied!',
      'double_quotes': 'Double Quotes',
      'single_quotes': 'Single Quotes',
      'parentheses': 'Parentheses',
      'square_brackets': 'Square Brackets',
      'curly_braces': 'Curly Braces',
      'angle_brackets': 'Angle Brackets',
      'backticks': 'Backticks',
      'sql_quotes': 'SQL Quotes',
      'enter_left_character': 'Enter left character(s)',
      'enter_right_character': 'Enter right character(s)',
      'your_text_here': 'your text here',
      
      // FileUpload 组件
      'upload_nginx_log_file': 'Upload nginx log file',
      'drag_and_drop_or_click': 'Drag and drop or click to select a .log or .txt file',
      'failed_to_read_file': 'Failed to read file. Please try again.',
      'please_upload_valid_log_file': 'Please upload a valid log file (.log or .txt)',
      
      // TextInput 组件
      'paste_nginx_log_content': 'Paste nginx log content',
      'paste_nginx_log_content_placeholder': 'Paste your nginx log entries here... (one per line)\n\nExample:\n/path/to/log.access.log:{"remote_addr":"192.168.1.1","method":"POST","uri":"/api/endpoint"...}',
      'ctrl_enter_to_parse': 'Ctrl+Enter to parse',
      'parse_logs': 'Parse Logs',
      
      // ConfigPanel 组件
      'advanced_configuration': 'Advanced Configuration',
      'target_host': 'Target Host',
      'target_host_placeholder': 'localhost:3000',
      'target_host_desc': 'The host/domain to use in generated curl commands',
      'protocol': 'Protocol',
      'default_content_type': 'Default Content Type',
      'timeout_seconds': 'Timeout (seconds)',
      'include_original_headers': 'Include original headers',
      'pretty_print_json': 'Pretty print JSON',
      'follow_redirects': 'Follow redirects (-L flag)',
      'save_settings': 'Save Settings',
      'reset_to_default': 'Reset to Default',
      
      // ResultsPanel 组件
      'parse_results': 'Parse Results',
      'clear_results': 'Clear Results',
      'commands_generated': '{{count}} commands generated',
      'errors': '{{count}} errors',
      'total_lines_processed': '{{count}} total lines processed',
      'parsing_errors': 'Parsing Errors',
      'generated_curl_commands': 'Generated Curl Commands ({{count}})',
      
      // CommandCard 组件
      'copy': 'Copy',
      'hide_original_log': 'Hide original log',
      'show_original_log': 'Show original log',
      'original_log': 'Original Log',
      'curl_command': 'Curl Command'
    }
  },
  'ja': {
    translation: {
      // Header 组件
      'developer_tools_suite': '開発者ツールスイート',
      'essential_tools_for_developers': '開発者向け必須ツール',
      'production_ready': '本番環境対応',
      'language': '言語',
      'english': '英語',
      'chinese': '中国語',
      'japanese': '日本語',
      'korean': '韓国語',
      'french': 'フランス語',
      'german': 'ドイツ語',
      'spanish': 'スペイン語',
      
      // App 组件 (标签页)
      'nginx_log_parser': 'Nginxログパーサー',
      'nginx_log_parser_desc': 'nginxログをcurlコマンドに変換',
      'string_manipulator': '文字列操作ツール',
      'string_manipulator_desc': '文字列にカスタム文字を追加',
      
      // NginxLogParser 组件
      'import_nginx_logs': 'Nginxログのインポート',
      'upload_log_file_or_paste_log_content': 'ログファイルをアップロードするか、ログ内容を貼り付けてcurlコマンドを生成',
      'upload_file': 'ファイルをアップロード',
      'paste_content': '内容を貼り付け',
      'settings_saved_successfully': '設定が正常に保存されました！',
      'supported_format': '対応フォーマット',
      'supported_format_desc': 'このパーサーは、以下のフィールドを持つJSON形式のnginxログに対応しています：',
      'no_logs_processed_yet': 'まだログが処理されていません',
      'no_logs_processed_yet_desc': 'ログファイルをアップロードするか、ログ内容を貼り付けて、ここに生成されたcurlコマンドを表示してください。',
      
      // StringManipulator 组件
      'string_manipulator_title': '文字列操作ツール',
      'string_manipulator_desc2': 'テキストの各行の先頭と末尾にカスタム文字を追加します。',
      'left_character': '左文字',
      'right_character': '右文字',
      'quick_presets': 'クイックプリセット',
      'preview_format': 'フォーマットプレビュー',
      'input_text': 'テキスト入力（1行につき1項目）',
      'process_text': 'テキストを処理',
      'clear_all': 'すべてクリア',
      'how_to_use': '使い方',
      'how_to_use_item1': '1行につき1項目でテキストを入力',
      'how_to_use_item2': 'カスタムの左右の文字を設定',
      'how_to_use_item3': '一般的なフォーマットのプリセットを使用',
      'how_to_use_item4': '処理して結果をコピー/ダウンロード',
      'no_text_processed_yet': 'まだテキストが処理されていません',
      'no_text_processed_yet_desc': 'テキストを入力し、文字を設定して処理結果をここに表示します。',
      'processed_results': '処理結果 ({{count}} 項目)',
      'copy_all': 'すべてコピー',
      'download': 'ダウンロード',
      'copied': 'コピーしました!',
      'double_quotes': '二重引用符',
      'single_quotes': '一重引用符',
      'parentheses': '括弧',
      'square_brackets': '角括弧',
      'curly_braces': '波括弧',
      'angle_brackets': '山括弧',
      'backticks': 'バッククォート',
      'sql_quotes': 'SQL引用符',
      'enter_left_character': '左文字を入力',
      'enter_right_character': '右文字を入力',
      'your_text_here': 'ここにテキストを入力',
      
      // FileUpload 组件
      'upload_nginx_log_file': 'nginxログファイルをアップロード',
      'drag_and_drop_or_click': 'ドラッグ＆ドロップまたはクリックして.logまたは.txtファイルを選択',
      'failed_to_read_file': 'ファイルの読み取りに失敗しました。もう一度お試しください。',
      'please_upload_valid_log_file': '有効なログファイル(.logまたは.txt)をアップロードしてください',
      
      // TextInput 组件
      'paste_nginx_log_content': 'nginxログ内容を貼り付け',
      'paste_nginx_log_content_placeholder': 'nginxログエントリをここに貼り付けてください...（1行につき1つ）\n\n例:\n/path/to/log.access.log:{"remote_addr":"192.168.1.1","method":"POST","uri":"/api/endpoint"...}',
      'ctrl_enter_to_parse': 'Ctrl+Enterで解析',
      'parse_logs': 'ログを解析',
      
      // ConfigPanel 组件
      'advanced_configuration': '詳細設定',
      'target_host': 'ターゲットホスト',
      'target_host_placeholder': 'localhost:3000',
      'target_host_desc': '生成されるcurlコマンドで使用するホスト/ドメイン',
      'protocol': 'プロトコル',
      'default_content_type': 'デフォルトのコンテンツタイプ',
      'timeout_seconds': 'タイムアウト（秒）',
      'include_original_headers': '元のヘッダーを含める',
      'pretty_print_json': 'JSONを整形表示',
      'follow_redirects': 'リダイレクトを追跡 (-L フラグ)',
      'save_settings': '設定を保存',
      'reset_to_default': 'デフォルトにリセット',
      
      // ResultsPanel 组件
      'parse_results': '解析結果',
      'clear_results': '結果をクリア',
      'commands_generated': '{{count}} 個のコマンドが生成されました',
      'errors': '{{count}} 個のエラー',
      'total_lines_processed': '{{count}} 行が処理されました',
      'parsing_errors': '解析エラー',
      'generated_curl_commands': '生成されたCurlコマンド ({{count}})',
      
      // CommandCard 组件
      'copy': 'コピー',
      'hide_original_log': '元のログを非表示',
      'show_original_log': '元のログを表示',
      'original_log': '元のログ',
      'curl_command': 'Curlコマンド'
    }
  },
  'ko': {
    translation: {
      // Header 组件
      'developer_tools_suite': '개발자 도구 스위트',
      'essential_tools_for_developers': '개발자 필수 도구',
      'production_ready': '프로덕션 준비 완료',
      'language': '언어',
      'english': '영어',
      'chinese': '중국어',
      'japanese': '일본어',
      'korean': '한국어',
      'french': '프랑스어',
      'german': '독일어',
      'spanish': '스페인어',
      
      // App 组件 (标签页)
      'nginx_log_parser': 'Nginx 로그 파서',
      'nginx_log_parser_desc': 'nginx 로그를 curl 명령으로 변환',
      'string_manipulator': '문자열 조작기',
      'string_manipulator_desc': '문자열에 사용자 정의 문자 추가',
      
      // NginxLogParser 组件
      'import_nginx_logs': 'Nginx 로그 가져오기',
      'upload_log_file_or_paste_log_content': '로그 파일을 업로드하거나 로그 내용을 붙여넣어 curl 명령 생성',
      'upload_file': '파일 업로드',
      'paste_content': '내용 붙여넣기',
      'settings_saved_successfully': '설정이 성공적으로 저장되었습니다!',
      'supported_format': '지원 형식',
      'supported_format_desc': '이 파서는 다음 필드가 있는 JSON 형식의 nginx 로그를 지원합니다:',
      'no_logs_processed_yet': '아직 처리된 로그가 없습니다',
      'no_logs_processed_yet_desc': '로그 파일을 업로드하거나 로그 내용을 붙여넣어 여기에서 생성된 curl 명령을 확인하세요.',
      
      // StringManipulator 组件
      'string_manipulator_title': '문자열 조작기',
      'string_manipulator_desc2': '텍스트의 각 줄 시작과 끝에 사용자 정의 문자를 추가합니다.',
      'left_character': '왼쪽 문자',
      'right_character': '오른쪽 문자',
      'quick_presets': '빠른 프리셋',
      'preview_format': '형식 미리보기',
      'input_text': '텍스트 입력 (줄당 하나의 항목)',
      'process_text': '텍스트 처리',
      'clear_all': '모두 지우기',
      'how_to_use': '사용 방법',
      'how_to_use_item1': '줄당 하나의 항목으로 텍스트 입력',
      'how_to_use_item2': '사용자 정의 왼쪽 및 오른쪽 문자 설정',
      'how_to_use_item3': '일반 형식에 대한 프리셋 사용',
      'how_to_use_item4': '처리 및 결과 복사/다운로드',
      'no_text_processed_yet': '아직 처리된 텍스트가 없습니다',
      'no_text_processed_yet_desc': '텍스트를 입력하고 문자를 구성하여 여기에서 처리된 결과를 확인하세요.',
      'processed_results': '처리된 결과 ({{count}} 항목)',
      'copy_all': '모두 복사',
      'download': '다운로드',
      'copied': '복사됨!',
      'double_quotes': '이중 따옴표',
      'single_quotes': '단일 따옴표',
      'parentheses': '괄호',
      'square_brackets': '대괄호',
      'curly_braces': '중괄호',
      'angle_brackets': '꺽쇠 괄호',
      'backticks': '백틱',
      'sql_quotes': 'SQL 따옴표',
      'enter_left_character': '왼쪽 문자 입력',
      'enter_right_character': '오른쪽 문자 입력',
      'your_text_here': '여기에 텍스트 입력',
      
      // FileUpload 组件
      'upload_nginx_log_file': 'nginx 로그 파일 업로드',
      'drag_and_drop_or_click': '끌어다 놓기 또는 클릭하여 .log 또는 .txt 파일 선택',
      'failed_to_read_file': '파일을 읽지 못했습니다. 다시 시도해 주세요.',
      'please_upload_valid_log_file': '유효한 로그 파일(.log 또는 .txt)을 업로드하세요',
      
      // TextInput 组件
      'paste_nginx_log_content': 'nginx 로그 내용 붙여넣기',
      'paste_nginx_log_content_placeholder': 'nginx 로그 항목을 여기에 붙여넣으세요... (줄당 하나)\n\n예시:\n/path/to/log.access.log:{"remote_addr":"192.168.1.1","method":"POST","uri":"/api/endpoint"...}',
      'ctrl_enter_to_parse': 'Ctrl+Enter로 파싱',
      'parse_logs': '로그 파싱',
      
      // ConfigPanel 组件
      'advanced_configuration': '고급 설정',
      'target_host': '대상 호스트',
      'target_host_placeholder': 'localhost:3000',
      'target_host_desc': '생성된 curl 명령에서 사용할 호스트/도메인',
      'protocol': '프로토콜',
      'default_content_type': '기본 콘텐츠 유형',
      'timeout_seconds': '타임아웃 (초)',
      'include_original_headers': '원본 헤더 포함',
      'pretty_print_json': 'JSON 예쁘게 출력',
      'follow_redirects': '리디렉션 따르기 (-L 플래그)',
      'save_settings': '설정 저장',
      'reset_to_default': '기본값으로 재설정',
      
      // ResultsPanel 组件
      'parse_results': '파싱 결과',
      'clear_results': '결과 지우기',
      'commands_generated': '{{count}}개 명령 생성됨',
      'errors': '{{count}}개 오류',
      'total_lines_processed': '{{count}}줄 처리됨',
      'parsing_errors': '파싱 오류',
      'generated_curl_commands': '생성된 Curl 명령 ({{count}})',
      
      // CommandCard 组件
      'copy': '복사',
      'hide_original_log': '원본 로그 숨기기',
      'show_original_log': '원본 로그 표시',
      'original_log': '원본 로그',
      'curl_command': 'Curl 명령'
    }
  },
  'fr': {
    translation: {
      // Header 组件
      'developer_tools_suite': 'Suite d\'outils pour développeurs',
      'essential_tools_for_developers': 'Outils essentiels pour les développeurs',
      'production_ready': 'Prêt pour la production',
      'language': 'Langue',
      'english': 'Anglais',
      'chinese': 'Chinois',
      'japanese': 'Japonais',
      'korean': 'Coréen',
      'french': 'Français',
      'german': 'Allemand',
      'spanish': 'Espagnol',
      
      // App 组件 (标签页)
      'nginx_log_parser': 'Analyseur de journaux Nginx',
      'nginx_log_parser_desc': 'Convertir les journaux nginx en commandes curl',
      'string_manipulator': 'Manipulateur de chaînes',
      'string_manipulator_desc': 'Ajouter des caractères personnalisés aux chaînes',
      
      // NginxLogParser 组件
      'import_nginx_logs': 'Importer des journaux Nginx',
      'upload_log_file_or_paste_log_content': 'Télécharger un fichier journal ou coller le contenu du journal pour générer des commandes curl',
      'upload_file': 'Télécharger un fichier',
      'paste_content': 'Coller le contenu',
      'settings_saved_successfully': 'Paramètres enregistrés avec succès !',
      'supported_format': 'Format pris en charge',
      'supported_format_desc': 'Cet analyseur prend en charge les journaux nginx au format JSON avec les champs suivants :',
      'no_logs_processed_yet': 'Aucun journal traité pour le moment',
      'no_logs_processed_yet_desc': 'Téléchargez un fichier journal ou collez le contenu du journal pour voir les commandes curl générées ici.',
      
      // StringManipulator 组件
      'string_manipulator_title': 'Manipulateur de chaînes',
      'string_manipulator_desc2': 'Ajoutez des caractères personnalisés au début et à la fin de chaque ligne de votre texte.',
      'left_character': 'Caractère(s) gauche',
      'right_character': 'Caractère(s) droit',
      'quick_presets': 'Préréglages rapides',
      'preview_format': 'Aperçu du format',
      'input_text': 'Texte d\'entrée (un élément par ligne)',
      'process_text': 'Traiter le texte',
      'clear_all': 'Tout effacer',
      'how_to_use': 'Comment utiliser',
      'how_to_use_item1': 'Entrez le texte avec un élément par ligne',
      'how_to_use_item2': 'Définissez des caractères gauches et droits personnalisés',
      'how_to_use_item3': 'Utilisez des préréglages pour les formats courants',
      'how_to_use_item4': 'Traitez et copiez/téléchargez les résultats',
      'no_text_processed_yet': 'Aucun texte traité pour le moment',
      'no_text_processed_yet_desc': 'Entrez du texte et configurez les caractères pour voir les résultats traités ici.',
      'processed_results': 'Résultats traités ({{count}} éléments)',
      'copy_all': 'Tout copier',
      'download': 'Télécharger',
      'copied': 'Copié !',
      'double_quotes': 'Guillemets doubles',
      'single_quotes': 'Guillemets simples',
      'parentheses': 'Parenthèses',
      'square_brackets': 'Crochets',
      'curly_braces': 'Accolades',
      'angle_brackets': 'Chevrons',
      'backticks': 'Accents graves',
      'sql_quotes': 'Guillemets SQL',
      'enter_left_character': 'Entrez le(s) caractère(s) gauche(s)',
      'enter_right_character': 'Entrez le(s) caractère(s) droit(s)',
      'your_text_here': 'votre texte ici',
      
      // FileUpload 组件
      'upload_nginx_log_file': 'Télécharger un fichier journal nginx',
      'drag_and_drop_or_click': 'Glissez-déposez ou cliquez pour sélectionner un fichier .log ou .txt',
      'failed_to_read_file': 'Échec de la lecture du fichier. Veuillez réessayer.',
      'please_upload_valid_log_file': 'Veuillez télécharger un fichier journal valide (.log ou .txt)',
      
      // TextInput 组件
      'paste_nginx_log_content': 'Coller le contenu du journal nginx',
      'paste_nginx_log_content_placeholder': 'Collez vos entrées de journal nginx ici... (une par ligne)\n\nExemple:\n/path/to/log.access.log:{"remote_addr":"192.168.1.1","method":"POST","uri":"/api/endpoint"...}',
      'ctrl_enter_to_parse': 'Ctrl+Entrée pour analyser',
      'parse_logs': 'Analyser les journaux',
      
      // ConfigPanel 组件
      'advanced_configuration': 'Configuration avancée',
      'target_host': 'Hôte cible',
      'target_host_placeholder': 'localhost:3000',
      'target_host_desc': 'L\'hôte/domaine à utiliser dans les commandes curl générées',
      'protocol': 'Protocole',
      'default_content_type': 'Type de contenu par défaut',
      'timeout_seconds': 'Délai d\'expiration (secondes)',
      'include_original_headers': 'Inclure les en-têtes d\'origine',
      'pretty_print_json': 'Imprimer joliment le JSON',
      'follow_redirects': 'Suivre les redirections (indicateur -L)',
      'save_settings': 'Enregistrer les paramètres',
      'reset_to_default': 'Réinitialiser aux valeurs par défaut',
      
      // ResultsPanel 组件
      'parse_results': 'Résultats de l\'analyse',
      'clear_results': 'Effacer les résultats',
      'commands_generated': '{{count}} commandes générées',
      'errors': '{{count}} erreurs',
      'total_lines_processed': '{{count}} lignes au total traitées',
      'parsing_errors': 'Erreurs d\'analyse',
      'generated_curl_commands': 'Commandes Curl générées ({{count}})',
      
      // CommandCard 组件
      'copy': 'Copier',
      'hide_original_log': 'Masquer le journal d\'origine',
      'show_original_log': 'Afficher le journal d\'origine',
      'original_log': 'Journal d\'origine',
      'curl_command': 'Commande Curl'
    }
  },
  'de': {
    translation: {
      // Header 组件
      'developer_tools_suite': 'Entwickler-Tool-Suite',
      'essential_tools_for_developers': 'Essenzielle Tools für Entwickler',
      'production_ready': 'Produktionsbereit',
      'language': 'Sprache',
      'english': 'Englisch',
      'chinese': 'Chinesisch',
      'japanese': 'Japanisch',
      'korean': 'Koreanisch',
      'french': 'Französisch',
      'german': 'Deutsch',
      'spanish': 'Spanisch',
      
      // App 组件 (标签页)
      'nginx_log_parser': 'Nginx-Protokollparser',
      'nginx_log_parser_desc': 'Konvertieren Sie Nginx-Protokolle in Curl-Befehle',
      'string_manipulator': 'String-Manipulator',
      'string_manipulator_desc': 'Benutzerdefinierte Zeichen zu Strings hinzufügen',
      
      // NginxLogParser 组件
      'import_nginx_logs': 'Nginx-Protokolle importieren',
      'upload_log_file_or_paste_log_content': 'Laden Sie eine Protokolldatei hoch oder fügen Sie Protokollinhalte ein, um Curl-Befehle zu generieren',
      'upload_file': 'Datei hochladen',
      'paste_content': 'Inhalt einfügen',
      'settings_saved_successfully': 'Einstellungen erfolgreich gespeichert!',
      'supported_format': 'Unterstütztes Format',
      'supported_format_desc': 'Dieser Parser unterstützt JSON-formatierte Nginx-Protokolle mit den folgenden Feldern:',
      'no_logs_processed_yet': 'Noch keine Protokolle verarbeitet',
      'no_logs_processed_yet_desc': 'Laden Sie eine Protokolldatei hoch oder fügen Sie Protokollinhalte ein, um die generierten Curl-Befehle hier zu sehen.',
      
      // StringManipulator 组件
      'string_manipulator_title': 'String-Manipulator',
      'string_manipulator_desc2': 'Fügen Sie benutzerdefinierte Zeichen am Anfang und Ende jeder Zeile Ihres Textes hinzu.',
      'left_character': 'Linkes Zeichen',
      'right_character': 'Rechtes Zeichen',
      'quick_presets': 'Schnelle Voreinstellungen',
      'preview_format': 'Formatvorschau',
      'input_text': 'Texteingabe (ein Element pro Zeile)',
      'process_text': 'Text verarbeiten',
      'clear_all': 'Alles löschen',
      'how_to_use': 'Verwendung',
      'how_to_use_item1': 'Geben Sie Text mit einem Element pro Zeile ein',
      'how_to_use_item2': 'Legen Sie benutzerdefinierte linke und rechte Zeichen fest',
      'how_to_use_item3': 'Verwenden Sie Voreinstellungen für gängige Formate',
      'how_to_use_item4': 'Verarbeiten und Ergebnisse kopieren/herunterladen',
      'no_text_processed_yet': 'Noch kein Text verarbeitet',
      'no_text_processed_yet_desc': 'Geben Sie Text ein und konfigurieren Sie die Zeichen, um die verarbeiteten Ergebnisse hier zu sehen.',
      'processed_results': 'Verarbeitete Ergebnisse ({{count}} Elemente)',
      'copy_all': 'Alles kopieren',
      'download': 'Herunterladen',
      'copied': 'Kopiert!',
      'double_quotes': 'Doppelte Anführungszeichen',
      'single_quotes': 'Einfache Anführungszeichen',
      'parentheses': 'Klammern',
      'square_brackets': 'Eckige Klammern',
      'curly_braces': 'Geschweifte Klammern',
      'angle_brackets': 'Spitze Klammern',
      'backticks': 'Backticks',
      'sql_quotes': 'SQL-Anführungszeichen',
      'enter_left_character': 'Linkes Zeichen eingeben',
      'enter_right_character': 'Rechtes Zeichen eingeben',
      'your_text_here': 'Ihr Text hier',
      
      // FileUpload 组件
      'upload_nginx_log_file': 'Nginx-Protokolldatei hochladen',
      'drag_and_drop_or_click': 'Ziehen und Ablegen oder Klicken, um eine .log- oder .txt-Datei auszuwählen',
      'failed_to_read_file': 'Fehler beim Lesen der Datei. Bitte versuchen Sie es erneut.',
      'please_upload_valid_log_file': 'Bitte laden Sie eine gültige Protokolldatei (.log oder .txt) hoch',
      
      // TextInput 组件
      'paste_nginx_log_content': 'Nginx-Protokollinhalte einfügen',
      'paste_nginx_log_content_placeholder': 'Fügen Sie Ihre Nginx-Protokolleinträge hier ein... (einer pro Zeile)\n\nBeispiel:\n/path/to/log.access.log:{"remote_addr":"192.168.1.1","method":"POST","uri":"/api/endpoint"...}',
      'ctrl_enter_to_parse': 'Strg+Eingabe zum Parsen',
      'parse_logs': 'Protokolle parsen',
      
      // ConfigPanel 组件
      'advanced_configuration': 'Erweiterte Konfiguration',
      'target_host': 'Zielhost',
      'target_host_placeholder': 'localhost:3000',
      'target_host_desc': 'Der Host/Domain, der in generierten Curl-Befehlen verwendet wird',
      'protocol': 'Protokoll',
      'default_content_type': 'Standard-Inhaltstyp',
      'timeout_seconds': 'Zeitüberschreitung (Sekunden)',
      'include_original_headers': 'Original-Header einbeziehen',
      'pretty_print_json': 'JSON hübsch drucken',
      'follow_redirects': 'Weiterleitungen folgen (-L-Flag)',
      'save_settings': 'Einstellungen speichern',
      'reset_to_default': 'Auf Standard zurücksetzen',
      
      // ResultsPanel 组件
      'parse_results': 'Parse-Ergebnisse',
      'clear_results': 'Ergebnisse löschen',
      'commands_generated': '{{count}} Befehle generiert',
      'errors': '{{count}} Fehler',
      'total_lines_processed': '{{count}} Zeilen insgesamt verarbeitet',
      'parsing_errors': 'Parsing-Fehler',
      'generated_curl_commands': 'Generierte Curl-Befehle ({{count}})',
      
      // CommandCard 组件
      'copy': 'Kopieren',
      'hide_original_log': 'Originalprotokoll ausblenden',
      'show_original_log': 'Originalprotokoll anzeigen',
      'original_log': 'Originalprotokoll',
      'curl_command': 'Curl-Befehl'
    }
  },
  'es': {
    translation: {
      // Header 组件
      'developer_tools_suite': 'Suite de herramientas para desarrolladores',
      'essential_tools_for_developers': 'Herramientas esenciales para desarrolladores',
      'production_ready': 'Listo para producción',
      'language': 'Idioma',
      'english': 'Inglés',
      'chinese': 'Chino',
      'japanese': 'Japonés',
      'korean': 'Coreano',
      'french': 'Francés',
      'german': 'Alemán',
      'spanish': 'Español',
      
      // App 组件 (标签页)
      'nginx_log_parser': 'Analizador de registros Nginx',
      'nginx_log_parser_desc': 'Convertir registros nginx a comandos curl',
      'string_manipulator': 'Manipulador de cadenas',
      'string_manipulator_desc': 'Agregar caracteres personalizados a cadenas',
      
      // NginxLogParser 组件
      'import_nginx_logs': 'Importar registros Nginx',
      'upload_log_file_or_paste_log_content': 'Sube un archivo de registro o pega el contenido del registro para generar comandos curl',
      'upload_file': 'Subir archivo',
      'paste_content': 'Pegar contenido',
      'settings_saved_successfully': '¡Configuración guardada exitosamente!',
      'supported_format': 'Formato compatible',
      'supported_format_desc': 'Este analizador admite registros nginx con formato JSON con los siguientes campos:',
      'no_logs_processed_yet': 'Aún no se han procesado registros',
      'no_logs_processed_yet_desc': 'Sube un archivo de registro o pega el contenido del registro para ver los comandos curl generados aquí.',
      
      // StringManipulator 组件
      'string_manipulator_title': 'Manipulador de cadenas',
      'string_manipulator_desc2': 'Agrega caracteres personalizados al principio y al final de cada línea de tu texto.',
      'left_character': 'Carácter(es) izquierdo(s)',
      'right_character': 'Carácter(es) derecho(s)',
      'quick_presets': 'Preajustes rápidos',
      'preview_format': 'Vista previa del formato',
      'input_text': 'Texto de entrada (un elemento por línea)',
      'process_text': 'Procesar texto',
      'clear_all': 'Limpiar todo',
      'how_to_use': 'Cómo usar',
      'how_to_use_item1': 'Ingresa texto con un elemento por línea',
      'how_to_use_item2': 'Establece caracteres izquierdo y derecho personalizados',
      'how_to_use_item3': 'Usa preajustes para formatos comunes',
      'how_to_use_item4': 'Procesa y copia/descarga los resultados',
      'no_text_processed_yet': 'Aún no se ha procesado texto',
      'no_text_processed_yet_desc': 'Ingresa texto y configura los caracteres para ver los resultados procesados aquí.',
      'processed_results': 'Resultados procesados ({{count}} elementos)',
      'copy_all': 'Copiar todo',
      'download': 'Descargar',
      'copied': '¡Copiado!',
      'double_quotes': 'Comillas dobles',
      'single_quotes': 'Comillas simples',
      'parentheses': 'Paréntesis',
      'square_brackets': 'Corchetes',
      'curly_braces': 'Llaves',
      'angle_brackets': 'Paréntesis angulares',
      'backticks': 'Acentos graves',
      'sql_quotes': 'Comillas SQL',
      'enter_left_character': 'Ingresa carácter(es) izquierdo(s)',
      'enter_right_character': 'Ingresa carácter(es) derecho(s)',
      'your_text_here': 'tu texto aquí',
      
      // FileUpload 组件
      'upload_nginx_log_file': 'Subir archivo de registro nginx',
      'drag_and_drop_or_click': 'Arrastra y suelta o haz clic para seleccionar un archivo .log o .txt',
      'failed_to_read_file': 'Error al leer el archivo. Por favor, inténtalo de nuevo.',
      'please_upload_valid_log_file': 'Por favor, sube un archivo de registro válido (.log o .txt)',
      
      // TextInput 组件
      'paste_nginx_log_content': 'Pegar contenido de registro nginx',
      'paste_nginx_log_content_placeholder': 'Pega tus entradas de registro nginx aquí... (una por línea)\n\nEjemplo:\n/path/to/log.access.log:{"remote_addr":"192.168.1.1","method":"POST","uri":"/api/endpoint"...}',
      'ctrl_enter_to_parse': 'Ctrl+Enter para analizar',
      'parse_logs': 'Analizar registros',
      
      // ConfigPanel 组件
      'advanced_configuration': 'Configuración avanzada',
      'target_host': 'Host de destino',
      'target_host_placeholder': 'localhost:3000',
      'target_host_desc': 'El host/dominio a usar en los comandos curl generados',
      'protocol': 'Protocolo',
      'default_content_type': 'Tipo de contenido predeterminado',
      'timeout_seconds': 'Tiempo de espera (segundos)',
      'include_original_headers': 'Incluir encabezados originales',
      'pretty_print_json': 'Imprimir JSON bonito',
      'follow_redirects': 'Seguir redirecciones (bandera -L)',
      'save_settings': 'Guardar configuración',
      'reset_to_default': 'Restablecer a predeterminado',
      
      // ResultsPanel 组件
      'parse_results': 'Resultados del análisis',
      'clear_results': 'Limpiar resultados',
      'commands_generated': '{{count}} comandos generados',
      'errors': '{{count}} errores',
      'total_lines_processed': '{{count}} líneas totales procesadas',
      'parsing_errors': 'Errores de análisis',
      'generated_curl_commands': 'Comandos Curl generados ({{count}})',
      
      // CommandCard 组件
      'copy': 'Copiar',
      'hide_original_log': 'Ocultar registro original',
      'show_original_log': 'Mostrar registro original',
      'original_log': 'Registro original',
      'curl_command': 'Comando Curl'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-CN', // 默认语言为简体中文
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;