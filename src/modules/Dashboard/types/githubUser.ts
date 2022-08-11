export interface User {
  loading?: boolean
  error?: string
  data: {
    user: {
      id: string
      avatarUrl: string
      name: string
      bio: string
      company: string
      location: string
      websiteUrl: string
      login: string
      pinnedItems: {
        edges: {
          node: Repository
        }[]
      }
      repositories: {
        edges: {
          node: Repository
        }[]
      }
    }
  }
}

export interface Repository {
  id: string
  name: string
  description: string
  url: string
  createdAt: Date
  languages: {
    edges: {
      node: Language
    }[]
  }
}

export interface Language {
  id: string
  name: string
  color: string
}
