import { useEffect, useState } from 'react'

const LINE_1 = 'You tell it.'
const LINE_2 = 'It does it.'

const CHAR_INTERVAL = 55   // ms per character
const LINE_PAUSE = 500     // pause between lines

function useTypewriter(lines, charInterval = CHAR_INTERVAL, linePause = LINE_PAUSE) {
  const [displayed, setDisplayed] = useState(['', ''])

  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0
    let timeout

    function tick() {
      if (lineIndex >= lines.length) return

      const currentLine = lines[lineIndex]

      if (charIndex <= currentLine.length) {
        setDisplayed(prev => {
          const next = [...prev]
          next[lineIndex] = currentLine.slice(0, charIndex)
          return next
        })
        charIndex++
        timeout = setTimeout(tick, charInterval)
      } else {
        lineIndex++
        charIndex = 0
        if (lineIndex < lines.length) {
          timeout = setTimeout(tick, linePause)
        }
      }
    }

    timeout = setTimeout(tick, 400)
    return () => clearTimeout(timeout)
  }, [])

  return displayed
}

export default function YouTellItSlide() {
  const [line1, line2] = useTypewriter([LINE_1, LINE_2])

  const showCursor1 = line1.length < LINE_1.length
  const showCursor2 = line1.length === LINE_1.length && line2.length <= LINE_2.length

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        gap: 'clamp(6px, 1.5vh, 16px)',
      }}
    >
      <p style={lineStyle('#fff')}>
        {line1}
        {showCursor1 && <Cursor />}
      </p>
      <p style={lineStyle('rgba(255,255,255,0.38)')}>
        {line2}
        {showCursor2 && <Cursor />}
      </p>
    </div>
  )
}

function lineStyle(color) {
  return {
    fontFamily: "'Courier New', Courier, monospace",
    fontWeight: 700,
    fontSize: 'clamp(40px, 7.5vw, 100px)',
    color,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    minHeight: '1.2em',
    whiteSpace: 'pre',
  }
}

function Cursor() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '0.55em',
        height: '1em',
        background: '#fff',
        marginLeft: '0.08em',
        verticalAlign: 'text-bottom',
        animation: 'blink 0.8s step-start infinite',
      }}
    />
  )
}
