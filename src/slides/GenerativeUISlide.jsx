import { Title } from '../components/Typography'

export default function GenerativeUISlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1120px, 92vw)',
        margin: '0 auto',
        padding: '0 4vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title size="xxl" delay={0.1} style={{ textAlign: 'center' }}>
        Generative UI
      </Title>
    </div>
  )
}
