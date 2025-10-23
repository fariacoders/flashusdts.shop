"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CryptoPaymentModalProps {
  isOpen: boolean
  onClose: () => void
  productTitle: string
  price: number
}

const CRYPTO_WALLETS = {
  bitcoin: {
    name: "Bitcoin",
    symbol: "BTC",
    address: "bc1quuhu0d0s3uxjnav225aa8gnz3sckyhc2qxhjyy",
    color: "from-orange-500 to-yellow-500",
    icon: "₿",
  },
  ethereum: {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x036A5065d103005D7CaF5d1Cd75ABE6644D69069",
    color: "from-purple-500 to-blue-500",
    icon: "Ξ",
  },
  solana: {
    name: "Solana",
    symbol: "SOL",
    address: "8Jvbxnz5jURQXmxMs6D5PbaLXQiXqckhhrQ8B9GQgBPa",
    color: "from-green-500 to-cyan-500",
    icon: "◎",
  },
  litecoin: {
    name: "Litecoin",
    symbol: "LTC",
    address: "ltc1qku6yluymt235lxvmpwcfcxsf45qsykvgmcqj45",
    color: "from-gray-400 to-gray-600",
    icon: "Ł",
  },
  tron: {
    name: "TRON (USDT)",
    symbol: "USDT",
    address: "TPuLoUNfiExZkvgbk69NRJJddatCZK1P1J",
    color: "from-red-500 to-pink-500",
    icon: "⟡",
  },
}

export default function CryptoPaymentModal({ isOpen, onClose, productTitle, price }: CryptoPaymentModalProps) {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [selectedCrypto, setSelectedCrypto] = useState<keyof typeof CRYPTO_WALLETS>("bitcoin")

  const copyToClipboard = (address: string, crypto: string) => {
    navigator.clipboard.writeText(address)
    setCopiedAddress(crypto)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-card border-primary/50 card-glow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <div>
            <CardTitle className="text-2xl text-gradient">Crypto Payment</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Send payment to receive instant access to {productTitle}
            </CardDescription>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-secondary/50 rounded-lg transition text-2xl">
            ✕
          </button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Product Info */}
          <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Product</p>
            <p className="text-lg font-semibold text-foreground">{productTitle}</p>
            <p className="text-2xl font-bold text-primary mt-2">${(price / 100).toFixed(2)}</p>
          </div>

          {/* Crypto Selection */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Select Payment Method</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(CRYPTO_WALLETS).map(([key, crypto]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCrypto(key as keyof typeof CRYPTO_WALLETS)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedCrypto === key ? `border-primary bg-primary/10` : `border-border hover:border-primary/50`
                  }`}
                >
                  <div className={`text-2xl mb-2 bg-gradient-to-br ${crypto.color} bg-clip-text text-transparent`}>
                    {crypto.icon}
                  </div>
                  <p className="text-sm font-semibold text-foreground">{crypto.symbol}</p>
                  <p className="text-xs text-muted-foreground">{crypto.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Wallet Address */}
          <div className="bg-card border border-primary/30 rounded-lg p-6">
            <p className="text-sm font-semibold text-foreground mb-4">
              Send {CRYPTO_WALLETS[selectedCrypto].name} to this address:
            </p>
            <div className="bg-background rounded-lg p-4 mb-4 break-all font-mono text-sm text-muted-foreground">
              {CRYPTO_WALLETS[selectedCrypto].address}
            </div>
            <Button
              onClick={() => copyToClipboard(CRYPTO_WALLETS[selectedCrypto].address, selectedCrypto)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {copiedAddress === selectedCrypto ? "✓ Copied!" : "📋 Copy Address"}
            </Button>
          </div>

          {/* Instructions */}
          <div className="bg-secondary/20 border border-secondary/50 rounded-lg p-4 space-y-3">
            <p className="text-sm font-semibold text-foreground">Payment Instructions:</p>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
              <li>Copy the wallet address above</li>
              <li>Open your crypto wallet or exchange</li>
              <li>Send the exact amount to the address</li>
              <li>Wait for confirmation (usually 5-30 minutes)</li>
              <li>You'll receive instant access to the product</li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button onClick={onClose} variant="outline" className="flex-1 border-glow bg-transparent">
              Cancel
            </Button>
            <Button
              onClick={() => {
                alert(
                  `Payment initiated for ${CRYPTO_WALLETS[selectedCrypto].name}. Please send the funds to the address above.`,
                )
                onClose()
              }}
              className="flex-1 btn-primary-glow text-primary-foreground"
            >
              I've Sent Payment
            </Button>
          </div>

          {/* Security Note */}
          <p className="text-xs text-muted-foreground text-center border-t border-border pt-4">
            🔒 All transactions are secure and verified on the blockchain. Your payment will be confirmed automatically.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
