import logo from './logo.svg';
import AppHeaderComponent from "./components/AppHeaderComponent";
import AppBodyComponent from "./component/AppBodyComponent";
import AppFooterComponent from "./component/AppFooterComponent";
import './App.css';

function App() {
  return (
    <section>
        <AppHeaderComponent></AppHeaderComponent>
        <AppBodyComponent></AppBodyComponent>
        <AppFooterComponent></AppFooterComponent>
    </section>
   
);
}

export default App;
