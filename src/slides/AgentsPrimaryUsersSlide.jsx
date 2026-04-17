import { Title, Subtitle, Spacer } from '../components/Typography'

export default function AgentsPrimaryUsersSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(92vw, 980px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title size="lg" delay={0.2}>
        AI agents are first-class users.
      </Title>
    </div>
  )
}
