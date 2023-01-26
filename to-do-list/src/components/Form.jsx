import { useState } from "react";
export default function Form({list,setList}){

    const[nouvelElement,setNouvelElement] = useState('');
    const[isActive,setIsActive] = useState(false);
    const[text,setText] = useState('')

    const handleChange = (event)=>{
        setNouvelElement(event.target.value)
        setText('')
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        const newList = [...list]
        const id = new Date().getTime()
        const nom = nouvelElement
        newList.push({id,nom});
        nom ? setList(newList) : handleError()
        setIsActive(true)
        setNouvelElement('')
    }
    const handleDeleteAll = ()=>{
        const listCopyClear = []
        setList(listCopyClear)
        setIsActive(false)
    }
    const handleError =()=>{
        setText('Vous devez remplir une tâche')
    }
    return(
        <div className="container-form">
            <div className="container-text">
                <h2>Bienvenue dans votre to do list !</h2>
            </div>
            <span className="error">{text}</span>
            <form className="formulaire" action="submit" onSubmit={handleSubmit}>
                <input 
                value={nouvelElement}
                onChange={handleChange} 
                type="text" 
                className="input"
                placeholder="Mes choses à faire ..."
                />

                <button className="btn-add" >Ajouter</button>
                {
                isActive ? <span className="clear" onClick={handleDeleteAll}>Tout supprimer</span> : <span className="clear off" onClick={handleDeleteAll}>Tout supprimer</span>}
            </form>
        </div>
    )
}