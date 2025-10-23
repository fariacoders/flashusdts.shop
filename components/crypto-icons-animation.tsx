"use client"

export function CryptoIconsAnimation() {
  const cryptos = [
    { symbol: "₿", label: "Bitcoin", color: "from-orange-500 to-yellow-500" },
    { symbol: "Ξ", label: "Ethereum", color: "from-blue-500 to-purple-500" },
    { symbol: "◎", label: "Solana", color: "from-green-500 to-cyan-500" },
    { symbol: "₮", label: "USDT", color: "from-pink-500 to-rose-500" },
  ]

  return (
    <div className="flex gap-4 justify-center items-center py-8">
      {cryptos.map((crypto, idx) => (
        <div
          key={idx}
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${crypto.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
          style={{
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${idx * 0.2}s`,
          }}
          title={crypto.label}
        >
          {crypto.symbol}
        </div>
      ))}
    </div>
  )
}
