import { IDynamicPage } from '@/typings';
import { EditTaskPage } from '@/components/containers/editTask/EditTaskPage';

export default function TaskEdit({ params }: IDynamicPage) {
  const { slug } = params;

  return <EditTaskPage slug={slug} />;
}
