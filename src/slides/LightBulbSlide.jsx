import { motion } from 'framer-motion'
import { Title, Spacer } from '../components/Typography'

const enter = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
}

export default function LightBulbSlide() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: 'translateY(clamp(-20px, -4vh, -56px))',
      }}
    >
      <style>{`
        @keyframes breathe {
          0%   { transform: scale(1);    opacity: 0.35; }
          50%  { transform: scale(1.12); opacity: 0.55; }
          100% { transform: scale(1);    opacity: 0.35; }
        }

        @keyframes bulb-flicker {
          0%, 16%, 19%, 22%, 54%, 58%, 100% {
            opacity: 1;
            transform: scale(1);
            filter: brightness(1);
          }
          17% {
            opacity: 0.9;
            transform: scale(0.985);
            filter: brightness(0.92);
          }
          20% {
            opacity: 0.96;
            transform: scale(0.995);
            filter: brightness(0.98);
          }
          56% {
            opacity: 0.88;
            transform: scale(0.982);
            filter: brightness(0.9);
          }
        }

        @keyframes hot-flicker {
          0%, 16%, 19%, 22%, 54%, 58%, 100% { opacity: 1; }
          17% { opacity: 0.72; }
          20% { opacity: 0.88; }
          56% { opacity: 0.68; }
        }

        @keyframes ambient-flicker {
          0%, 18%, 22%, 100% { opacity: 1; }
          20% { opacity: 0.82; }
          56% { opacity: 0.9; }
        }
      `}</style>

      <motion.div
        {...enter}
        style={{
          marginTop: 'clamp(-12px, -2vh, -28px)',
        }}
      >
        {/* Bulb + glow container */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'clamp(140px, 18vw, 260px)',
          }}
        >
          {/* Layer 1 — wide ambient light spread */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(300px, 36vw, 520px)',
              height: 'clamp(300px, 36vw, 520px)',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,230,100,0.22) 0%, rgba(255,210,60,0.06) 55%, transparent 72%)',
              animation: 'ambient-flicker 4.2s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Layer 2 — inner hot glow */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(140px, 16vw, 240px)',
              height: 'clamp(140px, 16vw, 240px)',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,245,200,0.75) 0%, rgba(255,220,70,0.3) 50%, transparent 72%)',
              animation: 'hot-flicker 3.8s linear infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Layer 3 — gentle breathing pulse */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(200px, 24vw, 380px)',
              height: 'clamp(200px, 24vw, 380px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,230,100,0.45) 0%, transparent 62%)',
              animation: 'breathe 3s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              fontSize: 'clamp(80px, 10vw, 160px)',
              lineHeight: 1,
              position: 'relative',
              zIndex: 1,
              userSelect: 'none',
              animation: 'bulb-flicker 3.8s linear infinite',
              transformOrigin: '50% 48%',
            }}
          >
            💡
          </div>
        </div>
      </motion.div>

      <Spacer size="sm" />

      <Title size="lg" delay={0} style={{ textAlign: 'center' }}>
        My light bulb moment.
      </Title>
    </div>
  )
}
