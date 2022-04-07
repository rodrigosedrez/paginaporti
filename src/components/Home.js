
import './home.css'
import Foto from './imgs/comp.png'

export default function home(){
    return(
        <>
        <table id="tabela">
            <tr>
            <td id="tabeTx">
            Desenvolvi essa página com intenção de demonstrar alguns dos meus conhecimentos na área de programação
            
            </td>
            <td>
              <img src={Foto} id='foto'></img>
            </td></tr>

            
        </table>
        
        </>
    )
}