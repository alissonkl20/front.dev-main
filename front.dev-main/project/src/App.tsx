import  { useState } from 'react';
import { ExternalLink, Code2, Briefcase, User, GraduationCap, Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Definindo as classes base para cada modo
  const sectionClasses = darkMode 
    ? 'bg-gray-800 text-white' 
    : 'bg-white text-gray-900';
  
  const textSecondaryClasses = darkMode
    ? 'text-gray-300'
    : 'text-gray-700';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-800' : 'bg-gray-100'}`}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-700" />}
      </button>

      <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0">
          <img
            src='./src/images/lade.jpeg'
            alt="Background"
            className="w-full h-full object-cover opacity-85 md:object-center"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Alisson de Almeida de Oliveira</h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-8">Desenvolvedor Full-Stack</p>
          <div className="flex justify-center gap-4">


            <div className="flex flex-col gap-2"> </div>
              <div className="flex flex-row gap-2"> </div>

          </div>
        </div>
      </header>

      <section id="sobre" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Sobre Mim</h2>
          </div>
          <p className={`text-lg ${textSecondaryClasses} leading-relaxed`}>
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes, buscando inovar com ideias facilitadoras para o Desenvolvimento de software.

          </p>
        </div>
      </section>

      <section id="experiencia" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Experiência</h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <p className={textSecondaryClasses}>2024</p>
              <p className={`mt-2 ${textSecondaryClasses}`}>
                Desenvolvedor Full-Stack com habilidade de compreensão e comunicação ágil, sempre buscando adquirir experiência, buscando atender as demandas do mercado.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Desenvolvedor Full-Stack</h3>
              <p className={textSecondaryClasses}>2024</p>
              <p className={`mt-2 ${textSecondaryClasses}`}>
                Desenvolvimento de aplicações web com Java e Spring Boot, integração com APIs.
                <br className="hidden md:block" />
                Desenvolvimento de aplicações front-end com ReactJS, Vite e TailwindCSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-blue-600" size={28} />
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : ''}`}>Projetos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-lg shadow-md ${sectionClasses}`}>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700 mb-4">
                Contato profissional.
              </p>
              <a href="mailto:almeidadeoliveiraalisson04@gmail.com" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                almeidadeoliveiraalisson04@gmail.com <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="educacao" className={`py-20 px-4 ${sectionClasses}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Educação</h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">Tecnologo</h3>
              <p className={textSecondaryClasses}>Centro Universitário - Católica de Santa Catarina em Jaraguá do Sul</p>
              <p className={textSecondaryClasses}>Análise Desenvolvimento de Sistemas</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alisson de A de Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;