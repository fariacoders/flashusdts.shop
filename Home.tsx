"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { APP_LOGO, APP_TITLE } from "./config"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedProducts } from "@/components/featured-products"
import { MOCK_PRODUCTS } from "@/lib/products"
import { AnimatedLogo } from "@/components/animated-logo"
import { CryptoIconsAnimation } from "@/components/crypto-icons-animation"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center py-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-8 animate-slide-up animate-glow-pulse">
              <AnimatedLogo />
              <span className="text-sm text-primary font-medium">Premium Developer Marketplace</span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-gradient">Premium Developer</span>
              <br />
              <span className="text-gradient">Tools & Scripts</span>
            </h2>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Discover, buy, and instantly access high-quality code snippets, automation scripts, and educational
              materials from expert developers worldwide.
            </p>

            <div className="flex gap-4 justify-center flex-wrap animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button
                size="lg"
                className="btn-primary-glow text-primary-foreground group text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
                asChild
              >
                <a href="/products" className="flex items-center gap-2">
                  <span>🔥</span>
                  Browse Products
                  <span>→</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-glow bg-transparent text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
                asChild
              >
                <a href="/blog">Learn More</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-24 border-t border-primary/20">
              <div
                className="animate-slide-up hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-pulse-glow">2,500+</div>
                <div className="text-muted-foreground">Products Available</div>
              </div>
              <div
                className="animate-slide-up hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-pulse-glow">50K+</div>
                <div className="text-muted-foreground">Active Developers</div>
              </div>
              <div
                className="animate-slide-up hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 animate-pulse-glow">$10M+</div>
                <div className="text-muted-foreground">Total Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Icons Animation Section */}
      <section className="bg-card/50 border-y border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6 text-sm font-medium">SUPPORTED CRYPTOCURRENCIES</p>
          <CryptoIconsAnimation />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card/50 border-t border-b border-primary/20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center animate-fade-in-up">
            Why Choose FLASH USDTS SHOP?
          </h3>
          <p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Everything you need for a seamless developer experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💻",
                title: "High-Quality Code",
                description: "Vetted scripts and snippets from experienced developers, ready to use in your projects.",
                delay: "0s",
              },
              {
                icon: "⚡",
                title: "Instant Delivery",
                description:
                  "Purchase once, download immediately. No waiting, no delays. Get what you need right away.",
                delay: "0.1s",
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                description: "Industry-standard encryption and trusted payment processing. Your data is safe with us.",
                delay: "0.2s",
              },
              {
                icon: "📈",
                title: "Community Driven",
                description: "Join a community of developers sharing knowledge, solutions, and best practices.",
                delay: "0.3s",
              },
            ].map((feature, idx) => {
              return (
                <Card
                  key={idx}
                  className="card-hover card-glow bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300"
                  style={{ animation: `slideInUp 0.6s ease-out ${feature.delay} forwards`, opacity: 0 }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 border border-primary/30 text-2xl">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-24">
        <FeaturedProducts products={MOCK_PRODUCTS} />
      </section>

      {/* Category Showcase Section */}
      <section className="bg-card/50 border-y border-primary/20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="container mx-auto px-4 relative z-10">
          <CategoryShowcase onCategorySelect={() => {}} selectedCategory={null} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="relative overflow-hidden rounded-2xl p-12 md:p-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-primary/30 hover:border-primary/50 transition-all duration-300">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6 animate-bounce-in">
              <span className="text-lg">🚀</span>
              <span className="text-sm text-primary font-medium">Get Started Today</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
              Ready to Accelerate Your Development?
            </h3>
            <p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Browse our marketplace and find the premium tools you need to build faster, smarter, and better.
            </p>
            <Button
              size="lg"
              className="btn-primary-glow text-primary-foreground group text-lg px-8 py-6 hover:scale-105 transition-transform duration-300 animate-bounce-in"
              asChild
            >
              <a href="/products" className="flex items-center gap-2">
                Explore Products Now
                <span>→</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="animate-fade-in-up">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                {APP_LOGO && <img src={APP_LOGO || "/placeholder.svg"} alt={APP_TITLE} className="h-5 w-5" />}
                FLASH USDTS SHOP
              </h4>
              <p className="text-sm text-muted-foreground">The premium marketplace for developer tools and scripts.</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-bold text-foreground mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/products"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Browse All
                  </a>
                </li>
                <li>
                  <a
                    href="/products?category=automation"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/products?category=web-scraper"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Web Scrapers
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-bold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/blog"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-primary transition duration-200 hover:translate-x-1 inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
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
        </div>
      </footer>
    </div>
  )
}

export default Home
