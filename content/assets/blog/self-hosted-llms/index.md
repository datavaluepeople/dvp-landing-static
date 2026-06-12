---
title: "Self-hosted LLMs: running your own inference infrastructure"
date: "2026-06-12T00:00:00.000Z"
description: "When should you run your own LLM inference instead of using third-party APIs? A practical framework for that decision, and the technical foundations to execute it."
author: dan
linkedin_link:
hackernews_link:
---

When does it make sense to run your own LLM inference infrastructure instead of paying per-token to
third-party APIs like OpenAI or Anthropic? And how do you execute it once you've decided to?

I gave a talk and ran a half-day hands-on workshop on the topic.

If you want to get a grasp on the topic but you're not a developer, then watch the talk. If you're
a developer who actually wants to set up, tune, and manage inference servers yourself, then go to
the workshop section below.

## The talk

**[Data Science Festival Big Birthday Bash
2026](https://datasciencefestival.com/session/self-hosted-llms-running-your-own-inference-infrastructure/)**,
16th May 2026, London

<a href="https://docs.google.com/presentation/d/1zvlLnJrgvKCyuka3vp-hITV14-ct557ZBD91slb7etQ/"
target="_blank" rel="noopener noreferrer">View the slides</a>

### Talk takeaways

1. Ability to apply a concrete decision framework to evaluate Third-party vs Self-hosted inference
   for any LLM application.
2. Brief intro to setting up a basic inference server.

### Recording

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/WiA5Hm6IpZs"
  title="Self-hosted LLMs: running your own inference infrastructure"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

## The workshop

**[AI in Production 2026](https://ai-in-production.jumpingrivers.com/)**, 4-5th June 2026,
Newcastle Upon Tyne

If you want to set up, tune, and manage inference servers yourself, you need to understand how
(decode-only) transformer models actually work internally. Understanding what a KV-cache is, and
why it is critically important for inference, is a good measure of where you need to get to - if
you can understand that then you'll be able to readily understand the rest of the relevant aspects
of inference optimisation you will run into. Without this knowledge you can't even understand the
most important run arguments for inference engines like vLLM, so you can't expect to tune or
manage an inference server effectively. The following
[slide](https://docs.google.com/presentation/d/1zvlLnJrgvKCyuka3vp-hITV14-ct557ZBD91slb7etQ/edit?slide=id.g3dbddf8f736_0_65#slide=id.g3dbddf8f736_0_65)
has some good references, chat through and get explanations from an LLM for the content, get it to
test you.

The workshop was a 3h15m afternoon covering the decision framework for Third-party vs Self-hosted,
applying it in some worked example LLM applications, then getting hands-on with a deployment of an
inference server using current leading open-source technologies, and trying out server
tuning/optimisation. I focused on aspects related to LLM inference and mostly ignored/assumed
knowledge of the dev-ops aspects, as the dev-ops parts are already covered many times
elsewhere.
The interesting part is the challenges/opportunities specific to transformer architectures.

### Workshop takeaways

1. Ability to apply a concrete decision framework to evaluate Third-party vs Self-hosted inference
   for any LLM application.
2. Knowledge and skills to set up a basic inference server.
3. Practice connecting your understanding of transformer architecture, to server optimisation
   decisions.

### Resources

- [Slides](https://docs.google.com/presentation/d/1zvlLnJrgvKCyuka3vp-hITV14-ct557ZBD91slb7etQ/)
  (same as above)
- [Workshop plan](https://docs.google.com/document/d/1LuKW1oTQNWt5cqiNopa7tG0gZ9CN3F-m69AnWt-mnmc/edit?tab=t.0)
- [Accompanying repo](https://github.com/DBCerigo/self-hosted-llms-workshop-2026/tree/main)
- [The live working-doc from
  workshop](https://docs.google.com/document/d/1Cmm3IfbtuKE7KuTX7EwLxhpbnX6CFkEnf2SPlvGq-Ak/edit?tab=t.1ws04n8vhel0#heading=h.774c2pu92d21)

Using those resources you can work through the workshop plan yourself. Takeaway/goal 3 is the most
important for a technical practitioner. If you can achieve this yourself then you're in good stead.

If you're thinking about self-hosting, or just starting to grapple with leveraging AI internally in
your org, drop me an email and I'd be happy to talk!
