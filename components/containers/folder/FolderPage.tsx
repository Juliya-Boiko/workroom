'use client';
import styles from './folderPage.module.scss';
import { useEffect, useState } from 'react';
import { useFolder, usePages } from '@/services';
import { useTranslations } from 'next-intl';
import { Topping } from '@/components/topping/Topping';
import { Modal, BtnPrimary, Preloader } from '@/components/ui';
import { EIconsSet, IDynamicComponent } from '@/typings';
import { SvgHandler } from '@/components/SvgHandler';
import { ROUTES } from '@/utils';
import { PageSelect } from '@/components/sections/folder/pageSelect/PageSelect';
import { PageInfo } from '@/components/sections/folder/pageInfo/PageInfo';
import { ShareFolderForm } from '@/components/forms/shareFolder/ShareFolderForm';
import { AddPageForm } from '@/components/forms/addPage/AddPageForm';

export const FolderPage = ({ slug }: IDynamicComponent) => {
  const [pageId, setPageId] = useState<string | null>(null);
  const [editorView, setEditorView] = useState(false);
  const { data: folder, isLoading: isLoadingFolder } = useFolder(slug);
  const { data: pages, isLoading: isLoadingPages } = usePages(slug);
  const t = useTranslations('InfoPortal');

  useEffect(() => {
    if (pages && pages.length) {
      setPageId(pages[0]._id);
    }
  }, [pages]);

  const page = pages && pageId ? pages.find((el) => el._id === pageId) : undefined;

  return (
    <div className={styles.projectPage}>
      <Topping link={t('back')} path={ROUTES.infoPortal} subtitle={folder?.title || ''}>
        <Modal
          title={t('access')}
          activator={
            <BtnPrimary disabled={isLoadingFolder}>
              <SvgHandler icon={EIconsSet.UserPlus} />
              <span>{t('share')}</span>
            </BtnPrimary>
          }
          content={<ShareFolderForm slug={slug} />}
        />
      </Topping>
      <div className={styles.container}>
        {isLoadingFolder || isLoadingPages ? (
          <div className={styles.loader}>
            <Preloader />
          </div>
        ) : (
          <div className={styles.content}>
            <PageSelect
              pages={pages}
              active={pageId}
              onSelect={(v) => setPageId(v)}
              setView={() => setEditorView(true)}
            />
            {editorView ? (
              <AddPageForm folderId={slug} onCancel={() => setEditorView(false)} />
            ) : (
              <PageInfo page={page} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
