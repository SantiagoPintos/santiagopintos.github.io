import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface Certificate {
  name: string;
  url: string;
  date: string;
  issuer: string;
}

interface CertificatesProps {
  certificates: readonly Certificate[];
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold">Certificates</h2>
      {certificates.map((certificate) => (
        <Card key={certificate.name}>
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">
                <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                  {certificate.name}
                </a>
              </h3>
              <div className="text-sm tabular-nums text-gray-500">
                {certificate.date}
              </div>
            </div>
          </CardHeader>
          <CardContent className="mt-2 print:text-[12px]">
            {certificate.issuer}
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}