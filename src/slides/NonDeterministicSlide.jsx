import SectionIntroSlide from '../components/SectionIntroSlide'

export default function NonDeterministicSlide() {
  return (
    <SectionIntroSlide
      eyebrow="The core difference"
      title="Non-deterministic"
      subtitle="The same prompt does not guarantee the same result, which changes how we design control and expectation."
      titleSize="xl"
      maxWidth="min(92vw, 1000px)"
      accent="#d4c5f0"
      secondaryAccent="#f3d9b4"
    />
  )
}
