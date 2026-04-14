import { BulletList, Spacer, Subtitle } from '../components/Typography'

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
      <div style={{ width: '100%', maxWidth: 720 }}>
        <BulletList
          startDelay={0.2}
          items={[
            'Navigating the web',
            'Scraping data',
            'Clicking buttons',
            'Completing workflows',
          ]}
        />
      </div>
      <Spacer size="md" />
      <Subtitle size="md" delay={2.2}>
        On your behalf.
      </Subtitle>
    </div>
  )
}

