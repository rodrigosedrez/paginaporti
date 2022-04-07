import { useState } from 'react'
import './contato.css'
import axios from 'axios'


 export default function Contatos(){
 
  const [campos,setCampos]= useState({
    snome: '',
    email: '',
    mensagem: ''
  })

  function handleInputChenge(event){
      campos[event.target.name] = event.target.value
      setCampos(campos)
  }
  
    function handleFormSubmit(event){
     event.preventDefault()
     send()
     }
     function send(){
       const formData = new FormData()
       Object.keys(campos).forEach(key => formData.append(key, campos[key]))
       axios.post('./send', formData,{
         headers:{
           'Content-type': 'application/json'

         }
       })
       .then(response => alert(response.data))
     }
     
    return(
        
        <div className="container">
      <form onChange={handleFormSubmit}>
        

        <label htmlFor="snome">Nome:</label>
        <input type="text" id="snome" name="snome" onChange={handleInputChenge} placeholder="digite seu nome"   />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." onChange={handleInputChenge} />
 
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Deixe seu reacado" className="textArea" onChange={handleInputChenge}></textarea>
 
 
        <input type="submit" value="Enviar" />
      </form>
    </div>

        
    )
}
