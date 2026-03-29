import { Title, BulletList, Spacer } from '../components/Typography'

export default function WhatIDoSlide() {
  return (
    <>
      <Title size="lg" delay={0}>What I Do</Title>
      <Spacer size="md" />
      <BulletList
        startDelay={1}
        items={[
          'Design systems at scale',
          'AI-powered product experiences',
          'Teaching designers to code with AI',
        ]}
      />
    </>
  )
}
