"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { 
  Camera, 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Leaf,
  User,
  LogOut,
  History,
  Beaker,
  Shield,
  Clock
} from 'lucide-react'
import { mockProblems, problemTypes } from '@/lib/mock-data'

interface DashboardProps {
  user: any
  onUpload: () => void
  onLogout: () => void
}

export default function Dashboard({ user, onUpload, onLogout }: DashboardProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [controlType, setControlType] = useState<'all' | 'bioinsumo' | 'quimico'>('all')

  const filteredProblems = mockProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.identified_problem?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || problem.problem_type === selectedFilter
    return matchesSearch && matchesFilter
  })

  const getProblemTypeLabel = (type: string) => {
    return problemTypes.find(pt => pt.value === type)?.label || type
  }

  const getStatusColor = (type: string) => {
    const colors = {
      plantas_daninhas: 'bg-yellow-100 text-yellow-800',
      doencas_foliares: 'bg-red-100 text-red-800',
      nematoides: 'bg-purple-100 text-purple-800',
      doencas_solo: 'bg-orange-100 text-orange-800',
      pragas: 'bg-blue-100 text-blue-800',
      deficiencia_nutricional: 'bg-green-100 text-green-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const totalBioinsumos = mockProblems.reduce((acc, problem) => 
    acc + (problem.bioinsumo_suggestions?.length || 0), 0
  )
  
  const totalQuimicos = mockProblems.reduce((acc, problem) => 
    acc + (problem.chemical_suggestions?.length || 0), 0
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white border-b border-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">AgroScan</h1>
                <p className="text-sm text-green-600">Dashboard do Produtor</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-green-700">
                <User className="h-4 w-4" />
                <span>{user.full_name}</span>
                <span className="text-green-500">•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {user.location}
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200 hover:shadow-lg transition-shadow cursor-pointer" onClick={onUpload}>
            <CardHeader className="text-center pb-4">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-3">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-green-800">Novo Diagnóstico</CardTitle>
              <CardDescription>
                Fotografe um problema e receba análise instantânea
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Iniciar Análise
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="text-center pb-4">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-3">
                <History className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-green-800">Histórico</CardTitle>
              <CardDescription>
                {mockProblems.length} problemas identificados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{mockProblems.length}</p>
                <p className="text-sm text-green-500">Diagnósticos realizados</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="text-center pb-4">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-3">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-green-800">Bioinsumos</CardTitle>
              <CardDescription>
                Soluções sustentáveis disponíveis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{totalBioinsumos}</p>
                <p className="text-sm text-green-500">Produtos catalogados</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="text-center pb-4">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-3">
                <Beaker className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle className="text-green-800">Controle Químico</CardTitle>
              <CardDescription>
                Defensivos agrícolas registrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{totalQuimicos}</p>
                <p className="text-sm text-green-500">Produtos disponíveis</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problems History */}
        <Card className="border-green-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-green-800">Histórico de Problemas</CardTitle>
                <CardDescription>
                  Seus diagnósticos e soluções aplicadas
                </CardDescription>
              </div>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-green-500" />
                    <Input
                      placeholder="Buscar por problema ou cultura..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-green-200"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={selectedFilter === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedFilter('all')}
                    className={selectedFilter === 'all' ? 'bg-green-600 hover:bg-green-700' : 'border-green-200'}
                  >
                    Todos
                  </Button>
                  {problemTypes.slice(0, 3).map((type) => (
                    <Button
                      key={type.value}
                      variant={selectedFilter === type.value ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedFilter(type.value)}
                      className={selectedFilter === type.value ? 'bg-green-600 hover:bg-green-700' : 'border-green-200'}
                    >
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Control Type Filter */}
              <div className="flex gap-2">
                <span className="text-sm text-green-700 font-medium flex items-center">
                  Tipo de Controle:
                </span>
                <Button
                  variant={controlType === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setControlType('all')}
                  className={controlType === 'all' ? 'bg-green-600 hover:bg-green-700' : 'border-green-200'}
                >
                  Todos
                </Button>
                <Button
                  variant={controlType === 'bioinsumo' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setControlType('bioinsumo')}
                  className={controlType === 'bioinsumo' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-green-200'}
                >
                  <Leaf className="h-3 w-3 mr-1" />
                  Bioinsumos
                </Button>
                <Button
                  variant={controlType === 'quimico' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setControlType('quimico')}
                  className={controlType === 'quimico' ? 'bg-orange-600 hover:bg-orange-700' : 'border-green-200'}
                >
                  <Beaker className="h-3 w-3 mr-1" />
                  Químico
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredProblems.length > 0 ? (
              <div className="space-y-4">
                {filteredProblems.map((problem) => (
                  <div key={problem.id} className="border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <img
                        src={problem.image_url}
                        alt={problem.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-green-900 mb-1">{problem.title}</h3>
                            <Badge className={`text-xs ${getStatusColor(problem.problem_type)}`}>
                              {getProblemTypeLabel(problem.problem_type)}
                            </Badge>
                          </div>
                          <div className="text-xs text-green-600 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Hoje
                          </div>
                        </div>
                        
                        <p className="text-sm text-green-700 mb-3">{problem.description}</p>
                        
                        {problem.identified_problem && (
                          <div className="bg-green-50 p-3 rounded-lg mb-3">
                            <p className="text-sm font-medium text-green-900 mb-1">
                              Problema Identificado:
                            </p>
                            <p className="text-sm text-green-700">{problem.identified_problem}</p>
                          </div>
                        )}
                        
                        {/* Bioinsumos */}
                        {problem.bioinsumo_suggestions && problem.bioinsumo_suggestions.length > 0 && 
                         (controlType === 'all' || controlType === 'bioinsumo') && (
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Leaf className="h-4 w-4 text-emerald-600" />
                              <p className="text-sm font-medium text-green-800">
                                Controle Biológico (Bioinsumos):
                              </p>
                            </div>
                            <div className="space-y-2">
                              {problem.bioinsumo_suggestions.map((bio, index) => (
                                <div key={index} className="border border-emerald-100 rounded p-3 bg-emerald-50">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium text-green-900">{bio.name}</span>
                                    <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                                      {bio.dosage}
                                    </span>
                                  </div>
                                  <p className="text-xs text-green-700 mb-2">{bio.description}</p>
                                  
                                  {bio.supplier_contacts && bio.supplier_contacts.length > 0 && (
                                    <div className="border-t border-emerald-200 pt-2">
                                      <p className="text-xs font-medium text-green-800 mb-1">Fornecedores:</p>
                                      <div className="space-y-1">
                                        {bio.supplier_contacts.slice(0, 2).map((supplier, idx) => (
                                          <div key={idx} className="flex items-center justify-between text-xs">
                                            <span className="text-green-700">{supplier.name}</span>
                                            <div className="flex items-center gap-2 text-green-600">
                                              <span className="flex items-center gap-1">
                                                <Phone className="h-3 w-3" />
                                                {supplier.phone}
                                              </span>
                                              <span className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {supplier.location}
                                              </span>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Controle Químico */}
                        {problem.chemical_suggestions && problem.chemical_suggestions.length > 0 && 
                         (controlType === 'all' || controlType === 'quimico') && (
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Beaker className="h-4 w-4 text-orange-600" />
                              <p className="text-sm font-medium text-green-800">
                                Controle Químico (Defensivos):
                              </p>
                            </div>
                            <div className="space-y-2">
                              {problem.chemical_suggestions.map((chemical, index) => (
                                <div key={index} className="border border-orange-100 rounded p-3 bg-orange-50">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium text-green-900">{chemical.name}</span>
                                    <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">
                                      {chemical.dosage}
                                    </span>
                                  </div>
                                  <p className="text-xs text-green-700 mb-2">{chemical.description}</p>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                                    <div className="text-xs">
                                      <span className="font-medium text-green-800">Ingrediente Ativo:</span>
                                      <p className="text-green-700">{chemical.active_ingredient}</p>
                                    </div>
                                    <div className="text-xs">
                                      <span className="font-medium text-green-800 flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        Período de Carência:
                                      </span>
                                      <p className="text-green-700">{chemical.safety_period}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="bg-red-50 border border-red-200 rounded p-2 mb-2">
                                    <div className="flex items-center gap-1 mb-1">
                                      <Shield className="h-3 w-3 text-red-600" />
                                      <span className="text-xs font-medium text-red-800">Importante:</span>
                                    </div>
                                    <p className="text-xs text-red-700">
                                      Use EPIs adequados. Siga as instruções da bula. Respeite o período de carência.
                                    </p>
                                  </div>
                                  
                                  {chemical.supplier_contacts && chemical.supplier_contacts.length > 0 && (
                                    <div className="border-t border-orange-200 pt-2">
                                      <p className="text-xs font-medium text-green-800 mb-1">Fornecedores:</p>
                                      <div className="space-y-1">
                                        {chemical.supplier_contacts.slice(0, 2).map((supplier, idx) => (
                                          <div key={idx} className="flex items-center justify-between text-xs">
                                            <span className="text-green-700">{supplier.name}</span>
                                            <div className="flex items-center gap-2 text-green-600">
                                              <span className="flex items-center gap-1">
                                                <Phone className="h-3 w-3" />
                                                {supplier.phone}
                                              </span>
                                              <span className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {supplier.location}
                                              </span>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Camera className="h-12 w-12 text-green-300 mx-auto mb-4" />
                <p className="text-green-600 mb-2">
                  {searchTerm || selectedFilter !== 'all' 
                    ? 'Nenhum problema encontrado com os filtros aplicados' 
                    : 'Nenhum problema registrado ainda'
                  }
                </p>
                <p className="text-sm text-green-500 mb-4">
                  Comece fotografando um problema na sua plantação
                </p>
                <Button onClick={onUpload} className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Diagnóstico
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}