export interface DocLink {
  label: string;
  href: string;
}

const DOCUMENTS: Record<string, DocLink> = {
  'BV/0197/2026': {
    label: 'BV/0197/2026 (Beschlussvorlage)',
    href: '/dokumente/BV-0197-2026-Beschlussvorlage.pdf',
  },
  'BV/0197/2026 Anlage 1': {
    label: 'BV/0197/2026 Anlage 1 (Standortbewertung)',
    href: '/dokumente/BV-0197-2026-Anlage-1-Standortbewertung.pdf',
  },
  'BV/0197/2026 Anlage 2': {
    label: 'BV/0197/2026 Anlage 2 (Präsentation)',
    href: '/dokumente/BV-0197-2026-Anlage-2-Praesentation.pdf',
  },
  'UV/0310/2025': {
    label: 'UV/0310/2025 (Unterrichtungsvorlage)',
    href: '/dokumente/UV-0310-2025-Unterrichtungsvorlage.pdf',
  },
  'B-Plan Nr. 336': {
    label: 'B-Plan Nr. 336 (Beschlussvorlage)',
    href: '/dokumente/BPlan-336-Beschlussvorlage.pdf',
  },
  'B-Plan Nr. 336 Begründung': {
    label: 'B-Plan Nr. 336 — Begründung',
    href: '/dokumente/BPlan-336-Begruendung.pdf',
  },
  'B-Plan Nr. 336 Textfestsetzungen': {
    label: 'B-Plan Nr. 336 — Textfestsetzungen',
    href: '/dokumente/BPlan-336-Textfestsetzungen.pdf',
  },
  'B-Plan Nr. 336 Lageplan': {
    label: 'B-Plan Nr. 336 — Lageplan',
    href: '/dokumente/BPlan-336-Lageplan.pdf',
  },
  'B-Plan Nr. 336 Planzeichnung': {
    label: 'B-Plan Nr. 336 — Planzeichnung',
    href: '/dokumente/BPlan-336-Planzeichnung.pdf',
  },
  'B-Plan Nr. 336 Satzung': {
    label: 'B-Plan Nr. 336 — Satzung',
    href: '/dokumente/BPlan-336-Satzung.pdf',
  },
};

const ARGUMENT_DOCS: Record<number, string[]> = {
  1: ['B-Plan Nr. 336 Begründung', 'B-Plan Nr. 336 Textfestsetzungen'],
  2: ['BV/0197/2026', 'B-Plan Nr. 336 Begründung'],
  3: ['BV/0197/2026'],
  4: ['BV/0197/2026 Anlage 1'],
  5: ['BV/0197/2026'],
  6: ['BV/0197/2026'],
  7: ['BV/0197/2026'],
  8: ['BV/0197/2026', 'B-Plan Nr. 336 Begründung'],
  9: ['BV/0197/2026'],
  10: ['BV/0197/2026'],
  11: ['BV/0197/2026', 'B-Plan Nr. 336 Begründung'],
  12: ['B-Plan Nr. 336 Begründung'],
  13: ['B-Plan Nr. 336 Textfestsetzungen'],
  14: ['BV/0197/2026', 'UV/0310/2025'],
};

export function docsForArgument(nummer: number): DocLink[] {
  const keys = ARGUMENT_DOCS[nummer] ?? [];
  return keys.map((k) => DOCUMENTS[k]).filter(Boolean);
}

export const ALL_DOCS = DOCUMENTS;
