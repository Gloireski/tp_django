import { useState } from "react"
import { Link } from "react-router-dom"

// Sample product data
const products = [
  { id: 1, name: "Neon Jacket", category: "Wearables", price: 120, color: "neon-purple" },
  { id: 2, name: "Cyber Goggles", category: "Accessories", price: 80, color: "neon-green" },
  { id: 3, name: "LED Sneakers", category: "Wearables", price: 150, color: "neon-yellow" },
  { id: 4, name: "Hologram Watch", category: "Accessories", price: 200, color: "neon-purple" },
  { id: 5, name: "Neon Backpack", category: "Gear", price: 95, color: "neon-green" },
]

export default function Catalog() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [maxPrice, setMaxPrice] = useState(250)

  // Filter logic
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "All" || p.category === category
    const matchesPrice = p.price <= maxPrice
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-black text-neon-green font-orbitron p-8">
      <h2 className="text-4xl mb-10 text-center text-neon-purple font-bold">⚙️ Cyber Catalog</h2>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-zinc-900/40 p-6 rounded-2xl border border-neon-green shadow-glow">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl bg-black border border-neon-purple text-neon-yellow focus:outline-none focus:ring-2 focus:ring-neon-green w-full md:w-1/3"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-xl bg-black border border-neon-purple text-neon-yellow focus:outline-none focus:ring-2 focus:ring-neon-green w-full md:w-1/3"
        >
          <option value="All">All Categories</option>
          <option value="Wearables">Wearables</option>
          <option value="Accessories">Accessories</option>
          <option value="Gear">Gear</option>
        </select>

        {/* Price Range */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <label className="text-neon-yellow mb-1">Max Price: ${maxPrice}</label>
          <input
            type="range"
            min="50"
            max="250"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-neon-purple"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-neon-yellow text-xl mt-10">No products found 😢</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className={`p-6 border-2 border-${p.color} rounded-xl shadow-glow hover:scale-105 transition`}
            >
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="mb-2 text-neon-yellow">Category: {p.category}</p>
              <p className="mb-4 text-neon-green">${p.price}</p>
              <Link
                to={`/product/${p.id}`}
                className="px-4 py-2 bg-neon-purple text-black rounded-xl hover:opacity-80 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
