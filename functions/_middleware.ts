// Schwacher Soft-Schutz für die Vorschauphase — Passwort hardcoded.
// Vor Live-Schaltung deaktivieren oder durch echtes Auth-System ersetzen.
//
// Cloudflare Pages erkennt diesen Ordner automatisch und führt die Middleware
// bei jedem Request aus, bevor die statische Datei ausgeliefert wird.
//
// Username: beliebig (auch leer)
// Passwort: Goldgrube (Großschreibung beachten!)

export const onRequest: PagesFunction = async (context) => {
  const auth = context.request.headers.get('Authorization');

  if (auth?.startsWith('Basic ')) {
    try {
      const decoded = atob(auth.slice(6));
      const colonIdx = decoded.indexOf(':');
      if (colonIdx >= 0 && decoded.slice(colonIdx + 1) === 'Goldgrube') {
        return context.next();
      }
    } catch {
      // Invalid base64 — fall through to 401
    }
  }

  return new Response('Authentifizierung erforderlich.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Schulstandort Koblenz – Vorschau"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
