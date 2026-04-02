# Implementation Plan: Portfolio Redesign

## Overview

This plan transforms the existing React + Chakra UI portfolio into a modern Tailwind CSS + Framer Motion application. Tasks are ordered to establish the foundation (Tailwind, theme, data) first, then build components incrementally, and finally wire everything together. Each task builds on previous work with no orphaned code.

## Tasks

- [ ] 1. Set up Tailwind CSS and remove old dependencies
  - [x] 1.1 Install Tailwind CSS, PostCSS, Autoprefixer, and @craco/craco; create `craco.config.js`, `tailwind.config.js`, and `postcss.config.js`; update `package.json` scripts to use craco instead of react-scripts
    - Configure `darkMode: 'class'`, content paths, and the custom color/font theme from the design
    - Replace `src/index.css` with Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`) and add Inter + JetBrains Mono font imports
    - _Requirements: 11.1_
  - [x] 1.2 Uninstall unused dependencies: `@chakra-ui/react`, `@chakra-ui/icons`, `@emotion/react`, `@emotion/styled`, `@fortawesome/*`, `@sweetalert/with-react`, `sweetalert`, `aos`, `react-typed`, `react-scroll`, `react-scrollama`, `react-slick`, `react-github-calendar`, `react-router-dom`, `react-router-hash-link`, `react-icons`, `styled-components`
    - _Requirements: 11.2, 11.3_
  - [x] 1.3 Delete all old component files (`src/Component/` directory, `src/Component/Chakracomp/`, `src/Component/Css/`), clear `src/App.js` to a minimal shell, and remove ChakraProvider/BrowserRouter wrappers from `src/index.js`
    - _Requirements: 11.4_

- [ ] 2. Create data layer and utilities
  - [x] 2.1 Create `src/data/personalInfo.js`, `src/data/experience.js`, `src/data/projects.js`, `src/data/skills.js`, and `src/data/stats.js` with the content from the design document
    - _Requirements: 4.2, 5.1, 5.2, 6.1, 7.1_
  - [x] 2.2 Create `src/utils/validation.js` with the `validateContactForm` function from the design
    - _Requirements: 8.3_
  - [ ]* 2.3 Write property test for contact form validation (install fast-check)
    - **Property 10: Contact form validation rejects invalid inputs**
    - **Validates: Requirements 8.3**

- [ ] 3. Create ThemeProvider and useScrollSpy hook
  - [x] 3.1 Create `src/context/ThemeContext.js` with ThemeProvider component and `useTheme` hook as specified in the design
    - _Requirements: 1.1, 1.2_
  - [x] 3.2 Create `src/hooks/useScrollSpy.js` with IntersectionObserver-based scroll spy hook
    - _Requirements: 2.6_
  - [ ]* 3.3 Write property test for theme toggle round-trip persistence
    - **Property 1: Theme toggle round-trip persistence**
    - **Validates: Requirements 1.2**
  - [ ]* 3.4 Write property test for ScrollSpy active section detection
    - **Property 2: ScrollSpy active section detection**
    - **Validates: Requirements 2.6**

- [x] 4. Checkpoint - Verify foundation
  - Ensure Tailwind CSS compiles correctly, theme toggle works, and all tests pass. Ask the user if questions arise.

- [ ] 5. Build reusable layout components
  - [x] 5.1 Create `src/components/SectionWrapper.jsx` and `src/components/AnimatedSection.jsx` as specified in the design
    - _Requirements: 4.3, 5.3, 6.3, 7.4_
  - [x] 5.2 Create `src/components/Navbar.jsx` with fixed glassmorphism nav, desktop links, mobile hamburger menu, resume download button, theme toggle, and active section highlighting via useScrollSpy
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [ ] 6. Build content sections
  - [x] 6.1 Create `src/components/Hero.jsx` with full-viewport layout, name/title/tagline, CTA buttons, social links, and staggered Framer Motion entrance animations
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  - [ ]* 6.2 Write property test for Hero renders personal information
    - **Property 3: Hero renders personal information**
    - **Validates: Requirements 3.1**
  - [x] 6.3 Create `src/components/About.jsx` with profile image, professional summary, impact stat cards with scroll-triggered animations, and core competencies
    - _Requirements: 4.1, 4.2, 4.3, 4.4_
  - [ ]* 6.4 Write property test for About section renders all stat cards
    - **Property 4: About section renders all stat cards**
    - **Validates: Requirements 4.2**
  - [x] 6.5 Create `src/components/Experience.jsx` with vertical timeline, reverse chronological ordering, achievement bullets, current position indicator, and sequential entrance animations
    - _Requirements: 5.1, 5.2, 5.3, 5.4_
  - [ ]* 6.6 Write property tests for Experience section
    - **Property 5: Experience entries in reverse chronological order**
    - **Property 6: Experience entry renders all fields with current position distinction**
    - **Validates: Requirements 5.1, 5.2, 5.4**
  - [x] 6.7 Create `src/components/Skills.jsx` with categorized grid layout, skill icons/names, and staggered entrance animations
    - _Requirements: 6.1, 6.2, 6.3_
  - [ ]* 6.8 Write property test for Skills section renders all categories and skill names
    - **Property 7: Skills section renders all categories and skill names**
    - **Validates: Requirements 6.1, 6.2**
  - [x] 6.9 Create `src/components/Projects.jsx` with responsive grid, project cards (name, description, tech tags, impact, links), hover effects, and entrance animations
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  - [ ]* 6.10 Write property tests for Projects section
    - **Property 8: Project card renders all required fields**
    - **Property 9: Project external links have correct URLs and target**
    - **Validates: Requirements 7.1, 7.2, 7.3**

- [ ] 7. Build Contact section and Footer
  - [x] 7.1 Create `src/components/Contact.jsx` with form (name, email, message), inline validation using `validateContactForm`, Formspree submission, success/error states, and direct contact links
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  - [x] 7.2 Create `src/components/Footer.jsx` with copyright, tagline, and social links
    - _Requirements: 10.2_

- [x] 8. Checkpoint - Verify all sections render
  - Ensure all sections render correctly in both dark and light modes, all tests pass. Ask the user if questions arise.

- [ ] 9. Wire everything together and finalize
  - [x] 9.1 Update `src/index.js` to wrap App with ThemeProvider (no ChakraProvider, no BrowserRouter)
    - _Requirements: 1.1, 1.4_
  - [x] 9.2 Update `src/App.js` to compose all sections: Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer with semantic HTML (main element wrapping sections)
    - _Requirements: 10.2_
  - [x] 9.3 Move resume PDF to `public/Shoaib-Mansuri-Resume.pdf` and profile image to `public/images/mypic.png` so they are served as static assets; update references in data files
    - _Requirements: 2.4_
  - [x] 9.4 Add accessibility attributes: ARIA labels on icon-only buttons, visible focus indicators via Tailwind `focus-visible:` utilities, ensure keyboard navigation works
    - _Requirements: 10.3, 10.4, 10.5_
  - [x] 9.5 Add lazy loading to images (`loading="lazy"`) and verify semantic HTML structure (nav, main, section, footer)
    - _Requirements: 10.1, 10.2_
  - [x] 9.6 Update `public/index.html` with new title, meta description, and Inter/JetBrains Mono font links from Google Fonts
    - _Requirements: 1.3_

- [x] 10. Final checkpoint - Full verification
  - Run `npm run build` to verify zero warnings/errors. Ensure all tests pass. Ask the user if questions arise.
  - _Requirements: 11.5_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties using fast-check
- Unit tests validate specific examples and edge cases
- The existing `gh-pages` deployment setup is preserved — run `npm run deploy` after build verification
