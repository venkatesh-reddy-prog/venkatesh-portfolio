export const personalInfo = {
  name: "B. Venkatesh Reddy",
  title: "Software Engineer",
  tagline: "Building distributed systems that scale. Crafting backend architectures that endure.",
  location: "Bengaluru, India",
  email: "bvenkateshreddy87@gmail.com",
  phone: "+91 98321 20176",
  github: "https://github.com/venkatesh-reddy-prog",
  linkedin: "https://www.linkedin.com/in/venkateshy-reddy",
  leetcode: "https://leetcode.com/u/Venkatesh070/",
  hackerrank: "https://www.hackerrank.com/profile/bvenkateshreddy2",
  codechef: "https://www.codechef.com/users/gleam_vine_76",
  status: "Open to SDE / Backend Engineer Roles",
  stats: [
    { num: "10", unit: "mo", label: "@ SAP Labs" },
    { num: "8.96", unit: "/10", label: "B.Tech CGPA" },
    { num: "85", unit: "%+", label: "Test Coverage" },
    { num: "30", unit: "%", label: "API Perf Boost" },
  ],
};

export const experiences = [
  {
    company: "SAP Labs India",
    role: "Software Engineering Intern",
    sub: "Backend & DevOps",
    date: "Aug 2024 – Jun 2025",
    location: "Bengaluru, India",
    bullets: [
      "Developed RESTful APIs using Java & Spring Boot, improving service response time by ~30%.",
      "Automated CI/CD pipelines using Jenkins & Docker following 12-factor app principles.",
      "Monitored application health using Kubernetes and cloud observability tools.",
      "Wrote unit and integration tests using JUnit & Mockito achieving 85%+ coverage.",
      "Contributed to production releases in an Agile/Scrum team.",
      "Consumed APIs on React dashboards managing CORS, JWT token refresh and interceptors."
    ],
    tags: ["Java", "Spring Boot", "Jenkins", "Docker", "Kubernetes", "JUnit", "React"],
  },
  {
    company: "SRM University AP",
    role: "Research Assistant",
    sub: "AI & ML Department",
    date: "Aug 2023 – May 2025",
    location: "Amaravati, AP",
    bullets: [
      "Worked on IoT security and 5G research contributing to academic publication.",
      "Supported patent filing and technical documentation.",
      "Teaching Assistant for DSA and DBMS mentoring undergraduate students."
    ],
    tags: ["AI/ML", "IoT Security", "5G", "Research", "DSA", "DBMS"],
  },
];

export const education = [
  {
    degree: "Master of Technology",
    field: "Artificial Intelligence & Machine Learning",
    school: "SRM University Amaravati, AP",
    cgpa: "8.68 / 10",
    duration: "Jul '23 – Sep '25",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    school: "SRM University Amaravati, AP",
    cgpa: "8.96 / 10",
    duration: "Jul '19 – May '23",
  },
];

export const projects = [
  {
    num: "01",
    type: "Distributed Systems",
    name: "CodeCollab — Real-Time Collaborative IDE",
    desc: "Real-time collaborative editor supporting 50+ concurrent users.",
    highlights: [
      "Sub-100ms sync via WebSocket + Redis Pub/Sub",
      "JWT RBAC authentication",
      "Docker deployment on AWS EC2"
    ],
    tags: ["Java", "WebSocket", "Redis", "PostgreSQL", "Docker", "AWS"],
    link: "https://github.com/venkatesh-reddy-prog/CodeCollab-Real-Time-Collaborative-Code-Editor",
  },
  {
    num: "02",
    type: "AI · RAG",
    name: "Enterprise Knowledge Assistant",
    desc: "Semantic search system using RAG architecture.",
    highlights: [
      "Vector search with Pinecone",
      "Spring Boot + FastAPI microservices",
      "Dockerized architecture"
    ],
    tags: ["OpenAI", "Pinecone", "FastAPI", "Spring Boot", "Docker"],
    link: "https://github.com/venkatesh-reddy-prog/enterprise-knowledge-assistant",
  },
  {
    num: "03",
    type: "DevOps",
    name: "CI/CD Automation Scripts",
    desc: "Python utilities for automating deployment pipelines.",
    highlights: [
      "Automated Jenkins pipelines",
      "Reusable configuration scripts"
    ],
    tags: ["Python", "Jenkins", "DevOps"],
    link: "https://github.com/venkatesh-reddy-prog/CI-CD-Automation-Scripts",
  },
];

export const skills = {
  Backend: {
    icon: "⚙",
    groups: [
      {
        title: "Languages",
        items: [
          { name: "Java", level: "expert" },
          { name: "Python", level: "proficient" },
          { name: "JavaScript", level: "proficient" },
          { name: "SQL", level: "proficient" }
        ]
      },
      {
        title: "Frameworks",
        items: [
          { name: "Spring Boot", level: "expert" },
          { name: "Spring MVC", level: "expert" },
          { name: "Spring Security", level: "expert" },
          { name: "Hibernate / JPA", level: "proficient" }
        ]
      },
      {
        title: "API Development",
        items: [
          { name: "REST APIs", level: "expert" },
          { name: "Microservices", level: "expert" },
          { name: "JWT Authentication", level: "expert" },
          { name: "WebSocket", level: "proficient" }
        ]
      }
    ]
  },

  Databases: {
    icon: "🗄",
    groups: [
      {
        title: "Databases",
        items: [
          { name: "PostgreSQL", level: "expert" },
          { name: "MySQL", level: "expert" },
          { name: "MongoDB", level: "proficient" }
        ]
      },
      {
        title: "Caching",
        items: [
          { name: "Redis", level: "expert" }
        ]
      }
    ]
  },

  DevOps: {
    icon: "☁",
    groups: [
      {
        title: "Containers",
        items: [
          { name: "Docker", level: "expert" },
          { name: "Kubernetes", level: "proficient" }
        ]
      },
      {
        title: "CI/CD",
        items: [
          { name: "Jenkins", level: "expert" },
          { name: "GitHub Actions", level: "proficient" }
        ]
      },
      {
        title: "Cloud",
        items: [
          { name: "AWS EC2", level: "proficient" },
          { name: "AWS S3", level: "proficient" }
        ]
      }
    ]
  },

  Tools: {
    icon: "🛠",
    groups: [
      {
        title: "Development Tools",
        items: [
          { name: "Git", level: "expert" },
          { name: "GitHub", level: "expert" },
          { name: "Postman", level: "expert" },
          { name: "Swagger / OpenAPI", level: "proficient" }
        ]
      }
    ]
  }
};

export const proficiencyBars = [
  { label: "Java & Spring Boot", pct: 95 },
  { label: "Distributed Systems", pct: 90 },
  { label: "REST API Design", pct: 92 },
  { label: "Docker & Kubernetes", pct: 85 },
  { label: "AWS Cloud", pct: 80 },
  { label: "React Frontend", pct: 75 },
];

export const achievements = [
  {
    icon: "🏛",
    type: "Indian Patent",
    title: "Performance Analysis of Image Retrieval Using Quantized Color Histogram Bins",
    desc: "Patent No. 565143 granted by Indian Patent Office.",
  },
  {
    icon: "📖",
    type: "Research Publication",
    title: "5G-Enabled Secure IoT Applications in Smart Cities",
    desc: "Published research on secure IoT frameworks."
  },
  {
    icon: "☁",
    type: "AWS Certification",
    title: "AWS Certified Cloud Practitioner",
    desc: "Certified by Amazon Web Services."
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "@Venkatesh070",
    color: "#ffa116",
    link: "https://leetcode.com/u/Venkatesh070/",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "Contest Rating", value: "1500+" },
    ],
  },
  {
    platform: "HackerRank",
    handle: "@bvenkateshreddy2",
    color: "#2ec866",
    link: "https://www.hackerrank.com/profile/bvenkateshreddy2",
    stats: [
      { label: "Badges", value: "5★ Java" },
      { label: "Certifications", value: "2" },
    ],
  },
  {
    platform: "GitHub",
    handle: "@venkatesh-reddy-prog",
    color: "#e8e8f0",
    link: "https://github.com/venkatesh-reddy-prog",
    stats: [
      { label: "Repositories", value: "20+" },
      { label: "Contributions", value: "500+" },
    ],
  },
];