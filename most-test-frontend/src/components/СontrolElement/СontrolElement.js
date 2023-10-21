import './СontrolElement.css';

function СontrolElement({handleExportData, handleImportData, handleAddCard}) {
  return (
    <>
      <section className='control-element'>
        <div className='control-element__content'>
          <div className='control-element__event' onClick={() => handleImportData()}>Импорт карточек</div>
          <div className='control-element__event' onClick={() => handleExportData()}>Экспорт карточек</div>
          <div className='control-element__event' onClick={() => handleAddCard()}>Добавить новую карточку</div>
        </div>
      </section>
    </>
  );
}

export default СontrolElement;