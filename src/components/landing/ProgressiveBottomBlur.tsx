// Framer-style progressive blur, not used anywhere yet just saving the snippet
export function ProgressiveBottomBlur() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-32 w-full" aria-hidden>
      <div className="relative size-full overflow-hidden *:absolute *:inset-0 *:overflow-hidden *:bg-black/1 *:mask-size-[100%_100%] *:mask-no-repeat">
        <div className="mask-[linear-gradient(rgba(0,0,0,0)_76%,rgb(0,0,0)_100%)] backdrop-blur-[12px]" />
        <div className="mask-[linear-gradient(rgba(0,0,0,0)_50%,rgb(0,0,0)_75%)] backdrop-blur-[6px]" />
        <div className="mask-[linear-gradient(rgba(0,0,0,0)_25%,rgb(0,0,0)_50%)] backdrop-blur-[4px]" />
        <div className="mask-[linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_25%)] backdrop-blur-[1px]" />
      </div>
    </div>
  );
}
