import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface Award {
  title: string;
  issuer: string;
  date: string;
  url: string;
  summary: string;
}

interface AwardsProps {
  awards: readonly Award[];
}

export function Awards({ awards }: AwardsProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">Awards</h2>
      {awards.map((award) => (
        <Card key={award.date}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">
                <a href={award.url} target="_blank" rel="noopener noreferrer">
                  {`${award.title} - ${award.issuer}`}
                </a>
              </h3>
              <div className="text-sm tabular-nums text-gray-500">
                {award.date}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-2 print:text-[12px]">
            {award.summary}
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}