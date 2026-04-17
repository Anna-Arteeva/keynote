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

**Because I realised that my visually polished app offers a learning experience of the past, not of the future.

*[Slide: Three changes that made this talk inevitable.]*

Now you wouldn't surprise anyone with that story. AI prototyping is becoming standard requirement for design and product roles. I've had people cancel their Figma subscriptions in the middle of my course. Some companies claim their designers now own the front-end entirely. 

*[It's not why I'm here.]*

It is not the story I came to Rotterdam to tell.

---

### THE REAL SHIFT

Have you thought about this.

We can now build—entirely ourselves, as designers—the most visually polished interfaces that have ever existed. Silk-smooth animations. Polished micro-interactions. Shaders that stop your scroll. Effects that would have taken a team a month—vibe-coded in a single afternoon. We can do it ourselves, without compromising for developers.

*[slide: video or beautiful interaction]*

And yet, the fastest-growing product product right now has no UI at all. 

A terminal.

*[slide: Claude Code screenshot]*

Claude Code is the *fastest-growing software products ever reported*. It went viral not only with developers, but with non-technical users. People who had never opened a terminal in their lives, happily talking to a command line.

What makes a black screen so appealing? Claude Code does the actual work for you. You tell it what you want in plain English, and it autonomously does the research, creates a solution, fixes its own mistakes and publishes the end result. *It is doing the work for you.*  

*[slide #15: You tell it." / "It does it.]*

Do you see the the irony? If we have the power to build beautiful visual interfaces, why is a plain text terminal winning? It's because a beautiful visual interface still requires you to do the manual labour – clicking, navigating, executing. You still have to drive the car. The text terminal is winning because the machine is finally executing on our behalf.

*[The real mission is bigger than workflow.]*

The real shift is bigger than workflow. This is not only about how we build software. It's about what we're building.

The very nature of the experiences we design is fundamentally changing. 

We're moving away from predictable screens and into a world of fluid connected AI systems.

That's what I want to talk about today.

I've identified new UX paradigms that define this new era. Starting with the foundational truth that underpins everything that follows.

*[slide: UX paradigm ]*
---

### PARADIGM 1, THE FOUNDATION: SOFTWARE IS NO LONGER PREDICTABLE

Until recently, we operated on a simple model.

*[slide: input A-> output B ]*

The system gave you the exact same predetermined response every time you took an action. Every single time. Input A equals output B. Systems were deterministic.

*[slide: input A-> output B, C, D ]*

Today, even if you provide the exact same input, an AI might produce wildly different outputs. It is **non-deterministic**.

Traditional software design was like directing a scripted play. Every actor knew their lines. The lighting director knew exactly when to hit the spotlight. If someone forgot a line, that was a bug—you stopped the play to fix it.

*[ slide: theater ]*

**Designing for AI is improvisational theatre.**

You set the scene. You give the actors their motivations and the rules of the game. But you do not control the lines they speak once the curtain goes up.

That variability is a feature. It's what makes AI AI.

*[ slide: Non-determenistic]*

To design for such an experience you need to be able to touch it, sense in, stress test, manipulate and adjust. 
You can't do it in Figma, but in code you can simply hook up you app to an AI model with a single prompt, and go ahead designing the system prompt to make the model play with your rules you define. 

---

*[ slide: From Commands to Outcomes]*
### PARADIGM 2: FROM COMMANDS TO OUTCOMES

Before AI, the user gave a specific instruction step by step.
To book a hotel, you pick your filters, review photos, go through the checkout. 

*[slide: booking.com filters]*

now you simply command it to your agent, and it books everything for you. 

*[slide: conversational booking OpenClaw]*

There are two sides to it. First, how to make your website agent-friendly, and second, how to make it agentic. 

*[slide: supermarket / chef]*

The old model was a supermarket. The designer put signs on the aisles and grouped the dairy together, so you—the shopper—could find the ingredients, load the cart, drive home, and cook the meal yourself.

*[slide: supermarket / chef]*

The new model is a restaurant. A chef comes to your table, asks what you're craving, and brings you the finished meal.

We have shifted to intent-based interfaces.

You tell the designer outcome, and the system figurs out the steps.

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

I talk to my computer all the time with Wisper Flow for dictation. The entire UI I interact with is an "fn" button on my keyboard. I press it, hear a soft chime, see a small bubble activate. I get tremendous value from this product—and the entire interface is basically that.

*[slide: minimal Whisper Flow UI, animated]*

But you cannot rely on pure voice alone. The articulation barrier is too high. Humans need **hybrid interfaces**. They need visual anchors.

*[ slide: When one modality fails, another takes over. ]*

Imagine you're dictating an important message to your boss while crossing a busy street. You want to glance at it before hitting send—not listen back to a robot reading it aloud. Without visual grounding, you don't catch the error until it's already out there.

The strongest interfaces let modalities cover for each other. Voice fails in noise? Enhanced hearing takes over. Display unreadable in sunlight? Audio narrates instead.

*[ slide: The screen isn't dying ]*
The screen isn't dying. It's being enhanced with new modes of interaction.

---

*[ slide: PERSONALISATION ]*
### PARADIGM 4: PERSONALISATION

Modern systems maintain persistent memory — that's not new. What's new is how deep it goes.

My language app gets better the more you use it, because it remembers everything. Your level. The words you keep forgetting. That you live in Rotterdam and order capucino, not filter coffee. The story it generates for you tomorrow is shaped by every story it generated before. Deep memory makes the app become a private tutor. 

Netflix takes this further. We all know Netflix tracks our viewing habits and we generally accept it. 
It doesn't just recommend shows based on viewing history. It actively alters the thumbnail artwork based on your psychological profile.

If the system knows you love action, the thumbnail shows an explosion.
If it knows you prefer romance, the same movie appears with two actors making eye contact in pastel tones.

*[slide: Netflix thumbnail example]*

The software adapts itself to your psychology.

That works because the social contract is clear. You know Netflix tracks your viewing habits, and you accept that trade-off.

But once these memory systems move into email, calendars, and workspaces, that contract starts to fray.

It's one thing for an AI to remember you like action films. It's another thing when your AI drafts an email to your boss in your exact tone of voice, referencing an inside joke from three weeks ago because it quietly read your Slack messages.

So how do you design around that?

The emerging answer: stop treating memory as a hidden backend database. Start treating memory itself as a **design material—a way to build trust instead of eroding it**.

Give users a **memory dashboard**. A visible, editable record of what the AI believes about them. Something they can review and rewrite.


### CONCLUSION: WHAT CRAFT MEANS NOW

We've covered a lot of ground. Probabilistic outputs. Intent-oriented design. Multimodal systems. Deep memory.

So what does craft mean for the people building software?

Even when designing for classic, non-AI experiences, working in purely visual tools left too many dimensions undefined. Micro-interactions. System response. Device specificities. That's why vibe-coding picked up so rapidly with the design community.

And that builds the foundation for what's coming next.

Because designing for AI-powered experiences becomes impossible in conventional design tools.

Historically, design tools have limited our thinking to the purely visual. What was expected from designers was a set of annotated mockups—so we optimised and streamlined all our thinking into polishing those mockups, ignoring other dimensions of the experience. Voice as a mode of interaction has been available for years. It just wasn't available in our design tools, so we never thought of it as an option.

With AI-powered coding we can easily build visually stanning UI, but also connect it to actual thinking systems. LLMs. Voice models. Vision models. Agents.

That naturally expands our thinking. It lets us create more ambient interactions that blend into people's context.

It means we have to completely redefine what **craft** means in digital design.

If craft for visual perfection is no longer enough.

The craft is is to design connected systems across across all these modalities and modes of interaction, time, memory, reasononing. And striving for the best solution – even if the best solution is completely invisible.

That's what craft looks like in 2026.

The question isn't whether to learn this.

It's whether you want to design the future or be surprised by it.

---

*[END]*

---