import { Title, BulletList, Spacer } from '../components/Typography'

export default function AgentsOnYourBehalfSlide() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'min(92vw, 1040px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title size="md" delay={0.1} style={{ marginBottom: 'clamp(18px, 3vh, 28px)' }}>
        On your behalf.
      </Title>
      <Spacer size="sm" />
      <div style={{ width: '100%', maxWidth: 720 }}>
        <BulletList
          startDelay={0.6}
          items={[
            'Navigating the web',
            'Scraping data',
            'Clicking buttons',
            'Completing workflows',
          ]}
        />
      </div>
    </div>
  )
}

