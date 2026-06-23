export const site = {
  name: "NARERU",
  url: "https://nareru.jp",
  description:
    "NARERUは、技術と身体を磨いてきたトップアスリートが、本番で本来の力を出し切るためのスポーツメンタルコーチングです。",
  concept:
    "結果に相応しい自分になれる。若い力で、スポーツ界の常識を超えていく。",
} as const;

export const coach = {
  name: "押田海斗",
  role: "スポーツメンタルコーチ",
  story:
    "1番を一番逃した経験を起点に、勝負の場で実力を発揮できない理由を心技体の因果関係から解きほぐす。",
} as const;

export const navigationItems = [
  { label: "課題", href: "/#problem" },
  { label: "ロジック", href: "/#logic" },
  { label: "心技体", href: "/#cycle" },
  { label: "コラム", href: "/columns/" },
  { label: "プロフィール", href: "/profile/" },
  { label: "体験", href: "/#coaching" },
] as const;

export const coachAchievements = [
  {
    stage: "国体",
    event: "国体 個人",
    result: "4位",
  },
  {
    stage: "高校",
    event: "インターハイ 個人",
    result: "ベスト16",
  },
  {
    stage: "大学",
    event: "全日本学生 団体",
    result: "ベスト8",
  },
  {
    stage: "関東",
    event: "関東選手権",
    result: "2位",
  },
] as const;

export const homePageSections = [
  {
    "@type": "WebPageElement",
    "@id": `${site.url}/#logic`,
    name: "結果にふさわしいメンタルを、先に手に入れる",
    description:
      "技術や練習量というアクセルを踏む前に、過去の経験から作られた思い込みというブレーキを外す必要があることを説明します。",
  },
  {
    "@type": "WebPageElement",
    "@id": `${site.url}/#cycle`,
    name: "思い込みが今の結果を作る負のループ",
    description:
      "セルフイメージ、信念、行動、プレー、結果が連鎖し、今の思い込みが今の結果を作っている構造を示します。",
  },
  {
    "@type": "WebPageElement",
    "@id": `${site.url}/#story`,
    name: "押田海斗の想いとストーリー",
    description:
      "1番を一番逃した経験をもとに、勝ちきれない選手の痛みと可能性に伴走します。",
  },
  {
    "@type": "WebPageElement",
    "@id": `${site.url}/#usp`,
    name: "NARERUが選ばれる理由",
    description:
      "20代の現役感覚、思い込みとセルフイメージへの着目、心技体を結果の因果関係で見る設計がNARERUの特徴です。",
  },
  {
    "@type": "WebPageElement",
    "@id": `${site.url}/#voice`,
    name: "お客様の声・実績",
    description:
      "日本代表経験のある空手選手、高校生テニス選手、プロ格闘家の変化をAnswer-First形式で紹介するダミー事例セクションです。",
  },
  {
    "@type": "WebPageElement",
    "@id": `${site.url}/#coaching`,
    name: "NARERUのサービス紹介・価格",
    description:
      "体験コーチングは11,000円、50分、対面・オンライン対応。心技体を統合させる専門的な介入です。",
  },
  {
    "@type": "WebPageElement",
    "@id": `${site.url}/#flow`,
    name: "申し込み導線",
    description:
      "無料メールセミナー、体験コーチング、継続セッションの3ステップで変化を確認しながら進みます。",
  },
] as const;

export const services = [
  {
    name: "体験コーチング",
    price: "11,000円",
    description:
      "試合で実力を出し切れない原因を、思い込み・行動・結果の因果関係から整理する50分の初回セッション。",
    duration: "50分",
    delivery: "対面・オンライン",
  },
  {
    name: "継続プログラム",
    price: "個別設計",
    description:
      "競技特性、目標、大会日程に合わせて、心技体の正のサイクルを定着させる伴走プログラム。",
  },
] as const;

export const servicePrograms = [
  {
    level: "BASIC",
    name: "アスリートプログラム",
    description:
      "試合で実力を出し切るための思考整理と行動改善を、競技生活に合わせて整える基本プログラム。",
    recommendedFor: "本番の緊張や自信の揺らぎを整えたい選手へ",
  },
  {
    level: "ADVANCED",
    name: "トップアスリートプログラム",
    description:
      "代表・全国上位レベルの選手が、勝負所で力を発揮するための心技体の再設計。",
    recommendedFor: "日本一、代表選考、全国上位を狙う選手へ",
  },
  {
    level: "PRO",
    name: "プロフェッショナルプログラム",
    description:
      "競技結果だけでなく、プロとしての振る舞い、自己理解、長期的な競技人生まで扱う伴走型支援。",
    recommendedFor: "競技を仕事として高め続けたい選手へ",
  },
  {
    level: "CUSTOM",
    name: "オーダーメイド",
    description:
      "大会日程、競技特性、チーム状況、個人課題に合わせ、必要な支援内容を個別に設計。",
    recommendedFor: "既存プログラムに収まらない課題を持つ選手へ",
  },
] as const;

export const conversionSteps = [
  {
    title: "無料メールセミナー登録",
    description:
      "「あなたはメンタルが弱くない」動画セミナーで、本番で力を出せない理由を先に理解します。公式LINEまたはリザーブストックから登録できます。",
    cta: "無料セミナーを見る",
    href: "#flow",
  },
  {
    title: "体験コーチング予約",
    description:
      "11,000円の体験コーチングで、あなたの思い込み、行動、結果の因果関係を整理し、変化の入口を体感します。",
    cta: "体験コーチングへ",
    href: "#coaching",
  },
  {
    title: "継続セッション",
    description:
      "理想の結果に相応しい自分へ向けて、心技体の正のサイクルが競技現場で回るまで伴走します。",
    cta: "継続の流れを相談",
    href: "#faq",
  },
] as const;

export const faqs = [
  {
    question: "NARERUはどんなアスリート向けですか？",
    answer:
      "技術や練習量はあるのに、本番の緊張やプレッシャーで力を出し切れないトップアスリート向けです。",
  },
  {
    question: "メンタルコーチングでは何を扱いますか？",
    answer:
      "試合前後の思考、感情、思い込み、行動パターンを整理し、結果につながる心の土台を整えます。",
  },
] as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: `${site.name} | スポーツメンタルコーチング`,
      inLanguage: "ja",
      description: site.description,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}/images/Top.jpg`,
        caption:
          "NARERUのスポーツメンタルコーチ押田海斗が、本番で力を発揮し高めてきた能力を結果につなげる姿を示すトップビジュアル。",
      },
      about: [
        "スポーツメンタルコーチング",
        "トップアスリートの本番発揮",
        "思い込みのブレーキ",
        "心技体の正負サイクル",
      ],
      hasPart: homePageSections,
    },
    {
      "@type": "Person",
      "@id": `${site.url}/profile/#person`,
      name: coach.name,
      jobTitle: coach.role,
      description: coach.story,
      url: `${site.url}/profile/`,
      image: `${site.url}/images/S__3153967_0.jpg`,
      worksFor: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      knowsAbout: [
        "スポーツメンタルコーチング",
        "トップアスリートの本番発揮",
        "心技体",
        "競技プレッシャー",
      ],
      award: coachAchievements.map(
        (achievement) =>
          `${achievement.event} ${achievement.result}（${achievement.stage}）`,
      ),
    },
    {
      "@type": "Service",
      "@id": `${site.url}/#service`,
      name: `${site.name} スポーツメンタルコーチング`,
      serviceType: "Sports mental coaching",
      provider: {
        "@id": `${site.url}/profile/#person`,
      },
      areaServed: {
        "@type": "Country",
        name: "Japan",
      },
      audience: {
        "@type": "Audience",
        audienceType: "トップアスリート",
      },
      image: `${site.url}/images/Top.jpg`,
      description: site.description,
      offers: {
        "@type": "Offer",
        "@id": `${site.url}/#trial-offer`,
        name: `${services[0].name} ${services[0].duration}`,
        price: "11000",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
        description: `${services[0].description} ${services[0].delivery}に対応。`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NARERU コーチングプログラム",
        itemListElement: servicePrograms.map((program) => ({
          "@type": "Offer",
          name: program.name,
          description: program.description,
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
} as const;
