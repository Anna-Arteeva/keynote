import { Title, BulletList, Subtitle, Spacer } from '../components/Typography'

export default function PrototypeWithModelsSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(92vw, 1020px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Title size="md" delay={0.1}>
        The new design materials
      </Title>
      <Spacer size="md" />
      <div style={{ width: '100%', maxWidth: 680 }}>
        <BulletList
          startDelay={0.5}
          items={[
            'LLMs',
            'Voice models',
            'Vision models',
            'Agents',
          ]}
        />
      </div>
      <Spacer size="md" />
      <Subtitle delay={1.4} size="sm" style={{ maxWidth: 'min(88vw, 760px)' }}>
        Build with them to design with them.
      </Subtitle>
    </div>
  )
}
