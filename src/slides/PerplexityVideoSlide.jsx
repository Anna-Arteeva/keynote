import perplexityVideo from '../assets/Perplexity - Announcing Personal Computer.  Personal Computer is an always on, loc....mp4'

export default function PerplexityVideoSlide() {
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
        src={perplexityVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />
    </div>
  )
}

