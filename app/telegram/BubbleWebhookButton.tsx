"use client"

import React from "react"

export const BubbleWebhookButton = () => {
  const handleClick = () => {
    window.open(
      "https://niurkateam.app.n8n.cloud/webhook/bf6bc2c4-bfb9-4150-88b7-6daf0e1ec516/chat",
      "_blank",
      "width=600,height=700,scrollbars=yes,resizable=yes"
    )
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
      title="Contáctanos"
    >
      💬
    </button>
  )
}
