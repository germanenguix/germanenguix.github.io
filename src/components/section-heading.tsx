import type { PropsWithChildren } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ title, subtitle, center }: PropsWithChildren<SectionHeadingProps>) {
  return (
    <div className={`${center ? "text-center" : "text-left"} space-y-2`}>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{title}</h2>
      {subtitle ? (
        <p className="text-neutral-600 text-base leading-snug">{subtitle}</p>
      ) : null}
    </div>
  );
}


