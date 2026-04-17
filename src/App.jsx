import { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ShaderBackground from './components/ShaderBackground'
import SlideLayout from './components/SlideLayout'
import SlideNavigator from './components/SlideNavigator'
import CoverSlide from './slides/CoverSlide'
import TitleSlide from './slides/TitleSlide'
import LightBulbSlide from './slides/LightBulbSlide'
import NotWhyHereSlide from './slides/NotWhyHereSlide'
import BuildProductSlide from './slides/BuildProductSlide'
import ClaudeCodeSlide from './slides/ClaudeCodeSlide'
import YouTellItSlide from './slides/YouTellItSlide'
import AfterTwoMonthsSlide from './slides/AfterTwoMonthsSlide'
import VibeCodingSlide from './slides/VibeCodingSlide'
import AppShowcaseSlide from './slides/AppShowcaseSlide'
import ThankYouSlide from './slides/ThankYouSlide'
import AppStoreScreensSlide from './slides/AppStoreScreensSlide'
import ThreeTrendsSlide from './slides/ThreeTrendsSlide'
import FourParadigmsSlide from './slides/FourParadigmsSlide'
import GenieAiSlide from './slides/GenieAiSlide'
import NonDeterministicSlide from './slides/NonDeterministicSlide'
import DynamicDesignEnvironmentSlide from './slides/DynamicDesignEnvironmentSlide'
import InputOutputEveryTimeSlide from './slides/InputOutputEveryTimeSlide'
import InputOutputVariedSlide from './slides/InputOutputVariedSlide'
import TheaterSlide from './slides/TheaterSlide'
import FromCommandsToOutcomesSlide from './slides/FromCommandsToOutcomesSlide'
import BookingVideoSlide from './slides/BookingVideoSlide'
import PhoneFrameSlide from './slides/PhoneFrameSlide'
import SupermarketSlide from './slides/SupermarketSlide'
import IntentBasedInteractionSlide from './slides/IntentBasedInteractionSlide'
import ArticulatingIntentSlide from './slides/ArticulatingIntentSlide'
import BlankBoxSlide from './slides/BlankBoxSlide'
import ShouldWeEvenBeTypingSlide from './slides/ShouldWeEvenBeTypingSlide'
import MultimodalUISlide from './slides/MultimodalUISlide'
import SmartGlassesSlide from './slides/SmartGlassesSlide'
import BitterballenQuoteSlide from './slides/BitterballenQuoteSlide'
import ModalitiesCircleSlide from './slides/ModalitiesCircleSlide'
import FnKeySlide from './slides/FnKeySlide'
import MetasSolutionSlide from './slides/MetasSolutionSlide'
import Paradigm2TakeawaySlide from './slides/Paradigm2TakeawaySlide'
import AnticipatingUserNeedsSlide from './slides/AnticipatingUserNeedsSlide'
import PersonalisationSlide from './slides/PersonalisationSlide'
import NetflixSlide from './slides/NetflixSlide'
import PersonalisationExpandingSlide from './slides/PersonalisationExpandingSlide'
import NetflixDealSlide from './slides/NetflixDealSlide'
import ConcernDataSlide from './slides/ConcernDataSlide'
import DesignAroundThatSlide from './slides/DesignAroundThatSlide'
import MemoryDesignMaterialSlide from './slides/MemoryDesignMaterialSlide'
import MemoryDashboardSlide from './slides/MemoryDashboardSlide'
import DesignCraftQuestionSlide from './slides/DesignCraftQuestionSlide'
import FourConceptsMinimalSlide from './slides/FourConceptsMinimalSlide'
import VisualToolsUndefinedSlide from './slides/VisualToolsUndefinedSlide'
import VisualOnlyThinkingSlide from './slides/VisualOnlyThinkingSlide'
import PrototypeWithModelsSlide from './slides/PrototypeWithModelsSlide'
import FunctionalPrototypesExpandSlide from './slides/FunctionalPrototypesExpandSlide'
import ConclusionQuestionSlide from './slides/ConclusionQuestionSlide'
import DesignTheFutureSlide from './slides/DesignTheFutureSlide'
import RealMissionSlide from './slides/RealMissionSlide'

// Slide order: append new slides immediately before ThankYouSlide — closing slide must always be final.
const slides = [
  CoverSlide,
  TitleSlide,
  LightBulbSlide,
  BuildProductSlide,
  AppShowcaseSlide,
  AfterTwoMonthsSlide,
  VibeCodingSlide,
  AppStoreScreensSlide,
  ThreeTrendsSlide,
  NotWhyHereSlide,
  GenieAiSlide,
  ClaudeCodeSlide,
  YouTellItSlide,
  RealMissionSlide,
  FourParadigmsSlide,
  InputOutputEveryTimeSlide,
  InputOutputVariedSlide,
  NonDeterministicSlide,
  TheaterSlide,
  DynamicDesignEnvironmentSlide,
  FromCommandsToOutcomesSlide,
  BookingVideoSlide,
  PhoneFrameSlide,
  SupermarketSlide,
  IntentBasedInteractionSlide,
  ArticulatingIntentSlide,
  BlankBoxSlide,
  ShouldWeEvenBeTypingSlide,
  SmartGlassesSlide,
  BitterballenQuoteSlide,
  ModalitiesCircleSlide,
  MultimodalUISlide,
  FnKeySlide,
  MetasSolutionSlide,
  Paradigm2TakeawaySlide,
  AnticipatingUserNeedsSlide,
  PersonalisationSlide,
  NetflixSlide,
  PersonalisationExpandingSlide,
  NetflixDealSlide,
  ConcernDataSlide,
  DesignAroundThatSlide,
  MemoryDesignMaterialSlide,
  MemoryDashboardSlide,
  FourConceptsMinimalSlide,
  DesignCraftQuestionSlide,
  VisualToolsUndefinedSlide,
  VisualOnlyThinkingSlide,
  PrototypeWithModelsSlide,
  FunctionalPrototypesExpandSlide,
  ConclusionQuestionSlide,
  DesignTheFutureSlide,
  ThankYouSlide,
]

const slideLabels = [
  'Beyond Pixels',
  'Hi, I am Anna',
  'Light bulb moment',
  'Build a product',
  'App showcase',
  'After 2 months',
  'Vibe coding',
  'App Store screens',
  'Three trends',
  'Not why I’m here',
  'Genie AI',
  'Claude Code',
  'You tell it. It does it.',
  'The real mission',
  '4 paradigms',
  'Input A → B, every time',
  'Same input, different outputs',
  'Non-deterministic',
  'Theater',
  'Dynamic design environment',
  'From Commands to Outcomes',
  'Booking',
  'Device',
  'Supermarket',
  'Intent-based interaction',
  'Articulating intent',
  'Blank box',
  'Should we even be typing?',
  'Smart glasses',
  'Bitterballen quote',
  'Modalities circle',
  'Multimodal UI',
  'Fn key',
  'Meta’s solution',
  'Paradigm 3 takeaway',
  'Anticipating what the user needs',
  'Personalisation',
  'Netflix',
  'Personalisation expanding',
  'Netflix deal',
  'Email · calendar · Slack',
  'Design around that?',
  'Memory as design material',
  'Memory dashboard',
  'Four concepts',
  'So what does design craft mean?',
  'Undefined dimensions',
  'Visual-only thinking',
  'Prototype with models',
  'Functional prototypes',
  'Conclusion question',
  'Thank you',
]

const SLIDE_INDEX_KEY = 'keynote-slide-index'
const slideRoutes = slides.map((Slide, index) => ({
  index,
  path: `/${Slide.name}`,
}))
const slidePathToIndex = new Map(slideRoutes.map(({ path, index }) => [path, index]))

function normalizePath(pathname) {
  if (!pathname) return '/'
  if (pathname === '/') return pathname
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function getIndexFromPath(pathname) {
  return slidePathToIndex.get(normalizePath(pathname))
}

function readStoredSlideIndex() {
  try {
    const raw = localStorage.getItem(SLIDE_INDEX_KEY)
    if (raw == null) return 0
    const n = Number.parseInt(raw, 10)
    if (!Number.isFinite(n)) return 0
    return Math.max(0, Math.min(slides.length - 1, n))
  } catch {
    return 0
  }
}

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [current, setCurrent] = useState(() => {
    if (typeof window === 'undefined') return readStoredSlideIndex()
    const routeIndex = getIndexFromPath(window.location.pathname)
    return routeIndex ?? readStoredSlideIndex()
  })
  const [navOpen, setNavOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const touchStartRef = useRef(null)

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const goTo = useCallback((i) => {
    const nextIndex = Math.max(0, Math.min(slides.length - 1, i))
    const nextPath = slideRoutes[nextIndex].path
    setCurrent(nextIndex)
    if (normalizePath(location.pathname) !== nextPath) {
      navigate(nextPath)
    }
  }, [location.pathname, navigate])

  const next = useCallback(() => {
    setCurrent((p) => {
      const nextIndex = Math.min(p + 1, slides.length - 1)
      const nextPath = slideRoutes[nextIndex].path
      if (normalizePath(location.pathname) !== nextPath) {
        navigate(nextPath)
      }
      return nextIndex
    })
  }, [location.pathname, navigate])

  const prev = useCallback(() => {
    setCurrent((p) => {
      const nextIndex = Math.max(p - 1, 0)
      const nextPath = slideRoutes[nextIndex].path
      if (normalizePath(location.pathname) !== nextPath) {
        navigate(nextPath)
      }
      return nextIndex
    })
  }, [location.pathname, navigate])

  useEffect(() => {
    const routeIndex = getIndexFromPath(location.pathname)

    if (routeIndex != null) {
      if (routeIndex !== current) {
        setCurrent(routeIndex)
      }
      return
    }

    if (normalizePath(location.pathname) === '/') {
      const storedIndex = readStoredSlideIndex()
      setCurrent(storedIndex)
      navigate(slideRoutes[storedIndex].path, { replace: true })
      return
    }

    navigate(slideRoutes[current].path, { replace: true })
  }, [location.pathname, current, navigate])

  useEffect(() => {
    try {
      localStorage.setItem(SLIDE_INDEX_KEY, String(current))
    } catch {
      /* ignore quota / private mode */
    }
  }, [current])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && navOpen) {
        e.preventDefault()
        setNavOpen(false)
        return
      }
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'f') document.documentElement.requestFullscreen?.()
      if (e.key === 'Escape' && document.fullscreenElement) document.exitFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, navOpen])

  useEffect(() => {
    const onTouchStart = (e) => {
      const touch = e.changedTouches?.[0]
      if (!touch) return
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        t: Date.now(),
      }
    }

    const onTouchEnd = (e) => {
      const start = touchStartRef.current
      touchStartRef.current = null
      if (!start || navOpen) return

      const touch = e.changedTouches?.[0]
      if (!touch) return

      const dx = touch.clientX - start.x
      const dy = touch.clientY - start.y
      const dt = Date.now() - start.t

      const minSwipeDistance = 50
      const maxSwipeTimeMs = 800

      if (Math.abs(dx) < minSwipeDistance) return
      if (Math.abs(dx) <= Math.abs(dy)) return
      if (dt > maxSwipeTimeMs) return

      if (dx < 0) next()
      else prev()
    }

    const onTouchCancel = () => {
      touchStartRef.current = null
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('touchcancel', onTouchCancel, { passive: true })

    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchcancel', onTouchCancel)
    }
  }, [next, prev, navOpen])

  const Slide = slides[current]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Raleway:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { width: 100%; height: 100%; overflow: hidden; background: #000; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>

      <ShaderBackground />

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}>
        <SlideLayout
          slideKey={current}
          dissolve={slides[current] === ClaudeCodeSlide}
          style={
            slides[current] === AppStoreScreensSlide ||
            slides[current] === GenieAiSlide ||
            slides[current] === BookingVideoSlide ||
            slides[current] === SupermarketSlide ||
            slides[current] === SmartGlassesSlide ||
            slides[current] === NetflixSlide ||
            slides[current] === ClaudeCodeSlide
              ? { padding: 0, alignItems: 'stretch' }
              : undefined
          }
        >
          <Slide />
        </SlideLayout>
      </div>

      {!isFullscreen && (
        <SlideNavigator
          open={navOpen}
          onOpenChange={setNavOpen}
          currentIndex={current}
          onSelectSlide={goTo}
          labels={slideLabels}
        />
      )}

      {/* Navigation */}
      {!isFullscreen && (
        <div style={{
          position: 'fixed', bottom: 24, right: 32, zIndex: 10,
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <NavButton onClick={() => goTo(0)} title="Restart presentation" ariaLabel="Restart presentation">
            &#x21BA;
          </NavButton>
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
      )}

      {/* Fullscreen */}
      {!isFullscreen && (
        <NavButton
          onClick={() => {
            if (document.fullscreenElement) document.exitFullscreen()
            else document.documentElement.requestFullscreen?.()
          }}
          style={{ position: 'fixed', bottom: 24, left: 32, zIndex: 10, fontSize: 16 }}
        >
          &#x26F6;
        </NavButton>
      )}
    </>
  )
}

function NavButton({ children, onClick, style, title, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
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
