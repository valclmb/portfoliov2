"use client";
import { motion } from "framer-motion";
import { GithubIcon, MailIcon } from "lucide-react";
import Link from "next/link";
export const Networks = () => {
  const networks = [
    {
      name: "Github",
      link: "https://github.com/valclmb",
      icon: GithubIcon,
    },
    {
      name: "valclmb.dev@gmail.com",
      link: "mailto:valclmb.dev@gmail.com",
      icon: MailIcon,
    },
  ];
  return (
    <div className="flex items-center gap-5 ml-2">
      {networks.map((network, index) => (
        <Link
          key={network.name}
          className="transition-all hover:underline "
          href={network.link}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
            className=" flex items-center gap-2"
          >
            <network.icon strokeWidth={1.5} />
            {network.name}
          </motion.span>
        </Link>
      ))}
    </div>
  );
};
