"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import CryptoPaymentModal from "@/components/crypto-payment-modal"
import { getProductBySlug } from "@/lib/products"

export default function ProductDetail({ slug }: { slug: string }) {
  const PRODUCT = getProductBySlug(slug)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showCryptoPayment, setShowCryptoPayment] = useState(false)

  if (!PRODUCT) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/products">Back to Products</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CryptoPaymentModal
        isOpen={showCryptoPayment}
        onClose={() => setShowCryptoPayment(false)}
        productTitle={PRODUCT.title}
        price={PRODUCT.price}
      />

      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/products" className="text-muted-foreground hover:text-primary transition flex items-center gap-2">
            ← Back to Products
          </a>
        </div>
      </nav>

      {/* Product Hero Section */}
      <section className="bg-gradient-dark border-b border-border relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="animate-slide-up">
              <div className="relative group">
                <div className="aspect-square bg-secondary rounded-2xl overflow-hidden border border-border/50 card-glow">
                  <img
                    src={PRODUCT.thumbnail || "/placeholder.svg"}
                    alt={PRODUCT.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    {PRODUCT.badge && (
                      <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        ⚡ {PRODUCT.badge}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-card border border-border hover:border-primary transition"
                >
                  <span className={`text-2xl ${isFavorite ? "text-primary" : "text-muted-foreground"}`}>
                    {isFavorite ? "❤️" : "🤍"}
                  </span>
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="mb-6">
                <span className="text-sm text-primary font-semibold uppercase tracking-wide">
                  {PRODUCT.category.replace("-", " ")}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">{PRODUCT.title}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${i < Math.floor(PRODUCT.rating) ? "text-primary" : "text-muted"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-foreground">{PRODUCT.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({PRODUCT.reviewCount} reviews)</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    📥 {PRODUCT.downloadCount} downloads
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{PRODUCT.description}</p>

                {/* Price and CTA */}
                <div className="bg-card border border-border/50 rounded-xl p-6 mb-8">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold text-primary">${Math.round(PRODUCT.price / 100)}</span>
                    <span className="text-muted-foreground">one-time payment</span>
                  </div>

                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 border border-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-muted-foreground hover:text-foreground transition"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-muted-foreground hover:text-foreground transition"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <Button className="w-full btn-primary-glow text-primary-foreground text-lg py-6 mb-3 group" size="lg">
                    🛒 Buy Now →
                  </Button>

                  <Button variant="outline" className="w-full border-glow py-6 mb-3 bg-transparent" size="lg">
                    Add to Cart
                  </Button>

                  <Button
                    onClick={() => setShowCryptoPayment(true)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6"
                    size="lg"
                  >
                    💰 Pay with Crypto
                  </Button>
                </div>

                {/* Seller Info */}
                <Card className="card-glow bg-secondary/50 border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={PRODUCT.seller.avatar || "/placeholder.svg"}
                        alt={PRODUCT.seller.name}
                        className="w-16 h-16 rounded-full object-cover border border-border"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">{PRODUCT.seller.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          ⭐ {PRODUCT.seller.rating} rating
                          <span>•</span>👥 {PRODUCT.seller.followers} followers
                        </div>
                      </div>
                      <Button variant="outline" className="border-glow bg-transparent" size="sm">
                        View Store
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {PRODUCT.features && PRODUCT.features.length > 0 && (
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT.features.map((feature, idx) => (
              <Card
                key={idx}
                className="card-hover card-glow bg-card border-border/50"
                style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl">✨</span>
                  </div>
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* What's Included */}
      {PRODUCT.includes && PRODUCT.includes.length > 0 && (
        <section className="bg-card/50 border-y border-border py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRODUCT.includes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition"
                  style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.05}s forwards`, opacity: 0 }}
                >
                  <span className="text-2xl">✅</span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications */}
      {PRODUCT.specifications && PRODUCT.specifications.length > 0 && (
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Technical Specifications</h2>
          <Card className="card-glow bg-card border-border/50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PRODUCT.specifications.map((spec, idx) => (
                  <div key={idx} className="border-b border-border/30 pb-6 last:border-0">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      {spec.label}
                    </h4>
                    <p className="text-lg text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Reviews Section */}
      {PRODUCT.reviews && PRODUCT.reviews.length > 0 && (
        <section className="bg-card/50 border-y border-border py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12">Customer Reviews</h2>
            <div className="space-y-6">
              {PRODUCT.reviews.map((review, idx) => (
                <Card
                  key={idx}
                  className="card-glow bg-card border-border/50"
                  style={{ animation: `slideInUp 0.6s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-foreground">{review.author}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-lg ${i < review.rating ? "text-primary" : "text-muted"}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground mb-4">{review.comment}</p>
                    <button className="text-sm text-primary hover:text-primary/80 transition flex items-center gap-1">
                      👍 Helpful ({review.helpful})
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-2xl p-12 md:p-20 bg-gradient-primary">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers using {PRODUCT.title} to achieve their goals.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
              asChild
            >
              <a href="#" className="flex items-center gap-2">
                Purchase Now →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-12 text-center text-muted-foreground">
          <p>
            &copy; 2025 FLASH USDTS SHOP. All rights reserved. |{" "}
            <a
              href="https://t.me/FlashUsdtsShop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Join our Telegram
            </a>{" "}
            | Secure marketplace for developers.
          </p>
        </div>
      </footer>
    </div>
  )
}
