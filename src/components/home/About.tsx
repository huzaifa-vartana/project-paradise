import { SectionHeading } from "@/components/ui/section-heading";

export const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeading
          title="About Me"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-sm">
            <h3 className="text-xl font-display font-semibold text-primary">Background</h3>
            <p className="text-muted-foreground">
              I'm a software engineer with 5+ years of experience in building web and mobile applications. 
              I have a strong foundation in full-stack development and a passion for creating exceptional user experiences.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-sm">
            <h3 className="text-xl font-display font-semibold text-purple-600">Expertise</h3>
            <p className="text-muted-foreground">
              My expertise includes JavaScript/TypeScript, React, Node.js, and various modern web technologies. 
              I specialize in building responsive, accessible, and performant applications with clean and maintainable code.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-teal-50 shadow-sm">
            <h3 className="text-xl font-display font-semibold text-teal-600">Interests</h3>
            <p className="text-muted-foreground">
              Beyond coding, I'm interested in UX/UI design, open-source contribution, and staying updated with the latest tech trends. 
              I enjoy solving complex problems and learning new technologies.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-display font-semibold mb-8 text-gradient text-center">Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Programming Languages */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-sm">
              <h4 className="text-lg font-display font-medium text-primary mb-4">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "HTML/CSS"].map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-sm">
              <h4 className="text-lg font-display font-medium text-purple-600 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Redux", "Tailwind CSS"].map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white to-teal-50 shadow-sm">
              <h4 className="text-lg font-display font-medium text-teal-600 mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API"].map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white to-orange-50 shadow-sm">
              <h4 className="text-lg font-display font-medium text-orange-600 mb-4">Tools & Others</h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "CI/CD", "Testing"].map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
