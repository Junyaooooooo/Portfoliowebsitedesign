import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white hover:text-zinc-400 transition-colors">
            <span className="font-semibold">Portfolio</span>
          </Link>
          <div className="flex gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/") ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={`transition-colors ${
                isActive("/work") ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Work
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about") ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
