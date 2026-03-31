import genieAi from '../assets/genie-ai.mp4'

export default function GenieAiSlide() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F2F2F2',
      }}
    >
      <video
        src={genieAi}
        autoPlay
        loop
        muted
        playsInline
        style={{
          height: '100%',
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
        }}
      />
      <a
        href="https://x.com/geniegetsme/status/2006487657799626951?s=20"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          left: 'clamp(16px, 2.5vw, 32px)',
          bottom: 'clamp(12px, 2vh, 24px)',
          fontFamily: "'Raleway', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: 'rgba(45, 40, 70, 0.45)',
          textDecoration: 'none',
        }}
      >
        Genie AI
      </a>
    </div>
  )
}
