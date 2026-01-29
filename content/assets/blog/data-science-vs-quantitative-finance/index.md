---
title: Data Science vs Quantitative Finance
date: "2026-01-23T14:00:00.000Z"
description: "Drawing on experience working in both data science and quantitative finance, we explore the shared success factors and separate pitfalls of these two data-driven fields."
author: alexis
linkedin_link:
hackernews_link:
---

One of the canonical approaches for defining data science is to describe it as a combination
of theoretical skills (e.g. statistics), practical skills (e.g. programming) and domain
knowledge (i.e. knowledge specific to the task / sector at hand). However, such a framework
is also very much applicable to related data-driven fields such as quantitative finance. This
blogpost draws on the experience of a datavaluepeople member working in both settings.

## Commodity Portfolio Management

Before diving into a comparison between data science and quantitative finance, it is perhaps
prudent to provide an example of quantitative finance as a reference for this audience. The
example we are taking is commodity portfolio management, where a portfolio can be seen as a
collection of assets (e.g. power plants) and contracts (e.g. agreements to sell electricity).
Portfolio management is then unsurprisingly the practice of managing such a portfolio.
Typically the operational part of this activity (e.g. actually fulfilling the contractual
obligations) is carved out to a separate department leaving the focus on managing the
outstanding assets and contracts in the portfolio.

A key step is having a reliable valuation of the portfolio which is typically carried out by
having a valuation model for each asset/contract in the portfolio and taking the sum of these
individual valuations. With this in place, many analytical functions can be built on this
valuation capability. For example, to assess how much the portfolio value would change if
underlying commodity prices change, you can re-run the portfolio valuation with alternative
price inputs or in general calculate numerical derivatives of the portfolio value against a
range of different input parameters.

## Shared Success Factors

Having worked in both areas, it strikes me that there is substantial overlap in the drivers
for a successful project. Both fields are underpinned theoretically by statistics and
probability theory, so from a technical perspective the same sort of people should have the
raw ingredients to excel in both. However, it is often rather the so-called soft skills that
are the real success drivers.

There is a huge amount of hype in the data world. As I write this, everything has recently
been labelled as AI, when in most cases this is just a rebranding exercise of some existing
automated solution. This often infects projects on the ground, with a desire from business
stakeholders to have the latest shiny thing leading to a 'run before you can walk' mindset.
Likewise, people working on the ground can be attracted to deploying exciting solutions
without having the necessary foundations in place. In the finance world, there is a love of
unnecessary obscurantist jargon and an alternative drive for overcomplication coming from the
mathematics and physics heavy backgrounds of the people working there. This can lead people
to try to apply the most complicated models at the expense of a more parsimonious and robust
solution.

In both fields it is really important to get the basics right. As a starting point, it is
crucial to really understand the business needs from the stakeholders. There will always be
inadequacies in the initial specifications (or great ideas yet to be discovered), which can
be revealed quickly through iterative development and active communication. The latter also
helps to unlock the specific domain knowledge that the quant / data scientist might
themselves lack. The former also gets your hands dirty with the data immediately to reveal
limitations on that side. It is rare that there will be an existing data pipeline that is
truly addressing the project's needs. Building a robust and correct one sounds less sexy than
the latest AI model or applying some fancy equation, but pairing that with a relatively
simple model already delivers the vast majority of value in a typical project.

## Separate Pitfalls

As highlighted above, understanding and framing the problem correctly is crucial. However,
the pitfalls in the two areas can be somewhat different. In the finance world, my strong
mathematical background has granted me sufficient authority to reject calls for the
application of statistical methods where such methods are of no value and the calculation of
a number would merely provide a false sense of certainty. On the data science side, you can
also be asked to do impossible things, but here there is more scope for reframing the
question. In both cases, the amount and quality of data is often a limiting factor on the
ambition level.

Perhaps the biggest difference between the two is the existence of a 'correct' solution to
many quantitative finance problems. Based on certain assumptions, you can derive a commonly
accepted solution. This can be reconciled against existing legacy systems, although this can
itself be a pitfall as often you are working on a new system precisely because of flaws in
those legacy systems. The output of machine learning models is more statistical in nature. So
here you need to take a completely different approach to model validation to ascertain whether
the new model is offering a genuine improvement.

In both areas there are risks when interpreting output. In a machine learning setting, it is
all too easy to come up with a metric that gives a misleading or incomplete picture of model
performance. In a finance setting, the assumptions made when performing a calculation need to
be understood together with the numerical result in order to properly parse it.

## Conclusion

As someone entering both domains with an academic background in both statistics and
probability theory, and a professional education in finance, I perhaps naturally see very
strong similarities. Although both fields require strong technical skills, understanding the
problem, not buying the hype and a focus on delivering sound fundamentals are in reality what
makes an impact.
