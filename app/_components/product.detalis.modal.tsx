'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Product } from "@/types/product"

interface ProductDetailsModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onBuy: () => void
}

export function ProductDetailsModal({ product, isOpen, onClose, onBuy }: ProductDetailsModalProps) {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="relative aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{product.brand}</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <p className="text-sm">
              High-quality product from {product.brand}. Perfect for {product.category.toLowerCase()} enthusiasts.
            </p>
            <Button onClick={onBuy} className="w-full mt-4">
              Buy Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
