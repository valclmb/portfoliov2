import MongodbSvg from "/assets/skills/mongodb.svg";
import NextJsSvg from "/assets/skills/nextjs.svg";
import NodeJsSvg from "/assets/skills/nodejs.svg";
import PhpSvg from "/assets/skills/php.svg";
import PostgresqlSvg from "/assets/skills/postgresql.svg";
import ReactSvg from "/assets/skills/react.svg";
import TailwindCssSvg from "/assets/skills/tailwindcss.svg";
import ThreeJsSvg from "/assets/skills/threejs.svg";
import TypescriptSvg from "/assets/skills/typescript.svg";

export const skillsList = [
  {
    skills: [
      { label: "React", icon: ReactSvg },
      { label: "NextJs", icon: NextJsSvg },
      { label: "Typescript", icon: TypescriptSvg },
      { label: "TailwindCSS", icon: TailwindCssSvg },
    ],
  },
  {
    skills: [
      { label: "NodeJs", icon: NodeJsSvg },
      { label: "PHP", icon: PhpSvg },
      { label: "MongoDB", icon: MongodbSvg },
      { label: "PostgreSQL", icon: PostgresqlSvg },
    ],
  },
  {
    skills: [{ label: "ThreeJs (in progress...)", icon: ThreeJsSvg }],
  },
];
