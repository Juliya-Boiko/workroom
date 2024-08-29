import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const LoaderSkeleton = ({ height }: { height: number }) => {
  return <Skeleton baseColor="#F4F9FD" height={height} />;
};
