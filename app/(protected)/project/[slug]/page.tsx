import { ProjectPage } from '@/components/pages/project/ProjectPage';
import { IDynamicPage } from '@/typings';

export default function Project({ params }: IDynamicPage) {
  const { slug } = params;
  return <ProjectPage slug={slug} />;
}
