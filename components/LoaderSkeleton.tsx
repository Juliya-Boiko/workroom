import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  height: number;
  circle?: boolean;
}

export const LoaderSkeleton = ({ height, circle }: Props) => (
  <Skeleton
    containerClassName="flex-1"
    baseColor="#F4F9FD"
    highlightColor="#E6EDF5"
    height={height}
    circle={circle}
  />
);
