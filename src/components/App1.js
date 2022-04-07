import React from "react";
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {AiFillTwitterCircle} from '@react-icons/all-files/ai/AiFillTwitterCircle'
import {FaInstagramSquare} from '@react-icons/all-files/fa/FaInstagramSquare'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import Home from './Home'
import Contat from './contato'
import Games from './games'
import Curriculo from './curriculo'



export default function app1() {
  

    return(
        <>
        <div id='fullBar'>
        <div className="boxMenu">
           <div id="divesquerda">
            <section className="nomeR">
             <p id="nomeRodrigo">Rodrigo Sedrez</p>
            </section></div>
            <div id="divdireita">
                 
                <a  href="https://www.facebook.com/rodrigo.sedrez.3" target="_blank" rel="noreferrer" >
                  <FaFacebook  id="face"/>  
                </a>
                <a href="https://twitter.com/MoreiraSedrez" target="_blank" rel="noreferrer">
                   <AiFillTwitterCircle id="twitter"/>
                </a>
                <a href="https://www.instagram.com/rodrigosedrez/" target="_blank" rel="noreferrer">
                    <FaInstagramSquare id="insta"/>
                </a>
                <a href="https://github.com/rodrigosedrez" target="_blank" rel="noreferrer">
                     <FaGithub id="git"/>
                </a>
                <a href="https://www.linkedin.com/in/rodrigo-sedrez-a9089963/" target="_blank" rel="noreferrer">
                    <FaLinkedin id="link" />
                </a>
            </div>
        </div>
        
        <section id='buttons'>
        <button className='botao' onClick={()=>{
            document.getElementById("shome").style.display="block"
            document.getElementById("curri").style.display="none"
            document.getElementById("cont").style.display="none"
            document.getElementById("game").style.display="none"
        }}>Home</button>
        <button className='botao' onClick={()=>{
            document.getElementById("curri").style.display="block"
            document.getElementById("shome").style.display="none"
            document.getElementById("cont").style.display="none"
            document.getElementById("game").style.display="none"
            
        }}>Curriculo</button>
        <button className='botao' onClick={()=>{
            document.getElementById("cont").style.display="block"
            document.getElementById("curri").style.display="none"
            document.getElementById("shome").style.display="none"
            document.getElementById("game").style.display="none"
        }}>Contato</button>
        <button className='botao' onClick={()=>{
            document.getElementById("game").style.display="block"
            document.getElementById("curri").style.display="none"
            document.getElementById("cont").style.display="none"
            document.getElementById("shome").style.display="none"
        }}>Games</button>
        </section> 

        <section id='shome'><Home /></section>
        <div id='curri'><Curriculo /></div>
        <div id='cont'><Contat /></div>
        <div id='game'><Games /></div>
        </div>
       

        </>
    )
    
}