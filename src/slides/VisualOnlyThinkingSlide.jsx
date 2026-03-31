import { Title, Subtitle, Spacer } from '../components/Typography'

export default function VisualOnlyThinkingSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(92vw, 1040px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Title size="lg" delay={0.2}>
        Design tools limited our thinking
        <br />
        to the purely visual.
      </Title>
      <Spacer size="md" />
      <Subtitle
        size="sm"
        delay={1.0}
        style={{
          whiteSpace: 'pre-line',
          maxWidth: 'min(88vw, 760px)',
        }}
      >
        {`We never thought of voice
because it wasn't in our tools.`}
      </Subtitle>
    </div>
  )
}
