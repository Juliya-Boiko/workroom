'use client';
import styles from './folderPage.module.scss';
import { useState } from 'react';
import { useFolder, useProject } from '@/services';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, Preloader } from '@/components/ui';
import { EIconsSet, IDynamicComponent } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ROUTES } from '@/utils';
import { PageSelect } from '@/components/sections/folder/pageSelect/PageSelect';
import { PageInfo } from '@/components/sections/folder/pageInfo/PageInfo';
import { ShareFolderForm } from '@/components/forms/shareFolder/ShareFolderForm';

export const FolderPage = ({ slug }: IDynamicComponent) => {
  const [page, setPage] = useState<string | null>(null);
  const [editorView, setEditorView] = useState(false);
  const { data: folder, isLoading: isLoadingFolder } = useFolder(slug);
  const { data: project, isLoading: isLoadingProject } = useProject(folder?.projectId);

  return (
    <div className={styles.projectPage}>
      <Topping link="Back to Info Portal" path={ROUTES.infoPortal} title={project?.name || ''}>
        <Modal
          title="Share folder access"
          activator={
            <BtnPrimary disabled={isLoadingFolder || isLoadingProject}>
              <SvgHandler icon={EIconsSet.UserPlus} />
              <span>Share</span>
            </BtnPrimary>
          }
          content={<ShareFolderForm slug={slug} />}
        />
      </Topping>
      <div className={styles.container}>
        {isLoadingFolder || isLoadingProject ? (
          <div className={styles.loader}>
            <Preloader />
          </div>
        ) : (
          <div className={styles.content}>
            <PageSelect
              page={page}
              onChange={(v) => setPage(v)}
              setView={() => setEditorView(true)}
            />
            {editorView ? <div>editop</div> : <PageInfo />}
          </div>
        )}
      </div>
    </div>
  );
};
