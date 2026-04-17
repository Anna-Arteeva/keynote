import { useState, useEffect, useCallback, useRef } from 'react'

const sections = [
  {
    title: 'OPENING',
    notes: `I'm a designer, a design leader—and for the last year, I've had an accidental career of teaching designers and PMs how to build with AI.

My journey started about 2 years ago.`,
    cue: 'the light bulb moment',
  },
  {
    title: 'BUILD A PRODUCT',
    notes: `I'd spent a decade designing other people's products, and I thought: why not try to build my own?

I even convinced a senior engineer friend to join my venture.`,
    cue: 'I decided to build a product',
  },
  {
    title: 'THE APP',
    notes: `We picked a simple idea—a language-learning app. I played the design process by the book. One month interviewing potential users, putting together a beautiful prototype in Figma. Testing, iterating. Then he spent another month building it.

It looked nothing like my design. It could barely do anything.

Slowly, we lost steam, went our separate ways.`,
    cue: 'istorio screens → the ugly product',
  },
  {
    title: 'VIBE CODING',
    notes: `That would have been the end of the story, if I hadn't heard about vibe-coding right after that.

I thought, what do I have to lose? Three days later, I had built my app. It looked like my design. It did everything I wanted. A month later, I released it to the App Store.`,
    cue: 'Vibe coding',
  },
  {
    title: 'THIS CHANGES EVERYTHING',
    notes: `And I never opened it again.

Because I realised that my visually polished app offers a learning experience of the past, not of the future.`,
    cue: 'This changes everything',
  },
  {
    title: 'NOT WHY I\'M HERE',
    notes: `Now you wouldn't surprise anyone with that story. AI prototyping is becoming standard requirement for design and product roles. I've had people cancel their Figma subscriptions in the middle of my course. Some companies claim their designers now own the front-end entirely.

It is not the story I came to Rotterdam to tell.`,
    cue: 'Three changes → It\'s not why I\'m here',
  },
  {
    title: 'THE REAL SHIFT',
    notes: `We can now build—entirely ourselves, as designers—the most visually polished interfaces that have ever existed. Silk-smooth animations. Polished micro-interactions. Shaders that stop your scroll. Effects that would have taken a team a month—vibe-coded in a single afternoon.

And yet, the fastest-growing product right now has no UI at all. A terminal.`,
    cue: 'beautiful interaction → Claude Code',
  },
  {
    title: 'CLAUDE CODE',
    notes: `Claude Code is the fastest-growing software product ever reported. It went viral not only with developers, but with non-technical users. People who had never opened a terminal in their lives, happily talking to a command line.

What makes a black screen so appealing? It does the actual work for you. You tell it what you want in plain English, and it autonomously does the research, creates a solution, fixes its own mistakes and publishes the end result.`,
    cue: 'You tell it. / It does it.',
  },
  {
    title: 'THE IRONY',
    notes: `Do you see the irony? If we have the power to build beautiful visual interfaces, why is a plain text terminal winning?

It's because a beautiful visual interface still requires you to do the manual labour—clicking, navigating, executing. You still have to drive the car. The text terminal is winning because the machine is finally executing on our behalf.`,
    cue: 'The real mission is bigger than workflow',
  },
  {
    title: 'THE REAL MISSION',
    notes: `The real shift is bigger than workflow. This is not only about how we build software. It's about what we're building.

The very nature of the experiences we design is fundamentally changing. We're moving away from predictable screens and into a world of fluid connected AI systems.

I've identified new UX paradigms that define this new era.`,
    cue: 'UX paradigms',
  },
  {
    title: '1 — SOFTWARE IS NO LONGER PREDICTABLE',
    notes: `Until recently, we operated on a simple model. The system gave you the exact same predetermined response every time you took an action. Input A equals output B. Systems were deterministic.

Today, even if you provide the exact same input, an AI might produce wildly different outputs. It is non-deterministic.`,
    cue: 'input A → output B → output B, C, D',
  },
  {
    title: 'THEATER METAPHOR',
    notes: `Traditional software design was like directing a scripted play. Every actor knew their lines. If someone forgot a line, that was a bug—you stopped the play to fix it.

Designing for AI is improvisational theatre. You set the scene. You give the actors their motivations and the rules of the game. But you do not control the lines they speak once the curtain goes up.

That variability is a feature. It's what makes AI AI.`,
    cue: 'theater → non-deterministic',
  },
  {
    title: 'PROTOTYPE IN CODE',
    notes: `To design for such an experience you need to be able to touch it, sense it, stress test, manipulate and adjust.

You can't do it in Figma, but in code you can simply hook up your app to an AI model with a single prompt, and go ahead designing the system prompt to make the model play with your rules.`,
    cue: 'non-deterministic',
  },
  {
    title: '2 — FROM COMMANDS TO OUTCOMES',
    notes: `Before AI, the user gave a specific instruction step by step. To book a hotel, you pick your filters, review photos, go through the checkout.

Now you simply command it to your agent, and it books everything for you.`,
    cue: 'booking.com filters → conversational booking',
  },
  {
    title: 'SUPERMARKET → CHEF',
    notes: `The old model was a supermarket. The designer put signs on the aisles and grouped the dairy together, so you—the shopper—could find the ingredients, load the cart, drive home, and cook the meal yourself.

The new model is a restaurant. A chef comes to your table, asks what you're craving, and brings you the finished meal.

We have shifted to intent-based interfaces. You tell the system the outcome, and it figures out the steps.`,
    cue: 'supermarket / chef',
  },
  {
    title: 'ARTICULATING INTENT',
    notes: `Here's the first design challenge: humans are terrible at articulating complex intent in written prose.

• Sometimes we lack the right industry vocabulary.
• Sometimes we don't know where to start.
• Sometimes we don't know what's relevant to mention.

The designer is designing an environment that helps users articulate their intent better.`,
    cue: 'Help articulating intent',
  },
  {
    title: 'THE BLANK BOX',
    notes: `Designing the prompting experience is itself a design challenge. How do you help users overcome the blank text box? Do you give them options as a starting point? Ask follow-up questions? Suggest improvements instead of accepting everything at face value?

If typing our complex thoughts into a text box is really that difficult, maybe we shouldn't be typing at all. That pushes us beyond the glowing rectangle entirely into the era of multi-modal ambient interfaces.`,
    cue: 'blank box → steering UI',
  },
  {
    title: '3 — BEYOND THE SCREEN',
    notes: `We're now in the era of multimodal, ambient UI.

Let's go back to that café in Rotterdam. This time, you're wearing smart glasses. You point at an item on the menu and whisper, "how to order that in Dutch?"

The system fuses three signals at once. The camera reads the menu. The microphone catches your question. Eye-tracking pins down what your pupils were locked onto the millisecond you said "that."

He still switches to English. Some things AI can't fix.`,
    cue: 'Meta glasses visual',
  },
  {
    title: 'WHISPER FLOW',
    notes: `This isn't just future speculation.

I talk to my computer all the time with Whisper Flow for dictation. The entire UI I interact with is an "fn" button on my keyboard. I press it, hear a soft chime, see a small bubble activate. I get tremendous value from this product—and the entire interface is basically that.

But you cannot rely on pure voice alone. The articulation barrier is too high. Humans need hybrid interfaces. They need visual anchors.`,
    cue: 'Whisper Flow UI → modalities',
  },
  {
    title: 'MODALITIES COVER EACH OTHER',
    notes: `Imagine you're dictating an important message to your boss while crossing a busy street. You want to glance at it before hitting send—not listen back to a robot reading it aloud.

The strongest interfaces let modalities cover for each other. Voice fails in noise? Enhanced hearing takes over. Display unreadable in sunlight? Audio narrates instead.

The screen isn't dying. It's being enhanced with new modes of interaction.`,
    cue: 'When one modality fails → screen isn\'t dying',
  },
  {
    title: '4 — PERSONALISATION',
    notes: `Modern systems maintain persistent memory — that's not new. What's new is how deep it goes.

My language app gets better the more you use it, because it remembers everything. Your level. The words you keep forgetting. That you live in Rotterdam and order cappuccino, not filter coffee. Deep memory makes the app become a private tutor.`,
    cue: 'PERSONALISATION',
  },
  {
    title: 'NETFLIX',
    notes: `Netflix doesn't just recommend shows based on viewing history. It actively alters the thumbnail artwork based on your psychological profile.

If the system knows you love action, the thumbnail shows an explosion. If it knows you prefer romance, the same movie appears with two actors making eye contact in pastel tones.

The software adapts itself to your psychology. That works because the social contract is clear.`,
    cue: 'Netflix thumbnail example',
  },
  {
    title: 'MEMORY AS DESIGN MATERIAL',
    notes: `But once these memory systems move into email, calendars, and workspaces, that contract starts to fray.

It's one thing for an AI to remember you like action films. It's another thing when your AI drafts an email to your boss in your exact tone of voice, referencing an inside joke from three weeks ago because it quietly read your Slack messages.

Stop treating memory as a hidden backend database. Start treating memory itself as a design material—a way to build trust instead of eroding it.

Give users a memory dashboard. A visible, editable record of what the AI believes about them.`,
    cue: 'design around that → memory dashboard',
  },
  {
    title: 'WHAT CRAFT MEANS NOW',
    notes: `Even when designing for classic, non-AI experiences, working in purely visual tools left too many dimensions undefined. Micro-interactions. System response. Device specificities. That's why vibe-coding picked up so rapidly with the design community.

Because designing for AI-powered experiences becomes impossible in conventional design tools.

Historically, design tools have limited our thinking to the purely visual. Voice as a mode of interaction has been available for years. It just wasn't available in our design tools, so we never thought of it as an option.`,
    cue: 'What craft means now',
  },
  {
    title: 'CONCLUSION',
    notes: `With AI-powered coding we can easily build visually stunning UI, but also connect it to actual thinking systems. LLMs. Voice models. Vision models. Agents.

We have to completely redefine what craft means in digital design. Craft for visual perfection is no longer enough.

The craft is to design connected systems across all these modalities and modes of interaction, time, memory, reasoning. And striving for the best solution—even if the best solution is completely invisible.

That's what craft looks like in 2026.

The question isn't whether to learn this. It's whether you want to design the future or be surprised by it.`,
    cue: 'END',
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
        {/* Top bar */}
        <div style={{
          padding: '14px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
        }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}>
            Speaker Notes
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: 'rgba(255,255,255,0.25)',
          }}>
            {current + 1}/{total}
          </span>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '32px 20px',
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
            color: 'rgba(168, 140, 255, 0.6)',
            marginBottom: 14,
            letterSpacing: '0.02em',
          }}>
            [{s.cue}]
          </div>

          {/* Section title */}
          <h1 style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 24,
          }}>
            {s.title}
          </h1>

          {/* Notes text */}
          <div style={{
            fontSize: 18,
            lineHeight: 1.7,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.85)',
            whiteSpace: 'pre-wrap',
          }}>
            {s.notes}
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

        {/* Bottom nav */}
        <div style={{
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          flexShrink: 0,
        }}>
          <button onClick={() => go(current - 1)} disabled={current === 0} style={btnStyle(current === 0)}>&larr;</button>
          <button onClick={() => go(current + 1)} disabled={current === total - 1} style={btnStyle(current === total - 1)}>&rarr;</button>
        </div>
      </div>
    </>
  )
}

function btnStyle(disabled) {
  return {
    width: 36,
    height: 36,
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'transparent',
    color: disabled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)',
    fontSize: 16,
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    WebkitAppearance: 'none',
  }
}
