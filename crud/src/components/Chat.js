import React, { useState } from "react"
import  Message  from "./Message"
import {TarefasService} from "../services/api/tarefas/TarefasService"

const Chat = () => {

        const [list, setList] = useState([<Message username="abdabdabbdb" text="idontknow"/>]);

        // const sendMessage = () => {
        //     const newText = document.querySelector(".form-control").value;
        //     console.log(list);
        //     return setList([...list, <Message username="oliverlucass" text={newText}/>]);
        // }

        const exibir = () => {
            const messages = TarefasService.getAll();
            console.log(messages);
        }

        return(
            <>
                <div class="card text-center" style={{"min-width": "50vw", "max-width": "50vw", "min-height": "95vh"}}>
                    
                    <div class="card-body p-3">
                        {
                            list.map((m) => {return m})
                        }
                    </div>
                    
                    <div class="card-footer p-3" >
                        <div class="input-group">
                            <input type="text"class="form-control w-75" placeholder="Message"/>
                            <i class="input-group-text bi bi-send text-muted" onClick={exibir}></i>
                        </div>
                    </div>
    
                </div>
            </>
        );
}


export default Chat;