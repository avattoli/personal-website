export default function About() {
    return (
        <div className="flex items-center justify-center min-h-screen space-x-10">
        {/* Profile Image */}
        <div className="w-52 h-52 rounded-full overflow-hidden floaty shadow-lg">
            <img 
            src="../public/image2.png"
            alt="Profile"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="ml-8 space-y-4">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ayush Vattoli
            </h1>

            <p className="text-xl text-gray-700">
            Student at UBC studying CS & Statistics
            </p>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Passionate about building software and <br /> solving real-world problems.
            </p>
        </div>
        </div>


    )

}