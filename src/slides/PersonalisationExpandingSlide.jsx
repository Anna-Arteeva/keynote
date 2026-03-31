import { Title, Spacer } from '../components/Typography'
import netflixPersonalisation from '../assets/netflix-personalisation.png'

export default function PersonalisationExpandingSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(1120px, 96vw)',
        margin: '0 auto',
        padding: '0 6vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Title size="lg" delay={0}>
        Same movie.
        <br />
        Different thumbnail.
        <br />
        Based on your psychology.
      </Title>
      <Spacer size="md" />
      <img
        src={netflixPersonalisation}
        alt=""
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: 18,
        }}
      />
    </div>
  )
}

