import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl mb-8 tracking-tight font-[Syne] font-bold text-[48px]">
            Aspiring UX and Game Designer
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mb-12">
            I am passionate about creating meaningful interactive experiences by merging storytelling with intuitive design. My work focuses on building both engaging, playable projects and user-centric prototypes, always striving to weave story, emotion, and interactivity together.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all shadow-lg"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Featured Work Preview */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
              <span className="text-zinc-500 group-hover:text-white transition-colors">Featured Project 01</span>
            </div>
          </div>
          <div className="aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-orange-900/30 to-pink-900/30 flex items-center justify-center">
              <span className="text-zinc-500 group-hover:text-white transition-colors">Featured Project 02</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}