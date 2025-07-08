export type Class = {
  id: number | string
  name: string
  description: string
  category: string
  type: "no private" | "private"
  startDate: number
  endDate: number
  price: number
  status: "active" | "inactive" | "upcoming" | "on going"
  image?: string
  color?: string
  icon?: string
}