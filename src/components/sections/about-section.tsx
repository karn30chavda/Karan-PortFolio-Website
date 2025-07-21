
import { SectionWrapper } from '@/components/shared/section-wrapper';
import Image from 'next/image';

export function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" animationDelay={1}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl group">
           <Image
            src="https://images.unsplash.com/photo-1515041219749-89347f83291a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtaW5pb258ZW58MHx8fHwxNzQ5MjExMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About me visual - Minion character"
            fill
            className="transform transition-transform duration-500 group-hover:scale-105 object-cover"
            data-ai-hint="minion character"
          />
        </div>
        <div className="space-y-4 text-lg text-foreground/80 text-center md:text-left">
          <p>
           Hello! I'm a dedicated and results-oriented web developer with a knack for crafting elegant solutions to complex problems. I’ve had the opportunity to build and contribute to a variety of personal and collaborative projects — ranging from basic static websites to dynamic web apps with backend integration.
          </p>
          <p>
            My passion lies in the intersection of design and technology. I believe that a great user experience is essential, and I strive to create interfaces that are both visually appealing and intuitive for all users, including accessibility.
</p>
<p>
I enjoy working with modern tools like React, Firebase, and Supabase, and I'm always learning to improve performance and usability.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while planning my next adventure.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
