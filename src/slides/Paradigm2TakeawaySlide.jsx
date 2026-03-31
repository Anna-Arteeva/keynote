import { Eyebrow, Subtitle, Title } from '../components/Typography'

export default function Paradigm2TakeawaySlide() {
  return (
    <div
      style={{
        width: 'min(920px, 100%)',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Eyebrow>Paradigm 2 takeaway</Eyebrow>
      <div style={{ height: '1.6vh' }} />
      <Title size="md" delay={0.4}>
        The screen isn't dying.
      </Title>
      <div style={{ height: '1vh' }} />
      <Subtitle size="sm" delay={1} style={{ maxWidth: 'min(88vw, 760px)', marginLeft: 'auto', marginRight: 'auto' }}>
        It's being enhanced by voice, vision, gesture, and context.
      </Subtitle>
    </div>
  )
}
