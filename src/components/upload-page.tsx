"use client"

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Camera, Upload, Loader2, CheckCircle, Phone, Mail, MapPin, Leaf, Beaker, Shield, Clock } from 'lucide-react'
import { problemTypes, bioinsumoDatabase, chemicalDatabase, mockSuppliers } from '@/lib/mock-data'

interface UploadPageProps {
  user: any
  onBack: () => void
}

export default function UploadPage({ user, onBack }: UploadPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    problemType: '',
    location: user.location || ''
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setAnalysisResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = async () => {
    if (!selectedImage || !formData.problemType) return
    
    setIsAnalyzing(true)
    
    // Simulação de análise de IA
    setTimeout(() => {
      const problemType = formData.problemType as keyof typeof bioinsumoDatabase
      const bioSuggestions = bioinsumoDatabase[problemType] || []
      const chemicalSuggestions = chemicalDatabase[problemType] || []
      
      const mockAnalysis = {
        identified_problem: getIdentifiedProblem(problemType),
        confidence: Math.floor(Math.random() * 20) + 80, // 80-99%
        bioinsumo_suggestions: bioSuggestions.map(bio => ({
          ...bio,
          suppliers: mockSuppliers.filter(s => s.type === 'bioinsumo').slice(0, Math.floor(Math.random() * 3) + 2)
        })),
        chemical_suggestions: chemicalSuggestions.map(chemical => ({
          ...chemical,
          suppliers: mockSuppliers.filter(s => s.type === 'quimico').slice(0, Math.floor(Math.random() * 3) + 2)
        })),
        recommendations: getRecommendations(problemType)
      }
      
      setAnalysisResult(mockAnalysis)
      setIsAnalyzing(false)
    }, 3000)
  }

  const getIdentifiedProblem = (type: string) => {
    const problems = {
      plantas_daninhas: 'Buva (Conyza bonariensis)',
      doencas_foliares: 'Cercosporiose (Cercospora zeae-maydis)',
      nematoides: 'Nematoide das galhas (Meloidogyne incognita)',
      doencas_solo: 'Fusarium oxysporum',
      pragas: 'Lagarta-do-cartucho (Spodoptera frugiperda)',
      deficiencia_nutricional: 'Deficiência de Nitrogênio'
    }
    return problems[type as keyof typeof problems] || 'Problema identificado'
  }

  const getRecommendations = (type: string) => {
    const recs = {
      plantas_daninhas: [
        'Aplicar em condições de baixa umidade',
        'Realizar aplicação preventiva',
        'Monitorar resistência'
      ],
      doencas_foliares: [
        'Aplicar preventivamente',
        'Manter intervalo de 15-20 dias',
        'Evitar aplicação em período chuvoso'
      ],
      nematoides: [
        'Aplicar no plantio',
        'Incorporar ao solo',
        'Combinar com rotação de culturas'
      ],
      doencas_solo: [
        'Tratar sementes antes do plantio',
        'Melhorar drenagem do solo',
        'Aplicar matéria orgânica'
      ],
      pragas: [
        'Monitorar nível de infestação',
        'Aplicar no início da manhã ou final da tarde',
        'Rotacionar produtos'
      ],
      deficiencia_nutricional: [
        'Realizar análise de solo',
        'Aplicar conforme estágio da cultura',
        'Monitorar resposta da planta'
      ]
    }
    return recs[type as keyof typeof recs] || []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">AgroScan</h1>
              <p className="text-sm text-green-600">Olá, {user.full_name}</p>
            </div>
          </div>
          <Button variant="outline" onClick={onBack}>
            Voltar
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Camera className="h-5 w-5" />
                Fotografar Problema
              </CardTitle>
              <CardDescription>
                Tire uma foto clara do problema na sua plantação
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título do Problema</Label>
                <Input
                  id="title"
                  placeholder="Ex: Manchas nas folhas da soja"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problemType">Tipo de Problema</Label>
                <Select value={formData.problemType} onValueChange={(value) => setFormData({...formData, problemType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de problema" />
                  </SelectTrigger>
                  <SelectContent>
                    {problemTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva o que você observou..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Foto do Problema</Label>
                <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center">
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img 
                        src={selectedImage} 
                        alt="Problema na plantação" 
                        className="max-w-full h-48 object-cover mx-auto rounded-lg"
                      />
                      <Button
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="border-green-300"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Trocar Foto
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Camera className="h-12 w-12 text-green-400 mx-auto" />
                      <div>
                        <Button
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Selecionar Foto
                        </Button>
                        <p className="text-sm text-green-600 mt-2">
                          Formatos aceitos: JPG, PNG
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <Button
                onClick={analyzeImage}
                disabled={!selectedImage || !formData.problemType || isAnalyzing}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Analisar Problema
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Resultado da Análise</CardTitle>
              <CardDescription>
                Identificação e sugestões de controle
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <Loader2 className="h-12 w-12 text-green-600 animate-spin" />
                  <p className="text-green-700">Analisando sua imagem...</p>
                  <p className="text-sm text-green-600">Isso pode levar alguns segundos</p>
                </div>
              ) : analysisResult ? (
                <div className="space-y-6 max-h-[600px] overflow-y-auto">
                  {/* Problema Identificado */}
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Problema Identificado</h3>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-medium text-green-900">{analysisResult.identified_problem}</p>
                      <p className="text-sm text-green-700">Confiança: {analysisResult.confidence}%</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Sugestões de Bioinsumos */}
                  {analysisResult.bioinsumo_suggestions && analysisResult.bioinsumo_suggestions.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-emerald-600" />
                        Controle Biológico (Bioinsumos)
                      </h3>
                      <div className="space-y-4">
                        {analysisResult.bioinsumo_suggestions.map((bio: any, index: number) => (
                          <div key={index} className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
                            <h4 className="font-medium text-green-900 mb-2">{bio.name}</h4>
                            <p className="text-sm text-green-700 mb-2">{bio.description}</p>
                            <div className="grid grid-cols-2 gap-2 text-xs text-green-600 mb-3">
                              <div>
                                <span className="font-medium">Aplicação:</span> {bio.application_method}
                              </div>
                              <div>
                                <span className="font-medium">Dosagem:</span> {bio.dosage}
                              </div>
                            </div>
                            
                            {/* Fornecedores */}
                            <div>
                              <p className="text-sm font-medium text-green-800 mb-2">Fornecedores próximos:</p>
                              <div className="space-y-2">
                                {bio.suppliers.slice(0, 2).map((supplier: any, idx: number) => (
                                  <div key={idx} className="bg-emerald-100 p-2 rounded text-xs">
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-green-900">{supplier.name}</span>
                                      <Badge variant="secondary" className="text-xs">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {supplier.location}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 mt-1 text-green-700">
                                      <span className="flex items-center gap-1">
                                        <Phone className="h-3 w-3" />
                                        {supplier.phone}
                                      </span>
                                      {supplier.email && (
                                        <span className="flex items-center gap-1">
                                          <Mail className="h-3 w-3" />
                                          {supplier.email}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Separator />

                  {/* Sugestões de Controle Químico */}
                  {analysisResult.chemical_suggestions && analysisResult.chemical_suggestions.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <Beaker className="h-5 w-5 text-orange-600" />
                        Controle Químico (Defensivos)
                      </h3>
                      <div className="space-y-4">
                        {analysisResult.chemical_suggestions.map((chemical: any, index: number) => (
                          <div key={index} className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                            <h4 className="font-medium text-green-900 mb-2">{chemical.name}</h4>
                            <p className="text-sm text-green-700 mb-2">{chemical.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-green-600 mb-3">
                              <div>
                                <span className="font-medium">Aplicação:</span> {chemical.application_method}
                              </div>
                              <div>
                                <span className="font-medium">Dosagem:</span> {chemical.dosage}
                              </div>
                              <div>
                                <span className="font-medium">Ingrediente Ativo:</span> {chemical.active_ingredient}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span className="font-medium">Carência:</span> {chemical.safety_period}
                              </div>
                            </div>

                            {/* Aviso de Segurança */}
                            <div className="bg-red-50 border border-red-200 rounded p-2 mb-3">
                              <div className="flex items-center gap-1 mb-1">
                                <Shield className="h-3 w-3 text-red-600" />
                                <span className="text-xs font-medium text-red-800">Importante:</span>
                              </div>
                              <p className="text-xs text-red-700">
                                Use EPIs adequados. Siga as instruções da bula. Respeite o período de carência.
                              </p>
                            </div>
                            
                            {/* Fornecedores */}
                            <div>
                              <p className="text-sm font-medium text-green-800 mb-2">Fornecedores próximos:</p>
                              <div className="space-y-2">
                                {chemical.suppliers.slice(0, 2).map((supplier: any, idx: number) => (
                                  <div key={idx} className="bg-orange-100 p-2 rounded text-xs">
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium text-green-900">{supplier.name}</span>
                                      <Badge variant="secondary" className="text-xs">
                                        <MapPin className="h-3 w-3 mr-1" />
                                        {supplier.location}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center gap-4 mt-1 text-green-700">
                                      <span className="flex items-center gap-1">
                                        <Phone className="h-3 w-3" />
                                        {supplier.phone}
                                      </span>
                                      {supplier.email && (
                                        <span className="flex items-center gap-1">
                                          <Mail className="h-3 w-3" />
                                          {supplier.email}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Separator />

                  {/* Recomendações */}
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Recomendações de Aplicação</h3>
                    <ul className="space-y-1">
                      {analysisResult.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Camera className="h-12 w-12 text-green-300 mb-4" />
                  <p className="text-green-600 mb-2">Nenhuma análise realizada ainda</p>
                  <p className="text-sm text-green-500">
                    Selecione uma foto e clique em "Analisar Problema"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}