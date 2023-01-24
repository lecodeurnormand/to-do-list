import { useState,useEffect } from "react"
import './Todo/todo.scss'
import trash from './/../assets/svg/trash.svg'
function Todo(){

    const saveList = localStorage.getItem('list')
    const[list,setList] = useState(saveList ? JSON.parse(saveList) : [])
    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(list))
    })
    const[nouvelElement,setNouvelElement] = useState('');
    const[isActive,setIsActive] = useState(false);
    const[text,setText] = useState('')

    const handleDelete = (id)=>{
      const listCopy = [...list]
      const listCopyUpdated = listCopy.filter(list => list !== id)
      setList(listCopyUpdated)
    }
    const handleDeleteAll = ()=>{
        const listCopyClear = []
        setList(listCopyClear)
        setIsActive(false)
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
    const handleError =()=>{
        setText('Vous devez remplir une tâche')
    }
    const handleChange = (event)=>{
        setNouvelElement(event.target.value)
        setText('')
    }


return(
    <div className="container-todo">
        <div className="container-list">
        <h1>To do list</h1>
        <ul>
            <div className="container-list">
            {list.map((list)=>
            <li className="list" key={list.id}>{list.nom}
            <img className='btn-del' onClick={()=>handleDelete(list)} src={trash} alt='trash'/></li>
            )}
            </div>
        </ul>
        </div>
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
    </div>
)
}
export default Todo