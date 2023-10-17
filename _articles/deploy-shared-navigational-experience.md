---
title: 'Deploy a shared navigational experience across multiple content ecosystems within ibm.com/cloud'
excerpt: 'IBM.com is a massive web experience developed and managed by different teams, powered by technology ranging from standalone JavaScript applications to monolithic content management systems (Adobe Experience Manager, Drupal, etc).'
coverImage: '/assets/articles/deploy-shared-navigational-experience/cover.webp'
date: '2022-01-21T05:35:07.322Z'
ogImage:
  url: '/assets/articles/deploy-shared-navigational-experience/cover.webp'
---


IBM.com is a massive web experience developed and managed by different teams, powered by technology ranging from standalone JavaScript applications to monolithic content management systems (Adobe Experience Manager, Drupal, etc). One thing they have in common: a masthead and navigation, shared with little to no duplication in code.

In this article, we’ll talk about the efforts to coordinate teams working on products across organizations to build and deploy a first-of-its-kind “IBM Cloud” brand-specific masthead component that creates a truly shared navigation experience across multiple content ecosystems.

## Visual and functional consistency issues

![Design specification of the new Cloud Masthead component](https://miro.medium.com/max/700/0*SPdaY9oacPCklrt5.jpg)
*Design specification of the new Cloud Masthead component.*

Maintaining a consistent interface across your app enables users to feel at ease and allows them to quickly navigate their way through your product to accomplish their tasks without being confused.

With that in mind, we started by looking for common UI/UX pitfalls our teams were encountering across their products. The masthead is the topmost element of any application and is displayed on all screens, providing a navigational tool for users to explore and advance through different sections of the site. We found that although the Cloud Masthead looked somewhat consistent between different content ecosystems there were inconsistencies within the functionality and content.

Because of those inconsistencies, we decided the masthead would be a strong component to use to implement a unified branding experience across all applications running under the  **ibm.com/cloud**  domain name.

**The key goals to our unified Cloud Masthead are:**

-   Eliminate UI/UX inconsistencies within the current IBM Cloud content ecosystems by designing a unified masthead component.
-   The masthead component must be easily consumable in different publishing ecosystems (eg. Drupal, AEM, React, etc).
-   Create a centralized storage system that can be used to update and deploy content changes while keeping them visually consistent.

## Adopting Carbon for IBM.com library

![A screenshot of the Carbon for IBM.com library homepage.](https://miro.medium.com/max/700/0*X1Mc5M12SHIjeRlM.jpg)
*A screenshot of the Carbon for IBM.com library homepage.*

Our team tries to reuse code as much as possible. This can be difficult even in the best of circumstances, but especially within a diverse company using different frameworks like React, Vue, and Angular.

**We asked ourselves tough questions such as:**

-   How do we develop components independently, while avoiding the overhead of too many repositories?
-   How do we version and publish components?
-   How can we help other people in the company discover and adopt the components we build?

Our solution to these questions was to use the  [Carbon for IBM.com](https://www.ibm.com/standards/carbon/)  suite of component patterns. The suite utilizes  **Web Components**, housed under an open-sourced  [monorepo](https://github.com/carbon-design-system/carbon-for-ibm-dotcom), in order to manage the multiple packages in unison (see  [Automating a Design System](https://medium.com/carbondesign/automating-a-design-system-69bd2414f75)).

Web Components is an emerging web standard that allows us to create framework-agnostic components that are reusable with encapsulated inside HTML tags that can be shared between frameworks. With the release and rapid adoption of Carbon for IBM.com Library, we’re able to leverage the Carbon Web Components library ([carbon-web-components](https://github.com/carbon-design-system/carbon-for-ibm-dotcom/tree/main/packages/web-components)  package) under the hood and can build on top of the available UI components.  [Learn more about Carbon Web Components](https://carbondesignsystem.com/developing/frameworks/web-components).

## Menu content translation management

![A screenshot of the JSON data output used for delivering content to the masthead.](https://miro.medium.com/max/700/0*jNXq8iXPYnYPykq2.jpg)
*A screenshot of the JSON data output used for delivering content to the masthead.*

Once we had our masthead component housed within the  [Carbon for IBM.com monorepo](https://github.com/carbon-design-system/carbon-for-ibm-dotcom)  we needed to ensure that Content Editors could update the masthead content and have their changes reflected and deployed uniformly across all of our different content ecosystems.

To accomplish this, we leveraged the content repository that is the storage content engine for all of the mastheads used within IBM.com. Updates to the repository are automatically published via an internal IBM Jenkins server (Read more about  [IBM.com testing and delivery](https://medium.com/carbondesign/automating-a-design-system-69bd2414f75)). Once an edit has been published and a new API endpoint build is triggered, the latest version becomes available and is fetched by our web component masthead.

## Building on top of the existing Masthead component

![A screenshot of what the global masthead component looks like within the Storybook preview available within the Carbon for IBM.com library.](https://miro.medium.com/max/700/0*bBc4w4eidx1UY0gu.jpg)
*A screenshot of what the global masthead component looks like within the Storybook preview available within the Carbon for IBM.com library.*

Carbon for IBM.com already offers a  [Masthead component](https://www.ibm.com/standards/carbon/components/masthead)  built-in with Level 0, which refers to the first position of navigational menus on a page. This masthead houses global elements and navigation labels for the main/global navigational pieces. However, to achieve the new masthead to cater to Cloud products, we extended the Carbon for IBM.com global masthead component to create a new variant that’s designed for the Cloud business branding. This new component leverages all of the baseline global masthead design and functionality with some modifications and enhancements that are Cloud brand-specific.

By extending Carbon for IBM.com’s global masthead, we were able to build the masthead with established logic in place instead of starting from scratch. That being said, the global masthead is not for the faint of heart; it’s a complex component with dependencies on several APIs (locale, translations, profile, etc.). On top of that, web components is still a relatively new technology that can take some time to ramp upon. Nonetheless, through the collaboration process between teams and stakeholders, we were able to develop an encapsulated masthead and integrated/launch across multiple content ecosystems.

## Shared Cloud Masthead in the “Cloud”

![A collage of images depicting the desktop and mobile versions of the Cloud Masthead used on different platforms like Adobe Experience Manager, Drupal, React, etc.](https://miro.medium.com/max/700/0*jiKgLPQpDsXPYPMp.jpg)
*A collage of images depicting the desktop and mobile versions of the Cloud Masthead used on different platforms like Adobe Experience Manager, Drupal, React, etc.*

Due to the number of applications and content management systems we needed to launch the new masthead on, we needed to come up with a scalable solution that takes all the files and dependencies of the new Cloud Masthead web components and packs/uploads them to a remote cloud service. That meant no local repo cloning and no complex front-end bundling setup. With this in mind, we decided to leverage the existing Carbon for IBM.com’s CDN auto-publishing workflow that’s made available when a new release is out.

Using the new masthead is simple. Various standalone applications can call for the component and access its built static files using the following snippet:

``` js
<script src="../carbon-for-ibm-dotcom/tag/v1/latest/cloud-masthead.min.js" type="module"></script>
<dds-cloud-masthead-container
   platform="Cloud"
   data-endpoint="/">
</dds-cloud-masthead-container>
```

## Conclusion

With the unified Cloud Masthead project, we were able to prove that it’s possible to speed up the development of future projects by sharing components between them and to be able to deploy content changes that will be reflected across different frameworks/content ecosystems.

Since the launch of the unified Cloud Masthead in the last 6 months, we have received traffic of more than 8 million page loads globally and 650k active monthly users.