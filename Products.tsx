"use client"

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { CategoryShowcase } from "@/components/category-showcase"

import { MOCK_PRODUCTS } from "@/lib/products";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["web-scraper", "discord-bot", "automation", "testing", "crypto-tool"]

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-dark border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-5xl font-bold text-foreground mb-4 animate-slide-down">Browse Products</h1>
          <p className="text-lg text-muted-foreground animate-slide-down" style={{ animationDelay: "0.1s" }}>
            Discover premium scripts, tools, and educational materials from expert developers
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <CategoryShowcase onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="card-glow bg-card border-border sticky top-4 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                  <span>🔍</span>
                  Search
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary transition-all duration-300"
                />
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product, idx) => (
                  <Card
                    key={product.id}
                    className="card-hover card-glow bg-card border-border/50 overflow-hidden group relative hover:scale-105 transition-all duration-300"
                    style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-20 animate-bounce-in">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold animate-pulse-glow">
                          <span>⚡</span>
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="aspect-video bg-gradient-dark overflow-hidden relative">
                      <img
                        src={product.thumbnail || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                        <Button
                          size="sm"
                          className="btn-primary-glow text-primary-foreground w-full hover:scale-105 transition-transform"
                          asChild
                        >
                          <a href={`/products/${product.slug}`}>Quick View</a>
                        </Button>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg line-clamp-2 text-foreground group-hover:text-primary transition">
                            {product.title}
                          </CardTitle>
                          <CardDescription className="text-xs mt-1 text-muted-foreground">
                            {product.category.replace("-", " ")}
                          </CardDescription>
                        </div>
                        <span className="text-xl font-bold text-primary whitespace-nowrap animate-pulse-glow">
                          ${Math.round(product.price / 100)}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg transition-all duration-300 ${
                                i < Math.floor(product.rating) ? "text-primary animate-pulse-glow" : "text-muted"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviewCount})
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/30">
                        <div className="flex items-center gap-1 hover:text-primary transition">
                          <span>📥</span>
                          {product.downloadCount} downloads
                        </div>
                        <div className="flex items-center gap-1 text-primary animate-pulse-glow">
                          <span>📈</span>
                          Trending
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        className="w-full btn-primary-glow text-primary-foreground group hover:scale-105 transition-transform"
                        asChild
                      >
                        <a href={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
                          <span>🛒</span>
                          View & Buy
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
