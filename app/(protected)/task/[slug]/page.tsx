import { TaskPage } from '@/components/containers/task/TaskPage';
import { IDynamicPage } from '@/typings';

export default function Task({ params }: IDynamicPage) {
  const { slug } = params;
  return <TaskPage slug={slug} />;
}
