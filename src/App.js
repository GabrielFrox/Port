
import './App.css';
import Header from './components/Header';
import MainContainer from './components/main-content';

function App() {
  document.title = "Gabriel Oliveira";

  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
