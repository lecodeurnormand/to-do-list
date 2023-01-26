import { useState,useEffect } from "react"
import './styles/app.scss'
import Form from './components/Form'
import Add from './components/Add'
import Layout from "./components/Layout"
export default function Todo(){

  const saveList = localStorage.getItem('list')
  const[list,setList] = useState(saveList ? JSON.parse(saveList) : [])
  useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(list))
  })

return(
  <Layout>
  <div className="container-todo">
      <div className="container-list">
      <h1>To do list</h1>
      <ul>
         <Add list={list} setList={setList}/>
      </ul>
      </div>
      <Form list={list} setList={setList}/>
  </div>
  </Layout>
)
}


