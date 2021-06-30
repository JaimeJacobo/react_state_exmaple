
import './App.css';
import ListOfTeams from "./ListOfTeams"

import React, {useState} from 'react'   //Step 1


function App() {

// const stateArray = useState({})  //Step 2
// const actualState = stateArray[0]
// const setActualState = stateArray[1]

const [actualState, setActualState] = useState(0)
const [showTeams, setShowTeams] = useState(false)
const [user, setUser] = useState({name: '', username: '', password: '', admin: ''})

  const teams = [
    'Switzerland', 
    'Spain', 
    'Belgium', 
    'Italy', 
    'Czech Republic',
    'Denmark',
    'Ukraine',
    'England'
  ]

  const checkIfShowTeams = ()=>{
    if(showTeams){
      return <ListOfTeams list={teams} />
    }
  }

  const hanldeUser = ()=>{

    //STEP 1
    const copyOfUser = {...user}

    //STEP 2
    copyOfUser.name = 'Salvo'
    copyOfUser.username = 'Sal'
    copyOfUser.password = 'ThisISAPAssword'

    //STEP 3
    setUser(copyOfUser)
  }

  

  return (
    <div className="App">

      <button onClick={()=>hanldeUser()}>Log in</button>

      <p>Number of clicks: {actualState}</p>
      <button onClick={()=>{setActualState(actualState + 1)}}>Change state</button>
      <h1>List of Teams</h1>
      
      <button onClick={()=>{setShowTeams(!showTeams)}}>Show teams</button>

      {/* {showTeams ? <ListOfTeams list={teams} /> : null} */}
      {checkIfShowTeams()}
      
    </div>
  );
}

export default App;


//------------TASKS------------


//1. Create a component called 'ListOfTeams'
//2. Import ListOfTeams in App.js and display its content in the UI (Browser)
//3. Pass the teams array as a prop to ListOfTeams
//4. Display all teams in the UI (Browser). Each team should be in a different paragraph


//--------IMPORTANT TO REMEMBER!!!--------

// In React, the state is immutable (it cannot be changed). The state can only be interchanged.