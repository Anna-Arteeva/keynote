import { motion } from 'framer-motion'

import { Eyebrow, Subtitle, Title } from './Typography'

const ease = [0.25, 0.1, 0.25, 1]

export default function SectionIntroSlide({
  eyebrow,
  title,
  subtitle,
  accent = '#cbb9ea',
  secondaryAccent = '#f3d5c7',
  titleSize = 'xxl',
  maxWidth = 'min(92vw, 1120px)',
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(28px, 4vw, 44px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, ease }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '8%',
          width: 'clamp(170px, 22vw, 260px)',
          height: 'clamp(170px, 22vw, 260px)',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent} 0%, rgba(255,255,255,0) 72%)`,
          filter: 'blur(8px)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.08, ease }}
        style={{
          position: 'absolute',
          right: '6%',
          bottom: '-12%',
          width: 'clamp(200px, 26vw, 300px)',
          height: 'clamp(200px, 26vw, 300px)',
          borderRadius: '44% 56% 60% 40% / 52% 42% 58% 48%',
          background: `radial-gradient(circle at 35% 35%, ${secondaryAccent} 0%, rgba(255,255,255,0) 75%)`,
          filter: 'blur(10px)',
          opacity: 0.42,
          pointerEvents: 'none',
        }}
      />

      {eyebrow ? <Eyebrow delay={0}>{eyebrow}</Eyebrow> : null}
      <Title size={titleSize} delay={0.45} style={{ maxWidth: '100%', position: 'relative' }}>
        {title}
      </Title>
      {subtitle ? (
        <Subtitle
          size="md"
          delay={1.1}
          style={{
            maxWidth: 'min(88vw, 760px)',
            marginTop: 'clamp(16px, 2vh, 22px)',
            color: 'rgba(45, 40, 70, 0.78)',
            position: 'relative',
          }}
        >
          {subtitle}
        </Subtitle>
      ) : null}
    </div>
  )
}
