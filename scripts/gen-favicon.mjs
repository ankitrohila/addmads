// Generates favicon.svg, favicon-32.png, favicon.ico (raw 32x32 BMP-in-ICO), apple-touch-icon.png
// Run: node scripts/gen-favicon.mjs
import { createCanvas } from 'canvas'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.resolve(__dirname, '../public')
fs.mkdirSync(OUT, { recursive: true })

function drawIcon(size) {
  const canvas = createCanvas(size, size)
  const ctx = canvas.getContext('2d')
  const r = size * 0.1875 // corner radius ~6/32

  // Dark background with rounded corners
  ctx.beginPath()
  ctx.moveTo(r, 0)
  ctx.lineTo(size - r, 0)
  ctx.arcTo(size, 0, size, r, r)
  ctx.lineTo(size, size - r)
  ctx.arcTo(size, size, size - r, size, r)
  ctx.lineTo(r, size)
  ctx.arcTo(0, size, 0, size - r, r)
  ctx.lineTo(0, r)
  ctx.arcTo(0, 0, r, 0, r)
  ctx.closePath()
  ctx.fillStyle = '#111111'
  ctx.fill()

  const fontSize = Math.round(size * 0.5)
  ctx.font = `900 ${fontSize}px system-ui, Arial, sans-serif`
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'

  // Measure so we can split "A" and "M" precisely
  const text = 'AM'
  const totalW = ctx.measureText(text).width
  const aW = ctx.measureText('A').width
  const mW = ctx.measureText('M').width
  const gap = (totalW - aW - mW) * 0.5 // kern gap

  const startX = (size - totalW) / 2

  // Draw "A" in white
  ctx.fillStyle = '#FFFFFF'
  ctx.fillText('A', startX + aW / 2, size / 2)

  // Draw "M" in red
  ctx.fillStyle = '#E60000'
  ctx.fillText('M', startX + aW + gap + mW / 2, size / 2)

  return canvas
}

// SVG (vector — best quality, supported in all modern browsers)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#111111"/>
  <text x="4" y="23" font-family="system-ui,Arial,sans-serif" font-weight="900" font-size="14" fill="#FFFFFF">A</text>
  <text x="16" y="23" font-family="system-ui,Arial,sans-serif" font-weight="900" font-size="14" fill="#E60000">M</text>
</svg>`
fs.writeFileSync(path.join(OUT, 'favicon.svg'), svg)
console.log('✓ favicon.svg')

// 32×32 PNG
const c32 = drawIcon(32)
fs.writeFileSync(path.join(OUT, 'favicon-32.png'), c32.toBuffer('image/png'))
console.log('✓ favicon-32.png')

// 180×180 Apple Touch Icon (iOS home screen)
const c180 = drawIcon(180)
fs.writeFileSync(path.join(OUT, 'apple-touch-icon.png'), c180.toBuffer('image/png'))
console.log('✓ apple-touch-icon.png')

// 192×192 for Android
const c192 = drawIcon(192)
fs.writeFileSync(path.join(OUT, 'icon-192.png'), c192.toBuffer('image/png'))
console.log('✓ icon-192.png')

console.log('All favicon files written to /public')
