const PETITION_URL =
  'https://www.openpetition.de/petition/online/keine-interimsschule-in-der-goldgrube-auf-kosten-unserer-kinder';

export interface PetitionStats {
  signatures: number;
  quorum: number;
  goal: number;
  fetchedAt: Date;
  source: 'live' | 'fallback';
}

const FALLBACK: PetitionStats = {
  signatures: 476,
  quorum: 1300,
  goal: 3000,
  fetchedAt: new Date('2026-04-29'),
  source: 'fallback',
};

const parseGermanNumber = (raw: string): number => Number(raw.replace(/\./g, '').trim());

export async function fetchPetitionStats(): Promise<PetitionStats> {
  try {
    const res = await fetch(PETITION_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (build-time fetch)' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return FALLBACK;
    const html = await res.text();
    const match = html.match(/([0-9.]+)\s*von\s*([0-9.]+)\s*für Quorum/);
    if (!match) return FALLBACK;
    const signatures = parseGermanNumber(match[1]);
    const quorum = parseGermanNumber(match[2]);
    return {
      signatures,
      quorum,
      goal: 3000,
      fetchedAt: new Date(),
      source: 'live',
    };
  } catch {
    return FALLBACK;
  }
}
