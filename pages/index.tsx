import { NextPage } from "next";
import Experience from "@/components/Experience";
import Technology from "@/components/Technology";
import Hero from "@/components/Hero";

import Contact from "@/components/Contact";
import DefaultLayout from "@/components/layout";
import { SEO } from "@/components/SEO";

const Home: NextPage = () => {
  return (
    <div>
      <SEO title="S.Reaksa's Portfolio" />
      <DefaultLayout>
        <Hero />
        <Experience />
        <Technology />
        <Contact />
      </DefaultLayout>
    </div>
  );
};

export default Home;
