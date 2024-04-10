// Estados
import { useState } from "react"

// Componentes
import Form from "../Form/Form"

// CSS
import "./List.css"

// Icones
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { HiMiniPaintBrush } from "react-icons/hi2";

// Notificaçoes personalizadas
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const List = () => {

    const [valueTask, setValueTask] = useState("");
    const [list, setList] = useState([]);

    // Função para enviar o formulário

    function sendForm() {

        if(valueTask === "") {
            // O PADRAO VAI VIM NO TOP RIGHT NO CASO SE VC NÃO PASSAR O OBJETO
             toast.warning("Preencha alguma coisa" , {
                position: "top-right",
             })
        }
        else {
            toast.success("Tarefa adicionada com sucesso!" , {
                position: "top-right",
             })
            setList([...list, valueTask]);
        }
        
        
        setValueTask("");
    }


    return (
        <>
            <Form value={valueTask} alterValue={valueTask => setValueTask(valueTask)} sendTask={sendForm} />
            <ul>
                {list.map((task, id) => (
                    <li key={id}>
                        {task}
                        <div className="icons">
                            <HiArchiveBoxXMark onClick={() => console.log(id)} size={20} />
                            <HiMiniPaintBrush size={20} />
                        </div>
                    </li>
                ))}
            </ul>

            <ToastContainer />

        </>
    )
}

export default List