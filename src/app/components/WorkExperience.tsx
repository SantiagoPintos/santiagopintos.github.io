import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type CompanyExperience = (typeof RESUME_DATA)["work"][number];
type Position = CompanyExperience["positions"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: Position["start"];
  end?: Position["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500 min-w-fit"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: CompanyExperience["company"];
  link: CompanyExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface PositionItemProps {
  position: Position;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function PositionItem({ position }: PositionItemProps) {
  const { badges, title, start, end, description } = position;
  return (
    <div>
      <div className="flex items-center justify-between gap-x-2 text-base">
        <h4 className="font-mono text-sm  font-semibold leading-none print:text-[12px] text-foreground">
          {title}
        </h4>
        <WorkPeriod start={start} end={end} />
      </div>
      <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
        {description}
      </div>
      <div className="mt-2">
        <BadgeList className="-mx-2 flex-wrap gap-1 sm:hidden" badges={badges} />
      </div>
    </div>
  );
}

interface CompanyCardProps {
  company: CompanyExperience;
}

function CompanyCard({ company }: CompanyCardProps) {
  const { company: companyName, link, positions } = company;
  const aggregateBadges = Array.from(
    new Set(positions.flatMap((p) => p.badges))
  );
  return (
    <Card className="py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center pb-1 justify-center gap-x-1 font-semibold leading-none print:text-sm">
            <CompanyLink company={companyName} link={link} />
            <BadgeList
              className="hidden gap-x-1 sm:inline-flex"
              badges={aggregateBadges}
            />
          </h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 print:space-y-2">
        {positions.map((p) => (
          <PositionItem key={`${companyName}-${p.start}-${p.title}`} position={p} />
        ))}
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Work Experience
      </h2>
      <div className="space-y-4 print:space-y-0" role="feed" aria-labelledby="work-experience">
        {work.map((company) => (
          <article key={company.company} role="article">
            <CompanyCard company={company} />
          </article>
        ))}
      </div>
    </Section>
  );
}
