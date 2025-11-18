import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import battery from "../assets/battery.jpg";

const projects = [
  {
    id: 1,
    slug: "battery-guardian",
    title: "Battery Guardian",
    category: "Branding & UX Design",
    description: "AI-powered battery management solution combining UX research and product strategy to optimize device performance and extend battery life through intelligent monitoring.",
    image: battery,
    year: "2025",
    month: "Nov 2025",
    tags: ["AI", "UX Research", "Product Strategy"],
  },
  {
    id: 2,
    slug: "astrogrow",
    title: "Astrogrow",
    category: "UI/UX Design",
    description: "Gamified space farming experience that blends product thinking with engaging UI/UX design, creating an immersive journey of growing plants in cosmic environments.",
    image: "https://images.unsplash.com/photo-1742745181459-815e9815ac05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGZhcm1pbmclMjBnYW1lfGVufDF8fHx8MTc2MzQxMDY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    month: "April 2025",
    tags: ["Product Thinking", "Gamification", "UI/UX Design"],
  },
  {
    id: 3,
    slug: "event-horizon",
    title: "Event Horizon",
    category: "Game Design",
    description: "Dark space exploration game featuring intricate level design and atmospheric game art, inviting players to venture into the unknown depths of the cosmos.",
    image: "https://images.unsplash.com/photo-1577388219814-9b75a45cea09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbWUlMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MzQxMDY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    month: "Feb 2025",
    tags: ["Game Art", "Game Design", "Level Design"],
  },
];

export function Work() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-[Syne] font-bold text-[40px]">
            Selected Work
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            A collection of our recent projects spanning branding, digital design, and interactive experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="group cursor-pointer block"
            >
              {/* Project Image */}
              <div className="aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden mb-8 relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-zinc-500">0{index + 1}</span>
                    <span className="text-sm text-zinc-500">{project.month}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl mb-3 group-hover:text-zinc-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-zinc-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-900 rounded-full text-sm text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-zinc-500">
                  {project.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}