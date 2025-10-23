"use client"

interface CategoryShowcaseProps {
  onCategorySelect: (category: string | null) => void
  selectedCategory: string | null
}

export function CategoryShowcase({ onCategorySelect, selectedCategory }: CategoryShowcaseProps) {
  const categories = [
    {
      id: "web-scraper",
      name: "Web Scrapers",
      icon: "🕷️",
      description: "Extract data efficiently",
      color: "from-blue-500/20 to-cyan-500/20",
      count: 12,
    },
    {
      id: "discord-bot",
      name: "Discord Bots",
      icon: "🤖",
      description: "Automate your server",
      color: "from-purple-500/20 to-pink-500/20",
      count: 8,
    },
    {
      id: "automation",
      name: "Automation",
      icon: "⚙️",
      description: "Streamline workflows",
      color: "from-green-500/20 to-emerald-500/20",
      count: 15,
    },
    {
      id: "testing",
      name: "Testing Tools",
      icon: "🧪",
      description: "Quality assurance",
      color: "from-orange-500/20 to-red-500/20",
      count: 9,
    },
    {
      id: "crypto-tool",
      name: "Crypto Tools",
      icon: "💰",
      description: "Blockchain solutions",
      color: "from-yellow-500/20 to-orange-500/20",
      count: 6,
    },
  ]

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in-up">Browse by Category</h2>
        <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Explore our curated collection of premium tools and scripts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* All Categories Button */}
        <button
          onClick={() => onCategorySelect(null)}
          className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === null
              ? "bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary shadow-lg shadow-primary/50"
              : "bg-card border border-border hover:border-primary/50"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"></div>
          <div className="relative z-10 text-center">
            <div className="text-4xl mb-2">📦</div>
            <h3 className="font-bold text-foreground">All Products</h3>
            <p className="text-xs text-muted-foreground mt-1">50+ items</p>
          </div>
        </button>

        {/* Category Buttons */}
        {categories.map((category, idx) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 transform hover:scale-105 animate-bounce-in ${
              selectedCategory === category.id
                ? "bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary shadow-lg shadow-primary/50"
                : "bg-card border border-border hover:border-primary/50"
            }`}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} group-hover:opacity-100 opacity-50 transition-all duration-300`}
            ></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm">{category.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{category.count} items</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
