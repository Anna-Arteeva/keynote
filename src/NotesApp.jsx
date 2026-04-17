import { useState, useEffect, useCallback, useRef } from 'react'

// **text** → highlighted span
function renderNotes(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={i} style={{ color: '#c8b4ff' }}>{part.slice(2, -2)}</span>
    }
    return part
  })
}

const sections = [
  {
    cue: 'the light bulb moment',
    notes: `I'm a designer, a design leader\u2014and for the last year, I've had an accidental career of **teaching designers and PMs how to build with AI**.

My journey into this started about 2 years ago. I'd spent a decade designing other people's products, and I thought: why not try to build my own?`,
  },
  {
    cue: 'I decided to build a product \u2192 istorio screens',
    notes: `I even convinced a senior engineer friend to join my venture.

We picked a simple idea\u2014a language-learning app. I played the design process by the book. One month interviewing potential users, putting together a beautiful prototype in Figma. Testing, iterating. Then he spent another month building it. And after that we had this`,
  },
  {
    cue: 'the ugly product',
    notes: `It looked nothing like my design. It could barely do anything.

Slowly, we lost steam, went our separate ways.

That would have been the end of the story, if I hadn't heard about **vibe-coding** right after that.`,
  },
  {
    cue: 'Vibe coding',
    notes: `I thought, what do I have to lose? **Three days later, I had built my app.** It looked like my design. It did everything I wanted it to do. A month later, I released it to the App Store.`,
  },
  {
    cue: 'This changes everything',
    notes: `And I never opened it again.

Because I realised that my visually polished app offers **a learning experience of the past, not of the future**.`,
  },
  {
    cue: 'Three changes \u2192 It\u2019s not why I\u2019m here',
    notes: `Now you wouldn't surprise anyone with that story. AI prototyping is becoming a standard requirement for design and product roles. I've had people cancel their Figma subscriptions in the middle of my course. Some companies claim their designers now own the front-end entirely.

It is not the story I came to Rotterdam to tell.`,
  },
  {
    cue: 'video or beautiful interaction',
    notes: `We can now vibe-code \u2014 entirely ourselves, as designers \u2014 the **most visually polished interfaces that have ever existed**. Silk-smooth animations. Polished micro-interactions. Shaders that stop your scroll. Effects that would have taken a team a month \u2014 vibe-coded in a single afternoon.`,
  },
  {
    cue: 'Claude Code screenshot',
    notes: `And yet, the fastest-growing product right now has **no UI at all**.

A terminal.

Claude Code is the **fastest-growing software product ever reported**. It went viral not only with developers, but with non-technical users. People who had never opened a terminal in their lives, happily talking to a command line.`,
  },
  {
    cue: 'You tell it. / It does it.',
    notes: `What makes a black screen so appealing?

You tell it what you want in plain English. It does the research, creates a solution, fixes its own mistakes, and publishes the result.`,
  },
  {
    cue: 'The real shift is bigger than workflow',
    notes: `In the meantime a beautiful interface still requires you to click, navigate, execute. The terminal is winning because **it is doing the work for you**.`,
  },
  {
    cue: 'UX paradigm',
    notes: `But the moment the machine is doing the work, something fundamental changes. **You lose predictability**, taking me to the first UX paradigm that defines this new AI era.`,
  },
  {
    title: 'SOFTWARE IS NO LONGER PREDICTABLE',
    cue: 'input A \u2192 output B \u2192 output B, C, D',
    notes: `Until recently, we operated on a simple model.

The system gave you the exact same predetermined response every time you took an action. Every single time. Input A equals output B. Systems were **deterministic**.

Today, even if you provide the exact same input, an AI might produce wildly different outputs. It is **non-deterministic**.`,
  },
  {
    cue: 'theatre \u2192 Non-deterministic',
    notes: `Traditional software design was like directing a scripted play. Every actor knew their lines. The lighting director knew exactly when to hit the spotlight. If someone forgot a line, that was a bug \u2014 you stopped the play to fix it.

**Designing for AI is improvisational theatre.**

You set the scene. You give the actors their motivations and the rules of the game. But you do not control the lines they speak once the curtain goes up.

That variability is a feature. It's what makes AI AI.`,
  },
  {
    cue: 'The design environment has to be as dynamic as the thing you\u2019re designing',
    notes: `You can't design for improvisation by drawing static screens. You need to be **in the room with the actors** \u2014 provoking them, testing their limits, seeing how they respond when you change the rules mid-scene.

That means working in code \u2014 hooking your interface to a live AI model, shaping the system prompt, and designing through conversation with the system itself. **The design environment has to be as dynamic as the thing you're designing.**

But if the system doesn't follow a script anymore \u2014 why should the user?`,
  },
  {
    title: 'FROM COMMANDS TO OUTCOMES',
    cue: 'booking.com filters \u2192 conversational booking',
    notes: `Before AI, the user gave a specific instruction step by step. To book a hotel, you pick your filters, review photos, go through the checkout.

Now you simply command it to your agent, and it books everything for you.`,
  },
  {
    cue: 'supermarket / chef \u2192 Intent-based interaction',
    notes: `The old model was a **supermarket**. The designer put signs on the aisles and grouped the dairy together, so the user could find the ingredients, load the cart, drive home, and cook the meal yourself.

The new model is a **restaurant**. A chef comes to your table, asks what you're craving, and brings you the finished meal.

The interaction is now **intent-based**. You say what you want, the system figures out how.`,
  },
  {
    cue: 'Help articulating intent',
    notes: `And here's the first design challenge: humans are **terrible at articulating complex intent** in written prose.

\u2022 Sometimes we lack the right industry vocabulary.
\u2022 Sometimes we don't know where to start.
\u2022 Sometimes we don't know what's relevant to mention.

The designer is designing an environment that helps users **articulate their intent** better.`,
  },
  {
    cue: 'Help users overcome the blank box \u2192 Should we even be typing?',
    notes: `Designing the **prompting experience** is itself a design challenge. How do you help users overcome the blank text box? Do you give them options as a starting point? Ask follow-up questions? Suggest improvements instead of accepting everything at face value?

It reveals one truth about human communication: if typing our complex thoughts into a text box is really that difficult, maybe we shouldn't be typing at all.`,
  },
  {
    title: 'BEYOND THE SCREEN',
    cue: 'smart glasses \u2192 Bitterballen quote',
    notes: `Imagine you are in a cafe in Rotterdam. You're wearing smart glasses. You point at an item on the menu and whisper, \u201chow do I order that in Dutch?\u201d

The system fuses **three signals at once**. The camera reads the menu. The microphone catches your question. Eye-tracking pins down what your pupils were locked onto the millisecond you said \u201cthat.\u201d

The glasses read the Dutch words back into your ear \u2014 slowly, so you can repeat it to the waiter.

\u201cIk wil graag Bitterballen, alstublieft.\u201d

He still switches to English. Some things AI can't fix.`,
  },
  {
    cue: 'Meta glasses \u2192 voice-gesture-screen \u2192 Multimodal UI',
    notes: `Vision, gesture, voice, screen, contextual data \u2014 all fused into **a single interface**.

That pushes us beyond the text box entirely into the era of **multimodal, ambient interfaces**.`,
  },
  {
    cue: 'Whisper Flow',
    notes: `This isn't just future speculation.

I talk to my computer all the time with Whisper Flow for dictation. The entire UI I interact with is an \u201cfn\u201d button on my keyboard. I press it, hear a soft chime, see a small bubble activate and start recording everything I ramble into a microphone, then convert it into clean, polished text. I get tremendous value from this product, and **the UI is basically invisible**.`,
  },
  {
    cue: 'When one modality fails \u2192 The screen isn\u2019t dying',
    notes: `But you cannot rely on pure voice alone. Humans need visual anchors. You want to glance at it before hitting send. You need **visual grounding**.

The strongest interfaces are **hybrid**, they let modalities cover for each other. Voice fails in noise? Screen takes over. Display unreadable in sunlight? Audio narrates instead.

The screen isn't dying. It's being **enhanced with new modes of interaction**.`,
  },
  {
    cue: 'design for this in code',
    notes: `How do you design for this?
\u2022 You can't sketch a voice interaction.
\u2022 You can't mock up latency.
\u2022 You can't wireframe the moment a synthetic voice pauses a beat too long and the whole experience feels uncanny.

But in code, you connect to a voice model in minutes. And then the real design work begins \u2014 tuning response timing, shaping intonation, syncing the voice back to the visual UI. These are **design decisions**. Just the design tool is different.`,
  },
  {
    title: 'PERSONALISATION',
    cue: 'Personalisation',
    notes: `But taking input in new ways is only half the story. The next level is **anticipating what the user needs before they say it**.

The most successful products adapt fluidly to their users \u2014 their preferences, their context \u2014 going as far as adapting to our psychology.`,
  },
  {
    cue: 'Netflix \u2192 Netflix thumbnail example',
    notes: `Think of Netflix. We all know Netflix tracks our viewing habits and we generally accept it. It doesn't just recommend relevant shows. It actively **alters the thumbnail artwork** based on your psychological profile.

If the system defines you as an action lover, the thumbnail shows an explosion. If it knows you prefer romance, the same movie appears with two actors making eye contact in pastel tones.

That works because the **social contract is clear**. You know Netflix tracks your viewing habits, and you accept that trade-off.`,
  },
  {
    cue: 'But what about your email\u2026 \u2192 Memory is a design material \u2192 Memory dashboard',
    notes: `But once these memory systems move into email, calendars, and workspaces, **that contract starts to fray**.

It's one thing for an AI to remember you like action films. It's another thing when your AI drafts an email to your boss in your exact tone of voice, referencing an inside joke from three weeks ago because it quietly read your Slack messages.

So how do you design for personalisation without eroding trust?

By treating **memory itself as a design material**.

For example, give users a **memory dashboard** \u2014 a visible, editable record of what the AI believes about them, something they can review, correct, and rewrite.`,
  },
  {
    title: 'WHAT CRAFT MEANS NOW',
    cue: 'What Craft Means Now \u2192 So what does design craft mean?',
    notes: `So what does design craft mean?`,
  },
  {
    cue: 'Design tools leave too many dimensions undefined \u2192 Now we can prototype with\u2026',
    notes: `Our tools have always shaped our thinking. When all we had were visual design tools, we thought in screens. Voice existed for years \u2014 we just never designed for it, because **our tools couldn't express it**.

But it does not cut it anymore. Now our design toolbox should include live AI models, voice, vision, agents. And **the moment you can build with these materials, you start designing with them**.`,
  },
  {
    cue: 'The craft isn\u2019t pixels anymore \u2192 Code is a design skill',
    notes: `**The craft isn't pixels anymore. It's systems.**

Connected systems that span voice, vision, memory, reasoning \u2014 and sometimes the best design decision is **completely invisible**.

You cannot design these experiences in static tools. You have to build them. That means **code is now a design skill**. Not optional. Not a nice-to-have. A core competency.

To shape AI-powered experiences, you need to understand the technology underneath \u2014 how models think, where they fail, what they can and can't do. That understanding is what separates **designing for AI from decorating around it**.`,
  },
  {
    cue: 'Design the future \u2014 or be surprised by it',
    notes: `This is what craft looks like in 2026.

The question isn't whether to learn this. It's whether you want to **design the future \u2014 or be surprised by it**.`,
  },
]

const STORAGE_KEY = 'notes-current-slide'

export default function NotesApp() {
  const [current, setCurrent] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored != null) {
        const n = parseInt(stored, 10)
        if (Number.isFinite(n) && n >= 0 && n < sections.length) return n
      }
    } catch {}
    return 0
  })
  const total = sections.length
  const touchRef = useRef(null)

  const go = useCallback((i) => {
    setCurrent(Math.max(0, Math.min(total - 1, i)))
  }, [total])

  // Persist position
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, String(current)) } catch {}
  }, [current])

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/notes-sw.js').catch(() => {})
    }
  }, [])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(current + 1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(current - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, go])

  // Touch: swipe or tap zones (left half = back, right half = forward)
  useEffect(() => {
    const onStart = (e) => {
      const t = e.changedTouches?.[0]
      if (t) touchRef.current = { x: t.clientX, y: t.clientY, t: Date.now() }
    }
    const onEnd = (e) => {
      const start = touchRef.current
      touchRef.current = null
      if (!start) return
      const t = e.changedTouches?.[0]
      if (!t) return
      const dx = t.clientX - start.x
      const dy = t.clientY - start.y
      const dt = Date.now() - start.t

      // Swipe
      if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) && dt < 600) {
        if (dx < 0) go(current + 1)
        else go(current - 1)
        return
      }

      // Tap (short, no movement) — ignore if tapping a button
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10 && dt < 300) {
        if (e.target.closest('button')) return
        const x = start.x
        if (x > window.innerWidth * 0.5) go(current + 1)
        else go(current - 1)
      }
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [current, go])

  const s = sections[current]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { background: #0a0a0a; }
        body, #root { width: 100%; height: 100%; background: #0a0a0a; color: #e0e0e0; overflow: hidden; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }
        ::selection { background: rgba(120, 100, 255, 0.3); }
      `}</style>

      <div style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', system-ui, sans-serif",
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}>
        {/* Restart button — fixed top-left */}
        <button
          onClick={() => go(0)}
          style={{
            position: 'fixed',
            top: 'calc(6px + env(safe-area-inset-top))',
            left: 'calc(10px + env(safe-area-inset-left))',
            zIndex: 10,
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.2)',
            fontSize: 14,
            cursor: 'pointer',
            padding: 4,
            WebkitAppearance: 'none',
          }}
        >
          &#x21BA;
        </button>

        {/* Slide counter — fixed top-right */}
        <span style={{
          position: 'fixed',
          top: 'calc(8px + env(safe-area-inset-top))',
          right: 'calc(12px + env(safe-area-inset-right))',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: 'rgba(255,255,255,0.2)',
          zIndex: 10,
        }}>
          {current + 1}/{total}
        </span>

        {/* Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '24px 20px',
          maxWidth: 640,
          margin: '0 auto',
          width: '100%',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}>
          {/* Slide cue */}
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'rgba(168, 140, 255, 0.5)',
            marginBottom: s.title ? 10 : 20,
            letterSpacing: '0.02em',
          }}>
            [{s.cue}]
          </div>

          {/* Section title — only when it's a real slide title */}
          {s.title && (
            <h1 style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 24,
            }}>
              {s.title}
            </h1>
          )}

          {/* Notes text */}
          <div style={{
            fontSize: 18,
            lineHeight: 1.7,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.82)',
            whiteSpace: 'pre-wrap',
          }}>
            {renderNotes(s.notes)}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{
          height: 2,
          background: 'rgba(255,255,255,0.04)',
          flexShrink: 0,
        }}>
          <div style={{
            height: '100%',
            width: `${((current + 1) / total) * 100}%`,
            background: 'rgba(168, 140, 255, 0.4)',
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>
    </>
  )
}
