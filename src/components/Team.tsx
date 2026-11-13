import DepthCarousel, { type DepthCarouselItemObject } from './DepthCarousel';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'sophia-lindqvist',
    name: 'Sophia Lindqvist',
    role: 'Lead AI Architect',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Sophia Lindqvist, Lead AI Architect',
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Principal Product Designer',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Marcus Thorne, Principal Product Designer',
  },
  {
    id: 'alexander-reid',
    name: 'Alexander Reid',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Alexander Reid, Founder & CEO',
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Head of Engineering',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Elena Vance, Head of Engineering',
  },
  {
    id: 'zara-al-mansoor',
    name: 'Zara Al-Mansoor',
    role: 'Motion & 3D Lead',
    image:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Zara Al-Mansoor, Motion & 3D Lead',
  },
  {
    id: 'liam-chen',
    name: 'Liam Chen',
    role: 'Systems Security Lead',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Liam Chen, Systems Security Lead',
  },
  {
    id: 'maya-patel',
    name: 'Maya Patel',
    role: 'Head of Brand Strategy',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Maya Patel, Head of Brand Strategy',
  },
  {
    id: 'kai-takahashi',
    name: 'Kai Takahashi',
    role: 'Lead Cloud Architect',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    alt: 'Portrait of Kai Takahashi, Lead Cloud Architect',
  },
];

const carouselItems: DepthCarouselItemObject[] = teamMembers.map((member) => ({
  image: member.image,
  alt: member.alt,
  title: member.name,
  subtitle: member.role,
}));

export function OurTeamSection() {
  return (
    <section
      id="team"
      aria-label="Our Team"
      className="w-full overflow-hidden bg-[#0E0B12] px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Centered Header Block */}
        <div className="text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight text-white/95 md:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto mt-4 mb-12 max-w-xl text-center text-sm leading-relaxed text-gray-300/80 md:text-base">
            The creative minds and technical experts turning complex ideas into seamless digital
            solutions.
          </p>
        </div>

        {/* DepthCarousel 3D Stage */}
        <div className="relative h-[460px] w-full md:h-[520px]">
          <DepthCarousel
            items={carouselItems}
            cardWidth={310}
            cardHeight={400}
            radius={20}
            tint="#0E0B12"
            depth={80}
            spread={175}
            tilt={14}
            tiltDirection="right"
            perspective={2400}
            activeCount={3}
            visibleCards={5}
            falloff={0.11}
            blur={5}
            duration={450}
            ease="power3.out"
            autoplay={true}
            autoplayDelay={3200}
            loop={true}
            showControls={true}
            showIndicators={true}
          />
        </div>
      </div>
    </section>
  );
}

export { OurTeamSection as Team };
