
import { About } from "@/components/home/About";
import { GitHubActivity } from "@/components/home/GitHubActivity";
import { Hero } from "@/components/home/Hero";
import { YouTubeHighlight } from "@/components/home/YouTubeHighlight";
import { PageLayout } from "@/components/layout/PageLayout";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <YouTubeHighlight />
      <About />
      <GitHubActivity />
      {/* <FeaturedProjects /> */}
    </PageLayout>
  );
};

export default Index;
