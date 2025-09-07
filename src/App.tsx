
import About from './About'
import './App.css'
import Header from './Header'
import Projects from './Projects'
import Contact from './Contact'
function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-blue-100 to-purple-100">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  ) 
}

export default App
