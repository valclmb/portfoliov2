import clsx from "clsx";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const ProjectTitle = ({
  children,
}: PropsWithChildren<JSX.IntrinsicElements["h2"]>) => {
  return <h2 className="text-lg mb-1">{children}</h2>;
};

export const ProjectTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 my-4 ">
    {tags.map((tag) => (
      <p key={tag} className="bg-cyan-500/30 backdrop-blur-lg rounded-md px-2">
        {tag}
      </p>
    ))}
  </div>
);

export const ProjectLink = ({
  href,
  github = false,
}: {
  href?: string;
  github?: boolean;
}) => {
  if (!href) return null;
  return (
    <Link href={href} className="flex items-center gap-2 my-1" target="_blank">
      {github ? <Github strokeWidth={1.5} /> : <Globe strokeWidth={1.5} />}
      <div className="flex items-center gap-1 hover:underline">{href}</div>
    </Link>
  );
};

export const ProjectDescription = ({ children }: PropsWithChildren) => {
  return <p className="text-sm text-white/80 mb-2">{children}</p>;
};

export const Project = ({
  children,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements["div"]>) => {
  return (
    <div
      {...props}
      className={clsx(
        "bg-gradient-to-br from-blue-500/20 to-cyan-400/30 p-5 rotate-3 rounded-md cursor-pointer hover:-rotate-0 transition-all  max-w-96",
        props.className
      )}
    >
      {children}
    </div>
  );
};
