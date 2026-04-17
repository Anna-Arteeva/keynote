import { CheckList, Eyebrow, Spacer, Title } from '../components/Typography'

const ITEMS = [
  'AI prototyping is now standard',
  'Designers own the front-end',
  'The double diamond is collapsing',
]

export default function ThreeTrendsSlide() {
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
      <Eyebrow delay={0}>What shifted</Eyebrow>
      <Title size="lg" delay={0.35} style={{ maxWidth: 'min(94vw, 1000px)' }}>
        The new baseline
      </Title>
      <Spacer size="md" />
      <div style={{ width: '100%', maxWidth: 860 }}>
        <CheckList items={ITEMS} startDelay={0.8} rowStep={0.78} checkLag={0.42} />
      </div>
    </div>
  )
}
