import claudeCode from '../assets/claude-code.jpg'

export default function ClaudeCodeSlide() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#E3DACB',
      }}
    >
      <img
        src={claudeCode}
        alt="Claude Code terminal welcome screen"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
