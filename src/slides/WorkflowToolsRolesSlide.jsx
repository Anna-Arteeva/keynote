import { motion } from 'framer-motion'

const circles = [
  {
    label: 'Workflow',
    tint: 'rgba(216, 203, 243, 0.3)',
  },
  {
    label: 'Tools',
    tint: 'rgba(243, 216, 166, 0.3)',
  },
  {
    label: 'Roles',
    tint: 'rgba(198, 227, 216, 0.3)',
  },
]

export default function WorkflowToolsRolesSlide() {
  return (
    <div
      style={{
        width: 'min(1040px, 92vw)',
        minHeight: 420,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        transform: 'translateY(-2vh)',
      }}
    >
      {circles.map((circle, i) => (
        <motion.div
          key={circle.label}
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.18 + i * 0.14,
            duration: 0.58,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            width: 'clamp(220px, 28vw, 330px)',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: circle.tint,
            flexShrink: 0,
            position: 'relative',
            zIndex: circles.length - i,
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(28px, 3.2vw, 50px)',
              lineHeight: 1.02,
              color: '#2D2846',
              letterSpacing: '-0.02em',
              maxWidth: '70%',
            }}
          >
            {circle.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
