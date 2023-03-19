import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import JobList from "./components/JobList";
import {addPositions} from "./store/positions/position-actions";

import data from './mock/data.json'

function App() {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(addPositions(data))
    },[])


  return (
     <>
     <Header></Header>
       <div className="container">
       <FilterPanel></FilterPanel>
       <JobList></JobList>
       </div>
     </>
  );
}

export default App;
