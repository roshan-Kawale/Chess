import { PuzzleIcon as ChessPiece, Users, Brain, Trophy } from 'lucide-react'

const features = [
  {
    name: 'Advanced AI Opponent',
    description: 'Challenge yourself against our state-of-the-art chess AI with adjustable difficulty levels.',
    icon: ChessPiece,
  },
  {
    name: 'Multiplayer Matches',
    description: 'Play against friends or random opponents from around the world in real-time.',
    icon: Users,
  },
  {
    name: 'Interactive Lessons',
    description: 'Improve your skills with our comprehensive library of interactive chess lessons and puzzles.',
    icon: Brain,
  },
  {
    name: 'Tournaments',
    description: 'Participate in regular online tournaments and climb the global leaderboard.',
    icon: Trophy,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-800 py-24" id="features">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Features that make us stand out
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Everything you need to become a chess master, all in one place.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-purple-600 text-white">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

