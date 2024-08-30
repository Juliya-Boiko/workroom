import { InviteSection } from '@/components/invite/InviteSection';

interface InvitePageProps {
  params: {
    slug: string;
  };
}

export default async function Invite({ params }: InvitePageProps) {
  const { slug } = params;

  return <InviteSection slug={slug} />;
}
