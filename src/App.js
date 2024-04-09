import './App.css';
import Cart from './Component/Cart';


const Initial_cart_data =[{title:'Apple', amount:200, date:new Date(2023,3,21)},
{title:'Banana', amount:110, date:new Date(2024,5,15)},
{title:'Kiwi', amount:300, date:new Date(2025,1,10)}
];

function App() {
  return (
    <div className="App">
      <Cart/>
    </div>
  );
}

export default App;
