---
title: Compiled advice on learning Data Science, Machine Learning, and Data Engineering
date: "2023-04-03T23:46:37.121Z"
description: "An ongoing updating post compiling the advice and resources we've given to people on
learning Data Science, Machine Learning, and Data Engineering."
author: dan
linkedin_link: https://cat-bounce.com/
hackernews_link: http://endless.horse/
---

We often speak to people who are looking to get into the data science, machine learning, and data
engineering professions. The following is a compiled set of that advice. We will extend this
article as we give further unique advice. Find changes and history in
github.com/datavaluepeople/dvp-landing-static.

## Advice for moving from PhD to industry data science job - 2023-03-01

So here's a bunch of stuff, hopefully there some usefulness in there:

- This course looks pretty legit in terms of covering the
  highly-pertinent-but-often-ignored-peripheral-bits-of-tech-and-knowledge (i.e. git, linux, etc.)
  https://www.udemy.com/course/core-data-science-and-machine-learning/ Looks like you'd build some
  portfolio projects through it also. NOTE! Don’t pay full price for it - open it in a private
  browser window and you should be enable to get it for like £17.99 or somet instead of full price.
  Or keep checking for a week or two on private browser till it is heavily discounted.
- Learning all the stuff required to open a PR on an open-source python project could be a great
  way to get a handle on what doing software dev in a team is like. You can see another academic
  learning the process in these PRs: https://github.com/datavaluepeople/kotsu/pull/43
  https://github.com/datavaluepeople/kotsu/pull/44
- Here's an advice message I wrote for someone just finishing their PhD, so probably relevant
  advice for you: On what you want to be able to do and how one might get there:
  - From our conversation it sounds like you want to be something like a "full-stack data
    scientist" (a vague-ish not super adopted/common name/term so) - a self sufficient scientist,
    who can themselves make their science interact with the outside world in a valuable way.
  - Good article understanding different roles within applied data science
    https://laszlo.substack.com/p/you-only-need-these-3-data-roles - have a google around
    different dev roles in the data area
  - Minimal general data science platform architecture including tech names etc.
    https://miro.com/app/board/uXjVO6LRgmo=/ (if you have a rough understanding of all these
    parts/functions and a few of the techs that fulfil each part then you're like good to go)
  - Most common (and dvp preferred) infrastructure as code: https://www.terraform.io/
  - Here's an ok looking tutorial on building an end-to-end ML project. Spend much less time on
    the data science parts (you're already good at that), and lots of time on the
    dev/infra/deployment parts.
    https://www.freecodecamp.org/news/end-to-end-machine-learning-project-turorial/
    - A few others that kinda looked ok but not so much:  (think this is paid/maybe you can get
      a trail)
      https://www.projectpro.io/article/15-data-science-projects-for-beginners-with-source-code/343#toc-3,
      https://github.com/FilippoBovo/production-data-science,

## Advice for going from scratch to an industry data (engineering) job - 2023-02-01

_Note; parts of the following are also relevant for going from scratch to any data/ML job, and some
are relevant for any dev job._

= Fundamental things definitely to learn =

- Using the command line (also called the "terminal"). This is Linux (Unix on Mac). Probably try
  not to learn the Windows command line, as it is not used as much in the industry as Linux is.
  Starting point: https://ubuntu.com/tutorials/command-line-for-beginners#1-overview You can play
  with real Linux computers to learn and practice on using these free online ones:
  https://linuxcontainers.org/lxd/try-it/
- Git - this is the version control tool used in 99% of places - a required tool for writing
  software. Think of it as like a programmer's chef's knife - so you should get real familiar with
  it. Starting point: https://git-scm.com/doc
- SQL - get solid at this, you're definitely going to be using it. Any of the common flavours will
  do, but if you're not sure stick with PostgreSQL (they are all super similar though so). Starting
  point: https://www.postgresql.org/docs/online-resources/

= Things you then might want to learn =

- Python - don't worry about making it too data orientated. Just get familiar with Python and
  programming like basic toy stuff to begin with. You don't have to know python to be a data
  engineer, just there's a lot of companies that use python in data engineering and just generally,
  so it is valuable skill to have. Staring point: https//www.python.org/about/gettingstarted/
  (There's more but this is enough to start with.)

Learning how to search for stuff/Google well, and what references are good to follow and what are
not is a really important skill to develop. So see that as part of the learning process. Googling
"How to learn python effectively?" and stuff like that, and reading about where, and how, best to
learn it, is really good usage of time. So try stuff out, read articles, checkout youtube vids,
skim through some free online courses - explore until you find what works for you. For me Wikipedia
is always a good concise place to read up on a subject first, for example for "command line",
checkout this https://en.wikipedia.org/wiki/Command-line_interface. Then the other things is trying
to find and read official documentation for stuff - this is often better than all the tutorial
stuff that is just trying to rank high on Google for clicks or sell you a course or something but
is often not the most high quality - I added the links to official sites as starting points in the
above.

The other thing to really really be conscious of is, there will be moments, especially nearer the
beginning, where you're gonna be like "what the actual fuck is all this random shit, I have no idea
what is going on" - that is totally normal. Getting a grasp of it all is going to be a very
non-linear process. Reading stuff, and just being curious about it all, even if you're a bit lost,
but continuing and going down rabbit holes and reading random stuff and slowly slowly building up
all the connections and piecing the bits all together is how it is going to be, so keep that in
mind so as not to get demotivated.

## datavaluepeople's technical interview questions for client hiring - 2021-01-01

_We often support clients with their hiring of perm data scientists/engineers etc, but carrying
out technical interviews with their candidates. The questions can serve a good guide on what areas
one might need to improve their knowledge and experience in. Drop us an email and we'll send you
them. (Not posting them publicly as we still want them to be useful for interviews!)_
