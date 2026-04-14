import { Eyebrow, Title } from '../components/Typography'

export default function AgenticAISlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(92vw, 980px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Eyebrow delay={0}>Paradigm 5</Eyebrow>
      <div style={{ height: '1.8vh' }} />
      <Title size="xl" delay={0.35}>
        Agentic AI
      </Title>
    </div>
  )
}
