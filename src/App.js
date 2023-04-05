import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Experience from './components/Experience';

import ExperienceData from './data/ExperienceData'

let Experiences = ExperienceData.map((item) => {
  return <Experience
    id={item.id}
    item={item}
  />
})
function App() {
  return (
    <div className="App">
      <Navbar />
      {Experiences}
    </div>
  );
}

export default App;
