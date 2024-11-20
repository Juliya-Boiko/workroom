import { IDynamicPage } from '@/typings';
import { EditFolderPage } from '@/components/containers/editFolder/EditFolderPage';

export default function EditFolder({ params }: IDynamicPage) {
  const { slug } = params;
  return <EditFolderPage slug={slug} />;
}
