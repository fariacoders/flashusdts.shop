"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MOCK_PRODUCTS } from "@/lib/products"

export default function AdminPanel() {
  const [products] = useState(MOCK_PRODUCTS)
  const [selectedProduct, setSelectedProduct] = useState<(typeof MOCK_PRODUCTS)[0] | null>(null)

  const totalRevenue = products.reduce((sum, p) => sum + p.price * p.downloadCount, 0)
  const totalDownloads = products.reduce((sum, p) => sum + p.downloadCount, 0)
  const avgRating = (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="border-b border-primary/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your marketplace</p>
          </div>
          <Button variant="outline" asChild>
            <a href="/">← Back to Store</a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="card-glow border-primary/30">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient">{products.length}</div>
              <p className="text-xs text-muted-foreground mt-2">Active listings</p>
            </CardContent>
          </Card>

          <Card className="card-glow border-primary/30">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient">{(totalDownloads / 1000).toFixed(1)}K</div>
              <p className="text-xs text-muted-foreground mt-2">All time</p>
            </CardContent>
          </Card>

          <Card className="card-glow border-primary/30">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient">${(totalRevenue / 100000).toFixed(1)}K</div>
              <p className="text-xs text-muted-foreground mt-2">Estimated</p>
            </CardContent>
          </Card>

          <Card className="card-glow border-primary/30">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient">{avgRating} ⭐</div>
              <p className="text-xs text-muted-foreground mt-2">Customer satisfaction</p>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card className="card-glow border-primary/30">
          <CardHeader>
            <CardTitle>Products Management</CardTitle>
            <CardDescription>View and manage all marketplace products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Downloads</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Rating</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-foreground">{product.title}</p>
                          <p className="text-xs text-muted-foreground">{product.slug}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gradient font-semibold">${(product.price / 100).toFixed(2)}</td>
                      <td className="py-3 px-4">{product.downloadCount.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className="text-yellow-500">{product.rating} ⭐</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedProduct(product)}
                          className="hover:bg-primary/20"
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl card-glow border-primary/30 max-h-[90vh] overflow-y-auto">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{selectedProduct.title}</CardTitle>
                  <CardDescription>{selectedProduct.slug}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProduct(null)}
                  className="text-2xl leading-none"
                >
                  ✕
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-2xl font-bold text-gradient">${(selectedProduct.price / 100).toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Downloads</p>
                    <p className="text-2xl font-bold text-gradient">{selectedProduct.downloadCount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="text-2xl font-bold text-yellow-500">{selectedProduct.rating} ⭐</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Reviews</p>
                    <p className="text-2xl font-bold text-gradient">{selectedProduct.reviewCount}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Description</p>
                  <p className="text-foreground">{selectedProduct.longDescription}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Seller</p>
                  <p className="text-foreground font-medium">{selectedProduct.seller.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedProduct.seller.followers.toLocaleString()} followers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
