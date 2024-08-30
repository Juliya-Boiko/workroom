import { InviteSection } from '@/components/invite/InviteSection';
import { IDynamicPage } from '@/interfaces';

export default async function Invite({ params }: IDynamicPage) {
  const { slug } = params;

  return <InviteSection slug={slug} />;
}
