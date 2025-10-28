import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-neon-green font-orbitron">
      <h1 className="text-6xl font-bold mb-6 animate-pulse">⚡ CyberShop</h1>
      <p className="text-neon-yellow text-lg mb-8">
        Welcome to the Neon Marketplace
      </p>
      <button className="px-6 py-3 bg-neon-purple text-black rounded-2xl shadow-lg hover:scale-105 transition">
        Explore the Catalog
      </button>
    </div>
  )
}

export default App
