import { BulletList, Title } from '../components/Typography'

export default function FourConceptsMinimalSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(92vw, 980px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 700,
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(32px, 4vh, 48px)',
        }}
      >
        <Title size="lg" delay={0.05} style={{ textAlign: 'center' }}>
          In the era of
        </Title>
        <BulletList
          startDelay={0.2}
          items={[
            'Probabilistic outputs',
            'Outcome-based interactions',
            'Voice interfaces',
            'Deep memory',
            'AI agents as users',
          ]}
        />
      </div>
    </div>
  )
}

