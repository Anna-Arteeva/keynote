import { Title } from '../components/Typography'

const meshBg = `
  radial-gradient(ellipse 85% 65% at 12% 88%, rgba(255, 192, 210, 0.95), transparent 52%),
  radial-gradient(ellipse 75% 55% at 88% 12%, rgba(186, 235, 215, 0.9), transparent 55%),
  radial-gradient(ellipse 70% 60% at 8% 18%, rgba(205, 198, 255, 0.85), transparent 50%),
  radial-gradient(ellipse 65% 58% at 92% 82%, rgba(175, 210, 255, 0.8), transparent 52%),
  linear-gradient(145deg, #e4e2f4 0%, #efe8f6 42%, #e8f4f0 100%)
`

export default function ChangesEverythingSlide() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: meshBg,
        backgroundColor: '#e8eaf5',
      }}
    >
      <Title
        size="xl"
        delay={0}
        style={{
          color: '#1a2233',
          maxWidth: 'min(92vw, 1100px)',
          padding: '0 6vw',
        }}
      >
        This changes
        <br />
        everything
      </Title>
    </div>
  )
}
