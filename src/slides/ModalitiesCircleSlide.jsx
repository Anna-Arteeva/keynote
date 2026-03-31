import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

/*
  All positions are percentages of a 520×520 design space
  so the layout scales cleanly at any size.
*/
const bubbles = [
  { label: 'Voice',   style: { top: '5.4%',   left: '30.8%' } },
  { label: 'Gesture', style: { top: '42.7%',  right: '5.4%' } },
  { label: 'Vision',  style: { bottom: '5.4%', left: '30.8%' } },
  { label: 'Screen',  style: { top: '42.7%',  left: '5.4%' } },
]

const arrowPaths = [
  'M 338 65 Q 438 125 412 220',   // Voice → Gesture
  'M 412 300 Q 438 395 338 455',  // Gesture → Vision
  'M 182 455 Q 82 395 108 300',   // Vision → Screen
  'M 108 220 Q 82 125 182 65',    // Screen → Voice
]

const bubbleBase = {
  position: 'absolute',
  width: '38.5%',
  height: '14.6%',
  borderRadius: 9999,
  background: 'rgba(255,255,255,0.62)',
  border: '1.5px solid rgba(255,255,255,0.88)',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  boxShadow:
    '0 2px 6px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}

export default function ModalitiesCircleSlide() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(520px, 68vh, 62vw)',
        aspectRatio: '1',
      }}
    >
      {/* SVG arrows */}
      <motion.svg
        className="arrows-svg"
        viewBox="0 0 520 520"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(90,90,130,0.55)" />
          </marker>
        </defs>
        {arrowPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="rgba(90,90,130,0.38)"
            strokeWidth="1.6"
            strokeDasharray="5 4"
            fill="none"
            markerEnd="url(#arr)"
          />
        ))}
      </motion.svg>

      {/* Frosted-glass bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.15 + i * 0.22, duration: 0.7, ease }}
          style={{ ...bubbleBase, ...b.style }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(18px, 2.8vw, 28px)',
              color: '#2D2846',
              letterSpacing: '-0.02em',
              userSelect: 'none',
            }}
          >
            {b.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
