---
title: "Data analysis with LLMs for health care tech: case study"
date: "2025-05-06T10:16:57Z"
description: "How we built LLM-powered data analysis tools for a tech startup."
author: lyudmila
linkedin_link:
hackernews_link:
---
This case study explores how [myself and Andrew](https://datavaluepeople.com/people/) developed innovative LLM-powered data analysis tools for one of datavaluepeople’s clients.

## Problem Statement

The client required a set of LLM-powered data analysis tools that could:

1. **Extract relevant data** from SQL databases or CSV files, based on user-driven queries via a conversational interface.
2. **Perform data analysis** to generate answers to business questions, including basic numeric computations and correlation analysis.

## Challenges

While working on the project, the team at _datavaluepeople_ faced several significant hurdles:

- **Data quality issues**: The source database lacked normalisation, making it difficult to navigate and query efficiently. Raw Excel and CSV files taken from the NHS Website came with their own set of issues, including unneeded headers, unclear column titles, and inconsistent formatting. All such irregularities made the data really difficult for an LLM to understand and process. These challenges are common for businesses transitioning to AI, where legacy data structures and quality issues often hinder effective model use.

- **LLM hallucinations**: The most daunting challenge was the unstable performance of LLMs, which are notorious for being prone to hallucinations – generating plausible-sounding but incorrect responses to health care-related questions. In a business context, such mistakes can be very costly. So the team put significant effort into achieving a more predictable behaviour of LLM agents.

## Solution

Rather than taking the more common route of fine-tuning LLMs or using some kind of RAG – often considered the go-to solutions for improving performance – datavaluepeople opted for a more innovative and cost-effective approach: designing a multi-agent system.

The solution comprised several key components:

- **SQL querying**: For working with the database, sample SQL queries were provided for the LLM to learn from.
- **Data preprocessing**: For handling Excel and CSV files, a preprocessing stage was implemented using Pandas to clean the data and transform column headers into more descriptive formats.
- **Multi-agent system**: To address the LLM hallucination problem, the team developed a multi-agent system featuring **three base agents** tasked with writing SQL queries. These queries were then evaluated by a **critic agent**, which either selected the best query or proposed an alternative before execution. Finally, an **explainer agent** translated the technical results into user-friendly language that anyone could understand. A similar approach was taken for correlation analysis.

The critic agent was asked to analyse the responses given by the three agents and assess them for accuracy paying particular attention to those aspects of the solution where base agents were often making mistakes or hallucinating. It did not need to agree with either agent: if it deemed all the responses wrong it could propose its own solution. This approach was useful as it helped focus attention: while the main job of the base agents was to understand the user question and write an appropriate SQL query to answer it, the critic agent was primarily concerned with assessing the presented solution against common errors and correcting them if needed.

What made the multi-agent system particularly effective was the implementation of advanced prompting techniques. By incorporating inner thought and chain of thought techniques, the team encouraged LLMs to slow down and deliberate – essentially forcing them into what Daniel Kahneman, a [Nobel Prize-winning psychologist](https://pr.princeton.edu/news/02/q4/1009-kahneman-b.htm), described as ["System 2" thinking mode](https://www.amazon.co.uk/Thinking-Fast-Slow-Daniel-Kahneman/dp/0141033576/ref=sr_1_1?dib=eyJ2IjoiMSJ9.t0urj2TOIWU_X4qDpckLiSEGlm3yTIO5f51IUDqICkwIJrtRfxJ0Gz1n7DbLo0M9Sr-PdsimUARc_UW16xcO-dGQPYKx7Qmnp-7dMHjsXgdioHIWqxtp_zAs5s2ddOVifoapTkrzJj6vxX5P3t_aA5A8RI_GIdOGLnwVIl9nStBahOcFnSoRUHacJ1TY-nKUY2bSyPPPhYHG6uJ2hH4MM86kTgXWC2dkD4fjq2Q17ss.CTd8Vr6VPnF8g232o5uU_3BKqao21V2k1Nt1NX6V_pI&dib_tag=se&qid=1746525428&refinements=p_27%3ADaniel+Kahneman&s=books&sr=1-1). This methodical approach significantly improved the quality and reliability of the outputs and reduced the occurrence of hallucinations.

## Results and business impact

The project delivered three prototypes:
- An LLM agent that queries a SQL database to answer user queries;
- An LLM agent that performs correlation analysis;
- An LLM agent that locates relevant data in a collection of CSV files and performs simple numerical analysis.

Beyond the technical achievements, these tools played a significant role in helping our client solidify an important business partnership.
This project highlights an often-overlooked truth: good data analysis isn't just about technology, but creative problem-solving. By treating LLMs like collaborators that need guidance, the team turned a complex challenge into a practical solution.


