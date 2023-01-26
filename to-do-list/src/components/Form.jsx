import { useState } from "react";
export default function Form({list,setList}){

    const[nouvelElement,setNouvelElement] = useState('');
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
        setNouvelElement('')
    }
    const handleDeleteAll = ()=>{
        const listCopyClear = []
        setList(listCopyClear)
    }
    const handleError =()=>{
        setText('Vous devez remplir une tâche')
    }
    return(
        <div className="container-form">
            <div className="container-text">
                <h2>Bienvenue dans votre to do list !</h2>
                <h3>
                {list.length === 0 ? 
                `Remplissez votre 1ère tâche !`:
                `Il vous reste ${list.length} tâche(s) à effectuer`}
                </h3>

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
                <div className="buttons">
                <button className="btn-add" >Ajouter</button>
                {
                list.length > 0 ? <span className="clear" onClick={handleDeleteAll}>Tout supprimer</span> : <span className="clear off" onClick={handleDeleteAll}>Tout supprimer</span>}
                </div>
            </form>
            <div className="container-signature">
                <p>Mini projet réalisé par <a href='https://www.lecodeurnormand.fr' target="_blank" rel="noopener noreferrer">Le codeur Normand</a></p>
            </div>
        </div>
    )
}