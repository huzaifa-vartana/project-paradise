
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { About } from "@/components/home/About";
import { GitHubActivity } from "@/components/home/GitHubActivity";
import { YouTubeHighlight } from "@/components/home/YouTubeHighlight";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <GitHubActivity />
      <FeaturedProjects />
      <YouTubeHighlight />
      <About />
    </PageLayout>
  );
};

export default Index;
