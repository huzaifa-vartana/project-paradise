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
              I'm a Software Engineer with experience at Vartana and EMPG LABS, currently pursuing my MS in Computer Software Engineering at Northeastern University. 
              I specialize in building scalable fintech solutions and have contributed to platforms handling $XXXM+ in GMV.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-sm">
            <h3 className="text-xl font-display font-semibold text-purple-600">Expertise</h3>
            <p className="text-muted-foreground">
              My expertise spans full-stack development with a focus on cloud-native microservices, API design, and secure payment processing. 
              I excel in Ruby on Rails, Go, Python, AWS services, and modern web technologies, with a proven track record of optimizing system performance and reliability.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-teal-50 shadow-sm">
            <h3 className="text-xl font-display font-semibold text-teal-600">Interests</h3>
            <p className="text-muted-foreground">
              I'm passionate about distributed systems, high-performance computing, and generative AI. 
              I actively contribute to open-source projects and enjoy solving complex technical challenges in fintech and cloud computing.
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
                {["Java", "Python", "JavaScript", "TypeScript", "Go", "Ruby", "C/C++", "C#", "SQL", "Bash", "HTML", "CSS", "JSON", "XML"].map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-sm">
              <h4 className="text-lg font-display font-medium text-purple-600 mb-4">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Node.js", "Spring Boot", "Ruby on Rails", "Flask", "GraphQL", "Express.js", "Angular", "Scikit", "TensorFlow", "TailwindCSS"].map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-white to-teal-50 shadow-sm">
              <h4 className="text-lg font-display font-medium text-teal-600 mb-4">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "MariaDB", "Neo4j"].map((skill, index) => (
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
                {["Git/GitHub", "Docker", "NewRelic", "AWS", "Metabase", "EC2", "S3", "SQS", "Lambda", "Spark", "Hive", "Kubernetes", "Azure", "Kafka", "RabbitMQ", "Figma", "CI/CD"].map((skill, index) => (
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
