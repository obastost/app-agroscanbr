// Dados mockados para demonstração do aplicativo
export const mockProblems = [
  {
    id: '1',
    title: 'Plantas Daninhas na Soja',
    problem_type: 'plantas_daninhas',
    identified_problem: 'Buva (Conyza bonariensis)',
    description: 'Infestação de buva resistente ao glifosato',
    image_url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
    bioinsumo_suggestions: [
      {
        name: 'Bacillus thuringiensis',
        description: 'Controle biológico eficaz contra buva',
        application_method: 'Pulverização foliar',
        dosage: '2-3 L/ha',
        supplier_contacts: [
          { name: 'AgroBio Sul', phone: '(51) 99999-0001', location: 'Porto Alegre, RS' },
          { name: 'BioCampo', phone: '(51) 99999-0002', location: 'Caxias do Sul, RS' }
        ]
      }
    ],
    chemical_suggestions: [
      {
        name: 'Glifosato + 2,4-D',
        description: 'Herbicida sistêmico para controle de buva resistente',
        application_method: 'Pulverização foliar',
        dosage: '3-4 L/ha',
        active_ingredient: 'Glifosato 480g/L + 2,4-D 160g/L',
        safety_period: '30 dias antes da colheita',
        supplier_contacts: [
          { name: 'AgroQuímica Brasil', phone: '(51) 99999-1001', location: 'Porto Alegre, RS' },
          { name: 'DefensivosCampo', phone: '(51) 99999-1002', location: 'Caxias do Sul, RS' }
        ]
      },
      {
        name: 'Dicamba',
        description: 'Herbicida auxínico para buva resistente',
        application_method: 'Pulverização foliar dirigida',
        dosage: '1-1.5 L/ha',
        active_ingredient: 'Dicamba 480g/L',
        safety_period: '45 dias antes da colheita',
        supplier_contacts: [
          { name: 'QuímicaAgro Plus', phone: '(54) 99999-1003', location: 'Passo Fundo, RS' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Doença Foliar no Milho',
    problem_type: 'doencas_foliares',
    identified_problem: 'Cercosporiose (Cercospora zeae-maydis)',
    description: 'Manchas foliares características da cercosporiose',
    image_url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
    bioinsumo_suggestions: [
      {
        name: 'Trichoderma harzianum',
        description: 'Fungo antagonista para controle de cercosporiose',
        application_method: 'Pulverização foliar preventiva',
        dosage: '1-2 kg/ha',
        supplier_contacts: [
          { name: 'BioDefesa Agro', phone: '(54) 99999-0003', location: 'Passo Fundo, RS' }
        ]
      }
    ],
    chemical_suggestions: [
      {
        name: 'Azoxistrobina + Ciproconazol',
        description: 'Fungicida sistêmico para controle curativo e preventivo',
        application_method: 'Pulverização foliar',
        dosage: '300-400 mL/ha',
        active_ingredient: 'Azoxistrobina 200g/L + Ciproconazol 80g/L',
        safety_period: '30 dias antes da colheita',
        supplier_contacts: [
          { name: 'FungicidaBrasil', phone: '(54) 99999-1004', location: 'Passo Fundo, RS' },
          { name: 'AgroDefesa Sul', phone: '(51) 99999-1005', location: 'Porto Alegre, RS' }
        ]
      },
      {
        name: 'Tebuconazol',
        description: 'Fungicida triazol sistêmico',
        application_method: 'Pulverização foliar preventiva',
        dosage: '500-750 mL/ha',
        active_ingredient: 'Tebuconazol 200g/L',
        safety_period: '35 dias antes da colheita',
        supplier_contacts: [
          { name: 'QuímicaAgro Plus', phone: '(54) 99999-1003', location: 'Passo Fundo, RS' }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Nematoides na Soja',
    problem_type: 'nematoides',
    identified_problem: 'Nematoide do cisto (Heterodera glycines)',
    description: 'Presença de cistos nas raízes da soja',
    image_url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    bioinsumo_suggestions: [
      {
        name: 'Pochonia chlamydosporia',
        description: 'Fungo parasita específico para nematoides',
        application_method: 'Aplicação no sulco de plantio',
        dosage: '2-4 kg/ha',
        supplier_contacts: [
          { name: 'BioNema', phone: '(55) 99999-0006', location: 'Santa Maria, RS' }
        ]
      }
    ],
    chemical_suggestions: [
      {
        name: 'Fluopyram',
        description: 'Nematicida sistêmico de amplo espectro',
        application_method: 'Tratamento de sementes',
        dosage: '500 mL/100kg sementes',
        active_ingredient: 'Fluopyram 500g/L',
        safety_period: 'Não se aplica (tratamento de sementes)',
        supplier_contacts: [
          { name: 'NematicidasBR', phone: '(55) 99999-1006', location: 'Santa Maria, RS' },
          { name: 'AgroQuímica Brasil', phone: '(51) 99999-1001', location: 'Porto Alegre, RS' }
        ]
      }
    ]
  }
]

export const problemTypes = [
  { value: 'plantas_daninhas', label: 'Plantas Daninhas' },
  { value: 'doencas_solo', label: 'Doenças de Solo' },
  { value: 'nematoides', label: 'Nematoides' },
  { value: 'doencas_foliares', label: 'Doenças Foliares' },
  { value: 'pragas', label: 'Pragas' },
  { value: 'deficiencia_nutricional', label: 'Deficiência Nutricional' }
]

export const bioinsumoDatabase = {
  plantas_daninhas: [
    {
      name: 'Bacillus thuringiensis',
      description: 'Controle biológico de plantas daninhas',
      application_method: 'Pulverização foliar',
      dosage: '2-3 L/ha'
    },
    {
      name: 'Óleo de Neem',
      description: 'Inibidor natural de crescimento',
      application_method: 'Pulverização dirigida',
      dosage: '1-2 L/ha'
    }
  ],
  doencas_foliares: [
    {
      name: 'Trichoderma harzianum',
      description: 'Fungo antagonista para controle preventivo',
      application_method: 'Pulverização foliar',
      dosage: '1-2 kg/ha'
    },
    {
      name: 'Bacillus subtilis',
      description: 'Bactéria benéfica para controle de doenças',
      application_method: 'Pulverização preventiva',
      dosage: '500g-1kg/ha'
    }
  ],
  nematoides: [
    {
      name: 'Pochonia chlamydosporia',
      description: 'Fungo parasita de nematoides',
      application_method: 'Aplicação no solo',
      dosage: '2-4 kg/ha'
    }
  ],
  doencas_solo: [
    {
      name: 'Trichoderma viride',
      description: 'Controle de patógenos do solo',
      application_method: 'Incorporação ao solo',
      dosage: '2-3 kg/ha'
    }
  ],
  pragas: [
    {
      name: 'Beauveria bassiana',
      description: 'Fungo entomopatogênico',
      application_method: 'Pulverização foliar',
      dosage: '1-2 kg/ha'
    }
  ],
  deficiencia_nutricional: [
    {
      name: 'Biofertilizante NPK',
      description: 'Fertilizante orgânico completo',
      application_method: 'Aplicação foliar ou solo',
      dosage: '3-5 L/ha'
    }
  ]
}

export const chemicalDatabase = {
  plantas_daninhas: [
    {
      name: 'Glifosato',
      description: 'Herbicida sistêmico não seletivo',
      application_method: 'Pulverização foliar',
      dosage: '2-4 L/ha',
      active_ingredient: 'Glifosato 480g/L',
      safety_period: '7-15 dias antes da colheita'
    },
    {
      name: '2,4-D',
      description: 'Herbicida auxínico seletivo',
      application_method: 'Pulverização foliar',
      dosage: '1-2 L/ha',
      active_ingredient: '2,4-D 670g/L',
      safety_period: '30 dias antes da colheita'
    }
  ],
  doencas_foliares: [
    {
      name: 'Azoxistrobina',
      description: 'Fungicida sistêmico estrobilurina',
      application_method: 'Pulverização foliar',
      dosage: '200-300 mL/ha',
      active_ingredient: 'Azoxistrobina 250g/L',
      safety_period: '21 dias antes da colheita'
    },
    {
      name: 'Tebuconazol',
      description: 'Fungicida triazol sistêmico',
      application_method: 'Pulverização foliar',
      dosage: '500-750 mL/ha',
      active_ingredient: 'Tebuconazol 200g/L',
      safety_period: '35 dias antes da colheita'
    }
  ],
  nematoides: [
    {
      name: 'Fluopyram',
      description: 'Nematicida sistêmico',
      application_method: 'Tratamento de sementes',
      dosage: '500 mL/100kg sementes',
      active_ingredient: 'Fluopyram 500g/L',
      safety_period: 'Não se aplica'
    }
  ],
  doencas_solo: [
    {
      name: 'Metalaxil-M',
      description: 'Fungicida sistêmico para patógenos do solo',
      application_method: 'Aplicação no solo',
      dosage: '1-2 kg/ha',
      active_ingredient: 'Metalaxil-M 350g/kg',
      safety_period: '45 dias antes da colheita'
    }
  ],
  pragas: [
    {
      name: 'Imidacloprido',
      description: 'Inseticida sistêmico neonicotinoide',
      application_method: 'Pulverização foliar',
      dosage: '100-200 mL/ha',
      active_ingredient: 'Imidacloprido 200g/L',
      safety_period: '21 dias antes da colheita'
    },
    {
      name: 'Lambda-cialotrina',
      description: 'Inseticida piretroide de contato',
      application_method: 'Pulverização foliar',
      dosage: '150-300 mL/ha',
      active_ingredient: 'Lambda-cialotrina 50g/L',
      safety_period: '14 dias antes da colheita'
    }
  ],
  deficiencia_nutricional: [
    {
      name: 'Fertilizante NPK 20-05-20',
      description: 'Fertilizante mineral completo',
      application_method: 'Aplicação no solo',
      dosage: '300-500 kg/ha',
      active_ingredient: 'N-P2O5-K2O 20-05-20',
      safety_period: 'Não se aplica'
    }
  ]
}

export const mockSuppliers = [
  // Fornecedores de Bioinsumos
  { name: 'AgroBio Sul', phone: '(51) 99999-0001', email: 'contato@agrobiosul.com', location: 'Porto Alegre, RS', type: 'bioinsumo' },
  { name: 'BioCampo', phone: '(51) 99999-0002', email: 'vendas@biocampo.com', location: 'Caxias do Sul, RS', type: 'bioinsumo' },
  { name: 'BioDefesa Agro', phone: '(54) 99999-0003', email: 'info@biodefesa.com', location: 'Passo Fundo, RS', type: 'bioinsumo' },
  { name: 'EcoAgro Bioinsumos', phone: '(55) 99999-0004', email: 'comercial@ecoagro.com', location: 'Santa Maria, RS', type: 'bioinsumo' },
  { name: 'Verde Campo Bio', phone: '(47) 99999-0005', email: 'atendimento@verdecampo.com', location: 'Blumenau, SC', type: 'bioinsumo' },
  { name: 'BioNema', phone: '(55) 99999-0006', email: 'vendas@bionema.com', location: 'Santa Maria, RS', type: 'bioinsumo' },
  
  // Fornecedores de Produtos Químicos
  { name: 'AgroQuímica Brasil', phone: '(51) 99999-1001', email: 'vendas@agroquimicabr.com', location: 'Porto Alegre, RS', type: 'quimico' },
  { name: 'DefensivosCampo', phone: '(51) 99999-1002', email: 'comercial@defensivoscampo.com', location: 'Caxias do Sul, RS', type: 'quimico' },
  { name: 'QuímicaAgro Plus', phone: '(54) 99999-1003', email: 'atendimento@quimicaagroplus.com', location: 'Passo Fundo, RS', type: 'quimico' },
  { name: 'FungicidaBrasil', phone: '(54) 99999-1004', email: 'vendas@fungicidabrasil.com', location: 'Passo Fundo, RS', type: 'quimico' },
  { name: 'AgroDefesa Sul', phone: '(51) 99999-1005', email: 'comercial@agrodefesasul.com', location: 'Porto Alegre, RS', type: 'quimico' },
  { name: 'NematicidasBR', phone: '(55) 99999-1006', email: 'info@nematicidasbr.com', location: 'Santa Maria, RS', type: 'quimico' }
]