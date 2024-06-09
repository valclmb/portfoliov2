import { FC, SVGProps } from "react";

type SkillsBlockProps = {
  skills: {
    label: string;
    icon: FC<SVGProps<SVGElement>>;
  }[];
};

export const SkillsBlock = ({ skills }: SkillsBlockProps) => {
  return (
    <ul className="space-y-3 ">
      {skills.map((skill) => (
        <li key={skill.label} className="flex items-center gap-3">
          <skill.icon fill="white" strokeWidth={1.5} width={20} />
          {skill.label}
        </li>
      ))}
    </ul>
  );
};
