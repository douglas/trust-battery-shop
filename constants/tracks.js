export type TrackId = 'KEEP_PROMISES' | 'MEET_DEADLINES' | 'ON_TIME' | 'DEPENDABLE' |
  'CONTENT_EXPERTISE' | 'PASSION' | 'CHALLENGE_CUSTOMERS' | 'HUMILITY' |
  'ACCEPTANCE' | 'OPENNESS' | 'EMOTIONAL_HONESTY' | 'AUTHENTICITY' |
  'FOCUSSING_ON_OTHERS' | 'LISTENING' | 'COMPASSION' | 'COLLABORATION'
  
export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: {
    "short": string,
    "detailed": string
  },
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
    "description": {
      "short": "Do what you said you would do",
      "detailed": "Do what you said you would do. Do not forget, get sidetracked or lose enthusiasm when you realise that keeping your word is harder than expected.",
    },
    "examples": [
      "When assigned a task difficult to complete, communicate challenges and engage others when needed",
      "Follow through with what you said you would do despite facing challenges",
    ]
  },

  "MEET_DEADLINES": {
    "displayName": "Meet Deadlines",
    "category": "A",
    "description": {
      "short": "Commits realistic timelines for deliverables and sticks to them",
      "detailed": "Commit realistic timelines for deliverables and stick to them. Work proactively towards deadlines rather than chase them"
    },
    "examples": []
  },

  "ON_TIME": {
    "displayName": "Be on Time",
    "category": "A",
    "description": {
      "short": "Show up on time for meetings and commitments",
      "detailed": "Show up on time for meetings and commitments. Do not constantly rescheduling meetings after setting them up"
    },
    "examples": []
  },

  "DEPENDABLE": {
    "displayName": "Dependability",
    "category": "A",
    "description": {
      "short": "Be consistent in the quality of your work",
      "detailed": "Be consistent in the quality of your work; work with high levels of autonomy"
    },
    "examples": []
  },

  "CONTENT_EXPERTISE": {
    "displayName": "Context expertise",
    "category": "B",
    "description": {
      "short": "Possess the knowledge, skills and abilities related to your craft",
      "detailed": "Possess the knowledge, skills and abilities related to your craft"
    },
    "examples": []
  },

  "PASSION": {
    "displayName": "Passion",
    "category": "B",
    "description": {
      "short": "Bring energy and enthusiasm to your craft",
      "detailed": "The way you look, talk, talk about and embody your craft i.e. your energy and enthusiasm about the content you are sharing"
    },
    "examples": []
  },

  "CHALLENGE_CUSTOMERS": {
    "displayName": "Challenge Customers",
    "category": "B",
    "description": {
      "short": "Help others expand their consideration set",
      "detailed": "Help others think beyond what they've currently anticipated or considered. Be a devil's advocate at crucial times"
    },
    "examples": []
  },

  "HUMILITY": {
    "displayName": "Humility",
    "category": "B",
    "description": {
      "short": "Acknowledge your context gaps quickly and directly",
      "detailed": "Acknowledge your context gaps quickly and directly. Do not pretend to have information or context when you don't"
    },
    "examples": []
  },

  "ACCEPTANCE": {
    "displayName": "Acceptance",
    "category": "C",
    "description": {
      "short": "Embrace what is without resistance",
      "detailed": "Embrace what is without resistance. Be non-judgemental, curious and accepting regarding the perspectives of others",
    },
    "examples": []
  },

  "OPENNESS": {
    "displayName": "Openness",
    "category": "C",
    "description": {
      "short": "Be imaginative, curious, and open-minded",
      "detailed": "Enjoy trying new things. Be imaginative, curious, and open-minded",
    },
    "examples": []
  },

  "EMOTIONAL_HONESTY": {
    "displayName": "Emotional Honesty",
    "category": "C",
    "description": {
      "short": "Be open about what you are thinking and feeling",
      "detailed": "Be open about what you are thinking and feeling",
    },
    "examples": []
  },

  "AUTHENTICITY": {
    "displayName": "Authenticity",
    "category": "C",
    "description": {
      "short": "Do not compromise your identity or interests to be accepted by others",
      "detailed": "Do not compromise your identity or interests to be accepted others. Be true to yourself in the way you feel. Be aware of how you want to be seen.",
    },
    "examples": []
  },

  "FOCUSSING_ON_OTHERS": {
    "displayName": "Focussing on others",
    "category": "D",
    "description": {
      "short": "Have a genuine desire to understand other's perspectives",
      "detailed": "Have a genuine desire to understand other's perspectives, rather than putting your perspective first.",
    },
    "examples": []
  },

  "LISTENING": {
    "displayName": "Listening",
    "category": "D",
    "description": {
      "short": "Listen without interrupting or jumping to conclusions",
      "detailed": "Truly listen to a person without interrupting, finishing sentences or jumping quickly to conclusions"
    },
    "examples": []
  },

  "COMPASSION": {
    "displayName": "Care and compassion",
    "category": "D",
    "description": {
      "short": "Care about others and show you care",
      "detailed": "Genuinely care about the well-being of others around you and show that you care"
    },
    "examples": []
  },

  "COLLABORATION": {
    "displayName": "Collaboration",
    "category": "D",
    "description": {
      "short": "Be collaborative rather than competitive with others",
      "detailed": "Be collaborative rather than competitive with others; keep common goals in perspective"
    },
    "examples": []
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)
