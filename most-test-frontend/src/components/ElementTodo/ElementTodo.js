import './ElementTodo.css';
import close from '../../images/close.svg';

import React from 'react';

function ElementTodo({todoIndex, text, handleChangeTodo, id, handleDeleteTodo}) {
  const refInput = React.useRef();

  React.useEffect(() => {
    refInput.current.value = text;

    return () => {};
  });

  return (
    <>
      <div className='element-todo__todo-block'>
        <div className='element-todo__todo-item'>
          <span className='element-todo__todo-index'>{todoIndex + 1}</span>
          <input ref={refInput} onChange={(evt) => handleChangeTodo(evt, id, todoIndex)} type='text' placeholder='Введите задачу' className='element-todo__todo-input'></input>
          <img onClick={(evt) => handleDeleteTodo(id, todoIndex)} src={close} className='element-todo__close' alt="удалить" />
        </div>
      </div>
    </>
  );
}

export default ElementTodo;