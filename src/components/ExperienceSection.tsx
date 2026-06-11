import FadeIn from './FadeIn';

const experiences = [
  {
    num: '01',
    role: 'Cloud & AI/ML Operations Intern',
    company: 'Noventiq',
    location: 'Gurgaon',
    period: 'Jun 2025 — Aug 2025',
    link: 'https://leave-request-system-2g3c.vercel.app/',
    bullets: [
      'Developed and deployed ML models using Azure Machine Learning, including preprocessing, training, and evaluation pipelines.',
      'Built AI automation agents through the Copilot Agentic AI Program to streamline internal workflows.',
      'Developed the Noventiq HR & Portfolio Suite for employee management, leave requests, and portfolio tracking.',
    ],
  },
  {
    num: '02',
    role: 'SAP Production Planning Intern',
    company: 'Maruti Suzuki',
    location: 'Gurgaon',
    period: 'Jul 2024 — Aug 2024',
    link: undefined,
    bullets: [
      'Worked with SAP ERP production planning workflows in a large-scale manufacturing environment.',
      'Analyzed operational processes and supported documentation activities for production teams.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </h2>

      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.num} delay={i * 0.15} y={30}>
            <div
              className="py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
            >
              <div className="flex items-start gap-6 sm:gap-8 md:gap-12">
                {/* Number */}
                <span
                  className="font-black text-[#0C0C0C] flex-shrink-0 leading-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {exp.num}
                </span>

                {/* Content */}
                <div className="flex-1 pt-2 sm:pt-4 md:pt-6">
                  {/* Role & Company */}
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                    <span
                      className="font-semibold text-[#0C0C0C]/80"
                      style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    >
                      {exp.company}
                    </span>
                    <span className="text-[#0C0C0C]/40 hidden sm:inline">|</span>
                    <span
                      className="text-[#0C0C0C]/50 font-light"
                      style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
                    >
                      {exp.location}
                    </span>
                    <span className="text-[#0C0C0C]/40 hidden sm:inline">|</span>
                    <span
                      className="text-[#0C0C0C]/50 font-light"
                      style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="font-light leading-relaxed text-[#0C0C0C]/60 pl-4 relative"
                        style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                      >
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-[#0C0C0C]/30" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 sm:mt-6 text-[#7621B0] font-medium hover:opacity-70 transition-opacity duration-200 uppercase tracking-wider text-sm"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
