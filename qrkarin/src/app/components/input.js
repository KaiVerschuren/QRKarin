'use client'
import { useState } from 'react'
import QRCode from 'qrcode'

export default function Input() {
  const [text, setText] = useState('')

  const generateAndDownloadQR = async () => {
    if (!text) return

    const dataUrl = await QRCode.toDataURL(text)
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = 'qr.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <input
        placeholder="Link, text, etc."
        className="w-96 h-6 border-[1px] rounded-lg border-slate-100 text-slate-100 px-4 py-6 outline-0 text-2xl"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={generateAndDownloadQR}
      >
        Generate & Save
      </button>
    </>
  )
}
