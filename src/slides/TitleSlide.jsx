import { Title, Subtitle, Spacer } from '../components/Typography'

export default function TitleSlide() {
  return (
    <>
      <Title size="xl" delay={0}>Hi, I am Anna</Title>
      <Spacer size="md" />
      <Subtitle size="lg" delay={1}>
        Product Design Leader,<br />AI coding educator
      </Subtitle>
    </>
  )
}
