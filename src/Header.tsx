export default function Header() {
  return (
    <header>
    <nav className=" flex justify-center space-x-8 py-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-800 hover:text-gray-500 transition transform hover:scale-105 duration-200">
            About
          </a>
          <a href="#projects" className="text-gray-800 hover:text-gray-500 transition transform hover:scale-105 duration-200">
            Projects
          </a>
          <a href="#contact" className="text-gray-800 hover:text-gray-500 transition transform hover:scale-105 duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>


   
  )
}