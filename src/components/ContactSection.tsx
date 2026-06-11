import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import FadeIn from './FadeIn';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'satyagmishra20@gmail.com',
    href: 'mailto:satyagmishra20@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9717843031',
    href: 'tel:+919717843031',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gurgaon, India',
    href: 'https://maps.google.com/?q=Gurgaon,India',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'satya-ctrl',
    href: 'https://github.com/satya-ctrl',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'satya82668',
    href: 'https://linkedin.com/in/satya82668',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#D7E2EA]/60 font-light text-center max-w-xl mx-auto leading-relaxed mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
        >
          Got a project in mind or just want to connect? I&apos;d love to hear from you.
          Let&apos;s build something incredible together.
        </p>
      </FadeIn>

      {/* Contact cards grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {contactLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.label} delay={0.15 + i * 0.08} y={20}>
              <a
                href={item.href}
                target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl sm:rounded-3xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] p-5 sm:p-6 hover:border-[#D7E2EA]/25 hover:bg-[#D7E2EA]/[0.06] transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#D7E2EA]/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-[#D7E2EA]/[0.15] transition-colors duration-300">
                  <Icon size={20} className="text-[#D7E2EA]/70" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[#D7E2EA] font-medium text-sm sm:text-base truncate">
                    {item.value}
                  </p>
                </div>
              </a>
            </FadeIn>
          );
        })}

        {/* CTA card - Send a message */}
        <FadeIn delay={0.55} y={20}>
          <a
            href="https://wa.me/919717843031"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 group"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              boxShadow:
                '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
            }}
          >
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
              <Send size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                Let&apos;s Talk
              </p>
              <p className="text-white font-medium text-sm sm:text-base">
                Send a Message
              </p>
            </div>
          </a>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="mt-20 sm:mt-24 md:mt-32 pt-8 border-t border-[#D7E2EA]/10">
        <p className="text-center text-[#D7E2EA]/30 text-sm">
          © {new Date().getFullYear()} Satya Mishra. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
