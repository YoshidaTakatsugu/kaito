import type { Metadata } from "next";
import type { ReactNode } from "react";
import { documentColumns } from "@/lib/column-documents";

const policy = documentColumns.find(article => article.slug === "privacy-policy");
if (!policy) throw new Error("Privacy policy content is missing");

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: policy.answerFirst,
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  const nodes: ReactNode[] = [];
  const blocks = policy!.blocks ?? [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.type === "heading") {
      nodes.push(<h2 key={i} className="border-t border-white/15 pt-6 text-lg font-semibold leading-[1.7] text-white sm:text-xl">{block.text}</h2>);
    } else if (block.type === "list-item") {
      const items = [block.text];
      while (blocks[i + 1]?.type === "list-item") items.push(blocks[++i].text);
      nodes.push(<ul key={i} className="list-disc space-y-2 pl-5 marker:text-[#d6ae64]">{items.map(text => <li key={text}>{text}</li>)}</ul>);
    } else {
      nodes.push(<p key={i}>{block.text}</p>);
    }
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
      <header>
        <p className="text-xs font-semibold tracking-[0.15em] text-[#e8c980]">PRIVACY POLICY</p>
        <h1 className="mt-3 font-serif text-[26px] leading-[1.5] sm:text-4xl">プライバシーポリシー</h1>
        <p className="mt-5 text-sm leading-[1.9] text-slate-300 sm:text-base">{policy!.answerFirst}</p>
      </header>
      <div className="mt-7 space-y-4 break-words text-sm leading-[1.9] text-slate-300 sm:text-base">{nodes}</div>
    </article>
  );
}
