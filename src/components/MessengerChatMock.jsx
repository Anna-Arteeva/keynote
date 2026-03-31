import { useState, useEffect, useRef } from 'react'

const ASSISTANT_NAME = 'Open Claw'
const ASSISTANT_MESSAGE = 'How can I help today?'

/** Grammar-polished user prompt */
const INPUT_TYPING_TEXT =
  'Book me a hotel in Rotterdam for April 15–18, within €150, close to the RotterdamUX conference venue.'

const font = "'Raleway', sans-serif"

function RobotIcon({ size = 22 }) {
  const s = 'rgba(255,255,255,0.95)'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="9" y="4" width="6" height="5" rx="1.5" stroke={s} strokeWidth="1.5" />
      <path d="M12 9v2" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4.5" y="11" width="15" height="10" rx="2.5" stroke={s} strokeWidth="1.5" />
      <circle cx="9" cy="15" r="1.4" fill={s} />
      <circle cx="15" cy="15" r="1.4" fill={s} />
      <path d="M9 18.5h6" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function avatarShell(size) {
  return {
    width: size,
    height: size,
    borderRadius: Math.round(size * 0.28),
    background: 'linear-gradient(145deg, #6d5eb8 0%, #3d3568 55%, #2D2846 100%)',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
  }
}

/** Matches composer text field — shared by input and send control */
const COMPOSER_RADIUS = 24

/** iOS-like keyboard height inside the phone mock */
const KEYBOARD_H = 208
/** Slide-up duration (CSS transition) */
const KEYBOARD_SLIDE_MS = 620
/** Pause after keyboard is fully visible, before typing begins */
const POST_KEYBOARD_GAP_MS = 320

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
]

function MobileKeyboard() {
  const keyStyle = (wide = false) => ({
    flex: wide ? 4 : 1,
    minWidth: 0,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fcfcfe',
    borderRadius: 5,
    fontSize: wide ? 15 : 16,
    fontWeight: 500,
    color: '#1c1c1e',
    boxShadow: '0 1px 0 rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)',
    userSelect: 'none',
  })

  return (
    <div
      style={{
        height: KEYBOARD_H,
        boxSizing: 'border-box',
        padding: '8px 6px 10px',
        background: 'linear-gradient(180deg, #d1d3d9 0%, #c5c7cd 100%)',
        borderTop: '1px solid rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        flexShrink: 0,
      }}
    >
      {KEYBOARD_ROWS.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 5,
            paddingLeft: ri === 1 ? 14 : 0,
            paddingRight: ri === 1 ? 14 : 0,
          }}
        >
          {row.map((ch, ci) => (
            <div key={`${ri}-${ci}-${ch}`} style={keyStyle(ch === '⌫' || ch === '⇧')}>
              {ch}
            </div>
          ))}
        </div>
      ))}
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        {[
          { label: '123', flex: 1.15, size: 14 },
          { label: 'space', flex: 4.2, size: 15 },
          { label: 'return', flex: 1.15, size: 15 },
        ].map((k) => (
          <div
            key={k.label}
            style={{ ...keyStyle(true), flex: k.flex, fontSize: k.size }}
          >
            {k.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MessengerChatMock() {
  const [typed, setTyped] = useState('')
  const [keyboardOpen, setKeyboardOpen] = useState(false)
  const [typingReady, setTypingReady] = useState(false)
  const afterKeyboardGapRef = useRef(null)
  const typingStartScheduledRef = useRef(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setKeyboardOpen(true))
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!typingReady) return
    let cancelled = false
    const full = INPUT_TYPING_TEXT
    let intervalId
    let pauseId

    const clearTimers = () => {
      clearInterval(intervalId)
      clearTimeout(pauseId)
    }

    const startTyping = () => {
      let i = 0
      setTyped('')
      intervalId = setInterval(() => {
        if (cancelled) return
        i += 1
        setTyped(full.slice(0, i))
        if (i >= full.length) {
          clearInterval(intervalId)
          pauseId = setTimeout(() => {
            if (!cancelled) startTyping()
          }, 2400)
        }
      }, 28)
    }

    startTyping()
    return () => {
      cancelled = true
      clearTimers()
    }
  }, [typingReady])

  useEffect(() => {
    if (!keyboardOpen) return
    const scheduleTyping = () => {
      if (typingStartScheduledRef.current) return
      typingStartScheduledRef.current = true
      setTypingReady(true)
    }
    const t = setTimeout(
      scheduleTyping,
      KEYBOARD_SLIDE_MS + POST_KEYBOARD_GAP_MS + 100
    )
    return () => clearTimeout(t)
  }, [keyboardOpen])

  useEffect(
    () => () => {
      clearTimeout(afterKeyboardGapRef.current)
    },
    []
  )

  const onKeyboardTransitionEnd = (e) => {
    if (e.target !== e.currentTarget || e.propertyName !== 'height') return
    clearTimeout(afterKeyboardGapRef.current)
    afterKeyboardGapRef.current = setTimeout(() => {
      afterKeyboardGapRef.current = null
      if (typingStartScheduledRef.current) return
      typingStartScheduledRef.current = true
      setTypingReady(true)
    }, POST_KEYBOARD_GAP_MS)
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#e9e9ef',
        fontFamily: font,
        paddingTop: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          flexShrink: 0,
          padding: '30px 14px 10px',
          background: 'rgba(248,248,250,0.94)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span style={{ fontSize: 26, color: '#007aff', lineHeight: 1 }} aria-hidden>
          ‹
        </span>
        <div style={avatarShell(40)}>
          <RobotIcon size={24} />
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#1c1c1e',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {ASSISTANT_NAME}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.38)', marginTop: 2 }}>online</div>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: 'auto',
          padding: '14px 12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 8,
        }}
      >
        <div style={{ display: 'flex', gap: 10, maxWidth: '92%', alignItems: 'flex-end' }}>
          <div style={avatarShell(36)}>
            <RobotIcon size={21} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'rgba(0,0,0,0.42)',
                marginBottom: 4,
                paddingLeft: 2,
              }}
            >
              {ASSISTANT_NAME}
            </div>
            <div
              style={{
                display: 'inline-block',
                padding: '12px 16px',
                borderRadius: 18,
                borderBottomLeftRadius: 6,
                background: '#fff',
                boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
                fontSize: 17,
                lineHeight: 1.4,
                color: '#1c1c1e',
              }}
            >
              {ASSISTANT_MESSAGE}
            </div>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div
        style={{
          flexShrink: 0,
          padding: '10px 12px 12px',
          background: 'rgba(248,248,250,0.97)',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 10,
          }}
        >
          <div
            style={{
              flex: 1,
              minHeight: 48,
              maxHeight: 96,
              padding: '12px 15px',
              borderRadius: COMPOSER_RADIUS,
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              fontSize: 16,
              lineHeight: 1.4,
              color: '#1c1c1e',
              wordBreak: 'break-word',
            }}
          >
            {typed}
            {typingReady && (
              <span
                style={{
                  display: 'inline-block',
                  width: 2,
                  height: 17,
                  marginLeft: 2,
                  verticalAlign: 'middle',
                  background: '#007aff',
                  animation: 'messenger-caret 1s step-end infinite',
                }}
              />
            )}
          </div>
          <button
            type="button"
            style={{
              width: 52,
              height: 52,
              borderRadius: COMPOSER_RADIUS,
              border: 'none',
              background: typed.length > 0 ? '#007aff' : 'rgba(0,122,255,0.35)',
              color: '#fff',
              fontSize: 20,
              lineHeight: 1,
              cursor: 'default',
              flexShrink: 0,
            }}
            aria-hidden
          >
            ↑
          </button>
        </div>
      </div>

      {/* Keyboard slides up from bottom of screen, then typing begins */}
      <div
        onTransitionEnd={onKeyboardTransitionEnd}
        style={{
          flexShrink: 0,
          height: keyboardOpen ? KEYBOARD_H : 0,
          overflow: 'hidden',
          transition: `height ${KEYBOARD_SLIDE_MS}ms cubic-bezier(0.32, 0.72, 0, 1)`,
        }}
      >
        <MobileKeyboard />
      </div>

      <style>{`
        @keyframes messenger-caret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
