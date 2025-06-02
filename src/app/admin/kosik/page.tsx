"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { AlertCircle, Minus, Plus, ShoppingCart, Trash } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import { Input } from "@/components/ui/input"
// Upravit importy pro novou strukturu API
import { get_cart, update_cart_item, remove_from_cart, clear_cart } from "@/apis_reqests/cart"

interface CartItem {
  id: number
  name: string
  description: string
  price: number
  category_id: number
  stock: number
  quantity: number
  mediaUrls: string[]
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  // Změnit volání funkcí v komponentě
  const fetchCart = async () => {
    setLoading(true)
    try {
      const data = await get_cart()
      setCartItems(data || [])
    } catch (err: any) {
      setError(err.message || "Nepodařilo se načíst košík")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const handleUpdateQuantity = async (productId: number, quantity: number) => {
    try {
      await update_cart_item(productId, quantity)
      toast({
        title: "Košík aktualizován",
        description: "Množství produktu bylo úspěšně aktualizováno.",
      })
      fetchCart()
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Chyba",
        description: err.message || "Nepodařilo se aktualizovat košík",
      })
    }
  }

  const handleRemoveItem = async (productId: number) => {
    try {
      await remove_from_cart(productId)
      toast({
        title: "Produkt odebrán",
        description: "Produkt byl úspěšně odebrán z košíku.",
      })
      fetchCart()
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Chyba",
        description: err.message || "Nepodařilo se odebrat produkt z košíku",
      })
    }
  }

  const handleClearCart = async () => {
    try {
      await clear_cart()
      toast({
        title: "Košík vyprázdněn",
        description: "Košík byl úspěšně vyprázdněn.",
      })
      fetchCart()
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Chyba",
        description: err.message || "Nepodařilo se vyprázdnit košík",
      })
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Košík"
        description="Správa obsahu košíku"
        action={
          cartItems.length > 0 && (
            <Button variant="outline" onClick={handleClearCart}>
              <Trash className="mr-2 h-4 w-4" />
              Vyprázdnit košík
            </Button>
          )
        }
      />

      <Card>
        <CardHeader>
          <CardTitle>Obsah košíku</CardTitle>
          <CardDescription>Přehled všech položek v košíku</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {loading ? (
            <div className="text-center py-4">Načítání košíku...</div>
          ) : cartItems.length > 0 ? (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produkt</TableHead>
                      <TableHead>Cena za kus</TableHead>
                      <TableHead>Množství</TableHead>
                      <TableHead>Celkem</TableHead>
                      <TableHead className="text-right">Akce</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {item.mediaUrls && item.mediaUrls.length > 0 ? (
                              <div className="relative h-12 w-12 overflow-hidden rounded-md">
                                <Image
                                  src={item.mediaUrls[0] || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div className="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                                <ShoppingCart className="h-6 w-6" />
                              </div>
                            )}
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {item.description.length > 50
                                  ? `${item.description.substring(0, 50)}...`
                                  : item.description}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.price.toLocaleString()} Kč</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                              <span className="sr-only">Snížit množství</span>
                            </Button>
                            <Input
                              type="number"
                              min="1"
                              max={item.stock}
                              value={item.quantity}
                              onChange={(e) => {
                                const value = Number.parseInt(e.target.value)
                                if (!isNaN(value) && value >= 1 && value <= item.stock) {
                                  handleUpdateQuantity(item.id, value)
                                }
                              }}
                              className="h-8 w-16 text-center"
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                              disabled={item.quantity >= item.stock}
                            >
                              <Plus className="h-4 w-4" />
                              <span className="sr-only">Zvýšit množství</span>
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>{(item.price * item.quantity).toLocaleString()} Kč</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Odebrat</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 flex justify-end">
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Souhrn košíku</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Mezisoučet:</span>
                      <span>{calculateTotal().toLocaleString()} Kč</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Celkem:</span>
                      <span>{calculateTotal().toLocaleString()} Kč</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">Košík je prázdný</h3>
              <p className="text-muted-foreground mt-1">V košíku nejsou žádné položky</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
