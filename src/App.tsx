import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Award, 
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  Star,
  ArrowRight,
  Gavel,
  BookOpen,
  Eye,
  Heart
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-500 rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-yellow-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-amber-500 rounded-full opacity-60 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-amber-400/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Scale className="h-10 w-10 text-amber-400" />
                <div className="absolute inset-0 bg-amber-400 blur-lg opacity-30"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Dra. Maria Paula Stradiotto Simões
                </span>
                <div className="text-xs text-amber-400/80 font-medium">EXCELÊNCIA JURÍDICA</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))} 
                  className="relative text-white/90 hover:text-amber-400 transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:text-amber-400 hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))} 
                    className="text-left text-white/90 hover:text-amber-400 transition-colors font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Justice background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-amber-400/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2">
                  <Star className="h-4 w-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium">OAB: 2532834732</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">
                    Excelência
                  </span>
                  <br />
                  <span className="text-white">Jurídica</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Em cada detalhe
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  Comprometida com a defesa dos seus direitos, atuando com dedicação, ética e estratégia. Uma nova geração de advocacia, com olhar atento, preparo técnico e foco em resultados reais.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="group relative bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Consulta Gratuita</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25"
                >
                  Nossos Serviços
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-amber-400/10 to-yellow-500/10 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src="/advocacia/img.jpg" 
                  alt="Dra. Maria Paula Stradiotto Simões" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-6">
              <Eye className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Minha História</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                Compromisso com a Justiça,
              </span>
              <br />
              <span className="text-amber-400">Dedicação com Você.</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Uma trajetória que começa com firmeza, construída sobre pilares sólidos de ética, competência e vontade de fazer a diferença no Direito.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Formada pela <span className="text-amber-400">Universidade Norte do Paraná</span>, atua com foco em Direito Civil e Empresarial, unindo sólida formação acadêmica, ética profissional e total dedicação aos seus clientes.
                </p>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Cada caso é tratado de forma única, com atenção personalizada e análise cuidadosa. A atuação é pautada por responsabilidade, escuta ativa e estratégias bem fundamentadas, sempre buscando as melhores soluções jurídicas para cada situação.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "Especialista Certificada", desc: "Certificação OAB em múltiplas áreas" },
                  { icon: Heart, title: "Atendimento Humanizado", desc: "Cuidado pessoal em cada processo" },
                  { icon: Shield, title: "Confidencialidade Total", desc: "Sigilo absoluto garantido" },
                  { icon: Gavel, title: "Estratégia Vencedora", desc: "Táticas jurídicas acertivas" }
                ].map((item, index) => (
                  <div key={index} className="group p-6 bg-slate-800/50 border border-amber-400/10 rounded-xl hover:border-amber-400/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors">
                        <item.icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-3xl border border-amber-400/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-amber-400" />
                <span>Formação & Certificações</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  "Bacharel em Direito - Universidade Estadual Norte do Paraná (UENP)",
                  "Especialização em Direito do Trabalho",
                  "Membro da Comissão de Direitos Humanos OAB/PR",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-white/90 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-6">
              <Scale className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Especialidades</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                Áreas de
              </span>
              <br />
              <span className="text-amber-400">Excelência Jurídica</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Atuação personalizada em diversas áreas do Direito, com atenção aos detalhes, escuta ativa e estratégias fundamentadas. Cada demanda é tratada com seriedade e foco no que realmente importa: o seu resultado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Direito Civil",
                description: "Contratos complexos, responsabilidade civil, direitos reais e obrigações com estratégias vencedoras.",
                features: ["Contratos Empresariais", "Responsabilidade Civil", "Direitos Reais"]
              },
              {
                icon: Users,
                title: "Direito de Família",
                description: "Divórcio consensual e litigioso, guarda compartilhada, pensão alimentícia e inventários.",
                features: ["Divórcio Premium", "Guarda de Filhos", "Inventários"]
              },
              {
                icon: Shield,
                title: "Direito do Consumidor",
                description: "Defesa integral dos direitos do consumidor com foco em indenizações substanciais.",
                features: ["Danos Morais", "Vícios de Produtos", "Relações de Consumo"]
              },
              {
                icon: Award,
                title: "Direito Empresarial",
                description: "Constituição de empresas, contratos comerciais, fusões e aquisições estratégicas.",
                features: ["Contratos Comerciais", "Societário", "M&A"]
              },
              {
                icon: Clock,
                title: "Direito Trabalhista",
                description: "Relações trabalhistas complexas, rescisões estratégicas e direitos trabalhistas.",
                features: ["Rescisões", "Assédio Moral", "Direitos Trabalhistas"]
              },
              {
                icon: MapPin,
                title: "Direito Imobiliário",
                description: "Transações imobiliárias de alto valor, regularizações e investimentos imobiliários.",
                features: ["Compra e Venda", "Regularizações", "Investimentos"]
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-6">
              <Phone className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Contatos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                Agende Sua
              </span>
              <br />
              <span className="text-amber-400">Consulta Gratuita</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Estamos prontos para defender seus direitos. Atendimento personalizado e estratégias vencedoras
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-3xl border border-amber-400/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                  <Phone className="h-8 w-8 text-amber-400" />
                  <span>Informações de Contato</span>
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Telefones",
                      content: ["(11) 99999-9999", "(11) 3333-3333"],
                      subtitle: "Atendimento 24h para emergências"
                    },
                    {
                      icon: Mail,
                      title: "E-mail Premium",
                      content: ["contato@advocaciapremium.com.br"],
                      subtitle: "Resposta em até 2 horas"
                    },
                    {
                      icon: MapPin,
                      title: "Escritório",
                      content: ["Av. Paulista, 1000 - Sala 2001", "Bela Vista - São Paulo/SP", "CEP: 01310-100"],
                      subtitle: "Localização premium no coração de SP"
                    },
                    {
                      icon: Clock,
                      title: "Horário VIP",
                      content: ["Segunda a Sexta: 8h às 20h", "Sábado: 8h às 14h"],
                      subtitle: "Atendimento estendido para sua conveniência"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group p-6 bg-slate-800/50 rounded-xl border border-amber-400/10 hover:border-amber-400/30 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors">
                          <item.icon className="h-6 w-6 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-2">{item.title}</h4>
                          {item.content.map((line, idx) => (
                            <p key={idx} className="text-white/80">{line}</p>
                          ))}
                          <p className="text-amber-400/80 text-sm mt-2">{item.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-slate-800 rounded-3xl overflow-hidden border border-amber-400/20 shadow-2xl">
                <div className="h-80 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6344!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMDMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Premium do Escritório"
                  ></iframe>
                  <div className="absolute inset-0 bg-amber-400/10 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-3xl border border-amber-400/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                <Mail className="h-8 w-8 text-amber-400" />
                <span>Formulário</span>
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-amber-400 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-amber-400/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-amber-400 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-amber-400/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-400 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-amber-400/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-amber-400 mb-2">
                    Área de Interesse *
                  </label>
                  <select
                    id="assunto"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-amber-400/20 rounded-xl text-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
                  >
                    <option value="">Selecione a área jurídica</option>
                    <option value="civil">Direito Civil</option>
                    <option value="familia">Direito de Família</option>
                    <option value="consumidor">Direito do Consumidor</option>
                    <option value="empresarial">Direito Empresarial</option>
                    <option value="trabalhista">Direito Trabalhista</option>
                    <option value="imobiliario">Direito Imobiliário</option>
                    <option value="outro">Outra Área</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-amber-400 mb-2">
                    Descreva Seu Caso *
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-amber-400/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300 resize-none"
                    placeholder="Descreva detalhadamente seu caso para uma análise precisa..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 py-4 px-6 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Agendar Consulta Gratuita</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <p className="text-white/60 text-sm text-center">
                  * Campos obrigatórios. Resposta garantida em até 2 horas úteis.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-amber-400/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Scale className="h-10 w-10 text-amber-400" />
                  <div className="absolute inset-0 bg-amber-400 blur-lg opacity-30"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Dra. Maria Paula Stradiotto
                  </span>
                  <div className="text-xs text-amber-400/80 font-medium">EXCELÊNCIA JURÍDICA</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Defendendo seus direitos com excelência absoluta, estratégia refinada e resultados excepcionais. 
                Sua confiança é nossa maior conquista e responsabilidade.
              </p>
              <div className="flex space-x-4">
                {['OAB/PR', 'Certificada'].map((badge, index) => (
                  <div key={index} className="bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1">
                    <span className="text-amber-400 text-xs font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Especialidades</h4>
              <ul className="space-y-3 text-white/70">
                {['Direito Civil', 'Direito de Família', 'Direito do Consumidor', 'Direito Empresarial', 'Direito Trabalhista', 'Direito Imobiliário'].map((item, index) => (
                  <li key={index} className="hover:text-amber-400 transition-colors cursor-pointer flex items-center space-x-2">
                    <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>contato@advocaciapremium.com.br</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-amber-400 mt-1" />
                  <div>
                    <div>Av. Paulista, 1000 - Sala 2001</div>
                    <div>São Paulo/SP - CEP: 01310-100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-400/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;