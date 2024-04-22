import Table from './components/table/Table';
import './App.css';

const netIncomes = [
  {brand: "McDonalds", income: 1291283},
  {brand: "Burger King", income: 1927361}, 
  {brand: "KFC", income: 1098463}];

function App() {
  

  return (
    <div>
      <h1>Tabla de Ingresos Netos</h1>
      <Table netIncomes={netIncomes} />
    </div>
  );
}

export default App;
