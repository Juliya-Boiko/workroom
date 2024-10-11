'use client';
import styles from './reorderPages.module.scss';
import { IPageOrder } from '@/typings';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';

interface Props {
  value: IPageOrder[];
  onChange: (v: IPageOrder[]) => void;
}

export const ReorderPages = ({ value, onChange }: Props) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const updatedItems = [...value];
    const [movedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, movedItem);
    const reorderedItems = updatedItems.map((item, index) => ({
      ...item,
      order: index,
    }));
    onChange(reorderedItems);
  };

  return (
    <>
      {value && value.length ? (
        <div className={styles.reorderPages}>
          <p className={styles.label}>Reorder pages</p>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={styles.container}
                >
                  {value.map((item, index) => (
                    <Draggable key={item._id} draggableId={item._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={styles.item}
                        >
                          <div className={styles.order}>{index + 1}</div>
                          <div className={styles.title}>{item.title}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ) : null}
    </>
  );
};
