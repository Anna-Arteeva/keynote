import { motion } from 'framer-motion'

import { Eyebrow, Subtitle, Title } from '../components/Typography'
import geminiMathImage from '../assets/gemini-math.png'
import geminiFractalsImage from '../assets/gemini-fractals.png'

export default function GenerativeUISlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1120px, 96vw)',
        margin: '0 auto',
        padding: '0 6vw',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(22px, 2.8vh, 32px)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Eyebrow>Generative UI</Eyebrow>
        <div style={{ height: '1.4vh' }} />
        <Title size="lg" delay={0.2}>
          Same system.
          <br />
          Different interface.
        </Title>
        <div style={{ height: '1.8vh' }} />
        <Subtitle size="sm" delay={0.5} style={{ maxWidth: 760 }}>
          Interfaces can assemble themselves around the user, the task, and the moment.
        </Subtitle>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 'clamp(20px, 2.2vw, 28px)',
          alignItems: 'start',
        }}
      >
        <AudienceCard
          delay={0.7}
          title="5-year-old"
          image={geminiMathImage}
          alt="Gemini math interface for a 5-year-old"
        />
        <AudienceCard
          delay={0.82}
          title="Grad student"
          image={geminiFractalsImage}
          alt="Gemini fractals interface for a grad student"
        />
      </div>
    </div>
  )
}

function AudienceCard({ title, image, alt, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(30px, 3vw, 48px)',
          fontWeight: 900,
          color: '#2D2846',
          textAlign: 'center',
          lineHeight: 1.02,
        }}
      >
        {title}
      </div>
      <motion.img
        src={image}
        alt={alt}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.08, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: 18,
          border: '1px solid rgba(45, 40, 70, 0.08)',
          boxShadow: '0 18px 38px rgba(30, 25, 50, 0.14)',
          background: 'rgba(255,255,255,0.38)',
        }}
      />
    </motion.div>
  )
}
