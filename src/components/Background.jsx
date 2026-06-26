export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="background-mesh" />
      <div className="background-grid" />
      <div className="background-vignette" />
    </div>
  );
}
