
import './App.css';
import datainfo from './data/db.json';
import Mainbanner from './Banner.js';


function App() {
  return (
    <div className="App">
    <ul>
      {
      
      datainfo.gnb.map((v,i)=>{
        return(
          
            <li><a href={v.href}></a>{v.atext}</li>

          
          
        )
      })
      }
    </ul>
    <Mainbanner></Mainbanner>
    </div>
  );
}

export default App;
