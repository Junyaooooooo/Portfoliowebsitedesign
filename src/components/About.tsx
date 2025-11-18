import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-[Syne] font-bold">
            About Me
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl">
            Hello, I'm Frisk Wu, an Interactive Design student at Emily Carr University of Art + Design with a passion for both Game Design and user-centered (UX) prototyping.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <h2 className="text-3xl mb-12">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-900 rounded-2xl">
              <div className="text-5xl mb-4">01</div>
              <h3 className="text-xl mb-3">Narrative Exploration</h3>
              <p className="text-zinc-400">
                Creating experiences that allow users to uncover stories through exploration and encourage meaningful self-reflection.
              </p>
            </div>
            <div className="p-8 bg-zinc-900 rounded-2xl">
              <div className="text-5xl mb-4">02</div>
              <h3 className="text-xl mb-3">Emotional Interactivity</h3>
              <p className="text-zinc-400">
                Weaving story, emotion, and interactivity together to create experiences that resonate deeply with users.
              </p>
            </div>
            <div className="p-8 bg-zinc-900 rounded-2xl">
              <div className="text-5xl mb-4">03</div>
              <h3 className="text-xl mb-3">Intentional Design</h3>
              <p className="text-zinc-400">
                Bringing creativity and research-driven expertise to craft engaging, playable projects that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}