'use client';
import styles from './tasksColumns.module.scss';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import { ETaskStatus, ITask } from '@/typings';
import { useTasksMutation } from '@/utils';

interface Props {
  tasks: ITask[];
  loading: boolean;
}

type GroupedTasks = {
  [key in ETaskStatus]: ITask[];
};

const groupTasksByStatus = (tasks: ITask[]): GroupedTasks => {
  const initialGroupedTasks: GroupedTasks = {
    [ETaskStatus.TODO]: [],
    [ETaskStatus.INPROGRESS]: [],
    [ETaskStatus.DONE]: [],
  };

  return tasks.reduce((acc: GroupedTasks, task: ITask) => {
    acc[task.status].push(task);
    return acc;
  }, initialGroupedTasks);
};

export const TasksColumns = ({ tasks, loading }: Props) => {
  const { update, isUpdating } = useTasksMutation();
  const groupedTasks = groupTasksByStatus(tasks);
  const columnsRender = Object.entries(groupedTasks);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;
    const data = {
      _id: draggableId,
      update: {
        status: destination.droppableId as ETaskStatus,
      },
    };
    update(data);
  };

  const showLoader = loading || isUpdating;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.tasksColumns}>
        {showLoader &&
          columnsRender.map(([name, tasks]) => (
            <div
              key={name}
              style={{
                margin: '0 16px',
                padding: '16px',
                background: '#f0f0f0',
                width: '45%',
              }}
            >
              <h3>{name}</h3>
              {tasks.map((item) => (
                <div key={item._id}>loading...</div>
              ))}
            </div>
          ))}
        {!showLoader &&
          columnsRender.map(([name, tasks]) => (
            <Droppable key={name} droppableId={name}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    margin: '0 16px',
                    padding: '16px',
                    background: '#f0f0f0',
                    width: '45%',
                  }}
                >
                  <h3>{name}</h3>
                  {tasks.map((item, index) => (
                    <Draggable key={item._id} draggableId={item._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            padding: '8px',
                            marginBottom: '8px',
                            backgroundColor: '#fff',
                            border: '1px solid #ddd',
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
      </div>
    </DragDropContext>
  );
};
