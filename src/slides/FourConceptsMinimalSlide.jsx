import { BulletList } from '../components/Typography'

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
      <div style={{ width: '100%', maxWidth: 700 }}>
        <BulletList
          startDelay={0.2}
          items={[
            'Self-assembling screens',
            'Probabilistic outputs',
            'Deep memory',
            'AI agents as users',
          ]}
        />
      </div>
    </div>
  )
}

