export default function Product() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-black text-neon-green font-orbitron">
      <h2 className="text-5xl font-bold mb-6">Product Details</h2>
      <p className="text-neon-yellow max-w-xl text-center">
        This futuristic product is crafted with the latest cyberpunk technology, blending power, design, and neon aesthetics.
      </p>
      <button className="mt-10 px-6 py-3 bg-neon-purple text-black rounded-2xl hover:scale-105 transition">
        Add to Cart
      </button>
    </div>
  );
}
