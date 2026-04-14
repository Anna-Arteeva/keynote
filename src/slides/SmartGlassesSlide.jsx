import smartGlassesImage from '../assets/smart-glasses.webp'

export default function SmartGlassesSlide() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
      }}
    >
      <img
        src={smartGlassesImage}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
        }}
      />
    </div>
  )
}
