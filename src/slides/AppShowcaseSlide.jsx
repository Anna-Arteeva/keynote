import { motion } from 'framer-motion'

import screen1 from '../assets/jokesapp/screen1.png'
import screen2 from '../assets/jokesapp/screen2.png'
import screen3 from '../assets/jokesapp/screen3.png'
import screen4 from '../assets/jokesapp/screen4.png'
import screen5 from '../assets/jokesapp/screen5.png'
import screen6 from '../assets/jokesapp/screen6.png'
import screen7 from '../assets/jokesapp/screen7.png'
import screen8 from '../assets/jokesapp/screen8.png'
import screen9 from '../assets/jokesapp/screen9.png'

/*
  4 columns, each slowly drifting in opposite directions.
  Uniform vertical gap between screenshots (~2rem, scales with vh).
*/

const IMAGE_STACK_GAP = 'clamp(1.75rem, 2.5vh, 2.5rem)'

const columns = [
  { images: [screen1, screen5, screen9], direction: -1 },
  { images: [screen2, screen6], direction: 1 },
  { images: [screen3, screen7], direction: -1 },
  { images: [screen4, screen8], direction: 1 },
]
const DRIFT = 18            // px each column drifts
const DRIFT_DURATION = 7    // seconds per full cycle

const cardStyle = {
  width: '100%',
  borderRadius: 16,
  display: 'block',
  objectFit: 'cover',
}

export default function AppShowcaseSlide() {
  return (
    <div
      style={{
        flex: 1,
        alignSelf: 'stretch',
        minHeight: 0,
        width: 'calc(100% + 20vw)',
        marginLeft: '-10vw',
        marginRight: '-10vw',
        marginTop: '-8vh',
        marginBottom: '-8vh',
        height: 'calc(100% + 16vh)',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <style>{`
        @keyframes drift-up {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-${DRIFT}px); }
        }
        @keyframes drift-down {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(${DRIFT}px); }
        }
      `}</style>

      {/* Full-bleed grid — edge to edge; columns span top → bottom */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 'clamp(10px, 1.4vw, 22px)',
          width: '100%',
          paddingLeft: 'clamp(8px, 1.5vw, 20px)',
          paddingRight: 'clamp(8px, 1.5vw, 20px)',
          overflow: 'hidden',
        }}
      >
        {columns.map((col, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15 + ci * 0.14,
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: IMAGE_STACK_GAP,
              flex: '1 1 0',
              minWidth: 0,
              maxWidth: 'clamp(130px, 18vw, 240px)',
              animation: `${col.direction < 0 ? 'drift-up' : 'drift-down'} ${DRIFT_DURATION}s ease-in-out infinite`,
              animationDelay: `${ci * 0.45}s`,
            }}
          >
            {col.images.map((src, ii) => (
              <motion.img
                key={ii}
                src={src}
                alt=""
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3 + ci * 0.14 + ii * 0.1,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                style={{
                  ...cardStyle,
                  flexShrink: 0,
                  maxHeight: col.images.length <= 2 ? '46vh' : '32vh',
                  width: '100%',
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
