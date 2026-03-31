/**
 * Generic portrait iPhone frame — fixed proportions, no device/orientation switching.
 * Dimensions follow ~390×844 logical pt at 0.8 scale + bezel padding (scaled up for deck legibility).
 */
const FRAME_W = 397
const FRAME_H = 833
const SCREEN_W = 374
const SCREEN_H = 810
const SCREEN_TOP = (FRAME_H - SCREEN_H) / 2
const SCREEN_LEFT = (FRAME_W - SCREEN_W) / 2

const frameGradient = 'linear-gradient(165deg, #2a2a2e 0%, #1c1c20 45%, #141418 100%)'
const bezel = '#0d0d0f'
const screenBg = '#050508'

export default function DeviceFrame({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: FRAME_W,
        height: FRAME_H,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: frameGradient,
          borderRadius: 34,
          boxShadow:
            '0 25px 50px -12px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Screen */}
        <div
          style={{
            position: 'absolute',
            top: SCREEN_TOP,
            left: SCREEN_LEFT,
            width: SCREEN_W,
            height: SCREEN_H,
            borderRadius: 26,
            background: screenBg,
            overflow: 'hidden',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        >
          {children}
        </div>

        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 19,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '28%',
            height: 14,
            borderRadius: 22,
            background: bezel,
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.35)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Home indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '35%',
            height: 4,
            borderRadius: 999,
            background: bezel,
            opacity: 0.85,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Volume buttons */}
        <div
          style={{
            position: 'absolute',
            left: -2,
            top: '25%',
            width: 3,
            height: '12%',
            borderRadius: '0 2px 2px 0',
            background: bezel,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -2,
            top: '40%',
            width: 3,
            height: '8%',
            borderRadius: '0 2px 2px 0',
            background: bezel,
            pointerEvents: 'none',
          }}
        />
        {/* Power */}
        <div
          style={{
            position: 'absolute',
            right: -2,
            top: '30%',
            width: 3,
            height: '10%',
            borderRadius: '2px 0 0 2px',
            background: bezel,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  )
}

export const deviceFrameScaleStyle = {
  transform: 'scale(min(1, min(92vw / 397, 82vh / 833)))',
  transformOrigin: 'center center',
}
