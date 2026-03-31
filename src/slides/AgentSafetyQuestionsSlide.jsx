import { BulletList, Title, Spacer } from '../components/Typography'

export default function AgentSafetyQuestionsSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(92vw, 980px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Title size="lg" delay={0.2}>
        Where do we draw the line?
      </Title>
      <Spacer size="md" />
      <div style={{ width: '100%', maxWidth: 760 }}>
        <BulletList
          startDelay={0.85}
          items={[
            "What's safe for agents to do alone?",
            'What requires human supervision?',
            "What's reserved for humans only?",
          ]}
        />
      </div>
    </div>
  )
}
