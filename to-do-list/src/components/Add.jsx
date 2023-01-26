import trash from '../assets/svg/trash.svg'

export default function Add({list,setList}){
    const handleDelete = (id)=>{
        const listCopy = [...list]
        const listCopyUpdated = listCopy.filter(list => list !== id)
        setList(listCopyUpdated)
      }
      return(
    <div className="container">
        {list.map((list)=>
        <li className="list" key={list.id}>{list.nom}
        <img className='btn-del' onClick={()=>handleDelete(list)} src={trash} alt='trash'/></li>
        )}
    </div>
     )
}
