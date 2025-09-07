export default function About() {
    return (
        <div className="flex items-center justify-center py-12 md:py-16 space-x-10">
        {/* Profile Image */}
        <div className="w-52 h-52 rounded-full overflow-hidden floaty shadow-lg">
            <img 
            src="image2.png"
            alt="Profile"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Text */}
        <div className="ml-8 space-y-4">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ayush Vattoli
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Third Year Computer Science + Statistics student at the University of British Columbia. I love exploring how software, data, and ML can create tools that feel both useful and accessible.
            </p>
        </div>
        </div>


    )

}
