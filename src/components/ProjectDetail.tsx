import { useParams, Link, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";

interface ProjectSection {
  type: "text" | "image" | "two-column" | "full-width-image" | "color-palette" | "two-images" | "three-images";
  heading?: string;
  content?: string;
  image?: string;
  leftContent?: string;
  rightContent?: string;
  colors?: Array<{ name: string; hex: string }>;
  images?: string[];
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  description: string;
  heroImage: string;
  brief: string;
  briefHeading: string;
  briefSectionImage: string;
  services: string[];
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  sections: ProjectSection[];
  tags: string[];
}

const projectsData: Record<string, ProjectData> = {
  "battery-guardian": {
    id: "battery-guardian",
    title: "Battery Guardian",
    category: "Branding & UX Design",
    client: "Personal Project",
    year: "2025",
    role: "UX Researcher, Product Designer",
    description: "AI-powered battery management solution combining UX research and product strategy to optimize device performance and extend battery life through intelligent monitoring.",
    heroImage: "https://images.unsplash.com/photo-1604474834292-8f0276a2065f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwY2hhcmdpbmclMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNDEwNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    brief: "Battery Guardian emerged from research into how users interact with battery-dependent devices. The project focuses on creating an intelligent system that learns user behavior patterns to optimize battery performance while maintaining seamless user experience.",
    briefHeading: "Project Brief",
    briefSectionImage: "https://images.unsplash.com/photo-1760074016722-04b95a22a310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjM0MjE2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["UX Research", "Product Strategy", "UI/UX Design"],
    duration: "6 months",
    overview: "Battery Guardian emerged from research into how users interact with battery-dependent devices. The project focuses on creating an intelligent system that learns user behavior patterns to optimize battery performance while maintaining seamless user experience.",
    challenge: "Modern device users face constant anxiety about battery life, yet existing solutions provide limited actionable insights. The challenge was to create a system that not only monitors battery health but actively helps users understand and improve their device usage patterns.",
    solution: "By combining AI-driven analytics with intuitive UX design, Battery Guardian provides personalized recommendations, predictive alerts, and actionable insights. The interface adapts to user expertise levels, offering both quick glances for casual users and deep analytics for power users.",
    sections: [
      {
        type: "color-palette",
        heading: "Brand Colors",
        colors: [
          { name: "Primary Green", hex: "#B5CAA1" },
          { name: "Dark Background", hex: "#18181B" },
          { name: "Energy Yellow", hex: "#FCD34D" },
          { name: "Alert Red", hex: "#EF4444" },
          { name: "Cool Blue", hex: "#3B82F6" }
        ]
      },
      {
        type: "two-column",
        heading: "Research & Discovery",
        leftContent: "We conducted extensive user interviews with 50+ participants across different age groups and device usage patterns. This research revealed that users wanted transparency without complexity.",
        rightContent: "The findings shaped our design philosophy: provide intelligent recommendations that users can act on immediately, while hiding the complex algorithms working behind the scenes."
      },
      {
        type: "two-images",
        heading: "Mobile Interface",
        images: [
          "https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzMzc2MjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1614857439116-67b6791609a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNoYXJnaW5nJTIwc3RhdGlvbnxlbnwxfHx8fDE3NjM0MjIyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ]
      },
      {
        type: "image",
        heading: "Data Visualization",
        content: "The dashboard presents critical battery information at a glance, with progressive disclosure for users who want deeper insights. Every element serves a purpose in helping users make informed decisions about their device usage.",
        image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM0MDcyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        type: "full-width-image",
        image: "https://images.unsplash.com/photo-1564424555153-04228f0aa7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYzNDIwMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        type: "text",
        heading: "Impact & Results",
        content: "Early testing showed a 35% improvement in user battery awareness and a 20% reduction in unnecessary battery anxiety. Users reported feeling more in control of their device experience while spending less time worrying about battery life."
      },
      {
        type: "text",
        heading: "Reflections",
        content: "Your reflections content goes here."
      }
    ],
    tags: ["AI", "UX Research", "Product Strategy", "Mobile Design"]
  },
  "astrogrow": {
    id: "astrogrow",
    title: "Astrogrow",
    category: "UI/UX Design",
    client: "Personal Project",
    year: "2025",
    role: "Game Designer, UI/UX Designer",
    description: "Gamified space farming experience that blends product thinking with engaging UI/UX design, creating an immersive journey of growing plants in cosmic environments.",
    heroImage: "https://images.unsplash.com/photo-1742745181459-815e9815ac05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGZhcm1pbmclMjBnYW1lfGVufDF8fHx8MTc2MzQxMDY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    brief: "Gen Z grew up in digital, game-first environments. They are motivated by instant feedback, a sense of achievement, and progress. On the other hand, traditional personal finance apps are powerful, but they often feel like work. They are loaded with spreadsheets and charts that can cause users, especially Gen Z, to feel anxious and overwhelmed. For new apps, this \"anxiety-inducing\" experience leads to low user retention and high churn.\nCan we use the motivational pull of gamification to create a new kind of finance app that users actually enjoy?\nA concept project that transforms personal finance from a chore into an adventure. AstroGrow uses gamification mechanics to motivate and empower Gen Z users to build healthy saving habits.",
    briefHeading: "Re-thinking Personal Finance with Gamification",
    briefSectionImage: "https://images.unsplash.com/photo-1563729322989-e351b911b304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHBsYW50cyUyMGdyb3dpbmd8ZW58MXx8fHwxNzYzNDIxNjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Product Thinking", "UI/UX Design", "Game Design"],
    duration: "8 months",
    overview: "Astrogrow reimagines the farming simulation genre by setting it in the vast expanse of space. Players cultivate exotic alien flora while managing resources in zero-gravity environments, creating a unique blend of relaxation and strategic gameplay.",
    challenge: "Creating a farming game that feels both scientifically plausible and magically engaging. The challenge was balancing educational elements about space and botany with the pure joy of watching things grow in impossible environments.",
    solution: "We designed a layered experience where casual players can enjoy the meditative aspects of tending to space gardens, while engaged players can dive deep into complex biological systems, terraforming mechanics, and interplanetary trade networks.",
    sections: [
      {
        type: "color-palette",
        heading: "Visual Palette",
        colors: [
          { name: "Sage Green", hex: "#B5CAA1" },
          { name: "Cosmic Purple", hex: "#8B5CF6" },
          { name: "Nebula Pink", hex: "#EC4899" },
          { name: "Deep Space", hex: "#0F172A" },
          { name: "Stardust White", hex: "#F8FAFC" }
        ]
      },
      {
        type: "two-column",
        heading: "Game Mechanics",
        leftContent: "The core loop centers around planting, nurturing, and harvesting alien plants. Each species has unique requirements based on real botanical principles adapted for space environments.",
        rightContent: "Players unlock new plant varieties, terraforming tools, and space stations as they progress. The progression system rewards both patience and strategic planning."
      },
      {
        type: "three-images",
        images: [
          "https://images.unsplash.com/photo-1588330516410-612455ecbab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGdyb3d0aCUyMHRpbWVsYXBzZXxlbnwxfHx8fDE3NjM0MjIyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1633987033079-a09df8c1c349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZXNoaXAlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjM0MjIyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1751097006268-ae4601fcb117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZmFybWluZ3xlbnwxfHx8fDE3NjM0MjIyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ]
      },
      {
        type: "text",
        heading: "Visual Design Philosophy",
        content: "The art style combines the wonder of space exploration with the warmth of nature. Bioluminescent plants cast ethereal glows in space stations, creating a sense of life thriving against the cosmic void. Every UI element reinforces the theme of nurturing growth in an alien environment."
      },
      {
        type: "image",
        heading: "User Experience",
        content: "The interface fades into the background, letting players focus on their gardens. Intuitive gestures and clear feedback systems ensure that even complex actions feel natural and rewarding.",
        image: "https://images.unsplash.com/photo-1586418328152-c61f282202c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MzM2NTI0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        type: "full-width-image",
        image: "https://images.unsplash.com/photo-1493859822928-d0ba2b85c80d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjB3aW5kb3d8ZW58MXx8fHwxNzYzNDIyMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        type: "text",
        heading: "Reflections",
        content: "By creating a differentiated, engaging experience, AstroGrow is designed to lower user acquisition costs (by standing out) and dramatically increase long-term retention (by making saving intrinsically rewarding).\nWhat I Learned:\nThe key to gamified finance is finding the line between \"playful\" and \"credible.\" Users need to trust the app with their money, even while they're \"playing a game.\" This balance must be reflected in every UI and UX decision.\nThe biggest win isn't the UI; it's the psychological shift. Reframing a $500 savings goal as 50 small \"$10 fuel\" quests breaks down the user's anxiety and makes the goal feel achievable."
      }
    ],
    tags: ["Product Thinking", "Gamification", "UI/UX Design", "Game Design"]
  },
  "event-horizon": {
    id: "event-horizon",
    title: "Event Horizon",
    category: "Game Design",
    client: "Personal Project",
    year: "2025",
    role: "Game Designer, Level Designer",
    description: "Dark space exploration game featuring intricate level design and atmospheric game art, inviting players to venture into the unknown depths of the cosmos.",
    heroImage: "https://images.unsplash.com/photo-1577388219814-9b75a45cea09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbWUlMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MzQxMDY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    brief: "My challenge was to answer a single prompt: 'How can two completely different game genres be combined to create an innovative hybrid experience?' In this group project, me and my teammates needed to find the balance point between the fast-paced intensity of platformers and the slow, thoughtful puzzle-solving of escape rooms.",
    briefHeading: "A Hybrid Narrative Experience Combining Platformer & Escape Room Mechanics",
    briefSectionImage: "https://images.unsplash.com/photo-1709142223248-3d23e8089cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3BhY2UlMjBuZWJ1bGF8ZW58MXx8fHwxNzYzNDIxNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Game Art", "Game Design", "Level Design"],
    duration: "10 months",
    overview: "Event Horizon is a contemplative exploration game set in the darkest reaches of space. Players navigate through mysterious cosmic phenomena, uncovering fragments of stories left behind by previous explorers while confronting the sublime terror of the infinite.",
    challenge: "Creating meaningful gameplay in an environment defined by emptiness and isolation. How do you make exploration engaging when there's nothing to find? How do you tell a story when you're alone in the void?",
    solution: "We embraced the emptiness as a feature, not a bug. Event Horizon uses environmental storytelling, subtle audio design, and carefully paced moments of discovery to create a meditative yet tense experience. The game is about the journey through darkness, not the destination.",
    sections: [
      {
        type: "color-palette",
        heading: "Atmospheric Palette",
        colors: [
          { name: "Void Black", hex: "#09090B" },
          { name: "Nebula Blue", hex: "#3B82F6" },
          { name: "Warning Orange", hex: "#F97316" },
          { name: "Sage Accent", hex: "#B5CAA1" },
          { name: "Ghost White", hex: "#FAFAFA" }
        ]
      },
      {
        type: "text",
        heading: "Level Design Philosophy",
        content: "Each area is designed to evoke specific emotions through scale, lighting, and spatial relationships. Dead space stations tell silent stories. Nebulae hide both beauty and danger. Black holes warp perception itself. The levels are characters in their own right."
      },
      {
        type: "two-images",
        images: [
          "https://images.unsplash.com/photo-1684439115738-696741fffcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29ycmlkb3IlMjBhdG1vc3BoZXJpY3xlbnwxfHx8fDE3NjM0MjIyOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1520034475321-cbe63696469a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFyc3xlbnwxfHx8fDE3NjMzNjgzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ]
      },
      {
        type: "two-column",
        heading: "Atmospheric Design",
        leftContent: "Sound design plays a crucial role in creating tension and wonder. The hum of your ship's engines becomes a companion. Radio static might be interference or messages from the past.",
        rightContent: "Visual design uses darkness and limited light sources to create both claustrophobia and agoraphobia. Players must choose between safety in shadows or exposure in light."
      },
      {
        type: "full-width-image",
        image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzA2OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        type: "image",
        heading: "Narrative Through Space",
        content: "The story unfolds through exploration rather than exposition. Environmental clues, audio logs, and visual storytelling reveal the fate of those who came before, while raising questions about your own journey.",
        image: "https://images.unsplash.com/photo-1587522384446-64daf3e2689a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzQwMTA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        type: "text",
        heading: "Reflections",
        content: "The biggest challenge was balancing two conflicting genres. Through narrative and level-design iterations, I learned how to merge the strengths of both platformers and escape rooms into one coherent experience."
      }
    ],
    tags: ["Game Art", "Game Design", "Level Design", "Environmental Storytelling"]
  }
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project not found</h1>
          <Link to="/work" className="text-zinc-400 hover:text-white transition-colors">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen w-full">
        <ImageWithFallback
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
            <div className="text-sm text-zinc-300 mb-4 tracking-wider uppercase">
              Case Study
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-0 tracking-tight font-[Syne] font-bold">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Back Button - positioned absolutely over hero */}
      <div className="max-w-7xl mx-auto px-6 absolute top-32 left-0 right-0 z-10">
        <button
          onClick={() => navigate("/work")}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Work
        </button>
      </div>

      {/* Project Brief & Role Section */}
      <div className="bg-zinc-900/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Project Brief */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">{project.briefHeading}</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {project.brief}
              </p>
            </div>

            {/* Right Column - Role Info */}
            <div className="bg-white text-black p-8 rounded-lg">
              <div className="space-y-8">
                {project.id === "event-horizon" ? (
                  <>
                    <div>
                      <div className="text-xs tracking-wider uppercase mb-2" style={{ color: '#EF4444', fontSize: '18px' }}>
                        My Role:
                      </div>
                    </div>
                    <div>
                      <div className="text-lg mb-2">
                        Narrative & UX Design
                      </div>
                      <div className="text-sm text-gray-600">
                        Designed the core Audio Log narrative system and led the integration of story into puzzle-based level design.
                      </div>
                    </div>
                    <div>
                      <div className="text-lg mb-2">
                        Art Direction & Visuals
                      </div>
                      <div className="text-sm text-gray-600">
                        Responsible for all 2D art, including character design, enemy design, environment art, and animations.
                      </div>
                    </div>
                    <div>
                      <div className="text-lg mb-2">
                        UI/UX Innovation
                      </div>
                      <div className="text-sm text-gray-600">
                        Addressed a common player pain point in narrative games: "players don't want to read long text."
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="mb-2" style={{ color: '#EF4444', fontSize: '18px' }}>
                        My Role
                      </div>
                    </div>
                    <div className="text-lg">
                      Product Thinking
                    </div>
                    <div className="text-lg">
                      UX Research
                    </div>
                    <div className="text-lg">
                      Gamification & Mechanics Design
                    </div>
                    <div className="text-lg">
                      UI/UX Design
                    </div>
                    <div className="text-lg">
                      Prototyping & Testing
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Brief Section Image */}
          <div className="mt-16">
            <div className="relative h-screen w-full rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={project.briefSectionImage}
                alt={`${project.title} brief section`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl mb-6">Overview</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* Challenge & Solution */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-y border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl md:text-3xl mb-4">The Challenge</h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl mb-4">The Solution</h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Sections */}
      {project.sections.map((section, index) => {
        if (section.type === "full-width-image" && section.image) {
          return (
            <div key={index} className="py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={section.image}
                    alt={`${project.title} section ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        }

        if (section.type === "text") {
          return (
            <div key={index} className="max-w-4xl mx-auto px-6 py-20">
              {section.heading && section.heading !== "Reflections" && (
                <h2 className="text-3xl md:text-4xl mb-6">{section.heading}</h2>
              )}
              {section.content && (
                <p className="text-xl text-zinc-400 leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          );
        }

        if (section.type === "two-column") {
          return (
            <div key={index} className="max-w-7xl mx-auto px-6 py-20">
              {section.heading && (
                <h2 className="text-3xl md:text-4xl mb-12">{section.heading}</h2>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {section.leftContent && (
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {section.leftContent}
                  </p>
                )}
                {section.rightContent && (
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {section.rightContent}
                  </p>
                )}
              </div>
            </div>
          );
        }

        if (section.type === "image") {
          return (
            <div key={index} className="max-w-7xl mx-auto px-6 py-20">
              {section.heading && (
                <h2 className="text-3xl md:text-4xl mb-6">{section.heading}</h2>
              )}
              {section.content && (
                <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                  {section.content}
                </p>
              )}
              {section.image && (
                <div className="aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={section.image}
                    alt={section.heading || `${project.title} section ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          );
        }

        if (section.type === "color-palette" && section.colors) {
          return (
            <div key={index} className="max-w-4xl mx-auto px-6 py-20">
              {section.heading && (
                <h2 className="text-3xl md:text-4xl mb-6">{section.heading}</h2>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {section.colors.map((color) => (
                  <div key={color.name} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-lg text-zinc-400 leading-relaxed">
                      {color.name} ({color.hex})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        if (section.type === "two-images" && section.images) {
          return (
            <div key={index} className="py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {section.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} section ${index + 1} image ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        if (section.type === "three-images" && section.images) {
          return (
            <div key={index} className="py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  {section.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-[16/9] bg-zinc-900 rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} section ${index + 1} image ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}

      {/* Bottom Spacing */}
      <div className="pb-32" />
    </div>
  );
}