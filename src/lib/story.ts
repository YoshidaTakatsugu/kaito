export type StoryBlock = {
  type: "paragraph" | "emphasis" | "quote";
  text: string;
};

export type StoryChapter = {
  number: string;
  eyebrow: string;
  title: string;
  blocks: readonly StoryBlock[];
};

export const storyPageContent = {
  eyebrow: "STORY",
  title: "「自分は、本当にメンタルが弱い選手だったのか？」",
  chapters: [
    {
      number: "01",
      eyebrow: "ORIGIN",
      title: "空手に打ち込んだ原点",
      blocks: [
        {
          type: "paragraph",
          text: "初めまして。スポーツメンタルコーチの押田海斗です。",
        },
        {
          type: "paragraph",
          text: "私は茨城県出身で、5歳から空手を始めました。",
        },
        {
          type: "emphasis",
          text: "母子家庭だったこともあり、「親に迷惑をかけないために、特待生として高校・大学に進学しないといけない」という思いから、空手に打ち込んできました。",
        },
        {
          type: "emphasis",
          text: "そして中学生の頃には、「高校で日本一になる」という目標を掲げました。",
        },
      ],
    },
    {
      number: "02",
      eyebrow: "ATHLETE DAYS",
      title: "あと一歩で、勝ち切れなかった",
      blocks: [
        {
          type: "paragraph",
          text: "しかし、高校での最高成績は国民体育大会4位。",
        },
        {
          type: "paragraph",
          text: "現役時代を振り返ると、小学生から大学生まで、関東大会や全国規模の大会に20回以上出場し、10回以上入賞しましたが、一度も優勝することはできませんでした。",
        },
        {
          type: "paragraph",
          text: "日本代表選考会でも、自分の力を出し切れず落選しました。",
        },
        {
          type: "paragraph",
          text: "私は体格にも恵まれていましたし、技術でも大きく劣っていたわけではなかったと思います。",
        },
        {
          type: "paragraph",
          text: "それでも、いつもあと一歩で勝ち切れませんでした。",
        },
        {
          type: "paragraph",
          text: "そんな私が競技人生で一番言われた言葉が、",
        },
        {
          type: "quote",
          text: "「メンタルが弱い」",
        },
        {
          type: "paragraph",
          text: "でした。",
        },
        {
          type: "emphasis",
          text: "何度も言われ続けるうちに、私自身も「自分はメンタルが弱い選手なんだ」と思い込むようになりました。",
        },
        {
          type: "paragraph",
          text: "そして次第に、「日本一になりたい」という情熱よりも、「特待生にならなければ」という義務感や、「メンタルのことで怒られたくない」という恐怖心で競技をするようになっていきました。",
        },
        {
          type: "paragraph",
          text: "その後、特待生として大学へ進学できたものの、目標に向かって熱くなっていた自分はいなくなり、最後までその情熱を取り戻せないまま競技を引退しました。",
        },
      ],
    },
    {
      number: "03",
      eyebrow: "REGRET",
      title: "引退後に残った、大きな後悔",
      blocks: [
        {
          type: "paragraph",
          text: "引退後、私の中には大きな後悔が残りました。",
        },
        {
          type: "quote",
          text: "「もし、“自分はメンタルが弱い選手”ではなかったら、どんな結果がついてきたのだろう？」",
        },
        {
          type: "quote",
          text: "「特待に縛られず、もっと自分の気持ちを大切にできていたら、どんな人生を送れていたのだろう？」",
        },
        {
          type: "paragraph",
          text: "そんな想いを抱えながら社会人として働いていた頃、SNSやテレビでスポーツに本気で向き合う選手の姿を見るたびに、",
        },
        {
          type: "quote",
          text: "「もう一度、自分も本気で何かに挑戦したい」",
        },
        {
          type: "paragraph",
          text: "という気持ちが日に日に強くなっていきました。",
        },
        {
          type: "emphasis",
          text: "「自分は何に挑戦したいのか」と日々自問自答する中で辿り着いたのが、自分自身が人生で一番悩み、最後まで答えを見つけられなかった「アスリートのメンタル」でした。",
        },
        {
          type: "paragraph",
          text: "そして、スポーツメンタルコーチングを学び始めました。",
        },
      ],
    },
    {
      number: "04",
      eyebrow: "REALIZATION",
      title: "自分を止めていたものの正体",
      blocks: [
        {
          type: "paragraph",
          text: "久しぶりに毎日情熱を持って過ごせるようになった頃、改めて自分自身に問いかけました。",
        },
        {
          type: "quote",
          text: "「自分は、本当にメンタルが弱い選手だったのか？」",
        },
        {
          type: "paragraph",
          text: "振り返れば、空手以外でメンタルの弱さを指摘されたことはなく、むしろ人前に立つことが大好きで、「メンタルが強い」と言われながら育ってきました。",
        },
        {
          type: "paragraph",
          text: "しかし空手では、周りから「メンタルが弱い」と言われ続けたことで、それを疑うこともなく、自分自身もそう思い込んでいました。",
        },
        {
          type: "paragraph",
          text: "メンタルについて学んだからこそ、初めて気づいたことがあります。",
        },
        {
          type: "paragraph",
          text: "それは、私は「メンタルが弱い選手」だったのではなく、",
        },
        {
          type: "quote",
          text: "「自分はメンタルが弱い選手なんだ」という思い込みによって、自分の可能性を最大限発揮できなかっただけなのではないか？",
        },
        {
          type: "paragraph",
          text: "ということです。",
        },
        {
          type: "paragraph",
          text: "もし、その思い込みがなかったら、大舞台でももっと自分の力を発揮できていたかもしれません。",
        },
        {
          type: "paragraph",
          text: "周りからの評価ではなく、自分が叶えたい目標にもっと集中できていたかもしれません。",
        },
        {
          type: "paragraph",
          text: "だからこそ、今でも思います。",
        },
        {
          type: "quote",
          text: "「当時、スポーツメンタルコーチに出会えていたら、自分はあんな成績で終わる選手じゃなかった。」",
        },
        {
          type: "paragraph",
          text: "しかし、私がそれに気づいたのは、現役を引退してからでした。",
        },
      ],
    },
    {
      number: "05",
      eyebrow: "MISSION",
      title: "だからこそ、今、選手の力になりたい",
      blocks: [
        {
          type: "paragraph",
          text: "だからこそ今、競技に本気で取り組んでいる選手の力になりたいのです。",
        },
        {
          type: "quote",
          text: "「自分は、まだまだこんなもんじゃない。」",
        },
        {
          type: "quote",
          text: "「絶対に叶えたい未来がある。」",
        },
        {
          type: "paragraph",
          text: "そんな熱い想いを持った選手の力になりたくて、私はスポーツメンタルコーチになりました。",
        },
        {
          type: "emphasis",
          text: "私は、どんな選手も理想のメンタル、理想の自分になれると信じています。",
        },
        {
          type: "paragraph",
          text: "一緒に目標に向かって挑戦できる日を、楽しみにしています。",
        },
      ],
    },
  ] satisfies readonly StoryChapter[],
} as const;
