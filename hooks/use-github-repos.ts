"use client"

import { useState, useEffect } from "react"

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  size: number
  open_issues_count: number
}

export function useGitHubRepos(username: string, limit: number = 5) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`
        )
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        
        const allRepos: GitHubRepo[] = await response.json()
        
        // Filter out forks and get the most recently updated repos
        const ownRepos = allRepos
          .filter(repo => !repo.name.includes('.github.io'))
          .filter(repo => repo.description !== null)
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
          .slice(0, limit)
        
        setRepos(ownRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories')
        console.error('Error fetching GitHub repos:', err)
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchRepos()
    }
  }, [username, limit])

  return { repos, loading, error }
}
