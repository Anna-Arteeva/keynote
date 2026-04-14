import theaterImage from '../assets/theater.png'
import { Title } from '../components/Typography'

export default function TheaterSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(96vw, 1320px)',
        paddingLeft: 'clamp(20px, 4vw, 56px)',
        paddingRight: 'clamp(20px, 4vw, 56px)',
      }}
    >
      <Title size="md" delay={0} style={{ textAlign: 'center', marginBottom: 'clamp(14px, 2vh, 24px)' }}>
        Designing for AI is improvisational theatre.
      </Title>
      <img
        src={theaterImage}
        alt="Two theater scenes showing controlled puppetry versus creative performance."
        style={{
          width: '100%',
          maxHeight: '82vh',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'center center',
          display: 'block',
          margin: '0 auto',
          borderRadius: '28px',
        }}
      />
    </div>
  )
}
