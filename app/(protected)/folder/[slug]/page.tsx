import { IDynamicPage } from '@/typings';
import { FolderPage } from '@/components/containers/folder/FolderPage';

export default function Folder({ params }: IDynamicPage) {
  const { slug } = params;
  return <FolderPage slug={slug} />;
}
