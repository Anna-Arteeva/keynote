import { motion } from 'framer-motion'

import { Eyebrow, Subtitle, Title } from '../components/Typography'
import uglySlide from '../assets/ugly-slide.png'

const ease = [0.25, 0.1, 0.25, 1]

export default function AfterTwoMonthsSlide() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(28px, 5vw, 72px)',
        width: '100%',
        maxWidth: 'min(1180px, 100%)',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          flex: '1 1 340px',
          minWidth: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            padding: 'clamp(10px, 1.2vw, 18px)',
            maxWidth: 420,
            textAlign: 'left',
          }}
        >
          <Eyebrow delay={0} style={{ textAlign: 'left' }}>
            Reality check
          </Eyebrow>
          <div style={{ height: '1.5vh' }} />
          <Title size="lg" delay={1} style={{ textAlign: 'left' }}>
            After 2 months
          </Title>
          <div style={{ height: '2vh' }} />
          <Subtitle size="sm" delay={2} style={{ textAlign: 'left', lineHeight: 1.55 }}>
            The first shipped version was not elegant.
            <br />
            It was useful, awkward, and deeply educational.
          </Subtitle>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease }}
        style={{
          flex: '1 1 300px',
          maxWidth: 'min(440px, 100%)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={uglySlide}
          alt="Early app mockup"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 'min(70vh, 620px)',
            objectFit: 'contain',
            borderRadius: 22,
            boxShadow:
              '0 28px 64px rgba(30,25,50,0.2), 0 10px 28px rgba(30,25,50,0.12)',
            border: '1px solid rgba(45, 40, 70, 0.08)',
          }}
        />
      </motion.div>
    </div>
  )
}
