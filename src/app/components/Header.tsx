import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { CvData } from "@/types/cv";
import { useEffect, useState } from "react";
import { fetchCvData } from "@/lib/getData";
import { getIconComponent } from "@/lib/getIconComponent";

interface LocationLinkProps {
  location: CvData["location"];
  locationLink: CvData["locationLink"];
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: string;
  label: string;
}

function SocialButton({ href, icon: iconName, label }: SocialButtonProps) {
  const IconComponent = getIconComponent(iconName);

  if (!IconComponent) {
    return null;
  }

  return (
    <Button className="size-8" variant="outline" size="icon" asChild>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface ContactButtonsProps {
  contact: CvData["contact"];
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <div
      className="flex gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon="globe"
          label="Personal website"
        />
      )}
      {contact.email && (
        <SocialButton
          href={`mailto:${contact.email}`}
          icon="mail"
          label="Email"
        />
      )}
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon as string}
          label={social.name}
        />
      ))}
    </div>
  );
}

interface PrintContactProps {
  contact: CvData["contact"];
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div
      className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  const [cvData, setCvData] = useState(null as CvData | null);
  
    useEffect(() => {
      fetchCvData().then(setCvData).catch(console.error);
    }, []);
    if (!cvData) {
      return (
        <div className="flex h-screen items-center justify-center">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      );
    }
  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <h1 className="text-2xl font-bold" id="resume-name">
          {cvData.name}
        </h1>
        <p
          className="max-w-md text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
          aria-labelledby="resume-name"
        >
          {cvData.about}
        </p>

        <LocationLink
          location={cvData.location}
          locationLink={cvData.locationLink}
        />

        <ContactButtons
          contact={cvData.contact}
          personalWebsiteUrl={cvData.personalWebsiteUrl}
        />

        <PrintContact
          contact={cvData.contact}
          personalWebsiteUrl={cvData.personalWebsiteUrl}
        />
      </div>

      <Avatar className="size-28" aria-hidden="true">
        <AvatarImage
          alt={`${cvData.name}'s profile picture`}
          src={cvData.avatarUrl}
        />
        <AvatarFallback>{cvData.initials}</AvatarFallback>
      </Avatar>
    </header>
  );
}
