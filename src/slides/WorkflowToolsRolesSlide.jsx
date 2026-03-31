import { motion } from 'framer-motion'

const circles = [
  {
    label: 'Workflow',
    tint: 'rgba(216, 203, 243, 0.5)',
  },
  {
    label: 'Tools',
    tint: 'rgba(243, 216, 166, 0.5)',
  },
  {
    label: 'Roles',
    tint: 'rgba(198, 227, 216, 0.5)',
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
        gap: 'clamp(-34px, -4vw, -18px)',
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
            border: '1px solid rgba(45, 40, 70, 0.12)',
            boxShadow: '0 18px 42px rgba(30, 25, 50, 0.08)',
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
