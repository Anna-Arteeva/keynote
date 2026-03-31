import { Title, Subtitle, Spacer } from '../components/Typography'

export default function TitleSlide() {
  return (
    <>
      <Title size="xl" delay={0}>Hi, I am Anna</Title>
      <Spacer size="md" />
      <Subtitle size="md" delay={1} style={{ maxWidth: 'min(88vw, 760px)' }}>
        Product Design Leader,<br />AI-Coding Educator
      </Subtitle>
    </>
  )
}
