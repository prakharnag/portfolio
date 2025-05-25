export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Advanced', icon: '/assets/icons/react.png' },
      { name: 'TypeScript', level: 'Advanced', icon: '/assets/icons/typescript.png' },
      { name: 'Next.js', level: 'Advanced', icon: '/assets/icons/nextjs.png' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: '/assets/icons/tailwind.png' },
      { name: 'HTML/CSS', level: 'Advanced', icon: '/assets/icons/html.png' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: '/assets/icons/nodejs.png' },
      { name: 'Python', level: 'Advanced', icon: '/assets/icons/python.png' },
      { name: 'SQL', level: 'Advanced', icon: '/assets/icons/sql.png' },
      { name: 'REST APIs', level: 'Advanced', icon: '/assets/icons/api.png' },
      { name: 'GraphQL', level: 'Intermediate', icon: '/assets/icons/graphql.png' }
    ]
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', level: 'Intermediate', icon: '/assets/icons/react-native.png' },
      { name: 'Flutter', level: 'Intermediate', icon: '/assets/icons/flutter.png' }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced', icon: '/assets/icons/git.png' },
      { name: 'Docker', level: 'Intermediate', icon: '/assets/icons/docker.png' },
      { name: 'AWS', level: 'Intermediate', icon: '/assets/icons/aws.png' },
      { name: 'CI/CD', level: 'Intermediate', icon: '/assets/icons/cicd.png' },
      { name: 'Agile/Scrum', level: 'Advanced', icon: '/assets/icons/agile.png' }
    ]
  }
];

export const projects = [
  {
    title: 'Portfolio Website',
    description: 'A Windows 98-themed portfolio website built with Next.js and TypeScript',
    image: '/assets/images/portfolio.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    achievements: ['Modern UI with retro aesthetics', 'AI-powered chat interface'],
    github: 'https://github.com/prakharnag/prakharnag.github.io',
    live: 'https://prakharnag.github.io'
  },
  {
    title: 'Flutter App',
    description: 'A cross-platform mobile application built with Flutter',
    image: '/assets/images/flutter.png',
    tech: ['Flutter', 'Dart', 'Firebase'],
    achievements: ['Smooth animations', 'Responsive design', 'Real-time data sync'],
    github: 'https://github.com/prakharnag/flutter-app',
    live: 'https://flutter-app.prakharnag.dev'
  }
]; 