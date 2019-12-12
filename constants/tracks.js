export type TrackId = 'KEEP_PROMISES' | 'MEET_DEADLINES' | 'ON_TIME' | 'DEPENDABLE' |
  'CONTENT_EXPERTISE' | 'PASSION' | 'CHALLENGE_CUSTOMERS' | 'HUMILITY' |
  'ACCEPTANCE' | 'OPENNESS' | 'EMOTIONAL_HONESTY' | 'AUTHENTICITY' |
  'FOCUSSING_ON_OTHERS' | 'LISTENING' | 'COMPASSION' | 'COLLABORATION'
  
export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  summary: string,
  examples: string[]
}

type Tracks = {|
  'KEEP_PROMISES': Track,
  'MEET_DEADLINES': Track,
  'ON_TIME': Track,
  'DEPENDABLE': Track,
  'CONTENT_EXPERTISE': Track,
  'PASSION': Track,
  'CHALLENGE_CUSTOMERS': Track,
  'HUMILITY': Track,
  'ACCEPTANCE': Track,
  'OPENNESS': Track,
  'EMOTIONAL_HONESTY': Track,
  'AUTHENTICITY': Track,
  'FOCUSSING_ON_OTHERS': Track,
  'LISTENING': Track,
  'COMPASSION': Track,
  'COLLABORATION': Track
|}

export const tracks: Tracks = {
  "KEEP_PROMISES": {
    "displayName": "Keep Promises",
    "category": "A",
    "description": "Do what you said you would do",
    "summary": "Do what you said you would do. Do not forget, get sidetracked or lose enthusiasm when you realise that keeping your word is harder than expected.",
    "examples": [
      "When assigned a task difficult to complete, communicate challenges and engage others when needed",
      "Follow through with what you said you would do despite facing challenges",
    ]
  },

  "MEET_DEADLINES": {
    "displayName": "Meet Deadlines",
    "category": "A",
    "description": "Commits realistic timelines for deliverables and sticks to them",
    "summary": "",
    "examples": []
  },

  "ON_TIME": {
    "displayName": "Be on Time",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "summary": "",
    "examples": []
  },

  "DEPENDABLE": {
    "displayName": "Dependability",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "summary": "",
    "examples": []
  },

  "CONTENT_EXPERTISE": {
    "displayName": "Context expertise",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "summary": "",
    "examples": []
  },

  "PASSION": {
    "displayName": "Passion",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "summary": "",
    "examples": []
  },

  "CHALLENGE_CUSTOMERS": {
    "displayName": "Challenge Customers",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "summary": "",
    "examples": []
  },

  "HUMILITY": {
    "displayName": "Humility",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "summary": "",
    "examples": []
  },

  "ACCEPTANCE": {
    "displayName": "Acceptance",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "summary": "",
    "examples": []
  },

  "OPENNESS": {
    "displayName": "Openness",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "summary": "",
    "examples": []
  },

  "EMOTIONAL_HONESTY": {
    "displayName": "Emotional Honesty",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "summary": "",
    "examples": []
  },

  "AUTHENTICITY": {
    "displayName": "Authenticity",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "summary": "",
    "examples": []
  },

  "FOCUSSING_ON_OTHERS": {
    "displayName": "Focussing on others",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "summary": "",
    "examples": []
  },

  "LISTENING": {
    "displayName": "Listening",
    "category": "D",
    "description": "Listen without interrupting or jumping to conclusions",
    "summary": "Truly listen to a person without interrupting, finishing sentences or jumping quickly to conclusions",
    "examples": []
  },

  "COMPASSION": {
    "displayName": "Care and compassion",
    "category": "D",
    "description": "Care about others and show you care",
    "summary": "Genuinely care about the well-being of others around you and show that you care",
    "examples": []
  },

  "COLLABORATION": {
    "displayName": "Collaboration",
    "category": "D",
    "description": "Be collaborative rather than competitive with others",
    "summary": "Be collaborative rather than competitive with others; keep common goals in perspective",
    "examples": []
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)
