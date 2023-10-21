import './Card.css';

import React from 'react';

import deleteIcon from '../../images/delete.svg';
import textIcon from '../../images/text_icon.png';
import plus from '../../images/plus.png';

import ElementTodo from '../ElementTodo/ElementTodo';

function Card({ card, onDeleteCard, handleAddTask, handleChangeTheme, handleChangeTodo, handleDeleteTodo }) {
  const refInput = React.useRef();

  React.useEffect(() => {
    refInput.current.value = card.theme;

    return () => {};
  });

  return (
    <>
      <li className='card'>
        <div className='card__content'>
          <img onClick={() => onDeleteCard(card.id)} className='card__delete' src={deleteIcon} alt='удалить'></img>
          <div className='card__box'>
            <div className='card__text-block'>
              <div className='card__text-header'>
                <img src={textIcon} alt='иконка' className='card__text-icon'></img>
                <p className='card__text-title'>Тема</p>
              </div>
              <input placeholder='Введите тему' onChange={(evt) => handleChangeTheme(evt, card.id)} ref={refInput} className='card__text-input' type='text' />
            </div>
            {card.tasks.length !== 0 && card.tasks.map((item, index) => (
              <ElementTodo
                key={index}
                id={card.id}
                todoIndex={index}
                text={item}
                handleChangeTodo={handleChangeTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))}
            {card.tasks.length < 2 && (
              <img onClick={() => handleAddTask(card.id)} className='card__plus' src={plus} alt="Добавить" />
            )}
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;