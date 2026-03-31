import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]
const FN_HIGHLIGHT = '#d8c4f0'
const sans = "'Raleway', sans-serif"

function GlobeIcon() {
  const size = 22
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function GlobeIconSmall() {
  const size = 18
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

/** Irregular start offsets so bars don’t read as a left→right wave. */
const PULSE_DELAYS_S = [0, 0.42, 0.11, 0.58, 0.24, 0.51, 0.07, 0.35, 0.19]

function SoundBars() {
  const bars = Array.from({ length: 9 })
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 3,
        width: '100%',
        height: '100%',
        padding: '0 10px',
      }}
      aria-hidden
    >
      {bars.map((_, i) => {
        const minH = 6 + (i % 2)
        const maxH = 18 + (i % 4) * 2.5
        const duration = 3.6 + ((i * 7) % 5) * 0.55
        return (
          <motion.div
            key={i}
            style={{
              width: 4,
              borderRadius: 3,
              background: '#fff',
              opacity: 0.95,
              flexShrink: 0,
              boxShadow: '0 0 14px rgba(255,255,255,0.08)',
            }}
            animate={{
              height: [minH, maxH, minH],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1],
              delay: PULSE_DELAYS_S[i],
              times: [0, 0.42, 1],
            }}
          />
        )
      })}
    </div>
  )
}

const PILL_W = 132
const PILL_H = 30
const DOTS_W = 156
const DOTS_H = 44
const SIDE = 44
const GAP = 10
const WHISPR_PILL_MS = 2000
const WHISPR_TO_INPUT_MS = WHISPR_PILL_MS + 650
const PROMPTS = [
  'Draft a concise keynote opening that explains how multimodal input makes AI feel instant and personal.',
  'Create a short vision statement about designing AI tools that respond to context, intent, and constraints in real time.',
  'Write a playful paragraph about how input from voice, gestures, and screens can make AI feel more human and less robotic.',
]

// eslint-disable-next-line react/prop-types
function WhisprFlow({ active }) {
  const [expanded, setExpanded] = useState(false)
  const tidRef = useRef(null)

  useEffect(() => {
    if (!active) {
      setExpanded(false)
      if (tidRef.current) window.clearTimeout(tidRef.current)
      return
    }

    // Step 1: show the semi-transparent pill.
    setExpanded(false)
    tidRef.current = window.setTimeout(() => {
      // Step 2: morph to the sound-bars state + reveal side controls.
      setExpanded(true)
    }, WHISPR_PILL_MS)

    return () => {
      if (tidRef.current) window.clearTimeout(tidRef.current)
    }
  }, [active])

  if (!active) return null

  const morphTransition = { duration: 0.62, ease }
  const sideTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] }

  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 'clamp(28px, 6vh, 56px)',
        transform: 'translateX(-50%)',
        zIndex: 5,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'min(94vw, 520px)',
      }}
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="caption"
            role="presentation"
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
            transition={{ duration: 0.42, ease, delay: 0.12 }}
            style={{
              width: '100%',
              marginBottom: 12,
              padding: '14px 20px',
              borderRadius: 9999,
              background: 'rgba(12, 12, 14, 0.92)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: sans,
                fontSize: 'clamp(13px, 2.8vw, 15px)',
                fontWeight: 500,
                color: '#fff',
                textAlign: 'center',
                lineHeight: 1.45,
              }}
            >
              Click or hold{' '}
              <span style={{ color: FN_HIGHLIGHT, fontWeight: 600 }}>fn</span>
              {' '}to start dictating
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        role="presentation"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={false}
          animate={{
            width: expanded ? SIDE : 0,
            marginRight: expanded ? GAP : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={sideTransition}
          style={{
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <motion.div
            animate={{ x: expanded ? 0 : 18 }}
            transition={sideTransition}
            style={{
              width: SIDE,
              height: SIDE,
              borderRadius: '50%',
              background: 'rgba(10, 10, 12, 0.94)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            <GlobeIconSmall />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.96, scale: 0.98 }}
          animate={{
            width: expanded ? DOTS_W : PILL_W,
            height: expanded ? DOTS_H : PILL_H,
            background: expanded ? 'rgba(10, 10, 12, 0.94)' : 'rgba(32, 32, 36, 0.52)',
            borderColor: expanded ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
            boxShadow: expanded
              ? '0 8px 24px rgba(0,0,0,0.2)'
              : '0 2px 12px rgba(0,0,0,0.12)',
            backdropFilter: expanded ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={morphTransition}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9999,
            borderStyle: 'solid',
            borderWidth: 1,
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="dots"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.28, ease, delay: 0.08 }}
              >
                <SoundBars />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            width: expanded ? SIDE : 0,
            marginLeft: expanded ? GAP : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={sideTransition}
          style={{
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <motion.div
            animate={{ x: expanded ? 0 : -18 }}
            transition={sideTransition}
            style={{
              width: SIDE,
              height: SIDE,
              borderRadius: '50%',
              background: 'rgba(10, 10, 12, 0.94)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontFamily: sans,
              fontSize: 20,
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            ⌥
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default function FnKeySlide() {
  const keySize = 'clamp(152px, min(24vw, 36vh), 260px)'
  const [stage, setStage] = useState('idle') // idle | flow | input
  const [promptText, setPromptText] = useState(PROMPTS[0])
  const [typed, setTyped] = useState('')
  const inputRef = useRef(null)
  const pressTimeoutRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  const startPressSequence = useCallback(() => {
    if (stage !== 'idle') return
    const prompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)]
    setPromptText(prompt)
    setStage('flow')
    pressTimeoutRef.current = window.setTimeout(() => {
      setStage('input')
    }, WHISPR_TO_INPUT_MS)
  }, [stage])

  useEffect(() => {
    if (stage !== 'input') return
    setTyped('')

    // Focus so the browser caret blinks at the end of the animated text.
    window.setTimeout(() => {
      inputRef.current?.focus?.()
    }, 0)

    let cancelled = false
    let i = 0
    const fullText = promptText || PROMPTS[0]

    const tick = () => {
      if (cancelled) return
      i += 1
      setTyped(fullText.slice(0, i))

      if (i < fullText.length) {
        const delay = 18 + Math.random() * 42
        typingTimeoutRef.current = window.setTimeout(tick, delay)
      }
    }

    tick()

    return () => {
      cancelled = true
      if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current)
    }
  }, [stage, promptText])

  useEffect(() => {
    // Auto-start the fn → whispr → input sequence shortly after the slide mounts.
    const id = window.setTimeout(() => {
      startPressSequence()
    }, 600)
    return () => window.clearTimeout(id)
  }, [startPressSequence])

  useEffect(() => {
    return () => {
      if (pressTimeoutRef.current) window.clearTimeout(pressTimeoutRef.current)
      if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current)
    }
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          minHeight: 'min(52vh, 420px)',
        }}
      >
        {stage !== 'input' ? (
          <div
            style={{
              position: 'relative',
              width: keySize,
              height: keySize,
              padding: 8,
              borderRadius: 14,
              background:
                'linear-gradient(180deg, #0a0a0c 0%, #141416 55%, #101012 100%)',
              boxShadow:
                'inset 0 2px 6px rgba(0,0,0,0.65), inset 0 -1px 0 rgba(255,255,255,0.04)',
            }}
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
                boxShadow: [
                  '0 5px 0 #121214, 0 10px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)',
                  '0 0 0 #121214, 0 3px 8px rgba(0,0,0,0.4), inset 0 3px 6px rgba(0,0,0,0.35)',
                  '0 5px 0 #121214, 0 10px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14)',
                ],
              }}
              transition={{
                duration: 1.85,
                repeat: Infinity,
                ease,
              }}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 9,
                background:
                  'linear-gradient(185deg, #5c5c62 0%, #3a3a3e 42%, #2c2c30 100%)',
                border: '1px solid rgba(0,0,0,0.35)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 'clamp(10px, 1.6vw, 14px)',
                  bottom: 'clamp(8px, 1.2vw, 12px)',
                  color: '#fff',
                  lineHeight: 0,
                }}
              >
                <GlobeIcon />
              </div>
              <span
                style={{
                  position: 'absolute',
                  top: 'clamp(8px, 1.2vw, 12px)',
                  right: 'clamp(10px, 1.6vw, 14px)',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
                  fontSize: 'clamp(26px, 3.6vw, 42px)',
                  fontWeight: 500,
                  color: '#fff',
                  letterSpacing: '-0.03em',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  lineHeight: 1,
                }}
              >
                fn
              </span>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease }}
            style={{
              width: 'min(860px, 92vw)',
              borderRadius: 22,
              padding: '20px 20px',
              background: 'rgba(12, 12, 14, 0.92)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              boxShadow: '0 18px 60px rgba(0,0,0,0.35)',
            }}
          >
            <input
              ref={inputRef}
              value={typed}
              readOnly
              aria-label="dictation input"
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: '#fff',
                fontFamily: sans,
                fontSize: 'clamp(16px, 2.4vw, 22px)',
                lineHeight: 1.35,
                padding: 0,
                margin: 0,
              }}
            />
          </motion.div>
        )}
      </div>

      <WhisprFlow active={stage !== 'idle'} />
    </>
  )
}
