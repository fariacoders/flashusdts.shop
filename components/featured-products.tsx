"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FeaturedProduct {
  id: number
  title: string
  slug: string
  description: string
  price: number
  rating: number
  badge: string | null
  thumbnail: string
}

interface FeaturedProductsProps {
  products: FeaturedProduct[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in-up">Featured Products</h2>
        <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Handpicked premium tools trusted by thousands of developers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product, idx) => (
          <Card
            key={product.id}
            className="card-hover card-glow bg-card border-border/50 overflow-hidden group relative hover:scale-105 transition-all duration-300"
            style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
          >
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 right-4 z-20 animate-bounce-in">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold shadow-lg shadow-primary/50">
                  <span>⭐</span>
                  {product.badge}
                </span>
              </div>
            )}

            {/* Image */}
            <div className="aspect-video bg-gradient-dark overflow-hidden relative">
              <img
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <Button
                  size="sm"
                  className="btn-primary-glow text-primary-foreground w-full hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={`/products/${product.slug}`}>View Details</a>
                </Button>
              </div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <CardTitle className="text-lg line-clamp-2 text-foreground group-hover:text-primary transition">
                    {product.title}
                  </CardTitle>
                </div>
                <span className="text-xl font-bold text-primary whitespace-nowrap animate-pulse-glow">
                  ${(product.price / 100).toFixed(2)}
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
                <span className="text-sm text-muted-foreground">{product.rating}</span>
              </div>

              <Button
                className="w-full btn-primary-glow text-primary-foreground group hover:scale-105 transition-transform"
                asChild
              >
                <a href={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
                  <span>🛍️</span>
                  Buy Now
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
