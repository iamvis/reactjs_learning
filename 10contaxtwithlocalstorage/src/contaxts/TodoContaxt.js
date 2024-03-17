//create contaxt
//use contaxt lagage

import { createContext, useContext } from "react";

export const TOdoContaxt= createContext({
    todos:[
             {
                id:1,
                todo: "Todo msg",
                completed: false,
             }
    ],

    //functionality likhenge lekin sirf defination likhte hai 
    addTodo: (todo) =>{},
    updatTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})

export const useTodo= ()=>{
    return useContext(TOdoContaxt)
 }

export const Todoprovider=TOdoContaxt.Provider