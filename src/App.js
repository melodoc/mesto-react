import { Header, Main, Footer } from './components';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <template id="card">
          <li className="card">
            <button className="card__trash-button" type="button" title="Удалить" />
            <img className="card__image" alt="Карточка"/>
            <div className="card__description">
              <h2 className="card__header"> </h2>
              <div>
                <button className="card__like-button" type="button" title="Нравится" />
                <p className="card__like-counter">2</p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </>
  );
}

export default App;
