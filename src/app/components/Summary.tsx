import { Section } from "../../components/ui/section";

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary }: { summary: string }) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="about-section">
        About
      </h2>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
