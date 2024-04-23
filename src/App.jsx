
import './App.css';
import Header from './components/Header';
import MenuItems from './components/MenuItems';
import img from "./image/cupCake background.jpg"



// function Header (){
//   return(
//     <h1>This code from Header component</h1>
//   );
// }

// const Header = () =>{
//   return(
//       <h1>This code from Header component</h1>
//       );
// }

function App() {
  const name="Husni";
  let lastname= "Hamdan"
  const x= true;
  return (
    <div className="App">
    <MenuItems/>
      <h1>Hello React!!!</h1>
      <h3>Hello {name} {lastname}</h3>
      <h3>{x ? "Yes" : "No"}      </h3>
      <img src= {img} ></img>
      <Header />

      

    </div>
  );
}

export default App;
