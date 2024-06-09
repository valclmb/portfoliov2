import MongodbSvg from "./../public/skills/mongodb.svg";
import NextJsSvg from "./../public/skills/nextjs.svg";
import NodeJsSvg from "./../public/skills/nodejs.svg";
import PhpSvg from "./../public/skills/php.svg";
import PostgresqlSvg from "./../public/skills/postgresql.svg";
import ReactSvg from "./../public/skills/react.svg";
import TailwindCssSvg from "./../public/skills/tailwindcss.svg";
import ThreeJsSvg from "./../public/skills/threejs.svg";
import TypescriptSvg from "./../public/skills/typescript.svg";

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
