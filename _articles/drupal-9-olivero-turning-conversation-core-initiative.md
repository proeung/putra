---
title: 'Drupal 9 Olivero: Turning Conversation into a Core Initiative'
excerpt: 'How does an idea evolve from a conversation in a hotel lobby into a Drupal core release initiative? Follow the new Drupal 9 default theme, Olivero, from ideation through execution.'
coverImage: '/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/cover.webp'
date: '2020-02-19T05:35:07.322Z'
ogImage:
  url: '/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/cover.webp'
---


One of the biggest benefits of an open-source community like Drupal is the ability to collaborate with fantastic people that you wouldn’t otherwise have the opportunity to work with. However, when you have an idea that you think would be a good initiative for a Drupal core release (such as Drupal 9) you might find yourself thinking: "How do I even begin? How can I advocate for my idea?” We all find ourselves asking these questions as we navigate the complex journey of turning an idea into a core initiative.

During DrupalCon Seattle, a handful of people had a casual conversation in a hotel lobby. This conversation turned into an official Drupal core strategic initiative to create a new default front-end theme for Drupal 9. Here's the story of how that happened, the steps we took, and the work we did before opening the project to the community.  

## The Beginning: Is "Your Idea" Already in the Works?

On the last day of DrupalCon Seattle, [Mike Herchel](https://herchel.com) (Senior Developer at Lullabot), [Lauri Eskola](https://www.drupal.org/u/lauriii) (Drupal core committer and front-end framework manager), [Angie](https://www.drupal.org/u/webchick) [Byron](https://www.drupal.org/u/webchick) (Drupal core committer and product manager), and I had a conversation about what exactly distinguishes a good CMS theme. Naturally, that led to the discussion of the current status of Drupal 9.

Mike and I were surprised to find out that there was no initiative in place for a Drupal 9 default theme. Having been in the community for quite a while, we knew that Bartik was created for Drupal 7 and has long served as the default theme, but it’s nearly ten years old. By 2019, the design had begun to look dated and no longer spoke to Drupal's strengths.

We began envisioning what kind of first impression a clean and modern default theme would have on users when Lauri mentioned something along the lines of, “Why don't you get involved since Drupal 9 is just around the corner and is expected to be released around mid-2020?” We were excited by the idea and that we already had buy-in from a key figure within the community. On our way to the airport the following morning, Mike and I continued chatting about ways this project could start.

## Setting Goals: Identify Why This Initiative Matters

Before announcing to the world that you have an idea that can be shipped into Drupal core, stop and ask yourself what your goals are for the project. Mike and I started by writing down some of the pain points and challenges of the current status quo. As Dries pointed out in his keynote, experts love Drupal. However, Drupal as a CMS still has a negative connotation among beginners for its outdated interfaces and user experiences. Therefore, prioritizing the beginner experience through potential initiatives like the new default theme, guided tours (aka [Out of the Box initiative](https://www.drupal.org/node/2847582)), and WYSIWYG page building would give Drupal a much-needed new look and feel that users expect from a modern CMS.

Here are the three goals that we identified:

*   **Update to modern design:** Design a theme that feels modern and ages well for the next 5 to 10 years.
*   **Add functionality that supports new features:** Include support for commonly used Drupal functionality, such as second-level navigation, embedded media, layout builder, and more.
*   **Create a WCAG AA compliant theme:** Work closely with accessibility experts and the Drupal Accessibility team to ensure that the theme passes [Drupal’s stringent accessibility standards](https://www.drupal.org/node/464500) with flying colors.

## Drupal Core Ideas Queue

Setting these goals helped us stay focused on what we needed to do and got us prepared to open an “idea issue” for the redesign and development of a theme that could ship with the release of Drupal 9. The ideas queue section of Drupal.org let us propose ideas for Drupal core and got them through validation and planning phases.

Here’s a link to the issue that we submitted to the Drupal ideas project: [Issue #3064880](https://www.drupal.org/project/ideas/issues/3064880)

![D9 Issue Template](/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/pic-01.webp)
*A document we put together for Drupal’s ideas issue queue process.*

### Forming the Band: Putting Together Your Initial Team

With any big or small initiative, you can't do the work all by yourself. You need a team that can help bring in new perspectives and fill in the areas that are outside of your discipline. Once we knew our idea was valid and sought-after by the community, Mike engaged Lullabot designers [Jen Witkowski](https://www.drupal.org/u/jwitkowski79) and [Jared Ponchot](https://www.drupal.org/u/jponch) to lead the design effort for the new Drupal 9 default theme. [Kat Shaw](https://www.drupal.org/u/katannshaw) and [Matthew Tift](https://www.drupal.org/u/mtift) also joined for assistance with accessibility and project management.

### Identifying Stakeholders

Part of this team's responsibility was to identify design stakeholders who could help us refine the design. We iterated on the design multiple times internally before presenting it to the community to avoid bikeshedding. Doing this helped speed up [the proposal](https://www.drupal.org/project/ideas/issues/3088378) process, which was one of the key contributing points to us getting traction and building excitement for this core initiative.

The following people were chosen as stakeholders:

*   [Dries Buytaert](https://www.drupal.org/u/dries): Creator and project lead for Drupal
*   [Angie](https://www.drupal.org/u/webchick) [Byron](https://www.drupal.org/u/webchick): Drupal core committer and product manager
*   [Lauri Eskola](https://www.drupal.org/u/lauriii): Drupal core committer and frontend framework manager
*   [Cristina Chumillas](https://www.drupal.org/u/ckrina): Drupal usability maintainer
*   [Gábor Hojtsy](https://www.drupal.org/u/g%C3%A1bor-hojtsy): Drupal core committer, product manager and initiative coordinator

## Document and Design

As the discovery process started to take shape, we continuously documented all of the discussions we had regarding the project. Documentation isn’t as fun or exciting as writing code, but it's one of the contributing factors to keeping us on track and getting to our goal of releasing a proposal to the community. 


![D9 Theme Discovery Phase table of contents](/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/pic-02.webp)
*An example of the table of contents document during our discovery phase.*

Meanwhile, we worked with our stakeholders to identify adjectives that would help guide the visual design. We created a sliding-scale exercise where stakeholders could add points across several tone spectrums, a common practice that the design team at Lullabot likes to conduct on client projects. Some of these were one adjective versus another (“formal” not “casual”), while others highlight the importance of a balance (“approachable” and “official”).

### Voice and Tone of the Theme

Below are keywords that were identified to serve as the _voice and tone_ of the new theme:

*   Formal
*   Light and bright (vs. dark & impactful)
*   Contemporary
*   Approachable and official
*   Novel (with some constraint)
*   Cool
*   High contrast with some restraint
*   Light (not heavy)

![D9 Theming Exercise](/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/pic-03.webp)
*A screenshot of the D9 theme’s branding and style exercise with stack-holders*

### Design Principles

The following principles were established through research and collaboration, and are useful for guiding future additions and feedback for changes.

*   **Accessible:** WCAG AA conformance is a top priority for the design. The layout, colors, and functionality should provide an accessible theme that can be enjoyed by everyone.
*   **Simple:** Avoid unnecessary visual elements, colors, effects, and complexity.
*   **Modern:** Take advantage of the capabilities and strengths of modern browsers and interaction patterns.
*   **Focused:** Embrace high contrast, saturated color, and negative space to draw the eye to what’s most important.
*   **Flexible:** Provide options and overrides to account for varied needs and preferences.

### The Meeting / Feedback Loop

Although this initiative is not a client project nor one that we work on daily, we established a routine of meeting every week to discuss what needed to be done to present a design to the stakeholders. Once we established the design principles and the voice and tone, we used [zoom mocks](https://www.lullabot.com/articles/zoom-mocks-bridging-the-divide-between-styles-and-page-design) to explore style using the adjectives and design principles as our guide. We presented these to the stakeholders, who chose a design with which to move forward.

![D9 theme design exploration](/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/pic-04.webp)
*Examples of D9 theme designs during exploration.*

We continued to iterate on the chosen design direction based on the feedback from the stakeholders. The design process continued with the addition of internal accessibility testing, which highlighted several contrast deficiencies that we subsequently fixed.

### Proof of Concept

Throughout the process, we built a prototype in static HTML, CSS, and JavaScript. The intention was to validate the new features and help answer potential UI/UX issues that might arise during the design process. We also used it as an opportunity to vet the use of the CSS grid and ensure the front-end architecture could be accessible, as well as work with Internet Explorer 11 (and other core supported browsers). This proof of concept is not yet fully accessible, although it will be eventually. The next step is to get full sign-off from the Drupal accessibility team, which will hopefully alleviate last-minute time crunches when submitting the patch to Drupal core.

The following are key activities we’re focusing on:

*   Investigating the use of the header on scroll interaction on mobile and tablet devices.
*   Validating the use of the CSS grid in legacy browsers such as Internet Explorer 11 and identifying whether or not we’ll need to account for progressive enhancement features.
*   Verifying that the markup is semantic and meets the accessibility requirements.

![Olivero Proof of Concept](/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/pic-05.webp)
*A screenshot of the proof of concept HTML.*

## Community Announcement: The Formal Processes on Submitting Your Idea to the Community

Once the design was in a good place, we drafted a proposal to the community and sought feedback for the work that had been done (see link - [Designs for new front-end theme for Drupal 9](https://www.drupal.org/project/ideas/issues/3088378)). The announcement issue included several processes that we took to get to where we are today. The response from the community was overwhelmingly positive, and we were thrilled to see the excitement.

![D9 Design Proposal](/assets/articles/drupal-9-olivero-turning-conversation-core-initiative/pic-06.webp)
*Our design proposal for the new Drupal 9 theme.*

## What's next?

The Drupal 9 theme initiative is currently underway. If you're interested in contributing to the new Olivero frontend theme effort, please check out "[How to contribute to Olivero](https://www.drupal.org/docs/8/themes/olivero/how-to-contribute-to-olivero)" and get involved with the team.

Building Olivero was the first time some of us have contributed to a Drupal core initiative, and admittedly, it can be scary and a little overwhelming. Sometimes you don't feel like you have enough years of experience or enough in-depth specific knowledge. But no matter what your background or experience level is, chances are there’s something you can do to help within the open-source community. In our case, we happened to be in the right place and know the right people. However, having a well-thought-out proposal, identifying key stakeholders, and having a phenomenal team involved can give legitimacy to your idea. I hope hearing the journey of how we got here provides some helpful takeaways and inspires you to jump-start your idea and advocate for getting your initiatives into Drupal core.

A huge special thank you to everyone who has contributed to the Olivero project so far! We wouldn’t be where we are without your support.