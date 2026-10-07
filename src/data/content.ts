export const PROFILE = {
  name: "Abdullah Al Jehan",
  shortName: "Jehan",
  handle: "abdullahaljehan-me",
  tagline: "Embedded Systems · IoT · C · Linux",
  roles: [
    "Aspiring Embedded Engineer",
    "C / C++ Systems Programmer",
    "Linux Daily-Driver",
    "IoT & Robotics Explorer",
    "Founding Advisor @ Kynatium Labs",
  ],
  location: "Dhaka, Bangladesh",
  coordinates: "23.8103°N · 90.4125°E",
  timezone: "Asia/Dhaka (GMT+6)",
  email: "abdullahaljehan.me@gmail.com",
  resumeUrl:
    "https://github.com/abdullahaljehan-me/portfolio/raw/main/assets/resume.pdf",
  availability: "Open to research & collaboration",
  avatar: "/assets/profile.jpg",
  bio: [
    "Hi, I'm Jehan — an ambitious science student with a rock-solid foundation in mathematics and physics, currently gearing up for a career in engineering. I'm passionate about bridging the gap between theory and practice, with a deep dive into embedded systems, IoT, and programming.",
    "I believe the best engineering happens where code meets the physical world. My approach is highly analytical, fueled by mathematics and physics, and grounded in a learn-by-doing philosophy — building, breaking, and iterating until the system is robust.",
    "Currently, I'm proud to be a Founding Advisor at Kynatium Labs, where we're on a mission to make technology fundamentals and embedded-systems education accessible to students across Bangladesh.",
  ],
  vision:
    "My long-term vision: contribute to cutting-edge research in smart systems and robotics, pursue graduate studies abroad, and build with top-tier tech innovators. Every project starts with the same mindset — build, break, iterate.",
};

export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/abdullahaljehan-me",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-al-jehan",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/abdullah.al.jehan.zim",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/abdullahaljehan.me",
    icon: "instagram",
  },
  {
    label: "Discord",
    href: "https://discord.com/users/1007330418598625281",
    icon: "discord",
  },
  { label: "WhatsApp", href: "https://wa.link/26liq0", icon: "whatsapp" },
] as const;

export const HERO_STATS = [
  { value: "14", label: "public repos" },
  { value: "213", label: "commits / yr" },
  { value: "2×", label: "GPA 5.00 / 5.00" },
  { value: "01", label: "org co-advised" },
];

export const SKILL_MARQUEE = [
  "C",
  "C++",
  "Embedded Systems",
  "IoT",
  "Arduino",
  "Linux",
  "Bash",
  "Git & GitHub",
  "Sensor Integration",
  "HTML5",
  "CSS3",
  "OOP",
  "Robotics",
  "Hardware-Software Integration",
  "VS Code",
];

export const SKILL_GROUPS = [
  {
    title: "Languages & Web",
    icon: "code",
    skills: [
      { name: "C Language (Fundamentals & Files)", level: 80 },
      { name: "HTML5 & CSS3", level: 65 },
      { name: "C++ Fundamentals", level: 25 },
    ],
  },
  {
    title: "Systems & Tools",
    icon: "terminal",
    skills: [
      { name: "Git, GitHub & VS Code", level: 65 },
      { name: "Linux (Debian / Ubuntu)", level: 55 },
      { name: "Bash & Shell Scripting", level: 45 },
    ],
  },
  {
    title: "Embedded & IoT",
    icon: "chip",
    skills: [
      { name: "Arduino & Microcontroller Basics", level: 45 },
      { name: "Sensor Integration", level: 25 },
      { name: "Hardware-Software Integration", level: 25 },
    ],
  },
];

export const STACK_YAML = `# ~/stack.yaml — declared, not decorated
identity:
  name: Abdullah Al Jehan
  base: Dhaka, Bangladesh
  mode: learn_by_doing   # build → break → iterate

languages:   [c, c++ (learning), html5, css3]
systems:     [linux (debian/ubuntu), bash, git]
embedded:    [arduino, microcontrollers, sensors]
tooling:     [vs-code, github, cli-everything]

currently_learning:
  - c++ fundamentals
  - linux administration
  - embedded concepts
  - object-oriented programming

key_interests: [ai, machine-learning, robotics, automotive]`;

export const EDUCATION = [
  {
    tag: "release/2025.06",
    title: "Higher Secondary Certificate (HSC)",
    org: "Government Science College, Tejgaon · Dhaka",
    period: "Oct 2023 → Jun 2025",
    grade: "GPA 5.00 / 5.00",
    stream: "Science Stream",
  },
  {
    tag: "release/2023.05",
    title: "Secondary School Certificate (SSC)",
    org: "President Prof. Dr. Iajuddin Ahmed Residential Model School & College",
    period: "Jan 2021 → May 2023",
    grade: "GPA 5.00 / 5.00",
    stream: "Science Stream",
  },
];

export const EXPERIENCE = [
  {
    tag: "HEAD → main",
    title: "Founding Advisor",
    org: "Kynatium Labs · Dhaka, Bangladesh",
    period: "Jan 2026 → Present",
    points: [
      "Advised the founding team on strategic direction, technical roadmap, and early-stage decision-making.",
      "Reviewed technical content and embedded-systems concepts for clarity, accuracy, and feasibility.",
      "Directed beginner-focused outreach strategy and social-media positioning to expand access to technology education in Bangladesh.",
      "Supported curriculum direction, community building, and long-term growth initiatives.",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  repo: string;
  status: "shipped" | "active" | "iterating";
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Contact Management System",
    repo: "https://github.com/abdullahaljehan-me/contact-management-system-c",
    status: "shipped",
    tagline: "Menu-driven CRUD in pure C — no database, just files.",
    problem:
      "Most beginners reach for a database before understanding what persistence actually is. I wanted to prove the fundamentals first.",
    approach:
      "Structs, binary file I/O, and a clean menu loop. Records are inserted, searched, updated, and deleted straight against the file — every byte accounted for.",
    outcome:
      "A zero-dependency CLI that demonstrates data persistence and CRUD with nothing but the C standard library.",
    stack: ["C", "Binary File I/O", "CLI", "Structs"],
  },
  {
    index: "02",
    title: "Obstacle Avoiding Robot",
    repo: "https://github.com/Kynatium-Labs/workshop_obstacle_avoiding_robot",
    status: "active",
    tagline: "Autonomous navigation on an Arduino chassis.",
    problem:
      "Turn sensor noise into reliable real-time steering decisions on constrained hardware.",
    approach:
      "HC-SR04 ultrasonic sensing paired with L298N motor-driver logic; a tight read-decide-act loop written in C++ for Arduino.",
    outcome:
      "A workshop-grade robot that detects and routes around obstacles in real time — now part of the Kynatium Labs curriculum.",
    stack: ["C++", "Arduino", "HC-SR04", "L298N"],
  },
  {
    index: "03",
    title: "Arduino Workshop Curriculum",
    repo: "https://github.com/abdullahaljehan-me",
    status: "active",
    tagline: "Structured embedded courseware for absolute beginners.",
    problem:
      "Embedded education in Bangladesh often skips fundamentals and jumps to copy-paste projects.",
    approach:
      "A progressive Kynatium Labs curriculum covering I/O, PWM, sensors, and cumulative builds — each lesson shipping a working artifact.",
    outcome:
      "A repeatable workshop track that takes students from blinking an LED to integrated sensor systems.",
    stack: ["Arduino", "C/C++", "Curriculum", "Embedded"],
  },
  {
    index: "04",
    title: "Digital Clock CLI",
    repo: "https://github.com/abdullahaljehan-me/digital-clock-c",
    status: "shipped",
    tagline: "Flicker-free cross-platform time suite in pure C.",
    problem:
      "Terminal UIs usually flicker and tear. Rendering a live clock smoothly is a real systems exercise.",
    approach:
      "Native OS APIs, buffered redraws, and drift-free timing — real-time clock, stopwatch, and alarm in one binary.",
    outcome:
      "A polished cross-platform CLI clock with zero external dependencies and zero flicker.",
    stack: ["C", "POSIX", "WinAPI", "Terminal UI"],
  },
  {
    index: "05",
    title: "Tic Tac Toe CLI",
    repo: "https://github.com/abdullahaljehan-me/tic-tac-toe-c",
    status: "shipped",
    tagline: "Two-player console game with strict input validation.",
    problem:
      "A small game is the perfect sandbox for state machines and defensive input handling.",
    approach:
      "Formatted board rendering, validated moves, and full win/draw detection over a clean game-state loop.",
    outcome: "A dependable two-player console game written in C.",
    stack: ["C", "Game Logic", "CLI"],
  },
  {
    index: "06",
    title: "Guess Number Game",
    repo: "https://github.com/abdullahaljehan-me/guess-number-c",
    status: "shipped",
    tagline: "Interactive guessing game with dynamic difficulty.",
    problem:
      "Make a trivial concept feel alive — feedback, pacing, and difficulty that adapts.",
    approach:
      "Dynamic difficulty scaling with forgiving mechanics and playful terminal feedback.",
    outcome: "A small but genuinely fun CLI game, written in C.",
    stack: ["C", "CLI", "UX"],
  },
];

export const RESEARCH_DIRECTIONS = [
  {
    id: "dir_01",
    area: "Embedded ML / TinyML",
    status: "exploring",
    note: "Running inference on microcontrollers — where machine learning meets milliamps. Following the TinyML ecosystem and reproducing small sensor-classification demos.",
  },
  {
    id: "dir_02",
    area: "Robotics & Autonomous Systems",
    status: "exploring",
    note: "From my obstacle-avoiding build toward SLAM-curious navigation: sensor fusion, control loops, and path planning on budget hardware.",
  },
  {
    id: "dir_03",
    area: "IoT Sensor Networks",
    status: "exploring",
    note: "Reliable low-power nodes and the protocols that bind them — MQTT, ESP-class SoCs, and data pipelines from edge to dashboard.",
  },
  {
    id: "dir_04",
    area: "Automotive Embedded",
    status: "reading-list",
    note: "Fascinated by ECUs, CAN bus, and the software-defined vehicle. Currently self-studying automotive-grade embedded constraints.",
  },
];

export const WRITING = [
  {
    title: "Leveling Up My Linux Journey: From Zorin OS to Kubuntu",
    platform: "LinkedIn",
    date: "Jan 15, 2025",
    kind: "article",
    image: "/assets/blog_kubuntu.png",
    excerpt:
      "Distro-hopping with intent — what changing my daily driver taught me about desktop environments, package ecosystems, and owning my setup.",
  },
  {
    title: "From Windows to Linux: My First Steps with Zorin OS",
    platform: "LinkedIn",
    date: "Nov 20, 2024",
    kind: "article",
    image: "/assets/blog_zorinos.jpg",
    excerpt:
      "The migration notes: why I left Windows, what broke, what clicked, and why the terminal stopped being scary.",
  },
];

export const HONORS = [
  {
    category: "Academic Excellence",
    title: "Presidency University–Prothom Alo HSC GPA-5 Reception 2025",
    detail:
      "Recognized for outstanding academic achievement after earning a perfect GPA 5.00 in the HSC examinations.",
    year: "2025",
    image: "/assets/honor_prothom_alo.jpeg",
  },
  {
    category: "Academic Excellence",
    title: "Perfect GPA 5.00 — HSC & SSC",
    detail:
      "Back-to-back perfect scores in both national board examinations, science stream.",
    year: "2023 · 2025",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Embedded Systems Fundamentals",
    org: "Self-paced / Online",
    status: "in progress",
  },
  {
    title: "Linux Administration Basics",
    org: "Self-paced / Online",
    status: "in progress",
  },
];

export const INTERESTS = [
  {
    title: "Mathematics",
    body: "The language underneath everything I build. Proofs trained my reasoning; problem sets trained my patience. Engineering is just math that learned to touch the world.",
  },
  {
    title: "Physics",
    body: "From circuits to mechanics — physics is why a sensor reads what it reads. It's the bridge between an equation on paper and a voltage on a pin.",
  },
  {
    title: "Robotics",
    body: "The discipline where software finally gets a body. Control loops, actuators, and the deeply satisfying moment when code moves matter.",
  },
  {
    title: "Automotive Engineering",
    body: "Modern cars are data centers on wheels. ECUs, CAN buses, and real-time constraints — automotive embedded is where I want to end up.",
  },
  {
    title: "Linux & Open Source",
    body: "I daily-drive Linux and believe in learning in public. Open source taught me more than any course — reading real code, written by real engineers.",
  },
  {
    title: "Teaching & Community",
    body: "Through Kynatium Labs I help make embedded education accessible across Bangladesh. Explaining something well is the final test of understanding it.",
  },
];

export const NAV_LINKS = [
  { label: "whoami", href: "#about" },
  { label: "stack", href: "#stack" },
  { label: "journey", href: "#journey" },
  { label: "projects", href: "#projects" },
  { label: "research", href: "#research" },
  { label: "writing", href: "#writing" },
  { label: "interests", href: "#interests" },
  { label: "contact", href: "#contact" },
];
