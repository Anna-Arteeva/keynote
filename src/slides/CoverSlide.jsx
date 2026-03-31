'use client'

import { useEffect, useRef } from 'react'
import { Title, Subtitle, Spacer } from '../components/Typography'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => {
      this.resolve = resolve
    })
    this.queue = []

    for (let i = 0; i < length; i += 1) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 24)
      const end = start + Math.floor(Math.random() * 22)
      this.queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  stop() {
    cancelAnimationFrame(this.frameRequest)
  }

  update() {
    let output = ''
    let complete = 0

    for (let i = 0; i < this.queue.length; i += 1) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete += 1
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="scramble-dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
      return
    }

    this.frameRequest = requestAnimationFrame(this.update)
    this.frame += 1
  }
}

function ScrambledTitle({ text, delay = 0 }) {
  const elRef = useRef(null)

  useEffect(() => {
    if (!elRef.current) return undefined

    const scrambler = new TextScramble(elRef.current)
    const timer = window.setTimeout(() => {
      scrambler.setText(text)
    }, delay * 1000)

    return () => {
      window.clearTimeout(timer)
      scrambler.stop()
    }
  }, [text, delay])

  return (
    <>
      <Title size="xl" delay={0}>
        <span ref={elRef} aria-label={text}>
          {' '.repeat(text.length)}
        </span>
      </Title>
      <style>{`
        .scramble-dud {
          color: rgba(45, 40, 70, 0.7);
        }
      `}</style>
    </>
  )
}

export default function CoverSlide() {
  return (
    <>
      <div style={{ flex: 1 }} />
      <ScrambledTitle text="Beyond Pixels" delay={0} />
      <Spacer size="sm" />
      <Subtitle size="md" delay={1} style={{ maxWidth: 'min(88vw, 760px)' }}>
        Designing for the AI-Native Era
      </Subtitle>
      <div style={{ flex: 1 }} />
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(11px, 1vw, 16px)',
          color: 'rgba(45, 40, 70, 0.45)',
          textAlign: 'center',
          lineHeight: 1.6,
          paddingBottom: '2vh',
        }}
      >
        Anna Arteeva<br />
        RotterdamUX 2026
      </motion.div>
    </>
  )
}
