# Beyond Pixels: Designing for the AI-Native Era

## Conference Talk Script — Polished Draft

---

### OPENING

I'm a designer, a design leader—and for the last year, I've an accidental career of teaching designers and PMs how to build with AI.

My journey into this started about 2 years ago. 
*[slide: the light bulb moment]*
I'd spent a decade designing other people's products, and I thought: why not try to build my own? 

*[slide: I decided to build a product]*

I even convinced a senior engineer friend to join my venture.

*[slide: istorio screens]*
We picked a simple idea—a language-learning app. I played the design process by the book. One month interviewing potential users, putting together a beautiful prototype in Figma. 
Testing, iterating. Then he spent another month building it. And after that we had this

*[slide: the ugly product]*

It looked Look nothing like my design. It could barely do anything. 

Slowly, we lost steam, went our separate ways.

That would have been the end of the story, if I hadn't heard about vibe-coding right after that.
*[slide: Vibe coding ]*

I thought, what do I have to lose? Three days later, I had built my app. It looked like my design. It did everything I wanted it to do. A month later, I released it to the App Store.

*[Slide: This changes everything]*

And I never opened it again.

**Because I realised this vibe-coding thing was so much bigger than my silly app.**

*[Slide: Three changes that made this talk inevitable.]*

Now you wouldn't surprise anyone with that story. AI prototyping is becoming standard in design and product roles. I've had people cancel their Figma subscriptions in the middle of my course. Some companies claim their designers now own the front-end entirely. 

So: the workflow is changing. The tools are changing. The roles are changing—everyone is becoming a builder.

*[slide: Workflow / Tools / Roles]*

That's the story everyone is telling right now.

*[It's not why I'm here.]*

It is not the story I came to Rotterdam to tell.

---

### THE REAL SHIFT

Have you thought about this.

We can now build—entirely ourselves, as designers—the most visually polished interfaces that have ever existed. Silk-smooth micro-interactions. Shaders that stop your scroll. Motion that would have taken a team a month—vibe-coded in an afternoon. We can do it ourselves, without compromising for developers.

*[slide: video or beautiful interaction]*

And yet, the fastest-growing product interface right now has no UI at all. 

A terminal.

*[slide: Claude Code screenshot]*

Claude Code is the *fastest-growing software products ever reported*. It went viral not only with developers, but with non-technical users. People who had never opened a terminal in their lives, happily talking to a command line.

What makes a black screen so appealing? Claude Code is an agentic tool that sits inside your computer. You tell it what you want in plain English, and it autonomously does the research, creates a solution, fixes its own mistakes and publishes the end result. *It is doing the work for you.*  

*[slide #15: You tell it." / "It does it.]*

Do you see the the irony? If we have the power to build beautiful visual interfaces, why is a plain text terminal winning? It's because a beautiful visual interface still requires you to do the manual labour, you know, clicking, navigating, executing. You still have to drive the car. The text terminal is winning because the machine is finally executing on our behalf.


*[The real mission is bigger than workflow.]*

The real mission is bigger than workflow. This is not only about how we build software. It's about what we're building.

The very nature of the experiences we design has fundamentally changed.

We're moving away from predictable static screens and into a world of connected AI systems. 

That's what I want to talk about today.

I've identified new UX paradigms that define this new era. Starting with the foundational truth that underpins everything that follows.

*[slide: UX paradigm ]*
---

### PARADIGM 1, THE FOUNDATION: SOFTWARE IS NO LONGER PREDICTABLE

Until recently, we operated on a simple model.

*[slide: input A-> output B ]*

The system gave you the exact same predetermined response every time you took an action. Every single time. Input A equals output B. It was deterministic.

*[slide: input A-> output B, C, D ]*

Today, even if you provide the exact same input, an AI might produce wildly different outputs. It is **non-deterministic**.

Traditional software design was like directing a scripted play. Every actor knew their lines. The lighting director knew exactly when to hit the spotlight. If someone forgot a line, that was a bug—you stopped the play to fix it.

*[ slide: theater ]*

**Designing for AI is improvisational theatre.**

You set the scene. You give the actors their motivations and the rules of the game. But you do not control the lines they speak once the curtain goes up.

That variability is a feature. It's what makes AI AI.

*[ slide: Non-determenistic]*

Take my language learning app. The old version shipped the same fixed set of stories to everyone. Boring.

The AI version generates a story that fits your situation. You're in a café in Rotterdam, you want to practice your coffee vocabulary — the app takes your context and writes a relevant story on the fly. You try it out on the waiter. He switches to English, of course, because we're in the Netherlands. But hey, you tried!

And the vocabulary sticks, because it's tied to the moment you needed it.

But in high-stakes domains—medicine, finance, law—that variance becomes dangerous. The machine doesn't know it's wrong.

Your job is to decide where variability adds value, and where a conventional, deterministic experience is the better choice.

---

*[ slide: From Commands to Outcomes]*
### PARADIGM 2: FROM COMMANDS TO OUTCOMES

Before AI, the user gave a specific instruction, and the computer executed it step by step.
To book a hotel, you go, pick your filters, review photos, go throught teh checkout. 

*[slide: booking.com filters]*

now you simply command it to your agent, and it books everything for you. 

*[slide: conversational booking OpenClaw]*

*[slide: supermarket / chef]*

The old model was a supermarket. The designer put signs on the aisles and grouped the dairy together, so you—the shopper—could find the ingredients, load the cart, drive home, and cook the meal yourself.

*[slide: supermarket / chef]*

The new model is a restaurant. A chef comes to your table, asks what you're craving, and brings you the finished meal.

We have shifted to intent-based outcome specification.

You delegated your intent, and the system figured out the steps.

*[ feel heavy, academical. Need concrete action point on how to take it into design practice.]*

*[slide: Help articulating intent]*
And here's the first design challenge: humans are terrible at articulating complex intent in written prose. 

- Sometimes we lack the right industry vocabulary.
- Sometimes we don't know where to start.
- Sometimes we don't know what's relevant to mention.

The designer is designing an environment that helps users articulate their intent better.
    
*[slide: Help users overcome the blank box ]*

Designing the **prompting experience** is itself a design challenge. How do you help users overcome the blank text box? Do you give them options as a starting point? Ask follow-up questions? Suggest improvements instead of accepting everything at face value?

*[slide: steering UI example]*

It reveals one truth about human communication, because if typing our complex thoughts into a text box is really that difficult, maybe we shouldn't be typing at all. That pushes us beyond the glowing rectangle entirely into the era of multi-modal ambient interfaces.  They don't just rely on a keyboard; they fuse voice, gesture, vision, and contextual data simultaneously.



### PARADIGM 3: BEYOND THE SCREEN

We're now in the **era of multimodal, ambient UI**.

Let's go back to that café in Rotterdam. This time, you're wearing smart glasses. You point at an item on the menu and whisper, "how to order that in Dutch?"

The system fuses three signals at once. The camera reads the menu. The microphone catches your question. Eye-tracking pins down what your pupils were locked onto the millisecond you said "that."

The glasses show you a photo of the dish and read the Dutch words back into your ear — slowly, so you can repeat it to the waiter.

He still switches to English. Some things AI can't fix.

*[slide: Meta glasses visual]*

Visual scene, voice input, gaze coordinate—fused into a single actionable command.

*[slide: voice-gesture-screen-vision]*

This isn't just future speculation.

I talk to my computer all the time. I use my camera to translate restaurant menus from Dutch to English. I rely on voice commands from my GPS when I'm cycling.

I use Whisper Flow for dictation. The entire UI I interact with is an "fn" button on my keyboard. I press it, hear a soft chime, see a small bubble activate. I get tremendous value from this product—and the entire interface is basically that.

*[slide: minimal Whisper Flow UI, animated]*

But you cannot rely on pure voice alone. The articulation barrier is too high. Humans need **hybrid interfaces**. They need visual anchors.

If you dictate a text message, there needs to be a way to glance at the result before it's sent. Without visual grounding, you don't discover the error until it's too late.

Meta's Ray-Ban glasses understood this. They integrate voice, camera, and display—but critically, when one modality fails, another compensates. Voice fails in noise? Conversation Focus enhances hearing. Display unreadable in sunlight? Audio narrates the information.

**No single modality failure kills the experience.**

The screen isn't dying. It's being enhanced with new modes of interaction.

---

### PARADIGM 4: PERSONALISATION

It's not new that modern systems maintain persistent memory. But the depth of personalisation is expanding in every direction.

Take Netflix. It doesn't just recommend shows based on viewing history. It actively alters the thumbnail artwork based on your psychological profile.

If the system knows you love action, the thumbnail shows an explosion.
If it knows you prefer romance, the same movie appears with two actors making eye contact in pastel tones.

*[slide: Netflix thumbnail example]*

The software adapts itself to your psychology.

That works because the social contract is clear. You know Netflix tracks your viewing habits, and you accept that trade-off.

But once these memory systems move into email, calendars, and workspaces, that contract starts to fray.

Users want personalised experiences—until they realise what the system needs to know to deliver them.

It's one thing for an AI to remember you like action films. It's another thing when your AI drafts an email to your boss in your exact tone of voice, referencing an inside joke from three weeks ago because it quietly read your Slack messages.

So how do you design around that?

The emerging answer: stop treating memory as a hidden backend database. Start treating memory itself as a **design material—a way to build trust instead of eroding it**.

Give users a **memory dashboard**. A visible, editable record of what the AI believes about them. Something they can review and rewrite.

Claude took this approach—memory is project-scoped, stored in transparent files, fully viewable and editable. ChatGPT went the opposite direction—on by default, a passive dossier, workarounds required to see your profile.

The next level of personalisation is **generative U**I—where the interface itself adapts.

*[slide: adaptive interface example]*

Google's Gemini 3 can design and code a custom interface in real-time for each prompt. Explaining the microbiome to a five-year-old produces giant colourful cartoon bacteria, tappable voice icons. The same prompt from a biology grad student produces phylogenetic trees and citation links.

There is no master layout. The interface is ephemeral.

Research showed users prefer these tailored interfaces to static websites **90% of the time**.

But imagine your banking app changed its layout every Friday based on what it guessed you wanted. One day, the transfer button is large and centred. The next day, it's a tiny link buried in a corner.

Humans rely on spatial memory. We like knowing the steering wheel is always on the left.

So what happens to shared digital culture if your app adapts perfectly to your mind, and mine adapts perfectly to mine? It's a design decision: how much of the interface should be fluid and adaptive, and how much should stay fixed.

---

### PARADIGM 5: AGENTIC AI

Who is actually using the product anymore?

Us, or the AI?

For fifty years, software design was built around the underlying assumption was that the user was a human being with eyes and fingers.

But as AI agents become more autonomous, they are increasingly becoming the primary users of digital platforms. They're the ones navigating the web, scraping data, clicking buttons, and completing workflows on our behalf.

We are entering the era of **AX**—the **agentic experience**.

The term was coined in 2025 by Mathias Biilmann at Netlify.

AI agents are now first-class users of digital products. They're logging in, navigating APIs, and executing workflows autonomously.

We've spent decades perfecting human-computer interfaces. We made buttons look clickable. We added hover states, shadows, and micro-interactions.

AI agents don't care about any of that.

So what does it mean to design an interface for an AI?

You design the system so that another piece of software can understand what it can do, where its boundaries are, and how to execute tasks without breaking anything.

And this is where entirely new governance patterns emerge. We need to consider: what is safe for agents to do autonomously? What actions require human supervision? What should be reserved only for humans?

*[slide: Stripe agentic payment example]*

*[slide: OpenClaw example]*

The core lesson: **agent experience must complement human experience, not replace it wholesale.**

---

### CONCLUSION: WHAT CRAFT MEANS NOW

We've seen self-assembling screens. Probabilistic outputs. Deep memory. Multimodal systems. AI agents acting as users.

So what does craft mean for the people building software?

Even when designing for classic, non-AI experiences, working in purely visual tools left too many dimensions undefined. Micro-interactions. System response. Device specificities. That's why vibe-coding picked up so rapidly with the design community.

And that builds the foundation for what's coming next.

Because designing for AI-powered experiences becomes impossible in conventional design tools.

Historically, design tools have limited our thinking to the purely visual. What was expected from designers was a set of annotated mockups—so we optimised and streamlined all our thinking into polishing those mockups, ignoring other dimensions of the experience. Voice as a mode of interaction has been available for years. It just wasn't available in our design tools, so we never thought of it as an option.

Now we can easily build functional prototypes connected to actual thinking systems. LLMs. Voice models. Vision models. Agents.

That naturally expands our thinking. It lets us create more ambient interactions that blend into people's context.

It means we have to completely redefine what **craft** means in digital design.

If craft once meant pushing pixels around a static canvas until the typography looked perfect, that is no longer enough.

Craft today means thinking across all these dimensions—tools, modes of interaction, time, memory, agency—and finding the best solution for the problem. Even if the best solution is completely invisible.

That's what craft looks like in 2026.

The question isn't whether to learn this.

It's whether you want to design the future or be surprised by it.

---

*[END]*

---