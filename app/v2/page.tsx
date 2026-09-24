import type { Metadata } from "next";
import { V2Landing } from "@/components/landing/V2Landing";

export const metadata: Metadata = {
  title: "YE Community × Thiago Oshiro | Versão 2",
  description:
    "Uma versão mais direta do encontro da YE Community com Thiago Oshiro em Manaus.",
};

export default function VersionTwoPage() {
  return <V2Landing />;
}
