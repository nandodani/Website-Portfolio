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
        className="relative text-sm text-muted-foreground hover:text-foreground transition-colors
									 after:absolute after:left-0 after:bottom-0 after:h-px after:bg-foreground 
									 after:w-0 group-hover:after:w-full after:transition-all after:duration-200"
      >
        {title}
      </Link>

      <div
        className="pointer-events-none ml-4 opacity-0 
					 group-hover:opacity-100 transition-opacity duration-200 text-[11px] text-muted-foreground"
      >
        {description}
      </div>
    </div>
  );
}
