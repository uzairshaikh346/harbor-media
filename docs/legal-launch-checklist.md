# HarborMedia.ai — Legal Launch Checklist (Internal)

**Not for publication.** Source: "HarborMedia.ai Website Policies & Compliance Draft"
(New York focused), August 10, 2026 — Appendices A and C.

The published policy pages in `lib/legal.ts` state things as fact ("audio recording is
disabled", "we do not use facial recognition"). Those statements are only accurate if the
items below are actually true. Confirm each before the pages go live.

---

## Blocking — published copy asserts these are true

| Published claim | Page | Must confirm |
| --- | --- | --- |
| Ambient audio recording is disabled on unattended fixed cameras | Live Camera & Privacy | Camera hardware/config. Recommended answer for NY: **NO audio.** |
| No facial recognition, biometric ID, identity matching, or person-specific behavioral advertising | Live Camera & Privacy | Recommended baseline: **NO.** |
| Property-owner permission is maintained for fixed camera installation | Live Camera & Privacy | Written permission from Mariner's Cove Marine for install, power, network, publication. |
| Reasonable on-site notice identifying the live scenic camera | Live Camera & Privacy | Signage plan + installed sign. Language must be revised if audio is ever enabled. |
| Contributor forms require submitters to be 18+ | Privacy Policy | Contact/submission form actually enforces this. |
| HarborMedia.ai does not sell personal information | Privacy Policy | True of the actual ad/analytics stack. |
| Cookie categories listed (essential, analytics, functionality, advertising) | Cookie Policy | Must match cookies actually set. |
| Part 107 compliance for non-recreational drone flights | Drone Operations | Own flights vs. hired licensed pilots. |

## Entity and contact details

- [ ] Exact legal entity name (published pages currently use the trade name "HarborMedia.ai").
- [ ] Mailing address to publish — currently `BBC, 9 Canoe Place Rd., Hampton Bays, NY 11946`.
      Confirm "BBC" is the intended published entity string.
- [ ] All contact routes currently point to `creator@harbormedia.ai` (legal, privacy, DMCA,
      accessibility, licensing, partnerships, corrections). Split into dedicated addresses if desired —
      change `CONTACT_EMAIL` in `lib/legal.ts`.
- [ ] DMCA designated agent name, and registration in the U.S. Copyright Office
      DMCA Designated Agent Directory if relying on the Section 512 safe harbor.
      *The published page no longer mentions registration — it is an internal step.*

## Website privacy / technology inventory

The Privacy Policy describes provider **categories**, not names, because the actual stack
is unconfirmed. Name providers only after this inventory is done.

- [ ] Website analytics provider(s).
- [ ] Advertising network(s), pixels, retargeting tools.
- [ ] Cookie-consent / preference-management platform, if any.
- [ ] Hosting / CDN provider.
- [ ] Email / newsletter provider.
- [ ] Contact form provider (currently a Nodemailer-backed API route).
- [ ] Embedded media platforms (YouTube, Vimeo, maps, social embeds).
- [ ] Test opt-out and preference controls before launch and after material site changes.
- [ ] Adopt a data retention schedule (the policy commits to retention limits without a stated period).
- [ ] Process for privacy access / correction / deletion requests.
- [ ] SHIELD Act: reasonable safeguards for NY residents' private information.
- [ ] NY Child Data Protection Act: no behavioral advertising or non-necessary data use for known
      users under 18 without legally sufficient consent.
- [ ] COPPA: no knowing collection from children under 13.

## Camera operations

- [ ] Frame cameras away from residential windows and areas with heightened privacy expectations.
- [ ] Wide scenic views rather than intentional person tracking.
- [ ] Privacy masks or fixed zoom limits for sensitive areas.
- [ ] Confirm whether cameras have pan/tilt/zoom and whether remote operators can zoom onto people.
- [ ] Confirm whether streams are truly live, delayed, or periodically sampled.
- [ ] Confirm whether historical footage is stored, and typical retention period.
- [ ] Never use identifiable incidental individuals as advertising endorsements without written
      permission (NY Civil Rights Law §§ 50, 51).

## User-generated content

- [ ] Notice-and-takedown and counter-notice procedures operational.
- [ ] Records of contributor licenses and rights representations.
- [ ] Repeat-infringer policy and operational process.
- [ ] Confirm whether users can create accounts / upload directly.
- [ ] Confirm whether HarborMedia.ai sells or licenses footage containing identifiable people.

## Advertising / sponsorship

- [ ] Disclose material connections clearly and conspicuously **on the specific post/video** —
      the disclosure page alone is not sufficient.
- [ ] Distinguish geographic references from sponsorship.
- [ ] Substantiate factual advertising claims.
- [ ] Confirm whether affiliate links are used, and whether sponsors receive special camera
      placement, naming, links, or promotional treatment.

## Accessibility

- [ ] Semantic headings, keyboard navigation, alt text, readable contrast, labeled controls.
- [ ] Caption prerecorded video where practicable.
- [ ] Alternative contextual descriptions for live camera streams.
- [ ] Test major pages with keyboard-only navigation and common accessibility tools.

## Drones

- [ ] Remote Pilot Certificate, aircraft registration, Remote ID.
- [ ] Airspace check, LAANC/authorization, TFRs, and site restrictions before each operation.
- [ ] Document required waivers when an operation exceeds ordinary Part 107 permissions.

## Attorney review

- [ ] Corporate ownership and governing-law language.
- [ ] The Terms of Use governing-law section is deliberately general. A specific Suffolk County
      venue clause, mandatory arbitration clause, or class-action waiver was **not** published
      and needs attorney review first.

---

## Research sources (from Appendix B)

- NY AG — [Website Privacy Controls](https://ag.ny.gov/resources/organizations/business-guidance/website-privacy-controls) ·
  [SHIELD Act](https://ag.ny.gov/resources/organizations/data-breach-reporting/shield-act) ·
  [Protecting Consumers' Personal Information](https://ag.ny.gov/publications/protecting-consumers-personal-information) ·
  [Child Data Protection Act guidance](https://ag.ny.gov/child-data-protection-act-guidance)
- NY Senate — [Civil Rights Law § 50](https://www.nysenate.gov/legislation/laws/CVR/50) ·
  [§ 51](https://www.nysenate.gov/legislation/laws/CVR/51) ·
  [Penal Law § 250.00](https://www.nysenate.gov/legislation/laws/PEN/250.00) ·
  [§ 250.05](https://www.nysenate.gov/legislation/laws/PEN/250.05) ·
  [GBL § 349](https://www.nysenate.gov/legislation/laws/GBS/349) ·
  [GBL § 350](https://www.nysenate.gov/legislation/laws/GBS/350)
- FTC — [COPPA Rule](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa) ·
  [Endorsements, Influencers, and Reviews](https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews)
- DOJ — [Web Accessibility and the ADA](https://www.ada.gov/resources/web-guidance/)
- U.S. Copyright Office — [DMCA Designated Agent Directory](https://www.copyright.gov/dmca-directory/)
- FAA — [Commercial Operators](https://www.faa.gov/uas/commercial_operators) ·
  [Remote ID](https://www.faa.gov/uas/getting_started/remote_id) ·
  [Part 107](https://www.faa.gov/newsroom/small-unmanned-aircraft-systems-uas-regulations-part-107)
