export const portfolioData = {
  personal: {
    name: 'Madhavi Santosh Garud',
    shortName: 'Madhavi Garud',
    initials: 'MG',
    role: 'MERN Stack Developer',
    location: 'Pune, Maharashtra',
    email: 'madhavigarud013@gmail.com',
    phone: '+91-8767706725',
    linkedin: 'https://linkedin.com/in/madhavi-garud',
    github: 'https://github.com/madhavi584',
    leetcode: 'https://leetcode.com/u/madhavigarud85',
    summary:
      "Results-driven MERN Stack Developer with hands-on internship experience building production-grade full-stack web and mobile platforms. Proficient in MongoDB, Express.js, ReactJS, Node.js, JWT authentication, RBAC, RESTful API design, and third-party integrations (Razorpay, Firebase). Currently pursuing M.Sc. Computer Science at Fergusson College, Pune.",
  },

  stats: [
    { value: 1, suffix: '+', label: 'Years Experience' },
    { value: 5, suffix: '+', label: 'Projects Built' },
    { value: 1000, suffix: '+', label: 'Users Served' },
  ],

  skills: [
    {
      category: 'Frontend',
      icon: '⚛️',
      items: [
        { name: 'ReactJS', highlight: true },
        { name: 'React Native', highlight: true },
        { name: 'HTML5', highlight: false },
        { name: 'CSS3', highlight: false },
        { name: 'JavaScript ES6+', highlight: false },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: [
        { name: 'Node.js', highlight: true },
        { name: 'Express.js', highlight: true },
        { name: 'REST APIs', highlight: false },
        { name: 'Java', highlight: false },
        { name: 'Python', highlight: false },
        { name: 'C++', highlight: false },
      ],
    },
    {
      category: 'Databases',
      icon: '🗄️',
      items: [
        { name: 'MongoDB', highlight: true },
        { name: 'Firebase Realtime DB', highlight: true },
        { name: 'NoSQL', highlight: false },
      ],
    },
    {
      category: 'Architecture & Concepts',
      icon: '🔐',
      items: [
        { name: 'JWT Auth', highlight: true },
        { name: 'RBAC', highlight: true },
        { name: 'OOP', highlight: false },
        { name: 'DSA', highlight: false },
        { name: 'Agile', highlight: false },
        { name: 'MERN Stack', highlight: false },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      items: [
        { name: 'Git & GitHub', highlight: true },
        { name: 'Firebase', highlight: true },
        { name: 'Razorpay', highlight: true },
        { name: 'Postman', highlight: false },
        { name: 'Cloudinary', highlight: false },
      ],
    },
    {
      category: 'Mobile',
      icon: '📱',
      items: [
        { name: 'React Native', highlight: true },
        { name: 'Android', highlight: false },
        { name: 'iOS', highlight: false },
        { name: 'FCM Push Notif.', highlight: false },
      ],
    },
  ],

  experience: [
    {
      title: 'MERN Stack Developer — Intern',
      company: 'AB Software Solution',
      period: 'Mar 2025 – Present',
      project: 'PINCHI – Community Support & Vendor Engagement Platform (Web + Android)',
      achievements: [
        'Built full-stack community platform using MERN Stack across web and Android platforms',
        'Designed RESTful APIs for role-based modules: Member, Vendor, Expert, Admin with JWT auth + RBAC',
        'Integrated Razorpay payment gateway for vendor subscription plans with automated invoice generation',
        'Developed Anonymous Query System with unique ID generation, expert assignment & real-time status tracking',
        'Integrated Firebase Cloud Messaging (FCM) for push and in-app notifications across platforms',
      ],
    },
  ],

  projects: [
    {
      title: 'Learning Management System',
      emoji: '📚',
      colorClass: 'lms',
      description:
        'Full-stack LMS with course creation, enrollment, content management, and student progress tracking. Implements role-based access for Admin, Instructor, and Student.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'RBAC'],
      github: 'https://github.com/madhavi584',
      live: '#',
      features: ['Course Creation', 'Student Enrollment', 'Progress Tracking', 'Role-Based Access'],
    },
    {
      title: 'Gym Tracker Mobile App',
      emoji: '🏋️',
      colorClass: 'gym',
      description:
        'Cross-platform mobile app (Android & iOS) for tracking workouts, fitness goals, and progress over time with live Firebase data synchronization.',
      tech: ['React Native', 'Firebase Auth', 'Realtime DB', 'Android', 'iOS'],
      github: 'https://github.com/madhavi584',
      live: '#',
      features: ['Workout Tracking', 'Goal Monitoring', 'Live Data Sync', 'Auth System'],
    },
    {
      title: 'Knapsack Visualization Tool',
      emoji: '🎒',
      colorClass: 'knap',
      description:
        'Interactive step-by-step visualization of the 0/1 Knapsack problem using Dynamic Programming and Greedy approaches for educational use.',
      tech: ['Python', 'DSA', 'Dynamic Programming', 'Greedy Algo'],
      github: 'https://github.com/madhavi584',
      live: '#',
      features: ['DP Visualization', 'Greedy Comparison', 'Step-by-step Mode', 'Educational UI'],
    },
  ],

  education: [
    {
      degree: 'M.Sc. Computer Science',
      school: 'Fergusson College, Pune',
      year: '2025 – 2026',
      status: 'Pursuing',
    },
    {
      degree: 'B.Sc. Computer Science',
      school: 'Yashwantrao Mohite College, Pune',
      year: '2021 – 2024',
      status: null,
    },
    {
      degree: 'HSC (12th Grade)',
      school: 'Yashwantrao Chavan College, Karad',
      year: '2019 – 2021',
      status: null,
    },
  ],

  achievements: [
    {
      icon: '⚡',
      title: 'Competitive Programmer',
      description: 'Active on LeetCode and HackerRank, consistently solving DSA problems across difficulty levels.',
    },
    {
      icon: '🏐',
      title: 'Volleyball Team Rep',
      description: 'College Volleyball Team Representative — demonstrating teamwork, leadership, and time management.',
    },
    {
      icon: '🎪',
      title: 'Event Management',
      description: "Volunteered in logistics for the college 'Maven' festival, coordinating cross-functional teams.",
    },
    {
      icon: '🤖',
      title: 'AI & Tech Workshops',
      description: 'Attended AI & Software Testing webinars to stay current with industry tools and best practices.',
    },
  ],
}
