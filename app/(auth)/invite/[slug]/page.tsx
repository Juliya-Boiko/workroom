import { InviteSection } from '@/components/invite/InviteSection';
import { IDynamicPage } from '@/typings';

export default async function Invite({ params }: IDynamicPage) {
  const { slug } = params;

  return <InviteSection slug={slug} />;
}
