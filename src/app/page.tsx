"use client";

import { useEffect, useState } from "react";
import { CommandMenu } from "@/components/command-menu";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import { Certificates } from "./components/Certificates";
import { Awards } from "./components/Awards";
import { fetchCvData } from "@/lib/getData";
import type { CvData } from "@/types/cv";


export default function Page() {
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
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <Header />

        <Summary summary={cvData.summary} />

        <WorkExperience work={cvData.work} />

        <Education education={cvData.education} />

        <Skills skills={cvData.skills} />

        <Projects projects={cvData.projects} />

        <Certificates certificates={cvData.certificates} />

        <Awards awards={cvData.awards} />
      </section>

      <CommandMenu
        links={[
          {
            url: cvData.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...cvData.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
