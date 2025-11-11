"use client"

import { useState } from 'react'
import AuthPage from '@/components/auth-page'
import Dashboard from '@/components/dashboard'
import UploadPage from '@/components/upload-page'

type AppState = 'auth' | 'dashboard' | 'upload'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<AppState>('auth')
  const [user, setUser] = useState<any>(null)

  const handleLogin = (userData: any) => {
    setUser(userData)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentPage('auth')
  }

  const handleUpload = () => {
    setCurrentPage('upload')
  }

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard')
  }

  if (currentPage === 'auth') {
    return <AuthPage onLogin={handleLogin} />
  }

  if (currentPage === 'upload') {
    return <UploadPage user={user} onBack={handleBackToDashboard} />
  }

  return (
    <Dashboard 
      user={user} 
      onUpload={handleUpload} 
      onLogout={handleLogout} 
    />
  )
}