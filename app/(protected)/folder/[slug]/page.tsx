import { FolderPage } from '@/components/containers/folder/FolderPage';
import { IDynamicPage } from '@/typings';

export default function Folder({ params }: IDynamicPage) {
  const { slug } = params;
  return <FolderPage slug={slug} />;
}
