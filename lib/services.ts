// Service definitions for the /services/[slug] pages.
// Content is drawn from the services ADA Design already lists on the
// Services and Studio pages — no additional services are introduced here.

export type Service = {
  slug: string;
  /** Short label shown above headings, e.g. "DA" */
  code: string;
  title: string;
  /** <title> for the page (the " — ADA Design" suffix is added by the page) */
  metaTitle: string;
  metaDescription: string;
  /** Hero heading split in two: plain + emphasised (terracotta) part */
  heading: [string, string];
  intro: string;
  overview: string[];
  /** What ADA takes care of as part of this service */
  scope: string[];
  /** Project types this service commonly applies to */
  suitedTo: string[];
  process: { step: string; detail: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    code: "Design",
    title: "Architectural Design & Documentation",
    metaTitle: "Architectural Design & Documentation in NSW",
    metaDescription:
      "Site-led architectural design and documentation across NSW — concept, floor plans, elevations and DA, CC and construction sets for homes, medical and industrial projects.",
    heading: ["Architectural design,", "drawn from the site."],
    intro:
      "Every ADA project starts with the land. We read orientation, slope, views, vegetation, neighbours and council overlays before a single wall is drawn — then carry that design through to a documentation set that builds cleanly.",
    overview: [
      "Our design process begins with a site visit and a clear brief. From there we test massing, sun and wind, and floor plan options against light, cost and the planning controls that apply to your lot. When the site is read properly, the plan resolves itself.",
      "Once the design is settled, we prepare the drawings each stage of the project needs — from development application (DA) and construction certificate (CC) sets to construction documentation. Because design, rendering, documentation and council liaison are handled in-house, there are no coordination gaps between what was approved and what gets built.",
    ],
    scope: [
      "Site analysis — orientation, slope, view lines and council overlays",
      "Concept design, massing and form",
      "Floor plans, elevations and sections",
      "Design options tested against light, cost and code",
      "DA, CC and construction documentation sets",
      "Compliance strategy across NSW councils (LEP, DCP, BCA)",
    ],
    suitedTo: [
      "Single and double storey dwellings",
      "Dual occupancy",
      "Dwellings with granny flats",
      "Secondary dwellings & studios",
      "Rural houses",
      "Multi-dwelling townhouses",
      "Medical centres",
      "Industrial buildings & sheds",
    ],
    process: [
      { step: "Concept", detail: "Site visit, brief, and a first sketch of the massing." },
      { step: "Schematic", detail: "Floor plans and elevations, with options tested against light, cost and code." },
      { step: "Documentation", detail: "Approval and construction sets drawn to build cleanly." },
    ],
    related: ["3d-rendering", "development-applications", "consultant-coordination"],
  },
  {
    slug: "3d-rendering",
    code: "3D",
    title: "3D Architectural Rendering",
    metaTitle: "3D Architectural Rendering in NSW",
    metaDescription:
      "Photorealistic exterior and interior 3D renders for approvals and marketing, produced in-house alongside the architectural design by ADA Design, NSW.",
    heading: ["See it built", "before it's built."],
    intro:
      "We produce photorealistic exterior and interior renders in-house, as part of the design process — so you can judge materials, form and light with confidence, and present your project clearly to councils, buyers and stakeholders.",
    overview: [
      "Rendering is where the design becomes tangible. Materials are selected, form is resolved, and you see how the building will sit on its site before construction begins. It is often the moment a client's brief turns into a decision.",
      "Because our renders are produced by the same team that draws the plans, they stay true to the design. The building you see in the render is the building in the documentation set — useful for approvals, for marketing, and for making confident choices along the way.",
    ],
    scope: [
      "Photorealistic exterior renders",
      "Interior renders of key spaces",
      "Material and finish selection",
      "Imagery suitable for approval submissions",
      "Imagery suitable for marketing and sales",
    ],
    suitedTo: [
      "New homes and dual occupancies",
      "Townhouse and multi-dwelling projects",
      "Medical centres",
      "Industrial and commercial developments",
    ],
    process: [
      { step: "Design", detail: "Form and layout are resolved through the schematic design." },
      { step: "Render", detail: "Materials selected and photorealistic 3D views produced." },
      { step: "Refine", detail: "Views reviewed with you and adjusted before documentation." },
    ],
    related: ["architectural-design", "development-applications"],
  },
  {
    slug: "development-applications",
    code: "DA",
    title: "Development Applications",
    metaTitle: "Development Applications (DA) in NSW",
    metaDescription:
      "ADA Design prepares and manages development application (DA) submissions across NSW councils — from design and documentation through to RFIs and consent.",
    heading: ["Development applications,", "managed to consent."],
    intro:
      "We prepare and manage comprehensive DA submissions, working closely with local councils to secure consent for your project — from the first design through to council's requests for information.",
    overview: [
      "A development application seeks consent from a consent authority — usually your local council — to carry out development. It is assessed against the local environmental plan (LEP), the development control plan (DCP) and other planning controls that apply to your site.",
      "Securing the right approval is often the most daunting part of a building project. Our team is experienced in navigating local council regulations and state planning policies. We prepare the design and documentation with those controls in mind, coordinate the consultant reports council requires, lodge the application, and manage requests for information (RFIs) through to consent.",
    ],
    scope: [
      "Design and documentation prepared against LEP and DCP controls",
      "Coordination of consultant reports required for lodgement",
      "Preparation and lodgement of the DA submission",
      "Council liaison throughout assessment",
      "Responses to requests for information (RFIs)",
    ],
    suitedTo: [
      "Single and double storey dwellings",
      "Dual occupancy",
      "Multi-dwelling townhouses",
      "Medical centres",
      "Industrial developments",
    ],
    process: [
      { step: "Design", detail: "Design developed against the planning controls for your site." },
      { step: "Lodge", detail: "DA documentation and consultant reports assembled and lodged with council." },
      { step: "Consent", detail: "We manage RFIs and council liaison through to consent." },
    ],
    related: ["complying-development-certificates", "section-4-55-modifications", "consultant-coordination"],
  },
  {
    slug: "complying-development-certificates",
    code: "CDC",
    title: "Complying Development Certificates",
    metaTitle: "Complying Development Certificates (CDC) in NSW",
    metaDescription:
      "When your project fits NSW complying development standards, ADA Design prepares the documentation for a fast-tracked CDC approval through a private certifier.",
    heading: ["Complying development,", "streamlined."],
    intro:
      "When your project fits within specific state development standards, we streamline the process to secure a fast-tracked approval through private certifiers.",
    overview: [
      "Complying development is a combined planning and construction approval for straightforward development that meets the standards set out in the NSW State codes. Where a project qualifies, a Complying Development Certificate (CDC) can be issued by a private certifier or council, without going through a full development application.",
      "Not every site or design qualifies. We review your site and brief against the applicable standards, design within them where the CDC pathway makes sense, and prepare the documentation the certifier needs. Where a project falls outside those standards, we will advise on the DA pathway instead.",
    ],
    scope: [
      "Review of your site and brief against complying development standards",
      "Design prepared to meet the applicable standards",
      "Documentation for the certifier's assessment",
      "Coordination with private certifiers",
      "Advice on the DA pathway where CDC is not suitable",
    ],
    suitedTo: [
      "Single and double storey dwellings",
      "Dual occupancy",
      "Secondary dwellings & granny flats",
    ],
    process: [
      { step: "Assess", detail: "Site and brief checked against complying development standards." },
      { step: "Document", detail: "Design and documentation prepared to the required standards." },
      { step: "Certify", detail: "Submission coordinated with a private certifier through to approval." },
    ],
    related: ["development-applications", "basix-certificates", "architectural-design"],
  },
  {
    slug: "section-4-55-modifications",
    code: "S4.55",
    title: "Section 4.55 Modifications",
    metaTitle: "Section 4.55 Modifications to Development Consent in NSW",
    metaDescription:
      "Need to change an approved DA? ADA Design prepares and manages Section 4.55 modification applications to modify your existing development consent in NSW.",
    heading: ["Changing an approved DA,", "the right way."],
    intro:
      "If you need to make changes to an already approved development application, we handle the Section 4.55 application to modify your existing development consent smoothly and legally.",
    overview: [
      "Section 4.55 of the Environmental Planning and Assessment Act 1979 allows an existing development consent to be modified rather than starting a new application. Changes might arise from a revised brief, a change in budget, construction requirements, or a condition of consent that needs adjusting.",
      "We review the approved plans and conditions, document the proposed changes clearly, and prepare the modification application for council. Throughout the process we liaise with council so that the modified consent reflects what you actually intend to build.",
    ],
    scope: [
      "Review of the approved plans and conditions of consent",
      "Design and documentation of the proposed changes",
      "Preparation and lodgement of the Section 4.55 application",
      "Council liaison and RFI responses",
    ],
    suitedTo: [
      "Approved residential developments",
      "Approved dual occupancy and townhouse projects",
      "Approved medical and industrial developments",
    ],
    process: [
      { step: "Review", detail: "Approved plans and conditions reviewed against the changes you need." },
      { step: "Document", detail: "Modified drawings and the Section 4.55 application prepared." },
      { step: "Approve", detail: "Application lodged and managed with council through to determination." },
    ],
    related: ["development-applications", "architectural-design"],
  },
  {
    slug: "building-information-certificates",
    code: "BIC",
    title: "Building Information Certificates",
    metaTitle: "Building Information Certificates (BIC) in NSW",
    metaDescription:
      "Buying, selling or regularising unauthorised building works? ADA Design guides you through the Building Information Certificate (BIC) process in NSW.",
    heading: ["Building information certificates,", "for peace of mind."],
    intro:
      "Whether buying, selling, or regularising unauthorised building works, we guide you through the Building Information Certificate process to help your property achieve compliance and peace of mind.",
    overview: [
      "A Building Information Certificate (BIC) is issued by council and relates to the building works on a property. It is commonly sought when a property is being bought or sold, or when building works have been carried out without the required approvals and need to be regularised.",
      "We document the existing building works, prepare the drawings and information council requires, coordinate any consultant input, and guide you through the application so that the outcome is clear and the property's status is resolved.",
    ],
    scope: [
      "Documentation of existing building works",
      "Drawings and information prepared for council",
      "Coordination of consultant input where required",
      "Guidance through the BIC application",
    ],
    suitedTo: [
      "Properties being bought or sold",
      "Unauthorised or unapproved building works",
      "Existing dwellings, granny flats and outbuildings",
    ],
    process: [
      { step: "Inspect", detail: "Existing works on the property documented and reviewed." },
      { step: "Prepare", detail: "Drawings and supporting information prepared for council." },
      { step: "Resolve", detail: "Application guided through council to a clear outcome." },
    ],
    related: ["development-applications", "consultant-coordination"],
  },
  {
    slug: "basix-certificates",
    code: "BASIX",
    title: "BASIX Certificates",
    metaTitle: "BASIX Certificates in NSW",
    metaDescription:
      "ADA Design integrates sustainability into every design so your project meets NSW BASIX requirements for water efficiency, energy efficiency and thermal comfort.",
    heading: ["Sustainability,", "designed in from the start."],
    intro:
      "We integrate sustainability into our designs, ensuring your project meets NSW statutory requirements for water efficiency, energy efficiency and thermal comfort.",
    overview: [
      "BASIX (the Building Sustainability Index) is a NSW planning requirement for residential development. A BASIX certificate sets out the sustainability commitments a project must meet for water, energy and thermal performance, and it forms part of the documentation lodged for approval.",
      "Rather than treating BASIX as a box to tick at the end, we consider it from the start of the design — orientation, glazing, shading and services all affect the result. We coordinate with BASIX and energy assessors so the commitments are reflected accurately in the approval and construction drawings.",
    ],
    scope: [
      "Sustainability considered from early design",
      "Coordination with BASIX and energy assessors",
      "Water, energy and thermal comfort commitments reflected in the drawings",
      "BASIX documentation included in DA and CDC submissions",
    ],
    suitedTo: [
      "New single and double storey dwellings",
      "Dual occupancy",
      "Granny flats and secondary dwellings",
      "Multi-dwelling townhouses",
    ],
    process: [
      { step: "Design", detail: "Orientation, glazing and shading considered from the outset." },
      { step: "Assess", detail: "BASIX and energy assessment coordinated with the assessor." },
      { step: "Document", detail: "Commitments carried into the approval and construction sets." },
    ],
    related: ["development-applications", "complying-development-certificates", "architectural-design"],
  },
  {
    slug: "consultant-coordination",
    code: "Delivery",
    title: "Consultant Coordination & Project Delivery",
    metaTitle: "Consultant Coordination & Project Delivery in NSW",
    metaDescription:
      "One lead, every discipline. ADA Design coordinates surveyors, engineers, town planners, certifiers and other consultants as your single point of contact in NSW.",
    heading: ["One lead.", "Every discipline."],
    intro:
      "A successful build requires an entire ecosystem of experts working in harmony. You don't need to stress about finding and managing multiple consultants — ADA does it for you, as your single point of contact from concept through approval.",
    overview: [
      "Most projects need input from several specialists before they can be approved and built. Each has their own scope, timing and deliverables — and gaps between them are where delays and costs creep in.",
      "We streamline communication: you talk to ADA, and we talk to the engineers, councils and certifiers. Because we regularly coordinate with the same consultants, your project benefits from a team that works together efficiently, and our understanding of DAs, CDCs, BASIX and local planning helps us anticipate roadblocks before they cost you time and money.",
    ],
    scope: [
      "Land Surveyors",
      "Geotechnical Engineers",
      "Structural Engineers",
      "Stormwater & Civil Engineers",
      "Town Planners",
      "Private Certifiers",
      "Arborists",
      "Acoustic Consultants",
      "BASIX & Energy Assessors",
    ],
    suitedTo: [
      "Residential developments of every type",
      "Medical centres",
      "Industrial developments",
    ],
    process: [
      { step: "Scope", detail: "We identify which consultants your project and council require." },
      { step: "Coordinate", detail: "Briefs, timing and deliverables managed on your behalf." },
      { step: "Integrate", detail: "Consultant input carried into one consistent set of documents." },
    ],
    related: ["development-applications", "architectural-design", "basix-certificates"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
