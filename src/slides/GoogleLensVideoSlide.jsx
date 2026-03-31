import googleLensVideo from '../assets/google-lens.mp4'

export default function GoogleLensVideoSlide() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: '#000',
      }}
    >
      <video
        src={googleLensVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          height: '100%',
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          objectPosition: 'center center',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </div>
  )
}

