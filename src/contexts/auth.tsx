import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}

type AuthContextData = {
  user: User | null
  signInURL: string
  signOut: () => void
  loading: boolean
}

type AuthResponce = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

type AuthProvider = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const signInURL = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_GITHUB_CLIENT_ID
  }`

  async function signIn(githubCode: string) {
    setLoading(true)
    const response = await api.post<AuthResponce>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data

    localStorage.setItem('@dowhile:githubToken', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)

    setLoading(false)
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@dowhile:githubToken')
  }

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:githubToken')

    if(token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('profile').then(response => {
        setUser(response.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')

      window.history.pushState({}, '', urlWithoutCode)

      signIn(githubCode)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signInURL, user, signOut, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
