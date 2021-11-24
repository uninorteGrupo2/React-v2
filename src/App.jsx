import React from 'react'
//import { Fragment } from 'react/cjs/react.production.min'
import Var_props, {Xt} from './components/Var_props'
import Obj from './components/Obj_props'
import Fun from './components/Fun_props'

const App = ()=>{

    //por funcion
    const saludar = (nombre)=>{
        alert('hola ' + nombre)
    }

    //por objeto
    const user ={
        nombre: 'Mariana Gomez',
        edad: 2,
        color: 'fucsia'
    }
    
    //por variables
    const nombre = 'Jose Rojas'
    const edad   = 20

    return(
        <>
            <Var_props nombre= {nombre} edad= {edad}/>
            <Obj userInfo = {user} />
            <Xt />
            <Fun saludar={saludar} userInfo = {user}/>
        </>
        
    )
}

export default App;