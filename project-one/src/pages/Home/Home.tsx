import type React from "react"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Star } from "lucide-react"
import { fetchProducts } from "../../store/productSlice"
import type { RootState, AppDispatch } from "../../store"

interface Rating {
  rate: number
  count: number
}

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const filledStars = Math.round(product.rating.rate)
  const emptyStars = 5 - filledStars

  return (
    <div className="relative overflow-hidden rounded-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-card text-card-foreground border-border">
      <div className="p-0">
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="transition-transform duration-300 hover:scale-105 p-4 object-contain"
          />
        </div>
      </div>
      <div className="p-4 grid gap-2">
        <div className="text-lg font-semibold line-clamp-2 min-h-[3rem]">{product.title}</div>
        <p className="text-sm text-muted-foreground line-clamp-1">{product.category}</p>
        <div className="flex items-center gap-1 text-sm">
          {Array.from({ length: filledStars }).map((_, i) => (
            <Star key={`filled-${i}`} className="w-4 h-4 fill-primary text-primary" />
          ))}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <Star key={`empty-${i}`} className="w-4 h-4 fill-muted stroke-muted-foreground" />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">({product.rating.count})</span>
        </div>
        <p className="text-2xl font-bold text-foreground mt-2">${product.price.toFixed(2)}</p>
      </div>
      <div className="p-4 pt-0">
        <button className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { items: products, loading, error } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading === "pending") {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)] text-foreground">
        <p className="text-lg">Loading products...</p>
      </div>
    )
  }

  if (loading === "failed") {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)] text-destructive">
        <p className="text-lg">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
