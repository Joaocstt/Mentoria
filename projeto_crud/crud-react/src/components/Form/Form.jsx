import './Form.css';

const Form = (props) => {

    const alterValueState = (e) => {
        props.alterValue(e.target.value);
    }

    const send = (e) => {
        e.preventDefault();
        props.sendTask();
    }


    return (
        <>
            <form className="form-container">
                <h1>Criar uma tarefa</h1>
                <input type="text" id="input-text" value={props.value} onChange={alterValueState}  />

                <input type="submit" value="Enviar" onClick={send} />
            </form>
        </>
    )
}

export default Form;