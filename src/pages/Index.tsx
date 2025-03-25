
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { About } from "@/components/home/About";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <FeaturedProjects />
      <About />
    </PageLayout>
  );
};

export default Index;
