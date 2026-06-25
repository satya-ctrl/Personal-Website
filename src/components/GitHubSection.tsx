import { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const langColors: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B',
  Shell: '#89e051',
};

const GitHubSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/satya-ctrl/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="github"
      className="border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          GitHub
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/60 text-center font-light uppercase tracking-widest text-sm sm:text-base mb-16 sm:mb-20 md:mb-28">
          <a
            href="https://github.com/satya-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D7E2EA] transition-colors duration-200"
          >
            github.com/satya-ctrl
          </a>
        </p>
      </FadeIn>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-[#D7E2EA]/20 border-t-[#D7E2EA] rounded-full animate-spin" />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {repos.map((repo, i) => (
            <FadeIn key={repo.id} delay={i * 0.08} y={20}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl sm:rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] p-5 sm:p-6 md:p-7 hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.06] transition-all duration-300 h-full group"
              >
                {/* Repo name */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[#D7E2EA] font-medium text-base sm:text-lg truncate">
                    {repo.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-[#D7E2EA]/30 group-hover:text-[#D7E2EA]/60 transition-colors flex-shrink-0 mt-1"
                  />
                </div>

                {/* Description */}
                <p className="text-[#D7E2EA]/50 font-light text-sm leading-relaxed mb-5 line-clamp-3 min-h-[3.75rem]">
                  {repo.description || 'No description available'}
                </p>

                {/* Footer: language, stars, forks */}
                <div className="flex items-center gap-4 text-xs sm:text-sm text-[#D7E2EA]/40">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: langColors[repo.language] || '#8b949e',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star size={13} />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork size={13} />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      )}

      {/* View all repos button */}
      <FadeIn delay={0.3} y={20}>
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="https://github.com/satya-ctrl?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors duration-200"
          >
            View All Repositories
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default GitHubSection;
