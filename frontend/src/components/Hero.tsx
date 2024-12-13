import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Master Chess Online
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-300">
            Play, learn, and improve your chess skills with our advanced web application.
          </p>
          <div className="mt-8">
            <Link to="/game" className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-purple-700">
              Start Playing Now
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/hero.jpg?height=400&width=400"
            alt="Chess board illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

