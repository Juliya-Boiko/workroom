import { LoaderSkeleton } from '@/components/LoaderSkeleton';

export const CommentSkeleton = () => {
  const items = [1, 2, 3];

  return (
    <>
      {items.map((el) => (
        <li key={el}>
          <LoaderSkeleton height={12} />
          <LoaderSkeleton height={24} />
        </li>
      ))}
    </>
  );
};
