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
      <Eyebrow style={{ textAlign: 'center' }}>Paradigm 4 takeaway</Eyebrow>
      <div style={{ height: '1.6vh' }} />
      <Title
        size="md"
        delay={0.4}
        style={{ textAlign: 'center', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}
      >
        Memory is a design material.
      </Title>
    </div>
  )
}
