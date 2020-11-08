
import './App.css';
import BarChart from './Components/BarChart';
import BarChart2 from './Components/BarChart2';
import LineChart from './Components/LineChart';
import LineChart2 from './Components/LineChart2';
function App() {
  return (
    <div className="App">
    <div className='chart'>
      <h1>MS Dhoni visualisation portal</h1>
      <h3>Bar Charts</h3>
      <BarChart/>
      <BarChart2/>
      <h3>LineCharts</h3>
      <LineChart/>
       <LineChart2/>
       </div>
      </div>
  );
}

export default App;
