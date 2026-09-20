/**
 * Minimal server-rendered JSON-LD injector for the static export.
 * Renders a <script type="application/ld+json"> block containing the given data.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
