import { BtnIcon } from '@/components/ui/buttons/icon/BtnIcon';
import styles from './tasks.module.scss';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, EView, viewDataTypes } from '@/enums';
// import { Preloader } from '@/components/ui/preloader/Preloader';
import imgSrc from '../../../public/tasks-placeholder.png';
import Image from 'next/image';

interface Props {
  view: EView;
  project: boolean;
  tasks: string[];
  loading: boolean;
  setView: (v: EView) => void;
}

export const Tasks = ({ project, tasks, view, setView }: Props) => {
  return (
    <section className={styles.tasks}>
      <div className={styles.header}>
        <h6 className={styles.title}>Tasks</h6>
        <div className={styles.actions}>
          <div className={styles.view}>
            {viewDataTypes.map(({ value, icon }) => (
              <BtnIcon
                key={value}
                title={value}
                active={view === value}
                onClick={() => setView(value)}
              >
                <SvgHandler icon={icon} />
              </BtnIcon>
            ))}
            {/* <BtnIcon title="List" active={view === EView.LIST} on>
              <SvgHandler icon={EIconsSet.List} />
            </BtnIcon>
            <BtnIcon title="Columns" active={view === EView.COLUMNS}>
              <SvgHandler icon={EIconsSet.Columns} />
            </BtnIcon>
            <BtnIcon title="Timeline" active={view === EView.TIMELINE}>
              <SvgHandler icon={EIconsSet.Timeline} />
            </BtnIcon> */}
          </div>
          <BtnIcon title="Filter">
            <SvgHandler icon={EIconsSet.Filter} />
          </BtnIcon>
        </div>
      </div>

      <div className={styles.container}>
        {!project && <p className={styles.text}>Choose project to review tasks</p>}
        {project && !tasks.length && (
          <p className={styles.text}>You dont have tasks in this project</p>
        )}
        {!project || !tasks.length ? (
          <Image src={imgSrc} alt="Tasks" className={styles.image} />
        ) : (
          <>
            <div className={styles.banner}>Active Tasks</div>
            <ul className={styles.list}>list</ul>
            <div className={styles.banner}>Backlog</div>
            <ul className={styles.list}>list</ul>
          </>
        )}

        {/* {loading && <Preloader />} */}
        {/* <div className={styles.banner}>Active Tasks</div>
        <ul className={styles.list}>list</ul>
        <div className={styles.banner}>Backlog</div>
        <ul className={styles.list}>list</ul> */}
      </div>
    </section>
  );
};
