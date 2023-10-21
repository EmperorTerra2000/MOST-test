import './ListTodo.css';

import ListTodoContent from '../ListTodoContent/ListTodoContent';
import СontrolElement from '../СontrolElement/СontrolElement';
import api from '../../utils/Api';

import React from 'react';

function ListTodo() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    handleImportData();
  }, []);


  function handleImportData() {
    Promise.resolve(api.importCardInfo())
      .then((cards) => {
        setCards(cards);
      })
  }

  function handleExportData() {
    api.exportCardInfo(cards);
  }

  function handleAddCard() {
    const _id = Math.random().toString(16).slice(2)

    const newCard = {
      id: _id,
      theme: "",
      tasks: []
    }

    setCards([...cards, newCard]);
  }

  function onDeleteCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  function handleAddTask(id) {
    let newCard = cards.map((item, index) => {
      if (item.id === id) {
        item.tasks.push("");
        return item;
      }

      return item;
    });

    setCards(newCard);
  }

  function handleChangeTheme(evt, id) {
    let newCard = cards.map((item, index) => {
      if (item.id === id) {
        item.theme = evt.target.value;
        return item;
      }

      return item;
    });

    setCards(newCard);
  }

  function handleChangeTodo(evt, id, todoIndex) {
    let newCard = cards.map((item, index) => {
      if (item.id === id) {
        item.tasks[todoIndex] = evt.target.value;
        return item;
      }

      return item;
    });

    setCards(newCard);
  }

  function handleDeleteTodo(id, todoIndex) {
    let newCard = cards.map((item, index) => {
      if (item.id === id) {
        item.tasks.splice(todoIndex, 1);
        return item;
      }

      return item;
    });

    setCards(newCard);
  }

  return (
    <>
      <СontrolElement
        handleImportData={handleImportData}
        handleExportData={handleExportData}
        handleAddCard={handleAddCard}
      />
      <ListTodoContent
        cards={cards}
        setCards={setCards}
        onDeleteCard={onDeleteCard}
        handleAddTask={handleAddTask}
        handleChangeTheme={handleChangeTheme}
        handleChangeTodo={handleChangeTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default ListTodo;