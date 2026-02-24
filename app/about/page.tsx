import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Building2, Award } from "lucide-react"

export default function AboutPage() {
  const skills = {
    languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
    frontend: ["Angular", "React.js", "Ionic", "NgRx", "RxJS", "Bootstrap", "Angular Material"],
    backend: ["Spring Boot", "Node.js", "Express", "NestJS", "Kafka", "GraphQL", "REST", "SOAP"],
    databases: ["Oracle SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
    cloud: ["AWS ECS", "AWS Lambda", "S3", "CloudFront", "EKS", "AWS Bedrock", "SageMaker"],
    tools: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git", "Splunk", "Prometheus", "Grafana"],
    testing: ["Jest", "Jasmine", "Karma", "JUnit", "Playwright", "Appium", "Cucumber"],
  }

  const experience = [
    {
      title: "Full-Stack Developer Level III",
      company: "FedEx Shipment Operational Systems",
      logo: "/company-logos/fedex_logo_icon.png",
      period: "Jan 2025 - Present",
      description:
        "Developing and modernizing full-stack internal applications using Java 16, Spring Boot 3, and Angular 19. Implementing API Gateway security, Redis caching, and Kafka streams for real-time processing. Managing CI/CD pipelines with GitHub Actions, Docker, and Kubernetes.",
    },
    {
      title: "Full Stack Developer",
      company: "Fidelity Investments",
      logo: "/company-logos/fidelity_logo.png",
      period: "Mar 2023 - Dec 2024",
      description:
        "Contributed to NetBenefits hybrid mobile platform using Ionic 7, Angular 16, and Node.js. Delivered major features resulting in 4% increase in customer engagement and 3.5% YoY growth in retirement contributions. Built robust UI automation frameworks using Playwright and Cucumber, reducing manual regression effort by 60%.",
    },
    {
      title: "Software Developer Level III",
      company: "ThermoFisher Scientific",
      logo: "/company-logos/thermofisher-scientific-logo.png",
      period: "Feb 2021 - Mar 2023",
      description:
        "Led full-stack development for Magellan Search platform using Java 8, Spring Boot, AngularJS, and AWS. Delivered revenue-impacting features including Gallery Module (15-20% of quarterly revenue) and Epitope Search (5% revenue increase). Implemented Jenkins CI/CD pipelines with AWS ECS for streamlined deployments.",
    },
    {
      title: "Software Engineer Level II",
      company: "FedEx Ground",
      logo: "/company-logos/fedex_logo_icon.png",
      period: "Feb 2020 - Feb 2021",
      description:
        "Modernized legacy systems by developing cross-platform package tracking application using Java 8 and Angular 8. Implemented Redis caching and Spring Data JPA for efficient CRUD operations. Designed CI/CD pipelines using Jenkins and CloudBees Flow for Pivotal Cloud Foundry deployments.",
    },
    {
      title: "Software Engineer",
      company: "PNC Financial Services",
      logo: "/company-logos/pnc-bank-logo.png",
      period: "Oct 2018 - Oct 2019",
      description:
        "Developed and enhanced PNC Bank's Cash Flow Insight platform using Java 8, Spring Boot, and microservices architecture. Migrated monolithic APIs to modern REST services with Swagger/OpenAPI documentation. Built dynamic UI components using Angular 8 and implemented comprehensive test suites.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">About Me</h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            I'm a Full-Stack Software Engineer with 7+ years of professional experience specializing in building
            scalable, enterprise-grade applications using Java, Spring Boot, Angular, Node.js, and modern cloud
            technologies. I have a strong background in microservices architecture, event-driven systems, and
            cloud-native development with hands-on AWS experience.
          </p>
        </section>

        {/* Background */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Background</h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed text-pretty">
            <p>
              I hold a Master's degree in Software Engineering from Stevens Institute of Technology. Throughout my
              career, I've had the privilege of working with industry leaders like FedEx, Fidelity Investments,
              ThermoFisher Scientific, and PNC Financial Services, where I've contributed to mission-critical
              applications serving millions of users.
            </p>
            <p>
              I specialize in full-stack development with expertise in building scalable microservices, implementing
              CI/CD pipelines, and leveraging cloud technologies for enterprise solutions. I'm passionate about code
              quality, automation testing, and staying current with emerging technologies. Currently, I'm actively
              exploring AI and Large Language Model technologies including AWS Bedrock, SageMaker, and Generative AI
              applications.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <h3 className="mb-4 text-lg font-semibold">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-semibold">Tools & Monitoring</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 md:col-span-2 lg:col-span-1">
              <h3 className="mb-4 text-lg font-semibold">Testing</h3>
              <div className="flex flex-wrap gap-2">
                {skills.testing.map((skill) => (
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
                    <span className="text-muted-foreground text-sm">{job.period}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {job.logo ? (
                      <div className="relative h-6 w-6 flex-shrink-0">
                        <Image src={job.logo} alt={`${job.company} logo`} fill className="object-contain" />
                      </div>
                    ) : (
                      <Building2 className="text-muted-foreground h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-muted-foreground font-medium">{job.company}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{job.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <Card className="p-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">Master of Science in Software Engineering</h3>
                <span className="text-muted-foreground text-sm">2016 - 2017</span>
              </div>
              <p className="text-muted-foreground font-medium">Stevens Institute of Technology</p>
              <p className="text-muted-foreground text-sm">Hoboken, New Jersey</p>
            </div>
          </Card>
        </section>

        {/* Certifications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src="/AWS_Cloud_Practictioner.png"
                    alt="AWS Certified Cloud Practitioner"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">AWS Certified Cloud Practitioner</h3>
                  <p className="text-muted-foreground text-sm">Amazon Web Services</p>
                  <Badge variant="secondary" className="mt-2">
                    Cloud Foundations
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src="/AWS_AI_Practictioner.png"
                    alt="AWS Certified AI Practitioner"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">AWS Certified AI Practitioner</h3>
                  <p className="text-muted-foreground text-sm">Amazon Web Services</p>
                  <Badge variant="secondary" className="mt-2">
                    Artificial Intelligence
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
