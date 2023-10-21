import './ListTodoContent.css';

import React from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';

import Card from '../Card/Card';

function ListTodoContent({ cards, setCards, onDeleteCard, handleAddTask, handleChangeTheme, handleChangeTodo, handleDeleteTodo }) {
  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(cards, sourceIndex, targetIndex);
    setCards(nextState);
  }

  return (
    <>
      <section className='list-todo-content'>
        <div className='list-todo-content__content'>
          <ul className='list-todo-content__list'>
            <GridContextProvider onChange={onChange}>
              <GridDropZone
                id="items"
                boxesPerRow={3}
                rowHeight={250}
                style={
                  {
                    height: 250 * Math.ceil(cards.length / 3),
                  }
                }
              >
                {cards.map((item, index) => (
                  <GridItem key={item.id} style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                    <Card
                      card={item}
                      onDeleteCard={onDeleteCard}
                      handleAddTask={handleAddTask}
                      handleChangeTheme={handleChangeTheme}
                      handleChangeTodo={handleChangeTodo}
                      handleDeleteTodo={handleDeleteTodo}
                    />
                  </GridItem>
                ))}
              </GridDropZone>
            </GridContextProvider>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ListTodoContent;