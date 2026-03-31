import { Title, Subtitle, Spacer } from '../components/Typography'

export default function NetflixDealSlide() {
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
        Netflix works because the deal is clear.
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
        You know they&apos;re watching.
        <br />
        You accept the trade-off.
      </Subtitle>
    </>
  )
}
