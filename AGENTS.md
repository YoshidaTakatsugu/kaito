<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# NARERU Site Rules

- Brand: NARERU. Concept: "結果に相応しい自分になれる。若い力で、スポーツ界の常識を超えていく。"
- Audience: 技術はあるが本番で実力を出せないトップアスリート。
- Message: 心技体の最後の欠けている「心のピース」を埋め、負のサイクルを正のサイクルへ変える。
- Design: ネイビー/青系を基調に、ミニマルで洗練された余白、静かな強さ、速さを優先する。
- Performance: モバイルINPを最優先。初期実装はServer Componentと静的HTML/CSSを基本にし、不要なClient Component、重いアニメーション、入力遅延を招くJSを避ける。
- SEO/AIO/GEO/LLMO: 各ページはAnswer-Firstで始め、AIが引用しやすい定義・結論を冒頭に置く。
- Structured data: Person, Service, FAQPageのJSON-LDを維持し、ページ追加時も実体とFAQの整合性を崩さない。
- Deployment: `output: "export"` の静的書き出しを前提にする。サーバー必須機能、動的リクエスト前提のAPI、ISR、デフォルト画像最適化は使わない。
