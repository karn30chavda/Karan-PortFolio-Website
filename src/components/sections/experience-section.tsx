import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Sparkles } from 'lucide-react';

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="My Journey" animationDelay={2}>
      <div className="text-center space-y-6 py-8 bg-card rounded-lg shadow-lg border border-border p-6 md:p-8">
        <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground">Building My Path</h3>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
        I’m a passionate and self-driven learner currently focused on mastering web development by building real-world projects and continuously expanding my skillset.
        </p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          While I’m at the beginning of my professional journey and don’t have formal work experience yet, my commitment to learning is reflected in the hands-on projects I’ve created using tools like React, Firebase, and Supabase.
        </p>
 <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
I’m eager to bring this growing expertise into real-world environments, collaborate with teams, and contribute to meaningful solutions.
</p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Please explore my <a href="#projects" className="text-primary hover:underline font-medium">projects section</a> to see what I've been working on!
        </p>
      </div>
    </SectionWrapper>
  );
}
