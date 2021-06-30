import React from "react";


function ListOfTeams(props) {

  const arrayOfTeams = props.list.map((team)=>(
    <div>
      <button>delete {team}</button>
      <p>{team}</p>
    </div> 
  ))

    return (
      <div>
        {arrayOfTeams}
      </div>
    )
}


export default ListOfTeams;