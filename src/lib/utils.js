import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date)
}

export function generateId() {
  return Math.random().toString(36).substring(2, 15)
}

export function getRandomColor() {
  const colors = [
    "#FF7E00", "#FF9500", "#FFB700", "#FF5722", "#FF3D00",
    "#FF6D00", "#FF9100", "#FFAB00", "#FF6F00", "#FF8F00"
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}
