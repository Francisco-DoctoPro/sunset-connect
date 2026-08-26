import { config } from "@/data/config";
import { notFound } from "next/navigation";
import { StoryModal } from "@/components/ui/StoryModal";

export default async function InterceptedStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = config.stories.find((s) => s.slug === slug);
  
  if (!story) {
    notFound();
  }

  return <StoryModal story={story} />;
}
