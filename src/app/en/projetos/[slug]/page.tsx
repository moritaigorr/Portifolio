import { getProjectMetadata, ProjectPage } from "@/components/project-page";
import { generateProjectStaticParams } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = generateProjectStaticParams;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return getProjectMetadata("en", slug);
}

export default async function EnglishProject({ params }: Props) {
  const { slug } = await params;
  return <ProjectPage locale="en" slug={slug} />;
}
