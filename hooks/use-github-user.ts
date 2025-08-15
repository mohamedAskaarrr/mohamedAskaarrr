"use client"

import { useState, useEffect } from "react"

interface GitHubUser {
  login: string
  name: string
  bio: string | null
  avatar_url: string
  html_url: string
  blog: string | null
  location: string | null
  email: string | null
  hireable: boolean | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export function useGitHubUser(username: string) {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`)
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        
        const userData: GitHubUser = await response.json()
        setUser(userData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user data')
        console.error('Error fetching GitHub user:', err)
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchUser()
    }
  }, [username])

  return { user, loading, error }
}
