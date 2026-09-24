import Link from "next/link";

export function ProjectLink({
  title,
  url,
  description,
}: {
  title: string;
  url: string;
  description: string;
}) {
  return (
    <div className="group relative flex items-start gap-2">
      <Link
        href={`https://${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} — ${description} (opens in new tab)`}
        className="relative text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors outline-none
									 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-foreground
									 after:w-0 group-hover:after:w-full focus-visible:after:w-full after:transition-all after:duration-200"
      >
        {title}
      </Link>

      <div
        aria-hidden="true"
        className="pointer-events-none ml-4 opacity-0
					 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 text-[11px] text-muted-foreground"
      >
        {description}
      </div>
    </div>
  );
}
