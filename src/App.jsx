import { useState, useEffect, useCallback } from 'react'
import ShaderBackground from './components/ShaderBackground'
import SlideLayout from './components/SlideLayout'
import CoverSlide from './slides/CoverSlide'
import TitleSlide from './slides/TitleSlide'
import WhatIDoSlide from './slides/WhatIDoSlide'
import DesignAISlide from './slides/DesignAISlide'
import ThankYouSlide from './slides/ThankYouSlide'

const slides = [CoverSlide, TitleSlide, WhatIDoSlide, DesignAISlide, ThankYouSlide]

export default function App() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((i) => {
    setCurrent((prev) => Math.max(0, Math.min(slides.length - 1, i)))
  }, [])

  const next = useCallback(() => setCurrent((p) => Math.min(p + 1, slides.length - 1)), [])
  const prev = useCallback(() => setCurrent((p) => Math.max(p - 1, 0)), [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'f') document.documentElement.requestFullscreen?.()
      if (e.key === 'Escape' && document.fullscreenElement) document.exitFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const Slide = slides[current]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Raleway:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { width: 100%; height: 100%; overflow: hidden; background: #000; }
      `}</style>

      <ShaderBackground />

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}>
        <SlideLayout slideKey={current}>
          <Slide />
        </SlideLayout>
      </div>

      {/* Navigation */}
      <div style={{
        position: 'fixed', bottom: 24, right: 32, zIndex: 10,
        display: 'flex', gap: 12, alignItems: 'center',
      }}>
        <NavButton onClick={prev}>&larr;</NavButton>
        <span style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          color: 'rgba(45,40,70,0.45)',
          minWidth: 48,
          textAlign: 'center',
        }}>
          {current + 1} / {slides.length}
        </span>
        <NavButton onClick={next}>&rarr;</NavButton>
      </div>

      {/* Fullscreen */}
      <NavButton
        onClick={() => {
          if (document.fullscreenElement) document.exitFullscreen()
          else document.documentElement.requestFullscreen?.()
        }}
        style={{ position: 'fixed', bottom: 24, left: 32, zIndex: 10, fontSize: 16 }}
      >
        &#x26F6;
      </NavButton>
    </>
  )
}

function NavButton({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: 'none',
        background: 'rgba(45,40,70,0.12)',
        color: '#2D2846',
        fontSize: 18,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        ...style,
      }}
    >
      {children}
    </button>
  )
}
