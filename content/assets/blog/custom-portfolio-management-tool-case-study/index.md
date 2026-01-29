---
title: "Building a custom portfolio management tool: case study"
date: "2026-01-29T15:00:00.000Z"
description: "A case study on building a custom portfolio management tool for a major European energy company, integrating standard and complex contracts into one unified system."
author: alexis
linkedin_link:
hackernews_link:
---

This case study describes a project recently carried out by a datavaluepeople member to
build a custom portfolio management tool for a major European energy company.

## Problem Statement

The client was managing a portfolio consisting of both standard contracts and complex
contracts that required custom modelling outside of the company's primary risk management
system. There was a need for an automated system that could marry together both the standard
and complex contracts in one unified interface, and carry out analysis on the entire
portfolio. Such a system would allow a portfolio manager to genuinely manage the portfolio by
reducing time spent on manual processes and correctly identifying risks and opportunities.

## Challenges

For any company actively trading in financial or energy markets, there is a tension between
the need of the company to have a central overview of its activities and for the individual
teams to have deep insight into their specific portfolios. The central system is known as an
Enterprise Risk Management System (ERM system), but its capabilities are often too generic
for individual commercial units. This is particularly true for teams specialising in
non-standard products, leading to the development of ad hoc standalone tools.

When working in such an environment, a number of challenges typically arise.

- For a local developer, a standalone solution is the fastest route to value creation.
  However, this is not the best solution globally, as an integrated solution will be more
  maintainable. For example, when trying to build an integrated solution, the developer can
  be at the mercy of siloed support units to resolve blocking issues.
- Existing legacy tools bring with them limitations and work arounds. For example, having a
  database that facilitates perfect replication of historical calculations is a must for a
  proper portfolio management system, but is too often lacking. Existing systems often employ
  messy proxy methods bringing reconciliation challenges.
- A sibling of the first challenge is the temptation to hack together a solution that only
  works in the current setting rather than investing the time in something more robust that
  generalises. For those reading this from a data science background, it is worth noting that
  in a quantitative finance setting there is often a 'correct answer' (at least based on the
  given assumptions), which developers sometimes fail to find due to either lack of
  understanding or valuing development speed over correctness. A typical mistake here would
  be performing calculations on aggregated values, not realising that this is different from
  performing the same calculations on the underlying values and then aggregating.

## Solution

For describing the delivered solution, it is convenient to talk about it in three stages,
although in reality it is worth bearing in mind that there is quite some overlap between them
and, in line with modern practices, active development was being carried out at all times.

- **Design**
  - When designing a solution for a specific client, it is crucial to look at it from their
    perspective. In this case, the company's supported programming language was in Python and
    they had an internal pipeline developed for the deployment of Dash apps making this the
    natural framework to work with.
  - The company had an existing data warehouse solution in place with support for the data
    set versioning upon which the backend architecture could be built.
  - Together with the client, overall and interim deliverables were designed. These were
    reviewed and updated during the lifetime of the project.
- **Development**
  - To mitigate waiting time risks from internal dependencies, different strands of
    development were carried out in parallel. In particular, it took quite some time for the
    company's Dash pipeline to be successfully deployed by IT, so initial versions were made
    in runnable code that was later ported into the app.
  - Initial focus was made on solving one particular business challenge meaning that useful
    functionality was developed already at the start of the project.
  - Any limitations and bugs in internal systems were flagged to the responsible units,
    whilst building in a layer on the app side to mitigate them.
- **Handover**
  - There is no limit to the functionality that can be added to such a portfolio management
    system, so it was always the intention to hand over the tool to internal resources for
    maintenance and further development at the conclusion of the project.
  - By working with the technologies and systems that are widely in use within the company,
    the skillset needed to maintain and further develop the system overlapped with the one
    required by the company's own quants.
  - Significant time was spent in the handover period providing training to internal
    employees both on portfolio management and tool development including a period of
    co-development.

## Results and Business Impact

At the conclusion of the project, the business unit had an additional portfolio management
tool that gave superior insight into their overall portfolio. Beyond the tool, however, there
was also a significant impact on the skills of those within the team. The new quant /
portfolio manager, to whom the handover was done, was given a strong introduction to the
business domain as well as being fully trained in the tool. Other team members were also
introduced to model development practices. With better insight into the portfolio, the team
is now able to better manage their commercial risk and continue to grow their portfolio with
confidence.
