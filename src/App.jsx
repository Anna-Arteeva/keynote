import { useState, useEffect, useCallback, useRef } from 'react'
import ShaderBackground from './components/ShaderBackground'
import SlideLayout from './components/SlideLayout'
import SlideNavigator from './components/SlideNavigator'
import CoverSlide from './slides/CoverSlide'
import TitleSlide from './slides/TitleSlide'
import LightBulbSlide from './slides/LightBulbSlide'
import WorkflowToolsRolesSlide from './slides/WorkflowToolsRolesSlide'
import NotWhyHereSlide from './slides/NotWhyHereSlide'
import BuildProductSlide from './slides/BuildProductSlide'
import ClaudeCodeSlide from './slides/ClaudeCodeSlide'
import AfterTwoMonthsSlide from './slides/AfterTwoMonthsSlide'
import AppShowcaseSlide from './slides/AppShowcaseSlide'
import ThankYouSlide from './slides/ThankYouSlide'
import AppStoreScreensSlide from './slides/AppStoreScreensSlide'
import ChangesEverythingSlide from './slides/ChangesEverythingSlide'
import ThreeTrendsSlide from './slides/ThreeTrendsSlide'
import CannotMockFigmaSlide from './slides/CannotMockFigmaSlide'
import FourParadigmsSlide from './slides/FourParadigmsSlide'
import GenieAiSlide from './slides/GenieAiSlide'
import InvisibleAdaptiveSlide from './slides/InvisibleAdaptiveSlide'
import NonDeterministicSlide from './slides/NonDeterministicSlide'
import InputOutputEveryTimeSlide from './slides/InputOutputEveryTimeSlide'
import InputOutputVariedSlide from './slides/InputOutputVariedSlide'
import FromCommandsToOutcomesSlide from './slides/FromCommandsToOutcomesSlide'
import BookingVideoSlide from './slides/BookingVideoSlide'
import PhoneFrameSlide from './slides/PhoneFrameSlide'
import ArticulatingIntentSlide from './slides/ArticulatingIntentSlide'
import BlankBoxSlide from './slides/BlankBoxSlide'
import MultimodalUISlide from './slides/MultimodalUISlide'
import ModalitiesCircleSlide from './slides/ModalitiesCircleSlide'
import FnKeySlide from './slides/FnKeySlide'
import GoogleLensVideoSlide from './slides/GoogleLensVideoSlide'
import FailureModeSlide from './slides/FailureModeSlide'
import MetasSolutionSlide from './slides/MetasSolutionSlide'
import Paradigm2TakeawaySlide from './slides/Paradigm2TakeawaySlide'
import PersonalisationSlide from './slides/PersonalisationSlide'
import NetflixSlide from './slides/NetflixSlide'
import PersonalisationExpandingSlide from './slides/PersonalisationExpandingSlide'
import NetflixDealSlide from './slides/NetflixDealSlide'
import ConcernDataSlide from './slides/ConcernDataSlide'
import DesignAroundThatSlide from './slides/DesignAroundThatSlide'
import MemoryDesignMaterialSlide from './slides/MemoryDesignMaterialSlide'
import MemoryDashboardSlide from './slides/MemoryDashboardSlide'
import GenerativeUIImageSlide from './slides/GenerativeUIImageSlide'
import AgenticAISlide from './slides/AgenticAISlide'
import WhoUsesYourProductSlide from './slides/WhoUsesYourProductSlide'
import AgentsPrimaryUsersSlide from './slides/AgentsPrimaryUsersSlide'
import AgentsOnYourBehalfSlide from './slides/AgentsOnYourBehalfSlide'
import AgentSafetyQuestionsSlide from './slides/AgentSafetyQuestionsSlide'
import PerplexityVideoSlide from './slides/PerplexityVideoSlide'
import ComplementNotReplaceSlide from './slides/ComplementNotReplaceSlide'
import WhatCraftMeansNowSlide from './slides/WhatCraftMeansNowSlide'
import FourConceptsMinimalSlide from './slides/FourConceptsMinimalSlide'
import VisualToolsUndefinedSlide from './slides/VisualToolsUndefinedSlide'
import VisualOnlyThinkingSlide from './slides/VisualOnlyThinkingSlide'
import PrototypeWithModelsSlide from './slides/PrototypeWithModelsSlide'
import FunctionalPrototypesExpandSlide from './slides/FunctionalPrototypesExpandSlide'
import ConclusionQuestionSlide from './slides/ConclusionQuestionSlide'

// Slide order: append new slides immediately before ThankYouSlide — closing slide must always be final.
const slides = [
  CoverSlide,
  TitleSlide,
  LightBulbSlide,
  BuildProductSlide,
  AppShowcaseSlide,
  AfterTwoMonthsSlide,
  AppStoreScreensSlide,
  ChangesEverythingSlide,
  ThreeTrendsSlide,
  WorkflowToolsRolesSlide,
  NotWhyHereSlide,
  GenieAiSlide,
  ClaudeCodeSlide,
  InvisibleAdaptiveSlide,
  CannotMockFigmaSlide,
  FourParadigmsSlide,
  NonDeterministicSlide,
  InputOutputEveryTimeSlide,
  InputOutputVariedSlide,
  FromCommandsToOutcomesSlide,
  BookingVideoSlide,
  PhoneFrameSlide,
  ArticulatingIntentSlide,
  BlankBoxSlide,
  MultimodalUISlide,
  ModalitiesCircleSlide,
  FnKeySlide,
  GoogleLensVideoSlide,
  FailureModeSlide,
  MetasSolutionSlide,
  Paradigm2TakeawaySlide,
  PersonalisationSlide,
  NetflixSlide,
  PersonalisationExpandingSlide,
  NetflixDealSlide,
  ConcernDataSlide,
  DesignAroundThatSlide,
  MemoryDesignMaterialSlide,
  MemoryDashboardSlide,
  GenerativeUIImageSlide,
  AgenticAISlide,
  WhoUsesYourProductSlide,
  AgentsPrimaryUsersSlide,
  AgentsOnYourBehalfSlide,
  AgentSafetyQuestionsSlide,
  PerplexityVideoSlide,
  ComplementNotReplaceSlide,
  WhatCraftMeansNowSlide,
  FourConceptsMinimalSlide,
  VisualToolsUndefinedSlide,
  VisualOnlyThinkingSlide,
  PrototypeWithModelsSlide,
  FunctionalPrototypesExpandSlide,
  ConclusionQuestionSlide,
  ThankYouSlide,
]

const slideLabels = [
  'Beyond Pixels',
  'Hi, I am Anna',
  'Light bulb moment',
  'Build a product',
  'App showcase',
  'After 2 months',
  'App Store screens',
  'This changes everything',
  'Three trends',
  'Workflow, tools, roles',
  'Not why I’m here',
  'Genie AI',
  'Claude Code',
  'Invisible · Adaptive',
  'Cannot mock in Figma',
  '4 paradigms',
  'Non-deterministic',
  'Input A → B, every time',
  'Same input, different outputs',
  'From Commands to Outcomes',
  'Booking',
  'Device',
  'Articulating intent',
  'Blank box',
  'Multimodal UI',
  'Modalities circle',
  'Fn key',
  'Google Lens',
  'Failure mode',
  'Meta’s solution',
  'Paradigm 2 takeaway',
  'Personalisation',
  'Netflix',
  'Personalisation expanding',
  'Netflix deal',
  'Email · calendar · Slack',
  'Design around that?',
  'Memory as design material',
  'Memory dashboard',
  'Generative UI examples',
  'Agentic AI',
  'Who uses your product?',
  'Agents as primary users',
  'On your behalf',
  'Agent safety boundaries',
  'Perplexity video',
  'Complement, not replace',
  'What craft means now',
  'Four concepts',
  'Undefined dimensions',
  'Visual-only thinking',
  'Prototype with models',
  'Functional prototypes',
  'Conclusion question',
  'Thank you',
]

const SLIDE_INDEX_KEY = 'keynote-slide-index'

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
  const [current, setCurrent] = useState(() => readStoredSlideIndex())
  const [navOpen, setNavOpen] = useState(false)
  const touchStartRef = useRef(null)

  const goTo = useCallback((i) => {
    setCurrent(Math.max(0, Math.min(slides.length - 1, i)))
  }, [])

  const next = useCallback(() => setCurrent((p) => Math.min(p + 1, slides.length - 1)), [])
  const prev = useCallback(() => setCurrent((p) => Math.max(p - 1, 0)), [])

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
      `}</style>

      <ShaderBackground />

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}>
        <SlideLayout
          slideKey={current}
          dissolve={slides[current] === ClaudeCodeSlide}
          style={
            slides[current] === AppStoreScreensSlide ||
            slides[current] === ChangesEverythingSlide ||
            slides[current] === GenieAiSlide ||
            slides[current] === BookingVideoSlide ||
            slides[current] === GoogleLensVideoSlide ||
            slides[current] === NetflixSlide ||
            slides[current] === ClaudeCodeSlide ||
            slides[current] === PerplexityVideoSlide
              ? { padding: 0, alignItems: 'stretch' }
              : undefined
          }
        >
          <Slide />
        </SlideLayout>
      </div>

      <SlideNavigator
        open={navOpen}
        onOpenChange={setNavOpen}
        currentIndex={current}
        onSelectSlide={goTo}
        labels={slideLabels}
      />

      {/* Navigation */}
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
