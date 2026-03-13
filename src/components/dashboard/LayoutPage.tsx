// Centered 1280px-wide pages

export function LayoutPage({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto flex w-full max-w-7xl grow flex-col gap-8 p-6 pb-4 md:px-8">{children}</div>;
}
