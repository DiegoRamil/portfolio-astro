"use client";
import { Contact } from "@/components/contact";
import { Terminal } from "@/components/terminal";
import { Projects } from "@/components/projects";
import { Toaster } from "@/components/ui/toaster";
import WhoAmI from "@/components/who_am_i";
import CurrentWork from "@/components/current_work";
import Experience from "@/components/experience";
import CurrentDirectory from "@/components/current_directory";
import Exit from "@/components/exit";

// !TODO: Fix margin between components
// !TODO: refactor to astro
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Terminal>
        <WhoAmI />
        <CurrentDirectory />
        <CurrentWork />
        <Experience />
        <Projects />
        <Contact />
        <Exit />
      </Terminal>
      <Toaster />
    </div>
  );
}
