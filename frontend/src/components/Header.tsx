import { CastleIcon as ChessKnight } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
    <nav className="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center">
        <ChessKnight className="h-8 w-8 text-purple-400" />
        <span className="ml-2 text-xl font-bold text-white">ChessMaster</span>
      </div>
    </nav>
  </header>
  
  )
}

