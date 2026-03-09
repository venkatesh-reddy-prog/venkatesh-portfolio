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
      "Developed RESTful APIs using Java & Spring Boot, improving service response time by ~30% through query optimization and caching strategies.",
      "Automated CI/CD pipelines using Jenkins & Docker following 12-factor app principles, accelerating release cycles across dev and staging.",
      "Monitored application health using Kubernetes and cloud observability tools; designed microservices for horizontal scalability with stateless request handling.",
      "Wrote unit and integration tests using JUnit & Mockito, achieving 85%+ code coverage measured via JaCoCo reports in Jenkins pipeline.",
      "Contributed to 3+ production releases in an Agile/Scrum team, participating in code reviews and architecture discussions.",
      "Consumed APIs on a React-based internal dashboard managing CORS, JWT token refresh, and Axios interceptors.",
    ],
    tags: ["Java", "Spring Boot", "Jenkins", "Docker", "Kubernetes", "JUnit", "React", "JWT", "Redis"],
  },
  {
    company: "SRM University AP",
    role: "Research Assistant",
    sub: "AI & ML Department",
    date: "Aug 2023 – May 2025",
    location: "Amaravati, AP",
    bullets: [
      "Assisted faculty in IoT security and 5G research; contributed to published chapter in Handbook of Research on Network-Enabled IoT Applications.",
      "Supported patent filing and documentation for image retrieval research (Patent No. 565143), coordinating technical write-ups and prior art analysis.",
      "Served as Teaching Assistant for DSA and DBMS courses — conducted tutorials, evaluated assignments, mentored undergraduates.",
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
    type: "Distributed Systems · Real-Time",
    name: "CodeCollab — Real-Time Collaborative IDE",
    desc: "A distributed collaborative code editor supporting 50+ concurrent users per room with sub-100ms synchronization using WebSocket and Redis Pub/Sub.",
    highlights: [
      "Sub-100ms real-time sync via Spring Boot WebSocket + Redis Pub/Sub",
      "Stateless microservices with JWT RBAC for high availability",
      "35% sync performance boost via diff-based broadcasting",
      "Versioned PostgreSQL schema with session replay & rollback",
      "Dockerized & deployed on AWS EC2 with Nginx reverse proxy",
    ],
    tags: ["Java", "WebSocket", "Redis", "PostgreSQL", "Docker", "AWS"],
    link: "https://github.com/venkatesh-reddy-prog/CodeCollab-Real-Time-Collaborative-Code-Editor",
  },
  {
    num: "02",
    type: "AI · Semantic Search · RAG",
    name: "Enterprise Knowledge Assistant",
    desc: "Enterprise-grade AI semantic search platform enabling vector-based document retrieval using RAG architecture, OpenAI, and Pinecone vector database.",
    highlights: [
      "Vector-based similarity search with Pinecone for semantic retrieval",
      "Spring Boot + FastAPI microservices for ingestion & querying",
      "Async document processing with embedding pipelines",
      "OpenAI integration with secure config management",
      "Multi-service Docker architecture for reproducible deployments",
    ],
    tags: ["OpenAI", "Pinecone", "FastAPI", "Spring Boot", "RAG", "Docker"],
    link: "https://github.com/venkatesh-reddy-prog/enterprise-knowledge-assistant",
  },
  {
    num: "03",
    type: "DevOps · Infrastructure",
    name: "CI/CD Automation Scripts",
    desc: "A collection of Python utilities and Jenkinsfile pipeline examples for automating core DevOps tasks including YAML configuration and deployment management.",
    highlights: [
      "Non-destructive YAML configuration updates and diffing",
      "Automated Jenkins pipeline integration",
      "Reusable scripts for multi-environment deployments",
    ],
    tags: ["Python", "Jenkins", "YAML", "DevOps"],
    link: "https://github.com/venkatesh-reddy-prog/CI-CD-Automation-Scripts",
  },
  {
    num: "04",
    type: "Infrastructure as Code",
    name: "Template Repository — IaC & Deployment",
    desc: "A reusable IaC template establishing a standardized structure for configuration, deployment manifests, and Git submodules for rapid project bootstrapping.",
    highlights: [
      "Standardized structure for IaC project scaffolding",
      "Git submodule management for modular teams",
      "Deployment manifest organization and versioning",
    ],
    tags: ["IaC", "Git", "DevOps", "Templates"],
    link: "https://github.com/venkatesh-reddy-prog/Template_Repository-IaC-and-Deployment-Structure",
  },
  {
    num: "05",
    type: "Systems · Networking",
    name: "Multithreaded Proxy Server",
    desc: "A Python implementation of a multithreaded proxy server and client with concurrent threading for high-throughput URL content fetching.",
    highlights: [
      "Concurrent threading for simultaneous client handling",
      "Dynamic URL content fetching and local caching",
      "Demonstrates OS-level concurrency and networking concepts",
    ],
    tags: ["Python", "Threading", "Networking", "OS Concepts"],
    link: "https://github.com/venkatesh-reddy-prog/OS_Project_Multithread_Client_Server",
  },
  {
    num: "06",
    type: "Data Science · ML",
    name: "Employee Burnout Predictor",
    desc: "A data science project predicting employee burnout using multiple ML models — Random Forest, Logistic Regression, and Linear Regression — for enterprise HR insights.",
    highlights: [
      "Multi-model comparison: RF vs LR vs Linear Regression",
      "Feature engineering and full EDA pipeline",
      "Business-oriented predictive insights for HR teams",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "Jupyter", "ML"],
    link: "https://github.com/venkatesh-reddy-prog/EDUNET-Project",
  },
];
export const skills = {
  Backend: {
    icon: "⚙",
    groups: [
      {
        title: "Programming Languages",
        items: [
          { name: "Java", level: "expert" },
          { name: "Python", level: "proficient" },
          { name: "JavaScript", level: "proficient" },
          { name: "SQL", level: "proficient" }
        ],
      },
      {
        title: "Frameworks",
        items: [
          { name: "Spring Boot", level: "expert" },
          { name: "Spring MVC", level: "expert" },
          { name: "Spring Security", level: "expert" },
          { name: "Hibernate / JPA", level: "proficient" },
          { name: "FastAPI", level: "proficient" }
        ],
      },
      {
        title: "API & Architecture",
        items: [
          { name: "RESTful APIs", level: "expert" },
          { name: "Microservices", level: "expert" },
          { name: "WebSocket", level: "proficient" },
          { name: "JWT Authentication", level: "expert" },
          { name: "OAuth2", level: "proficient" }
        ],
      },
      {
        title: "Testing",
        items: [
          { name: "JUnit", level: "expert" },
          { name: "Mockito", level: "expert" },
          { name: "Integration Testing", level: "proficient" },
          { name: "JaCoCo", level: "proficient" }
        ],
      },
    ],
  },

  Frontend: {
    icon: "🎨",
    groups: [
      {
        title: "Core",
        items: [
          { name: "HTML5", level: "proficient" },
          { name: "CSS3", level: "proficient" },
          { name: "JavaScript ES6+", level: "proficient" }
        ],
      },
      {
        title: "Libraries",
        items: [
          { name: "React.js", level: "proficient" },
          { name: "React Hooks", level: "proficient" },
          { name: "Axios", level: "proficient" },
          { name: "Tailwind CSS", level: "proficient" }
        ],
      },
    ],
  },

  Databases: {
    icon: "🗄",
    groups: [
      {
        title: "Relational Databases",
        items: [
          { name: "PostgreSQL", level: "expert" },
          { name: "MySQL", level: "expert" },
          { name: "Schema Design", level: "proficient" },
          { name: "Query Optimization", level: "proficient" }
        ],
      },
      {
        title: "NoSQL & Cache",
        items: [
          { name: "Redis", level: "expert" },
          { name: "MongoDB", level: "proficient" }
        ],
      },
      {
        title: "Vector Databases",
        items: [
          { name: "Pinecone", level: "proficient" },
          { name: "Vector Embeddings", level: "proficient" }
        ],
      },
    ],
  },

  "DevOps & Cloud": {
    icon: "☁",
    groups: [
      {
        title: "Containers & Deployment",
        items: [
          { name: "Docker", level: "expert" },
          { name: "Docker Compose", level: "proficient" },
          { name: "Kubernetes", level: "proficient" },
          { name: "Nginx", level: "proficient" }
        ],
      },
      {
        title: "CI/CD",
        items: [
          { name: "Jenkins", level: "expert" },
          { name: "GitHub Actions", level: "proficient" },
          { name: "CI/CD Pipelines", level: "proficient" }
        ],
      },
      {
        title: "AWS",
        items: [
          { name: "EC2", level: "proficient" },
          { name: "S3", level: "proficient" },
          { name: "CloudWatch", level: "familiar" }
        ],
      },
      {
        title: "Version Control",
        items: [
          { name: "Git", level: "expert" },
          { name: "GitHub", level: "expert" },
          { name: "Linux / Bash", level: "proficient" }
        ],
      },
    ],
  },

  "AI & ML": {
    icon: "🧠",
    groups: [
      {
        title: "AI Systems",
        items: [
          { name: "RAG", level: "proficient" },
          { name: "Semantic Search", level: "proficient" },
          { name: "Vector Embeddings", level: "proficient" },
          { name: "Prompt Engineering", level: "proficient" }
        ],
      },
      {
        title: "Frameworks",
        items: [
          { name: "OpenAI API", level: "proficient" },
          { name: "LangChain", level: "proficient" },
          { name: "FastAPI (ML Serving)", level: "proficient" }
        ],
      },
      {
        title: "ML Tools",
        items: [
          { name: "Scikit-learn", level: "proficient" },
          { name: "Pandas", level: "proficient" },
          { name: "NumPy", level: "proficient" }
        ],
      },
    ],
  },

  Architecture: {
    icon: "🏗",
    groups: [
      {
        title: "System Design",
        items: [
          { name: "Microservices Architecture", level: "expert" },
          { name: "Distributed Systems", level: "expert" },
          { name: "SOLID Principles", level: "expert" },
          { name: "Design Patterns", level: "proficient" }
        ],
      },
      {
        title: "Scalability",
        items: [
          { name: "Horizontal Scaling", level: "expert" },
          { name: "Caching Strategies", level: "expert" },
          { name: "Load Balancing", level: "proficient" }
        ],
      },
    ],
  },

  Tools: {
    icon: "🛠",
    groups: [
      {
        title: "Development Tools",
        items: [
          { name: "IntelliJ IDEA", level: "expert" },
          { name: "VS Code", level: "proficient" },
          { name: "Postman", level: "expert" },
          { name: "Swagger / OpenAPI", level: "proficient" }
        ],
      },
      {
        title: "Collaboration",
        items: [
          { name: "Jira", level: "proficient" },
          { name: "Confluence", level: "proficient" },
          { name: "Slack", level: "proficient" }
        ],
      },
    ],
  },
};

export const proficiencyBars = [
  { label: "Java & Spring Boot", pct: 95 },
  { label: "Distributed Systems", pct: 90 },
  { label: "REST API Design", pct: 93 },
  { label: "Docker & Kubernetes", pct: 87 },
  { label: "AWS Cloud", pct: 78 },
  { label: "RAG & Vector Search", pct: 85 },
  { label: "React.js Frontend", pct: 75 },
  { label: "ML / Data Science", pct: 72 },
];

export const achievements = [
  {
    icon: "🏛",
    type: "Indian Patent — Granted",
    title: "Performance Analysis of Image Retrieval Using Quantized Color Histogram Bins",
    desc: "Patent No. 565143 — Granted by the Indian Patent Office. Research on optimizing image retrieval performance using quantized color histogram techniques.",
  },
  {
    icon: "📖",
    type: "Research Publication",
    title: "5G-Enabled Secure IoT Applications in Smart Cities",
    desc: "Published in the Handbook of Research on Network-Enabled IoT Applications for Smart City Services. Explores security frameworks for 5G-connected IoT deployments.",
  },
  {
    icon: "☁",
    type: "AWS Certification",
    title: "AWS Certified Cloud Practitioner",
    desc: "Certified by Amazon Web Services in 2025. Demonstrates foundational understanding of AWS cloud infrastructure, services, and best practices.",
  },
  {
    icon: "⚡",
    type: "HackerRank Certifications",
    title: "5× HackerRank Role & Skill Certifications",
    desc: "Software Engineer (Role), SWE Intern (Role), REST API (Intermediate), SQL (Basic), Java (Basic), React (Basic) — all certified in 2025.",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    handle: "@Venkatesh070",
    color: "#ffa116",
    stats: [
      { label: "Focus", value: "DSA & Algorithms" },
      { label: "Strengths", value: "Trees, DP, Graphs" },
    ],
    link: "https://leetcode.com/u/Venkatesh070/",
  },
  {
    platform: "HackerRank",
    handle: "@bvenkateshreddy2",
    color: "#2ec866",
    stats: [
      { label: "Role Cert", value: "Software Engineer" },
      { label: "Skills", value: "Java, REST, SQL, React" },
    ],
    link: "https://www.hackerrank.com/profile/bvenkateshreddy2",
  },
  {
    platform: "CodeChef",
    handle: "@gleam_vine_76",
    color: "#9c7c52",
    stats: [
      { label: "Focus", value: "Competitive Programming" },
      { label: "Contests", value: "Long Challenges" },
    ],
    link: "https://www.codechef.com/users/gleam_vine_76",
  },
  {
    platform: "GitHub",
    handle: "@venkatesh-reddy-prog",
    color: "#e8e8f0",
    stats: [
      { label: "Repos", value: "12 Public" },
      { label: "Focus", value: "Backend & DevOps" },
    ],
    link: "https://github.com/venkatesh-reddy-prog",
  },
];
