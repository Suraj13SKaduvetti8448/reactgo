import logo from './logo.svg';
import './App.css';
import FileUpload from './components/FileUpload';
// import FileRename from './components/FileRename';
// import FileDelete from './components/FileDelete';
import FileManager from './components/FileManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <div style={{ padding: '20px' }}>
        <h1>File Manager</h1>
        <FileUpload />
        <hr />
        <FileRename />
        <hr />
        <FileDelete />
      </div> */}
      <div style={{ padding: '20px' }}>
      <h1>File Manager</h1>
      <FileUpload />
      <hr />
      <FileManager />
    </div>

    </div>
  );
}

export default App;

