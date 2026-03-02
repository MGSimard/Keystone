import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/shadcnui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <p className="font-body">Geist font test</p>
      <p className="font-mono">Geist Mono font test</p>
    </div>
  );
}
