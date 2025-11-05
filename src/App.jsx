import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { Button } from '@/components/ui/button.jsx'
import { Check, Gift, Shield, Star, Users, Heart, Sparkles } from 'lucide-react'
import bookCover from './assets/book-cover.png'
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Desvendar os Mitos e Verdades",
      description: "Entenda o que realmente significa o Cuckoldry e como ele pode ser uma prática saudável e consensual."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Aprofundar a Conexão Emocional",
      description: "Descubra como a comunicação aberta e a exploração de fantasias podem fortalecer os laços com seu parceiro(a)."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Redescobrir o Prazer e a Excitação",
      description: "Aprenda técnicas e abordagens para reacender a paixão e experimentar orgasmos mais intensos e satisfatórios."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Construir Confiança e Segurança",
      description: "Supere inseguranças e medos, construindo um relacionamento baseado na honestidade e no desejo mútuo."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Explorar Novas Fantasias Sexuais",
      description: "Um guia seguro para você e seu parceiro(a) explorarem juntos um mundo de possibilidades eróticas."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Aumentar a Autoestima e o Desejo",
      description: "Veja seu parceiro(a) sob uma nova luz e sinta-se mais desejado(a) do que nunca."
    }
  ]

  const testimonials = [
    {
      text: "Nunca imaginei que poderíamos chegar a esse nível de intimidade e excitação. O livro do Paulinho abriu nossos olhos para um mundo novo!",
      author: "Casal A."
    },
    {
      text: "Eu tinha muitos receios, mas a leitura me deu a segurança e o conhecimento para conversar com meu parceiro. Nossa vida sexual nunca foi tão boa!",
      author: "Leitora B."
    },
    {
      text: "Uma leitura essencial para quem busca quebrar a rotina e explorar o prazer de forma consciente e consensual.",
      author: "Leitor C."
    }
  ]

  const faqs = [
    {
      question: "O que é Cuckoldry?",
      answer: "É uma prática sexual consensual onde um parceiro obtém prazer ao ver ou saber que seu companheiro(a) está envolvido(a) sexualmente com outra pessoa."
    },
    {
      question: "É necessário ter um relacionamento aberto para praticar o Cuckoldry?",
      answer: "Não necessariamente. O Cuckoldry pode ser explorado dentro de diversos tipos de relacionamento, desde que haja consentimento e comunicação clara entre todos os envolvidos."
    },
    {
      question: "O livro aborda a segurança e o consentimento?",
      answer: "Sim, o consentimento, a comunicação e a segurança emocional são pilares fundamentais abordados em profundidade no livro."
    },
    {
      question: "Existe garantia de satisfação?",
      answer: "Sim! Temos tanta certeza de que você vai amar o conteúdo que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não estiver satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu investimento."
    },
    {
      question: "O livro é apenas para homens?",
      answer: "Não, o livro é para qualquer pessoa ou casal interessado em explorar o universo do Cuckoldry, independentemente do gênero ou orientação sexual."
    }
  ]

  const handleCTA = () => {
    // Redireciona para o checkout do Hotmart em nova aba
    const url = 'https://pay.hotmart.com/L102280542P'
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Analytics />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block animate-pulse mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                🔥 Oferta Especial de Lançamento
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Desvende o Segredo Mais Bem Guardado dos Casais e{' '}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Redefina Sua Intimidade!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Você está pronto para explorar uma dimensão de prazer, conexão e excitação que a maioria apenas sonha?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Em um mundo onde a rotina e a monotonia podem apagar a chama da paixão...
                </h2>
                <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                  Muitos casais buscam algo mais. Uma faísca, um segredo, uma forma de reacender o desejo e aprofundar a intimidade de maneiras inimagináveis. Você sente que há um universo de fantasias inexploradas esperando por você e seu parceiro(a)?
                </p>
                <p className="text-purple-100 text-lg leading-relaxed">
                  O desejo de ir além do convencional, de quebrar tabus e de experimentar o êxtase de uma conexão verdadeiramente livre e consensual é mais comum do que você imagina.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div 
                className="relative transform transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-75' : 'opacity-50'}`}></div>
                <img 
                  src={bookCover} 
                  alt="Como Aderir ao Cucoldry" 
                  className="relative rounded-2xl shadow-2xl max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Desire Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Maioria das Pessoas Vive com Fantasias Ocultas...
            </h2>
            <p className="text-xl text-purple-200 leading-relaxed">
              Medos de julgamento e a crença de que certas experiências são inatingíveis ou proibidas. A rotina sexual pode se tornar previsível, e a busca por algo novo pode gerar insegurança ou culpa. Mas e se houvesse um caminho para transformar essas fantasias em realidade, com total consentimento, respeito e, acima de tudo, uma paixão renovada?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                "Como Aderir ao Cucoldry: Descubra o Segredo dos Casais"
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed max-w-4xl mx-auto">
                É mais do que um livro; é um <span className="font-bold text-pink-300">guia transformador</span> que o(a) levará a uma jornada de autodescoberta e exploração sexual. Escrito por <span className="font-bold text-pink-300">Paulinho Fernando</span>, uma autoridade no tema, este livro desmistifica o universo do Cuckoldry, revelando como casais ao redor do mundo estão utilizando essa prática para intensificar a intimidade, a confiança e o prazer em seus relacionamentos.
              </p>
              <p className="text-2xl text-pink-300 font-semibold mt-6">
                Prepare-se para quebrar barreiras, desafiar preconceitos e abrir as portas para uma nova era de excitação mútua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              O Que Você Vai Descobrir
            </h2>
            <p className="text-xl text-purple-200">
              Ao mergulhar nas páginas deste livro transformador
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-purple-200 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sobre o Autor
              </h2>
              <h3 className="text-2xl font-semibold text-pink-300 mb-4">
                Paulinho Fernando
              </h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                É um renomado especialista em relacionamentos e sexualidade, com anos de experiência em auxiliar casais a explorarem suas fantasias e aprimorarem sua vida íntima. Com uma abordagem empática e informativa, Paulinho desmistifica temas complexos, oferecendo insights valiosos e práticos para quem busca uma vida sexual mais plena e autêntica. Seu trabalho é reconhecido por promover a comunicação, o consentimento e o respeito mútuo em todas as formas de expressão sexual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              O Que Nossos Leitores Dizem
            </h2>
            <p className="text-xl text-purple-200">
              Transformações reais de pessoas reais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-purple-100 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-pink-300 font-semibold">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Oferta Especial e Bônus Exclusivos
              </h2>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Adquira agora e receba:
                </h3>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">E-book Principal</p>
                      <p className="text-purple-100">O guia completo para transformar sua vida sexual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Gift className="w-6 h-6 text-pink-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Bônus 1: Guia Rápido de Comunicação Consensual</p>
                      <p className="text-purple-100">Ferramentas práticas para garantir que todas as experiências sejam seguras e prazerosas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Gift className="w-6 h-6 text-pink-300 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Bônus 2: 10 Fantasias para Explorar Juntos</p>
                      <p className="text-purple-100">Ideias e sugestões para começar sua jornada de descoberta</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-white text-xl mb-2">De <span className="line-through">R$ 99,90</span></p>
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                  R$ 49,90
                </p>
                <p className="text-pink-200 text-lg">
                  Preço Especial de Lançamento - Por Tempo Limitado!
                </p>
              </div>

              <Button 
                onClick={handleCTA}
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-100 text-base md:text-xl px-8 md:px-12 py-4 md:py-6 h-auto rounded-full font-bold shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                QUERO DESCOBRIR O SEGREDO DOS CASAIS AGORA!
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-white">
                <Shield className="w-5 h-5" />
                <p className="text-sm">Garantia incondicional de 7 dias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-purple-200">
              Tire suas dúvidas antes de começar sua jornada
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-purple-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Não Deixe a Rotina Apagar a Chama da Sua Paixão!
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Comece hoje mesmo a desvendar os segredos de uma vida sexual mais excitante e conectada. Sua jornada de transformação está a um clique de distância.
            </p>
            <Button 
              onClick={handleCTA}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-6 h-auto rounded-full font-bold shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              GARANTIR MINHA CÓPIA AGORA!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-300 text-sm">
            © 2025 Como Aderir ao Cucoldry. Todos os direitos reservados.
          </p>
          <p className="text-purple-400 text-xs mt-2">
            Este produto é destinado a adultos maiores de 18 anos.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App