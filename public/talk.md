# Beyond Pixels: Designing for the AI-Native Era

## Conference Talk Script — Polished Draft

---

### OPENING

I'm a designer, a design leader—and for the last year, I've had an accidental career of teaching designers and PMs how to build with AI.

My journey into this started about 2 years ago. 
*[the light bulb moment]*
I'd spent a decade designing other people's products, and I thought: why not try to build my own? 

*[I decided to build a product]*

I even convinced a senior engineer friend to join my venture.

*[istorio screens]*
We picked a simple idea—a language-learning app. I played the design process by the book. One month interviewing potential users, putting together a beautiful prototype in Figma. 
Testing, iterating. Then he spent another month building it. And after that we had this

*[the ugly product]*

It looked nothing like my design. It could barely do anything. 

Slowly, we lost steam, went our separate ways.

That would have been the end of the story, if I hadn't heard about vibe-coding right after that.
*[Vibe coding]*

I thought, what do I have to lose? Three days later, I had built my app. It looked like my design. It did everything I wanted it to do. A month later, I released it to the App Store.

*[This changes everything]*

And I never opened it again.

Because I realised that my visually polished app offers **a learning experience of the past, not of the future**.

*[Three changes that made this talk inevitable.]*

Now you wouldn't surprise anyone with that story. AI prototyping is becoming a standard requirement for design and product roles. I've had people cancel their Figma subscriptions in the middle of my course. Some companies claim their designers now own the front-end entirely. 

*[It's not why I'm here.]*

It is not the story I came to Rotterdam to tell.

---

### THE REAL SHIFT

We can now vibe-code — entirely ourselves, as designers — the most visually polished interfaces that have ever existed. Silk-smooth animations. Polished micro-interactions. Shaders that stop your scroll. Effects that would have taken a team a month — vibe-coded in a single afternoon. 

*[video or beautiful interaction]*

And yet, the fastest-growing product right now has **no UI at all**. 

A terminal.

*[Claude Code screenshot]*

Claude Code is the **fastest-growing software product ever reported**. It went viral not only with developers, but with non-technical users. People who had never opened a terminal in their lives, happily talking to a command line.

What makes a black screen so appealing? 

You tell it what you want in plain English. It does the research, creates a solution, fixes its own mistakes, and publishes the result.

*[You tell it. / It does it.]*

In the meantime a beautiful interface still requires you to click, navigate, execute. The terminal is winning because **it is doing the work for you**.

*[The real shift is bigger than workflow.]*

But the moment the machine is doing the work, something fundamental changes. **You lose predictability**, taking me to the first UX paradigm that defines this new AI era. 

*[UX paradigm]*

---

### PARADIGM 1, THE FOUNDATION: SOFTWARE IS NO LONGER PREDICTABLE

Until recently, we operated on a simple model.

*[input A -> output B]*

The system gave you the exact same predetermined response every time you took an action. Every single time. Input A equals output B. Systems were **deterministic**.

*[input A -> output B, C, D]*

Today, even if you provide the exact same input, an AI might produce wildly different outputs. It is **non-deterministic**.

Traditional software design was like directing a scripted play. Every actor knew their lines. The lighting director knew exactly when to hit the spotlight. If someone forgot a line, that was a bug — you stopped the play to fix it.

*[theatre]*

**Designing for AI is improvisational theatre.**

You set the scene. You give the actors their motivations and the rules of the game. But you do not control the lines they speak once the curtain goes up.

That variability is a feature. It's what makes AI AI.

*[Non-deterministic]*

You can't design for improvisation by drawing static screens. You need to be **in the room with the actors** — provoking them, testing their limits, seeing how they respond when you change the rules mid-scene.

*[The design environment has to be as dynamic as the thing you're designing]*

That means working in code — hooking your interface to a live AI model, shaping the system prompt, and designing through conversation with the system itself. **The design environment has to be as dynamic as the thing you're designing.**

But if the system doesn't follow a script anymore — why should the user?

---

*[From Commands to Outcomes]*

### PARADIGM 2: FROM COMMANDS TO OUTCOMES

Before AI, the user gave a specific instruction step by step.
To book a hotel, you pick your filters, review photos, go through the checkout. 

*[booking.com filters]*

Now you simply command it to your agent, and it books everything for you. 

*[conversational booking]*

*[supermarket / chef]*

The old model was a **supermarket**. The designer put signs on the aisles and grouped the dairy together, so the user could find the ingredients, load the cart, drive home, and cook the meal yourself.

*[supermarket / chef]*

The new model is a **restaurant**. A chef comes to your table, asks what you're craving, and brings you the finished meal.

*[Intent-based interaction]*

The interaction is now **intent-based**. You say what you want, the system figures out how.

*[Help articulating intent]*

And here's the first design challenge: humans are **terrible at articulating complex intent** in written prose. 

- Sometimes we lack the right industry vocabulary.
- Sometimes we don't know where to start.
- Sometimes we don't know what's relevant to mention.

The designer is designing an environment that helps users **articulate their intent** better.
    
*[Help users overcome the blank box]*

Designing the **prompting experience** is itself a design challenge. How do you help users overcome the blank text box? Do you give them options as a starting point? Ask follow-up questions? Suggest improvements instead of accepting everything at face value?

*[Should we even be typing?]*

It reveals one truth about human communication: if typing our complex thoughts into a text box is really that difficult, maybe we shouldn't be typing at all.

### PARADIGM 3: BEYOND THE SCREEN

Imagine you are in a cafe in Rotterdam. You're wearing smart glasses. You point at an item on the menu and whisper, "how do I order that in Dutch?"

The system fuses **three signals at once**. The camera reads the menu. The microphone catches your question. Eye-tracking pins down what your pupils were locked onto the millisecond you said "that."

The glasses read the Dutch words back into your ear — slowly, so you can repeat it to the waiter.

*[Bitterballen quote]*

"Ik wil graag Bitterballen, alstublieft."

He still switches to English. Some things AI can't fix.

*[Meta glasses visual]*

Vision, gesture, voice, screen, contextual data — all fused into **a single interface**. 

*[voice-gesture-screen-vision]*

That pushes us beyond the text box entirely into the era of **multimodal, ambient interfaces**.

*[Multimodal UI]*

This isn't just future speculation.

*[Whisper Flow]*

I talk to my computer all the time with Whisper Flow for dictation. The entire UI I interact with is an "fn" button on my keyboard. I press it, hear a soft chime, see a small bubble activate and start recording everything I ramble into a microphone, then convert it into clean, polished text. I get tremendous value from this product, and **the UI is basically invisible**. 

*[minimal Whisper Flow UI, animated]*

But you cannot rely on pure voice alone. Humans need visual anchors. You want to glance at it before hitting send. You need **visual grounding**. 

*[When one modality fails, another takes over.]*

The strongest interfaces are **hybrid**, they let modalities cover for each other. Voice fails in noise? Screen takes over. Display unreadable in sunlight? Audio narrates instead.

*[The screen isn't dying]*

The screen isn't dying. It's being **enhanced with new modes of interaction**.

How do you design for this? 
- You can't sketch a voice interaction. 
- You can't mock up latency. 
- You can't wireframe the moment a synthetic voice pauses a beat too long and the whole experience feels uncanny.

But in code, you connect to a voice model in minutes. And then the real design work begins — tuning response timing, shaping intonation, syncing the voice back to the visual UI. These are **design decisions**. Just the design tool is different. 

---

*[slide: Anticipating what the user needs]*

But taking input in new ways is only half the story. The next level is **anticipating what the user needs before they say it**.

*[PERSONALISATION]*

### PARADIGM 4: PERSONALISATION

The most successful products adapt fluidly to their users — their preferences, their context — going as far as adapting to our psychology.

*[Netflix]*

Think of Netflix. We all know Netflix tracks our viewing habits and we generally accept it. 
It doesn't just recommend relevant shows. It actively **alters the thumbnail artwork** based on your psychological profile.

If the system defines you as an action lover, the thumbnail shows an explosion.
If it knows you prefer romance, the same movie appears with two actors making eye contact in pastel tones.

*[Netflix thumbnail example]*

That works because the **social contract is clear**. You know Netflix tracks your viewing habits, and you accept that trade-off.

*[Netflix works because the deal is clear.]*

But once these memory systems move into email, calendars, and workspaces, **that contract starts to fray**.

*[But what about your email, your calendar, your Slack messages?]*

It's one thing for an AI to remember you like action films. It's another thing when your AI drafts an email to your boss in your exact tone of voice, referencing an inside joke from three weeks ago because it quietly read your Slack messages.

*[How do you design for personalisation]*

So how do you design for personalisation without eroding trust? 

*[Memory is a design material.]*

By treating **memory itself as a design material**. 

*[Memory dashboard]*

For example, give users a **memory dashboard** — a visible, editable record of what the AI believes about them, something they can review, correct, and rewrite.

---

*[What Craft Means Now]*

### CONCLUSION: WHAT CRAFT MEANS NOW

*[In the era of...]*

*[So what does design craft mean?]*

So what does design craft mean?

*[Design tools leave too many dimensions undefined.]*

Our tools have always shaped our thinking. When all we had were visual design tools, we optimised screens. Voice existed for years — we just never considered it, because **our tools couldn't express it**.

*[...limiting our thinking to the purely visual.]*

But it does not cut it anymore. Now our design toolbox should include live AI models, real APIs, real data. And **the moment you can build with these materials, you start designing for them**.

*[Now we can prototype with: "The new design materials" — LLMs, Voice models, Vision models, Agents]*

*[The craft isn't pixels anymore. It's systems.]*

**The craft isn't pixels anymore. It's systems.**

Connected systems that span modalities, memory, reasoning. Even when the best design solution is **completely invisible**.

You cannot design these experiences in static tools. You have to build them. That designing in **code is not optional** when you want to shape AI-powered experiences. 

You need to understand the technology underneath — how models think, where they fail, what they can and can't do. That understanding is what separates **designing for AI from decorating around it**.

The good news - coding with AI has just became so much easier. 

*[Code is a design skill.]*

This is what craft looks like in 2026.

The question isn't whether to learn this. It's whether you want to **design the future — or be surprised by it**.

*[Design the future — or be surprised by it.]*

---

*[END]*

---
