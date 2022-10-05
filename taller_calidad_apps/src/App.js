//import Content  from '../src/components/content'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desde el header
        </p>
      </header>

      <content className="App-content">
        <p>
          Desde el content
        </p>
      </content>

      <footer className="App-footer">
        <p> Desde el footer</p>
      </footer>
      
    </div>
  );
}

export default App;
