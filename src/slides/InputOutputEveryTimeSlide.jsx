import { Title, Subtitle, Spacer } from '../components/Typography'

export default function InputOutputEveryTimeSlide() {
  return (
    <>
      <Title size="lg" delay={0} style={{ maxWidth: 'min(94vw, 1100px)' }}>
        Input A → Output B
      </Title>
      <Spacer size="md" />
      <Subtitle size="md" delay={1} style={{ maxWidth: 'min(88vw, 760px)' }}>
        Every single time
      </Subtitle>
    </>
  )
}
