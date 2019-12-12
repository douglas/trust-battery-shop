export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
  
export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  summary: string,
  examples: string[]
}

type Tracks = {|
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Keep Promises",
    "category": "A",
    "description": "Do what you said you would do",
    "summary": "Do what you said you would do. Do not forget, get sidetracked or lose enthusiasm when you realise that keeping your word is harder than expected.",
    "examples": [
      "When assigned a task difficult to complete, communicate challenges and engage others when needed",
      "Follow through with what you said you would do despite facing challenges",
    ]
  },

  "WEB_CLIENT": {
    "displayName": "Meets Deadlines",
    "category": "A",
    "description": "Commits realistic timelines for deliverables and sticks to them",
    "summary": "",
    "examples": []
  },

  "FOUNDATIONS": {
    "displayName": "On Time",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "summary": "",
    "examples": []
  },

  "SERVERS": {
    "displayName": "Dependable",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "summary": "",
    "examples": []
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Context expertise",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "summary": "",
    "examples": []
  },

  "COMMUNICATION": {
    "displayName": "Passion",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "summary": "",
    "examples": []
  },

  "CRAFT": {
    "displayName": "Challenges Customers",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "summary": "",
    "examples": []
  },

  "INITIATIVE": {
    "displayName": "Humility",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "summary": "",
    "examples": []
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Accepting",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "summary": "",
    "examples": []
  },

  "ORG_DESIGN": {
    "displayName": "Open",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "summary": "",
    "examples": []
  },

  "WELLBEING": {
    "displayName": "Emotionally honest",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "summary": "",
    "examples": []
  },

  "ACCOMPLISHMENT": {
    "displayName": "Authenticity",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "summary": "",
    "examples": []
  },

  "MENTORSHIP": {
    "displayName": "Focuses on others",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "summary": "",
    "examples": []
  },

  "EVANGELISM": {
    "displayName": "Listens",
    "category": "D",
    "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    "summary": "",
    "examples": []
  },

  "RECRUITING": {
    "displayName": "Caring and Compassionate",
    "category": "D",
    "description": "Strengthens Medium's team by bringing in excellent staff members",
    "summary": "",
    "examples": []
  },

  "COMMUNITY": {
    "displayName": "Collaborative",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "summary": "",
    "examples": []
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)
