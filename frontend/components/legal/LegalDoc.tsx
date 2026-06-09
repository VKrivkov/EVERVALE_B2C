import type { ReactNode } from "react";

export function LegalDoc({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-pr_dg text-pr_w">
      <section className="w-full px-4 pt-[120px] pb-24 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-center text-3xl font-semibold sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-center text-xs text-pr_w/60">
            Last updated: {lastUpdated}
          </p>
          <article className="mt-9 rounded-2xl border border-pr_w/15 bg-pr_w/[0.04] px-6 py-8 text-sm leading-7 text-pr_w/90 sm:px-10 sm:py-9">
            {children}
          </article>
        </div>
      </section>
    </div>
  );
}

export function DocMeta({ children }: { children: ReactNode }) {
  return (
    <div className="mb-7 space-y-1 text-xs leading-7 text-pr_w/60">
      {children}
    </div>
  );
}

export function DocDivider() {
  return <hr className="my-6 border-pr_w/15" />;
}

export function WarningBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-7 rounded-md border border-pr_w/15 border-l-4 border-l-pr_lg bg-pr_w/[0.04] px-5 py-4 text-[13px] leading-7">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-pr_w">
        {title}
      </p>
      <div className="text-pr_w/90 [&_strong]:text-pr_w [&_a]:underline">
        {children}
      </div>
    </div>
  );
}

export function SectionHeading({
  number,
  children,
}: {
  number: number | string;
  children: ReactNode;
}) {
  return (
    <h2 className="mt-7 mb-3 text-[13px] font-semibold text-pr_w">
      <span className="mr-1 text-pr_w/60">{number}.</span>
      {children}
    </h2>
  );
}

export function Paragraph({
  children,
  caps,
}: {
  children: ReactNode;
  caps?: boolean;
}) {
  if (caps) {
    return (
      <p className="mb-3 text-[12px] font-semibold tracking-wide text-pr_w [&_strong]:text-pr_w">
        {children}
      </p>
    );
  }
  return (
    <p className="mb-3 text-[13px] leading-7 text-pr_w/90 [&_strong]:text-pr_w [&_a]:underline">
      {children}
    </p>
  );
}

export function DocList({
  ordered,
  items,
}: {
  ordered?: boolean;
  items: ReactNode[];
}) {
  if (ordered) {
    return (
      <ol className="mb-3 list-none p-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative mb-1 pl-6 text-[13px] leading-7 text-pr_w/90 [&_strong]:text-pr_w [&_a]:underline"
          >
            <span className="absolute left-0 text-pr_w/60">{i + 1}.</span>
            {item}
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul className="mb-3 list-none p-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative mb-1 pl-4 text-[13px] leading-7 text-pr_w/90 [&_strong]:text-pr_w [&_a]:underline"
        >
          <span className="absolute left-0 text-pr_w/60">-</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DocNote({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 mt-2 text-xs italic text-pr_w/60">{children}</p>
  );
}

export function DocTable({ rows }: { rows: Array<[ReactNode, ReactNode]> }) {
  return (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse text-[13px]">
        <tbody>
          {rows.map(([label, value], i) => (
            <tr
              key={i}
              className={i < rows.length - 1 ? "border-b border-pr_w/10" : ""}
            >
              <td className="w-[210px] py-2 pr-6 align-top text-pr_w/60 max-sm:w-auto">
                {label}
              </td>
              <td className="py-2 align-top text-pr_w/90 [&_a]:underline [&_strong]:text-pr_w">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FaqItem({
  question,
  answer,
}: {
  question: ReactNode;
  answer: ReactNode;
}) {
  return (
    <div className="mb-3">
      <p className="mb-1 text-[13px] font-medium text-pr_w">{question}</p>
      <p className="text-[13px] leading-7 text-pr_w/70 [&_a]:underline">
        {answer}
      </p>
    </div>
  );
}

export function DocFooter({ children }: { children: ReactNode }) {
  return (
    <p className="mt-7 border-t border-pr_w/10 pt-4 text-[11.5px] italic text-pr_w/50">
      {children}
    </p>
  );
}

export function MailLink({ email }: { email: string }) {
  return (
    <a href={`mailto:${email}`} className="text-pr_w/80 underline">
      {email}
    </a>
  );
}
