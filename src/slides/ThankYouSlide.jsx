import { Title, Subtitle, Spacer } from '../components/Typography'
import linkedinQrCode from '../assets/IMG_448F3F89E76F-1.jpeg'

export default function ThankYouSlide() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Title size="xl" delay={0}>Thank you</Title>
      <Spacer size="sm" />
      <Subtitle size="md" delay={0.8}>annaarteeva.com</Subtitle>
      <Spacer size="sm" />
      <img
        src={linkedinQrCode}
        alt="LinkedIn QR code"
        style={{
          width: 'clamp(170px, 20vw, 260px)',
          height: 'auto',
          borderRadius: 16,
          background: '#fff',
          padding: 8,
          boxShadow: '0 14px 34px rgba(45, 40, 70, 0.12)',
        }}
      />
      <Spacer size="sm" />
      <Subtitle size="sm" delay={1.1} style={{ color: 'rgba(45, 40, 70, 0.72)' }}>
        Scan to connect on LinkedIn
      </Subtitle>
    </div>
  )
}
