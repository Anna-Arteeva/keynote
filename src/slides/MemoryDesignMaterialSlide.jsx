import { Eyebrow, Subtitle, Title } from '../components/Typography'

export default function MemoryDesignMaterialSlide() {
  return (
    <div
      style={{
        width: 'min(980px, 100%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 'clamp(28px, 3.5vw, 44px)',
      }}
    >
      <Eyebrow style={{ textAlign: 'left' }}>Paradigm 3 takeaway</Eyebrow>
      <div style={{ height: '1.6vh' }} />
      <Title size="md" delay={0.4} style={{ textAlign: 'left', maxWidth: 760 }}>
        Treat memory as a design material.
      </Title>
      <div style={{ height: '1.6vh' }} />
      <Subtitle size="md" delay={1} style={{ textAlign: 'left', maxWidth: 660 }}>
        Not as hidden infrastructure. As something users can inspect, correct, and trust.
      </Subtitle>
    </div>
  )
}
