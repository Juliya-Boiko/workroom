'use client';
import styles from './shareFolderForm.module.scss';
import { useModalContext } from '@/components/providers/ModalProvider';
import { useForm } from 'react-hook-form';
import { useEmployees, useFolder, useFolderMutation } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { shareFolderSchema, ShareFolderFormData } from '@/utils';
import { Avatar, BtnPrimary, Preloader } from '@/components/ui';

export const ShareFolderForm = ({ slug }: { slug: string }) => {
  const { data: folder, isLoading: isLoadingFolder } = useFolder(slug);
  const { data: employees, isLoading: isLoadingEmployees } = useEmployees();
  const { closeModal } = useModalContext();
  const { share, isSharing } = useFolderMutation();

  const variants = employees?.filter((el) => !folder?.users.includes(el._id));

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      users: [],
    },
    resolver: yupResolver(shareFolderSchema),
    mode: 'onChange',
  });

  const isDisabled = !isDirty || !isValid || isLoadingFolder || isLoadingEmployees || isSharing;

  const onSubmit = async (v: ShareFolderFormData) => {
    share({
      id: slug,
      update: v,
    });
    closeModal();
  };

  return (
    <form className={styles.shareFolderForm} onSubmit={handleSubmit(onSubmit)}>
      {isLoadingEmployees || isLoadingFolder ? (
        <div>
          <Preloader />
        </div>
      ) : null}
      {variants && variants.length
        ? variants.map(({ _id, name, avatar }) => (
            <label htmlFor={_id} key={_id} className={styles.label}>
              <Avatar size="s" user={{ name, avatar }} />
              <p>{name}</p>
              <input
                type="checkbox"
                id={_id}
                value={_id}
                {...register('users')}
                className={styles.inputHidden}
              />
              <div className={styles.checkbox}>
                <div className={styles.mark} />
              </div>
            </label>
          ))
        : null}
      {variants && !variants.length ? (
        <div className={styles.placeholder}>You dont have employees to share folder</div>
      ) : null}
      <BtnPrimary type="submit" disabled={isDisabled}>
        Share
      </BtnPrimary>
    </form>
  );
};
