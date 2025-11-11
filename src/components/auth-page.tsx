"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Leaf, Users, BookOpen, Sprout } from 'lucide-react'

interface AuthProps {
  onLogin: (user: any) => void
}

export default function AuthPage({ onLogin }: AuthProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    fullName: '',
    location: '',
    propertySize: '',
    mainCrops: ''
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulação de login
    setTimeout(() => {
      const mockUser = {
        id: '1',
        email: loginData.email,
        full_name: 'Usuário Demo',
        location: 'Rio Grande do Sul, BR'
      }
      onLogin(mockUser)
      setIsLoading(false)
    }, 1000)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulação de registro
    setTimeout(() => {
      const mockUser = {
        id: '1',
        email: registerData.email,
        full_name: registerData.fullName,
        location: registerData.location
      }
      onLogin(mockUser)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-green-600 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-green-800">AgroScan</h1>
          </div>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Identifique problemas em sua plantação através de fotos e receba sugestões de bioinsumos para controle sustentável
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-green-200">
            <CardHeader className="text-center">
              <Sprout className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800">Identificação Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 text-center">
                Fotografe o problema e receba identificação precisa de doenças, pragas e deficiências
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800">Bioinsumos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 text-center">
                Sugestões de controle sustentável com bioinsumos específicos para cada problema
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-green-800">Fornecedores Locais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 text-center">
                Contatos de fornecedores de bioinsumos próximos à sua propriedade
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Auth Form */}
        <Card className="max-w-md mx-auto border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Acesse sua conta</CardTitle>
            <CardDescription>
              Entre ou cadastre-se para começar a usar o AgroScan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Cadastrar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Sua senha"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input
                      id="fullName"
                      placeholder="Seu nome completo"
                      value={registerData.fullName}
                      onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">Email</Label>
                    <Input
                      id="registerEmail"
                      type="email"
                      placeholder="seu@email.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">Senha</Label>
                    <Input
                      id="registerPassword"
                      type="password"
                      placeholder="Crie uma senha"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Localização</Label>
                    <Input
                      id="location"
                      placeholder="Cidade, Estado"
                      value={registerData.location}
                      onChange={(e) => setRegisterData({...registerData, location: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertySize">Tamanho da Propriedade</Label>
                    <Input
                      id="propertySize"
                      placeholder="Ex: 50 hectares"
                      value={registerData.propertySize}
                      onChange={(e) => setRegisterData({...registerData, propertySize: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mainCrops">Principais Culturas</Label>
                    <Input
                      id="mainCrops"
                      placeholder="Ex: Soja, Milho, Trigo"
                      value={registerData.mainCrops}
                      onChange={(e) => setRegisterData({...registerData, mainCrops: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}