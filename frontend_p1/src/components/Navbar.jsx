import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-neon-purple shadow-[0_0_10px_#9d00ff]">
      <h1 className="text-3xl font-bold text-neon-green font-orbitron"><Link to="/">⚡ CyberShop</Link></h1>
      <div className="space-x-8">
        <Link to="/" className="hover:text-neon-yellow transition">Home</Link>
        <Link to="/catalog" className="hover:text-neon-yellow transition">Catalog</Link>
        <Link to="/product" className="hover:text-neon-yellow transition">Product</Link>
      </div>
    </nav>
  );
}
