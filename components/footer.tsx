import { ModeToggle } from "./mode-toggle";
import Contact from "./contact";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full mx-auto flex items-center justify-between text-muted-foreground space-x-4 text-sm p-4">
      <p>n.</p>
      <Contact />
      <ModeToggle />
    </div>
  );
}
