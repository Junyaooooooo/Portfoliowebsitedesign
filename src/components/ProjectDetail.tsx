import { useParams, Link, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import * as React from "react";
import { ArrowLeft } from "lucide-react";
import astro from "../assets/astro.png";
import battery from "../assets/battery.jpg";
import apersona1 from "../assets/astro-persona1.png";
import apersona2 from "../assets/astro-persona2.png";
import alowfi from "../assets/alowfi.png";
import ahifi from "../assets/ahifi.png";
import sketch from "../assets/esketch.png";
import leveld from "../assets/eleveldesign.png";
import enemy from "../assets/eenemy.png";
import level from "../assets/elevel.png";
import asset from "../assets/easset.png";
import bempathy from "../assets/bempathymap.png";
import bjourney from "../assets/bjourney.png";
import bmock from "../assets/bmock.png";

interface ProjectSection {
  type: "text" | "image" | "two-column" | "full-width-image" | "color-palette" | "two-images" | "three-images" | "youtube" | "node";
  heading?: string;
  content?: string;
  image?: string;
  leftContent?: string;
  rightContent?: string;
  colors?: Array<{ name: string; hex: string }>;
  images?: string[];
  youtubeLink?: string;
  node?: React.Node;
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
  briefSectionImage?: string;
  briefYoutube?: string;
  services: string[];
  duration: string;
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
    heroImage: battery,
    brief: "Battery Guardian emerged from research into how users interact with battery-dependent devices. The project focuses on creating an intelligent system that learns user behavior patterns to optimize battery performance while maintaining seamless user experience.",
    briefHeading: "Utilizing AI to Rapidly Validate a Trust-Based Utility App",
    services: ["Product Strategy & PM", "UX Research", "UI/UX Design"],
    duration: "6 months",
    briefYoutube: "https://www.youtube.com/embed/-byvBWg8trs?si=JnX1QeHhYUVOLFdj",
    sections: [
      {
        type: "text",
        heading: "Why Do Battery Apps Fail?",
        content: `Traditional battery apps focus on data (cleaning RAM, showing graphs). My initial research suggested the real user problem wasn't technical efficiency, but psychological anxiety. Users didn't trust the "black box" of their phone's OS. Users don't need a tool to manage their battery; they need a trusted agent to give them certainty.Instead of building a "cleaner," I set out to design an "AI Guardian" that trades data privacy for predictive certainty..`
      },
      {
        type: "image",
        image: bempathy,
      },
      {
        type: "text",
        content: `I used AI to synthesize initial market signals into a "Wanted Poster" empathy map. This helped me quickly identify the "Anxious Pragmatist" persona—someone who feels burdened by their phone, not empowered by it. We assumed users would trade sensitive data (Calendar access) for battery certainty. This was the high-risk assumption that defined the MVP.`
      },
      {
        type: "color-palette",
        heading: "Brand Colors",
        colors: [
          { name: "Primary Green", hex: "#05C161" },
          { name: "Primary Background Color", hex: "#191919" },
          { name: "Secondary Background Color", hex: "#2A2A29" },
          { name: "Secondary Text Color", hex: "#949494" },
          { name: "Primary Text Color", hex: "#E9E9E9" }
        ]
      },
      {
        type: 'node',
        node: <div>
          To move beyond assumptions, I conducted moderated usability testing with 7 participants representing the "Anxious Pragmatist" persona. Instead of standard interviews, I utilized the Think-Aloud Protocol, a cognitive research method where users verbalize their thought process in real-time while attempting specific tasks. This method is critical for uncovering the why behind user errors, not just the what.
          Key Findings from Testing:
          <ul>
            <li>• One participant  explicitly stated he "wouldn't trust a random app" with system-level permissions, only a "system app." This invalidated my initial assumption that utility alone would drive adoption.</li>
            <li>• Another participant  noted that the word "prediction" made her think of inaccurate weather forecasts, actually decreasing her trust in the AI.</li>
            <li>• My initial "Critically Low" warning UI caused confusion (users didn't know if it meant "now" or "later"), proving that ambiguity increases anxiety—the exact opposite of my product goal.</li>
          </ul>
          The Strategic Pivot: Based on this data, I pivoted the core strategy from "Utility-First" to "Relationship-First." I realized the app couldn't just be smart; it had to earn the right to be smart. This led to the creation of "Joule," the AI character designed specifically to bridge the trust gap identified in testing.
        </div>
      },
      {
        type: "image",
        image: bjourney,
      },
      {
        type: "node",
        node: <div>
          With a validated problem but limited resources, I needed to define a Minimum Viable Product (MVP) that delivered maximum value. I applied the MoSCoW Prioritization Framework (Must have, Should have, Could have, Won't have) to ruthlessly scope the project.
          <ul>
            <li>• Won't Have: I explicitly deferred "Community Features" and "Detailed Historical Graphs." While visually appealing, my research showed they did not solve the immediate "anxiety" problem and would delay launch.</li>
            <li>• Must Have: My testing revealed a critical insight: 3 out of 4 users did not use their phone's calendar. My original design relied 100% on calendar data, meaning the app would be broken for 75% of users.</li>
            <li>• The Decision: I elevated the "Manual Add Event" feature from a "nice-to-have" to a critical "Must Have" requirement. This feature allows non-calendar users to input context (e.g., "Unexpected Meeting") in seconds, ensuring the "Battery Forecast" works for everyone, not just power users. This decision directly expanded the app's Total Addressable Market.</li>
          </ul>
        </div>
      },
      {
        type: "full-width-image",
        image: bmock,
      },
      {
        type: "text",
        heading: "Reflections",
        content: `By validating the "Trust Barrier" early, I avoided building a product no one would install. The final design focuses 80% of its effort on the first 5 minutes of usage (Onboarding & Activation) because retention depends entirely on that initial trust. AI didn't replace the rigorous process; it accelerated it. It allowed me to simulate the "Strategyzer" business model canvas and iterate on the PRD in hours, not weeks, giving me more time to focus on the human insights from user testing.`
      },

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
    services: ["Product Thinking", "UI/UX Design", "Game Design"],
    duration: "8 months",
    briefYoutube: "https://www.youtube.com/embed/Ur7jrxwvyvQ?si=TH2sauU0376VqTNd",
    sections: [
      {
        // design system here
        type: "full-width-image",
        image: astro
      },
      {
        type: "two-column",
        heading: "Research",
        leftContent: "To understand the landscape, I analyzed mainstream apps (like Mint and IA). The market is crowded with products that focus mainly on functionality (tracking and reporting), but there’s a major gap when it comes to emotional design and motivation. I also researched the quest system from Stardew Valley to learn how to set up quests for goals of different scales and how to motivate users to keep engaging with the product.",
        rightContent: "From user interviews, I gathered two key insights. Users feel overwhelmed by the idea of budgeting and see it as a punishment. They are highly motivated by instant feedback and a visual sense of achievement.Players unlock new plant varieties, terraforming tools, and space stations as they progress. The progression system rewards both patience and strategic planning."
      },
      {
        type: "two-images",
        heading: "user research",
        images: [
          apersona1,
          apersona2,
        ]
      },
      {
        type: "text",
        heading: "Key Features",
        content: `I designed key features to support this game loop.Instead of "Budget Categories," users get "Quests," like "Collect $50 in Fuel for the Coffee Mission." This reframes budgeting as an active, achievable challenge. A visual progression map (like in a game) that shows users all the planets" they’ve discovered (goals they've completed). This provides a long-term sense of achievement. This was the biggest design challenge. Through user testing, I learned that while the app is a game, users must always feel their money is serious and safe. So I balanced playful illustrations and game elements with a clean, professional, and trustworthy UI for all financial transaction screens. The "game" motivates, but the "bank" feels secure..`
      },
      {
        type: "full-width-image",
        image: alowfi,
      },
      {
        type: "full-width-image",
        image: ahifi,
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
    services: ["Game Art", "Game Design", "Level Design"],
    duration: "10 months",
    briefYoutube: "https://www.youtube.com/embed/UE8WOZ8jAWQ?si=sY15Amc4B3lALU0g",
    sections: [
      {
        type: "image",
        image: sketch,
      },
      {
        type: "image",
        image: enemy,
      },
      {
        type: "text",
        heading: "Key Mechanics",
        content: `I noticed that in many games, players don’t have the patience to read long text—they often skip the story entirely. And during play testing, unskippable or overly long dialogue systems quickly become frustrating. To solve this, I designed an Audio Log system. To encourage players to actually interact with the story, I built in several motivations. Audio Logs aren’t just lore—they act like mini ‘treasure chests’ that contain key puzzle tips or useful items. They become a meaningful short-term optimization goal that players actively seek out. Players can skip or listen, and view the transcript anytime—giving them full control between ‘immersion’ and ‘efficiency.’`,
      },
      {
        type: "image",
        image: leveld,
      },
      {
        type: "text",
        content: `I was unhappy with the first version of our level design. It felt unbalanced—too much like a pure platformer, and missing the escape-room-style puzzles that push the story forward. Most puzzles were repetitive: ‘find a key, open a door.’ So I led a full redesign of the levels. My strategy was to let narrative structure drive gameplay flow. I divided the story into six stages and placed Audio Logs in specific rooms as narrative clues. Players progress through environmental storytelling—from early optimism to emerging side effects.`,
      },
      {
        type: "image",
        image: level,
      },
      {
        type: "image",
        heading: "Game Art",
        content: "I realized that frame-by-frame animation would be too time-consuming. So I separated the character’s limbs, making it easier to animate smoothly in After Effects using rig-based techniques.I also tried using a unified watercolor style to create a damp, abandoned, and shadowy atmosphere.",
        image: asset,
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

          {project.briefYoutube &&
            <div className="mt-16">
              <div className="relative h-screen w-full rounded-2xl overflow-hidden">
                <iframe width="100%" height="700" src={project.briefYoutube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          }
          {project.briefSectionImage &&
            <div className="mt-16">
              <div className="relative h-screen w-full rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={project.briefSectionImage}
                  alt={`${project.title} brief section`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          }


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

        if (section.type === "node" && section.node) {
          return (


            <div key={index} className="max-w-4xl mx-auto px-6 py-20 text-xl text-zinc-400 leading-relaxed">
              {section.node}
            </div>
          );
        }

        if (section.type === "youtube" && section.youtubeLink) {
          return (
            <div key={index} className="h-screen w-full">
              {section.heading && section.heading !== "Reflections" && (
                <h2 className="text-3xl md:text-4xl mb-6">{section.heading}</h2>
              )}

              <div className="text-xl text-zinc-400 leading-relaxed">
                <iframe width="100%" height="700" src={section.youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    className="w-full h-full object-contain"
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