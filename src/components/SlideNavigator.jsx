import { motion, AnimatePresence } from 'framer-motion'

const panelWidth = 300

export default function SlideNavigator({
  open,
  onOpenChange,
  currentIndex,
  onSelectSlide,
  labels,
}) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            key="nav-backdrop"
            type="button"
            aria-label="Close slide list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 12,
              border: 'none',
              padding: 0,
              margin: 0,
              background: 'rgba(25, 22, 45, 0.28)',
              cursor: 'default',
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            key="nav-panel"
            role="navigation"
            aria-label="Slides"
            initial={{ x: -panelWidth }}
            animate={{ x: 0 }}
            exit={{ x: -panelWidth }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 13,
              width: panelWidth,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '8px 0 40px rgba(30, 25, 50, 0.12)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 14px 12px 18px',
                borderBottom: '1px solid rgba(45, 40, 70, 0.1)',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(45, 40, 70, 0.55)',
                }}
              >
                Slides
              </span>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Hide slide list"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(45, 40, 70, 0.08)',
                  color: '#2D2846',
                  fontSize: 20,
                  lineHeight: 1,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
            </div>
            <ol
              style={{
                listStyle: 'none',
                margin: 0,
                padding: '10px 10px 24px',
                overflowY: 'auto',
                flex: 1,
              }}
            >
              {labels.map((label, i) => {
                const active = i === currentIndex
                return (
                  <li key={i} style={{ marginBottom: 4 }}>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectSlide(i)
                        onOpenChange(false)
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '10px 12px',
                        borderRadius: 10,
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: active ? 700 : 500,
                        fontSize: 14,
                        lineHeight: 1.35,
                        color: active ? '#2D2846' : 'rgba(45, 40, 70, 0.78)',
                        background: active ? 'rgba(45, 40, 70, 0.1)' : 'transparent',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          fontVariantNumeric: 'tabular-nums',
                          opacity: 0.45,
                          fontWeight: 600,
                          minWidth: 22,
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span>{label}</span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </motion.aside>
        )}
      </AnimatePresence>

      {!open && (
        <button
          type="button"
          onClick={() => onOpenChange(true)}
          aria-label="Open slide list"
          aria-expanded={false}
          style={{
            position: 'fixed',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 11,
            width: 36,
            height: 88,
            padding: 0,
            border: 'none',
            borderRadius: '0 12px 12px 0',
            background: 'rgba(45, 40, 70, 0.12)',
            color: '#2D2846',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: '2px 0 12px rgba(30, 25, 50, 0.08)',
          }}
        >
          <span
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.02em',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              lineHeight: 1,
            }}
          >
            Slides
          </span>
        </button>
      )}
    </>
  )
}
