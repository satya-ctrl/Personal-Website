import FadeIn from './FadeIn';

const services = [
  {
    num: '01',
    name: 'AI/ML Development',
    desc: 'Developing and deploying machine learning models with TensorFlow, PyTorch, and Azure ML, including preprocessing, training, and evaluation pipelines for real-world applications.',
  },
  {
    num: '02',
    name: 'Full-Stack Development',
    desc: 'Building robust, scalable web applications using React, Next.js, Django, and FastAPI with clean architecture and exceptional user experiences.',
  },
  {
    num: '03',
    name: 'Computer Vision',
    desc: 'Creating intelligent visual recognition systems using OpenCV, CNNs, and deep learning for detection, classification, and image analysis applications.',
  },
  {
    num: '04',
    name: 'Generative AI',
    desc: 'Leveraging LangChain, RAG architectures, Hugging Face, and AI Agents to build intelligent automation and conversational AI systems.',
  },
  {
    num: '05',
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
            >
              <span
                className="font-black text-[#0C0C0C] flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {service.num}
              </span>
              <div className="flex flex-col justify-center gap-2 sm:gap-3 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
