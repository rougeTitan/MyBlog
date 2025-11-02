import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
    frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Jest"],
  }

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2021 - Present",
      description:
        "Leading development of scalable web applications, mentoring junior developers, and architecting cloud-native solutions.",
    },
    {
      title: "Software Engineer",
      company: "Startup Inc",
      period: "2019 - 2021",
      description:
        "Built full-stack features for a SaaS platform, improved performance by 40%, and implemented automated testing.",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2017 - 2019",
      description:
        "Developed responsive websites and web applications for various clients using modern JavaScript frameworks.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">About Me</h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            I'm a passionate software engineer with over 7 years of experience building web applications and solving
            complex technical challenges. I believe in writing clean, maintainable code and creating solutions that make
            a real impact.
          </p>
        </section>

        {/* Background */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Background</h2>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              My journey into software development started during my computer science degree, where I discovered my love
              for problem-solving and building things from scratch. Since then, I've worked with startups and
              established companies, contributing to products used by millions of users.
            </p>
            <p>
              I'm particularly interested in web technologies, cloud architecture, and developer experience. When I'm
              not coding, you'll find me writing technical blog posts, contributing to open-source projects, or
              exploring new technologies.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="font-medium text-muted-foreground">{job.company}</p>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{job.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
