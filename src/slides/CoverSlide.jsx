import { Title, Subtitle, Spacer } from '../components/Typography'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function CoverSlide() {
  return (
    <>
      <div style={{ flex: 1 }} />
      <Title size="xl" delay={0}>Beyond Pixels</Title>
      <Spacer size="sm" />
      <Subtitle size="lg" delay={1}>
        Designing for the AI-Native Era
      </Subtitle>
      <div style={{ flex: 1 }} />
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(11px, 1vw, 16px)',
          color: 'rgba(45, 40, 70, 0.45)',
          textAlign: 'center',
          lineHeight: 1.6,
          paddingBottom: '2vh',
        }}
      >
        Anna Arteeva<br />
        RotterdamUX 2026
      </motion.div>
    </>
  )
}
