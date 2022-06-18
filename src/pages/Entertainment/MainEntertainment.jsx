import React from 'react'
import EnterApi from './EnterApi'
import Entermore from './Entersidebar/Entermore'
import Entertaimentnews from './Entertaimentnews'
import Entertainment from './Entertainment'
import Mininavbar from './Navbar/Mininavbar'

const MainEntertainment = () => {
  return (
    <div style={{width:'85%',margin:'auto' , marginTop:'25px'}} >
         <Mininavbar/>
      <div style={{display:'flex'}}>
    <div>
       <Entertainment/>
       <Entertaimentnews/>
       <EnterApi/>
    </div>
    <div>
        <Entermore/>
       </div>
    </div>
    </div>
  )
}

export default MainEntertainment