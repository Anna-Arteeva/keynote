import { Title, Subtitle, Spacer } from '../components/Typography'

export default function FailureModeSlide() {
  return (
    <>
      <Title
        size="md"
        delay={0}
        style={{
          maxWidth: 'min(92vw, 960px)',
          padding: '0 6vw',
        }}
      >
        Modalities complement each other
      </Title>
      <Spacer size="md" />
      <Subtitle
        size="sm"
        delay={0.6}
        style={{
          maxWidth: 'min(88vw, 760px)',
          padding: '0 6vw',
        }}
      >
        Without visual grounding,
        <br />
        you don&apos;t discover the error
        <br />
        until it&apos;s too late.
      </Subtitle>
    </>
  )
}

