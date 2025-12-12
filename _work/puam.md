---
title: "Princeton University Art Museum Website Redesign"
excerpt: "I was contracted by Bluecadet as the Lead Engineer and Site Builder for the Princeton University Art Museum website development in Drupal 11+. In close collaboration with the Bluecadet and PUAM teams, we launched a new digital experience that matches the ambition of the museum's striking new David Adjaye–designed building—inviting exploration from every direction with dynamic, accessible entry points that honor Princeton's commitment to both scholarly rigor and public accessibility. The result is a platform that serves casual visitors and dedicated researchers equally well, with intuitive navigation and powerful search capabilities that bring the museum's collection of over <strong>117,000 artworks</strong> to life online. <a href='https://artmuseum.princeton.edu' target='_blank'>visit site</a>"
coverImage: ""
coverVideo: "/assets/work/puam/video-cover.mp4"
coverVideoPoster: "/assets/work/puam/video-cover-poster.webp"
date: "2025-08-17"
order: 2
featured: 1
recent: 1
ogImage:
  url: "/assets/work/puam/og.webp"
thumbnail:
  type: "video"
  url: "/assets/work/puam/video-cover.mp4"
  poster: "/assets/work/puam/video-cover-poster.webp"
sectionMobile:
  - url: "/assets/work/puam/mobile-01.webp"
    alt: "Screenshot of the mobile view of artmuseum.princeton.edu's Exhibitions & Events Landing page"
    caption: "Exhibitions & Events"
  - url: "/assets/work/puam/mobile-11.webp"
    alt: "Screenshot of the mobile view of artmuseum.princeton.edu's About Landing page"
    caption: "About Us"
  - url: "/assets/work/puam/mobile-12.webp"
    alt: "Screenshot of the mobile view of artmuseum.princeton.edu's Teaching & Research Landing page"
    caption: "Teaching & Research"
sectionDesktop:
  - url: "/assets/work/puam/video-01.mp4"
    alt: "Video screenshot of the Homepage Intro Sequence"
    caption: "Homepage Arrival Moment Animations"
    poster: "/assets/work/puam/video-01-poster.webp"
    style: "full"
    type: "video"
  - content: "
    <h2>Homepage Intro Sequence</h2>
    <p>The homepage creates an immersive arrival moment through a full-screen hero slideshow that introduces the Museum as a cultural and academic hub—welcoming, active, and open to all. Built as a Single Directory Component (SDC) for Drupal, this modular component combines sophisticated animations, intuitive multi-modal navigation, and comprehensive accessibility features to establish an engaging and inclusive first impression.</p>

    <h3>Key Features & Technology</h3>

    <p><strong>Supports multiple input methods:</strong> mouse wheel, keyboard (arrow keys, Home/End), touch gestures, and clickable vertical line pagination. Built with vanilla JavaScript and Drupal behaviors using requestAnimationFrame for smooth performance. Body scroll locking keeps users focused until the final slide.</p>
    
    <p><strong>Visual Progress Indicators: </strong> Vertical line pagination displays real-time slide duration and progress. Each segment fills bottom-to-top using CSS transitions (linear, 4 seconds), freezing when users manually navigate. Pagination fades in on load and out on the final slide.</p>
    
    <p><strong>Adaptive Controls:</strong> &ldquo;Skip&rdquo; appears on all slides except the last for quick navigation to the end, while &ldquo;Scroll Down&rdquo; appears only on the final slide. Both use CSS transitions and ARIA attributes for smooth, accessible interactions.</p>
    
    <p><strong>Accessibility:</strong> WCAG-compliant with ARIA live regions for slide announcements, proper role attributes, dynamic tabindex management, and full keyboard navigation. All interactive elements include descriptive aria-labels with automatic focus management.</p>
    
    <p><strong>Performance & Media:</strong> Preloads images before advancing, uses debounced handlers and IntersectionObserver for efficiency. Supports responsive images and Vimeo videos with play/pause controls. Features Ken Burns effect on images and parallax scrolling on exit.</p>

    <h3>Tech Stack</h3>
    <ul>
      <li><strong>Architecture:</strong> Drupal Single Directory Components (SDC)</li>
      <li><strong>JavaScript:</strong> Vanilla JS, Drupal behaviors, IntersectionObserver</li>
      <li><strong>HTML/CSS:</strong> BEM methodology, CSS custom properties, CSS transitions</li>
      <li><strong>Accessibility:</strong> ARIA live regions, semantic roles, keyboard navigation</li>
      <li><strong>Media:</strong> Responsive images (picture/source), Vimeo iframe API</li>
    </ul>
    "
    style: "full"
    type: "text"
sectionDesktopMiddle:
  - url: "/assets/work/puam/desktop-full-01.webp"
    alt: "Screenshot of artmuseum.princeton.edu's Exhibitions Landing page"
    caption: "Exhibitions page with Drupal's Views Exposed Filters (Desktop)"
    style: "full"
    type: "image"
  - url: "/assets/work/puam/desktop-half-01.webp"
    alt: "Screenshot of the desktop view of artmuseum.princeton.edu's Homepage"
    caption: "Homepage (Desktop)"
    style: "half"
    type: "image"
  - url: "/assets/work/puam/desktop-half-02.webp"
    alt: "Screenshot of the desktop view of artmuseum.princeton.edu's Visit Landing Page"
    caption: "Visit Landing Page (Desktop)"
    style: "half"
    type: "image"
  - url: "/assets/work/puam/desktop-half-03.webp"
    alt: "Screenshot of the desktop view of artmuseum.princeton.edu's Stories & Perspectives"
    caption: "Stories & Perspectives Page (Desktop)"
    style: "half"
    type: "image"
  - url: "/assets/work/puam/desktop-half-04.webp"
    alt: "Screenshot of the desktop view of artmuseum.princeton.edu's Support Landing Page"
    caption: "Support Landing Page (Desktop)"
    style: "half"
    type: "image"
  - content: "
    <h2>Single Directory Components (SDC)</h2>
    <p>To ensure long-term maintainability and ease of content authorship, I developed a comprehensive component library of <strong>70+ Single Directory Components</strong> integrated throughout the Drupal architecture. These components are seamlessly incorporated into nodes, paragraphs, views, blocks, media, and other Drupal entities.</p>
    
    <p>Each component includes properly defined props and slots with detailed descriptions for developer documentation, making the codebase approachable for future maintainers. To enhance the content authoring experience, I implemented a paragraph browser featuring visual thumbnails of each component, giving content authors clear visibility into which elements they're adding to pages. This SDC-first approach streamlined development while ensuring PUAM's team could confidently manage the site post-launch.</p>
    "
    style: "full"
    type: "text"
    id: "single-directory-components"
sectionDesktopBottom:
  - url: "/assets/work/puam/video-02.mp4"
    alt: "Video screenshot of the Collection Search"
    caption: "Demo of the Collection Search App features"
    poster: "/assets/work/puam/video-02-poster.webp"
    style: "full"
    type: "video"
  - content: "
    <h2>Collection Search using React</h2>

    <p>The centerpiece of the user experience is a sophisticated collection search tool that makes exploring over <strong>117,000 artworks</strong> both intuitive and delightful. Designed and built in close collaboration with the Museum's development team, the search interface offers helpful suggestions, intelligent filters for year, culture, and place made, plus a playful &ldquo;surprise me&rdquo; feature that encourages serendipitous discovery. For scholars and researchers, an advanced search mode enables granular queries across specific fields with Boolean logic support for precise research needs.</p>
    
    <p>In close collaboration with the PUAM Dev team, I transformed the beta version of the <strong>React app</strong> to align with the new branding, ensuring a cohesive experience across the entire website. The app is maintained as a standalone repository, packaged via npm, and integrated into the Drupal 11+ site through a custom module that seamlessly loads all build assets.</p>
    "
    style: "full"
    type: "text"
    id: "collection-search"
  - url: "/assets/work/puam/video-03.mp4"
    alt: "Video screenshot of the saving objects features when not logged in"
    caption: "Demo of the &ldquo;Sign in to save objects&rdquo; dialog"
    poster: "/assets/work/puam/video-03-poster.webp"
    style: "full"
    type: "video"
  - content: "
    <h2>Saving Objects</h2>

    <p>Another standout feature of the site is the &ldquo;Saving Objects&rdquo; feature, which leverages Drupal's Flag module to enable museum visitors to curate personal collections of artworks when browsing the site. When users authenticate through Princeton ID CAS Login, they gain access to &ldquo;My Collection&rdquo; — a Views page that displays all their saved items in an organized list. For non-authenticated visitors, attempting to save an object triggers a dialog that encourages them to sign in, creating a clear pathway to engagement while respecting the feature's authenticated nature.</p>

    <p>When logged-in users flag an object, a heart icon in the site header provides immediate visual feedback through a carefully timed animation sequence. This real-time response was achieved through a MutationObserver-based behavior that monitors DOM changes and manages animation states, ensuring consistent feedback across AJAX interactions without requiring page reloads. In addition, we exposed the flagged data via custom REST API endpoints, making user collections accessible to the Collection Search React app.</p>
    "
    style: "full"
    type: "text"
    id: "collection-search"
  - url: "/assets/work/puam/desktop-half-05.webp"
    alt: "Screenshot of the desktop view of artmuseum.princeton.edu's Sign in to save objects dialog"
    caption: "Sign in to save objects dialog (Desktop)"
    style: "half"
    type: "image"
  - url: "/assets/work/puam/desktop-half-06.webp"
    alt: "Screenshot of the desktop view of artmuseum.princeton.edu's My Collection page"
    caption: "Example of a user's saved objects within a collection (Desktop)"
    style: "half"
    type: "image"
sectionMobileBottom:
  - url: "/assets/work/puam/mobile-05.webp"
    alt: "Screenshot of the mobile view of artmuseum.princeton.edu's Object Detail Page"
    caption: "Object Detail Page"
  - url: "/assets/work/puam/mobile-06.webp"
    alt: "Screenshot of the mobile view of artmuseum.princeton.edu's My Collection Page"
    caption: "My Collection Page"
  - url: "/assets/work/puam/mobile-07.webp"
    alt: "Screenshot of the mobile view of artmuseum.princeton.edu's Exhibition Detail Page"
    caption: "Exhibition Detail Page"
stats:
  - title: "Date"
    content: "October 2024 - August 2025"
  - title: "Role"
    content: "Lead Engineer / Site Builder"
  - title: "Agency"
    content: "Bluecadet & Princeton University Art Museum"
  - title: "Tech"
    content: "Drupal 11+, Single-Directory Components (SDC), CSS, Javascript, React, PHP, Twig, Accessibility"
nextTitle: "The A. James & Alice B. Clark Foundation Website Redesign"
nextUrl: "/work/clark-foundation"
---

## Summary of Role

- Served as Lead Engineer and Site Builder, handling both frontend and backend development for the full Drupal 11+ implementation
- Architected and developed 70+ Single Directory Components with comprehensive documentation and a visual browsing interface for content authors
- Developed the Homepage Intro Sequence and account of multiple rounds of feedback related to animations and accessibility
- Transformed and integrated a React-based collection search application, aligning it with new brand guidelines and packaging it as an npm module for Drupal integration
- Built custom Drupal modules to enable seamless integration between the React app and the CMS
- Collaborated directly with the PUAM development team on artwork collection data synchronization and API architecture
- Partnered with Bluecadet's Project Manager to establish sprint schedules, development milestones, and client delivery timelines
- Ensured accessibility and usability standards were met across all components and features
- Prepared comprehensive handoff documentation and training to enable PUAM's team to independently manage the site post-launch