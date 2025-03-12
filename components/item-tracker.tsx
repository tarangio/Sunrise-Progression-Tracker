"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MinusCircle, PlusCircle, Edit2, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ItemTrackerProps {
  label: string
  count: number
  required: number
  onUpdate: (count: number) => void
  size?: "default" | "sm"
  className?: string
  highlight?: boolean
}

export default function ItemTracker({
  label,
  count,
  required,
  onUpdate,
  size = "default",
  className,
  highlight = false,
}: ItemTrackerProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(count.toString())

  const handleIncrement = () => {
    onUpdate(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      onUpdate(count - 1)
    }
  }

  const handleEditStart = () => {
    setInputValue(count.toString())
    setIsEditing(true)
  }

  const handleEditCancel = () => {
    setIsEditing(false)
  }

  const handleEditConfirm = () => {
    const newValue = Number.parseInt(inputValue)
    if (!isNaN(newValue) && newValue >= 0) {
      onUpdate(newValue)
    } else {
      setInputValue(count.toString())
    }
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEditConfirm()
    } else if (e.key === "Escape") {
      handleEditCancel()
    }
  }

  // Calculate the percentage
  const calculatePercentage = () => {
    if (required === 0) return 100
    return Math.min(Math.round((count / required) * 100), 100)
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-md border",
        highlight ? "bg-amber-900/20 border-amber-500/30" : "bg-gray-700/50 border-gray-600/50",
        size === "sm" ? "text-sm" : "",
        className,
      )}
    >
      <span
        className={cn("font-medium", highlight ? "text-amber-300" : "text-gray-200", size === "sm" ? "text-xs" : "")}
      >
        {label}
      </span>

      <div className="flex items-center gap-1">
        {isEditing ? (
          <>
            <Input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="w-16 h-8 text-center bg-gray-800 border-gray-600"
              autoFocus
            />
            <Button
              size="icon"
              variant="ghost"
              onClick={handleEditConfirm}
              className="h-7 w-7 text-green-400 hover:text-green-300 hover:bg-green-900/20"
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleEditCancel}
              className="h-7 w-7 text-red-400 hover:text-red-300 hover:bg-red-900/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <Button
              size="icon"
              variant="ghost"
              onClick={handleDecrement}
              disabled={count === 0}
              className={cn(
                "h-7 w-7",
                highlight
                  ? "text-amber-400 hover:text-amber-300 hover:bg-amber-900/20"
                  : "text-gray-400 hover:text-gray-300 hover:bg-gray-600/50",
              )}
            >
              <MinusCircle className="h-4 w-4" />
            </Button>

            <div
              className={cn(
                "flex items-center justify-center min-w-[4.5rem] h-7 px-2 rounded font-mono cursor-pointer",
                highlight ? "bg-amber-900/30 text-amber-300" : "bg-gray-800 text-gray-200",
              )}
              onClick={handleEditStart}
            >
              {count.toString().padStart(3, "0")}/{required.toString().padStart(3, "0")}
              <span className="ml-2 text-xs opacity-75">{calculatePercentage()}%</span>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={handleIncrement}
              className={cn(
                "h-7 w-7",
                highlight
                  ? "text-amber-400 hover:text-amber-300 hover:bg-amber-900/20"
                  : "text-gray-400 hover:text-gray-300 hover:bg-gray-600/50",
              )}
            >
              <PlusCircle className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={handleEditStart}
              className={cn(
                "h-7 w-7",
                highlight
                  ? "text-amber-400 hover:text-amber-300 hover:bg-amber-900/20"
                  : "text-gray-400 hover:text-gray-300 hover:bg-gray-600/50",
              )}
            >
              <Edit2 className="h-3.5 w-3.5" />
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

