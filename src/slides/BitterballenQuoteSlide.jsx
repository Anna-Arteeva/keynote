import { Eyebrow } from '../components/Typography'

export default function BitterballenQuoteSlide() {
  return (
    <div
      style={{
        width: 'min(1040px, 100%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'clamp(16px, 2vh, 24px)',
      }}
    >
      <Eyebrow style={{ textAlign: 'center' }}>Spoken output</Eyebrow>

      <div
        style={{
          position: 'relative',
          maxWidth: 'min(86vw, 860px)',
          padding: 'clamp(24px, 3vw, 38px) clamp(26px, 3.5vw, 42px)',
          borderRadius: 34,
          background: 'rgba(255, 255, 255, 0.82)',
          border: '1px solid rgba(45, 40, 70, 0.18)',
          boxShadow: '0 24px 60px rgba(45, 40, 70, 0.18)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 'clamp(34px, 4vw, 56px)',
            lineHeight: 1.08,
            color: '#2D2846',
            textAlign: 'center',
          }}
        >
          "Ik wil graag Bitterballen, alstublieft."
        </div>

        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: -22,
            width: 0,
            height: 0,
            borderLeft: '18px solid transparent',
            borderRight: '18px solid transparent',
            borderTop: '24px solid rgba(255, 255, 255, 0.82)',
            filter: 'drop-shadow(0 8px 8px rgba(45, 40, 70, 0.14))',
          }}
        />
      </div>
    </div>
  )
}
