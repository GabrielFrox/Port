
import './App.css';
import Header from './components/Header';
import MainContainer from './components/main-content';
import Footer from './components/Footer';

function App() {
  document.title = "Gabriel Oliveira";

  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
