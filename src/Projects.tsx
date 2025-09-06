export default function Projects() {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        {/* Section Title */}
        <p className="text-2xl font-bold text-center mb-6 text-gray-800">
          Some Projects
        </p>
  
        {/* Smaller Contained Box */}
        <div className="rounded-xl shadow-md ring-1 ring-gray-200 p-6 max-w-3xl w-full bg-white/70">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Project 1 */}
            <div className="p-4 rounded-lg shadow-sm ring-1 ring-gray-200 bg-white/80 hover:shadow-md transition">
              <img src="mathnotes.png" alt="Project 1" className="rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Project One</h3>
              <p className="text-gray-600 text-sm">Short description here.</p>
            </div>
  
            {/* Project 2 */}
            <div className="p-4 rounded-lg shadow-sm ring-1 ring-gray-200 bg-white/80 hover:shadow-md transition">
              <img src="musicgame.png" alt="Project 2" className="rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Project Two</h3>
              <p className="text-gray-600 text-sm">Short description here.</p>
            </div>
  
            {/* Project 3 */}
            <div className="p-4 rounded-lg shadow-sm ring-1 ring-gray-200 bg-white/80 hover:shadow-md transition">
              <img src="mytasks.png" alt="Project 3" className="rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Project Three</h3>
              <p className="text-gray-600 text-sm">Short description here.</p>
            </div>
  
            {/* Project 4 */}
            <div className="p-4 rounded-lg shadow-sm ring-1 ring-gray-200 bg-white/80 hover:shadow-md transition">
              <img src="project4.png" alt="Project 4" className="rounded-md mb-2" />
              <h3 className="text-lg font-semibold">Project Four</h3>
              <p className="text-gray-600 text-sm">Short description here.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  