export interface TeamMember {
      id: string
      name: string
      role: string
      bio: string
      image_url: string
      skills: string[]
      social_github?: string
      social_linkedin?: string
      social_twitter?: string
      location: string
      experience: string
      join_date: string
      email: string
      phone: string
      created_at: string
      updated_at: string
}

export interface Project {
      id: string
      title: string
      description: string
      image_url: string
      category: string
      tech_stack: string[]
      year: string
      featured: boolean
      created_at: string
      updated_at: string
}

export interface User {
      id: string
      email: string
      role: "admin" | "user"
      created_at: string
}