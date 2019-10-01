import React from "react";

const Ninjas = ({ninjas,deleteNinja} )=>{
    
        const ninjaList = ninjas.map(ninja=>{
            return (<div key ={ninja.id}>
                        <div>Name :{ninja.name}</div>
                        <div>Age :{ninja.age}</div>
                        <div>Belt :{ninja.belt}</div>
                        <button onClick={()=>{deleteNinja(ninja.id)}}>Delete</button>
                    </div>)
        })
        return(
            <div className ="conatiner">
                {ninjaList}
            </div>
        )
    
}

export default Ninjas;