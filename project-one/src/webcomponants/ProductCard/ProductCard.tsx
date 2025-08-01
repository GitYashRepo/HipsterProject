import { Star } from "lucide-react"



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


export default ProductCard
