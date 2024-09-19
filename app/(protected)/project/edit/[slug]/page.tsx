import { IDynamicPage } from '@/typings';
import { EditProjectPage } from '@/components/containers/editProject/EditProjectPage';

export default function ProjectEdit({ params }: IDynamicPage) {
  const { slug } = params;
  return <EditProjectPage slug={slug} />;
}
