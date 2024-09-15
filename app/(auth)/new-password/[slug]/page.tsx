import { IDynamicPage } from '@/typings';
import { NewPassword } from '@/components/containers/newPassword/NewPassword';

export default async function Password({ params }: IDynamicPage) {
  const { slug } = params;

  return <NewPassword slug={slug} />;
}
