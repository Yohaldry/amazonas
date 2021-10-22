import React, {useState} from 'react'
import LogoInicio from '../Components/LogoInicio'
import RegistroInicio from '../Components/RegistroInicio'


const AppLoginYRegistro = () => {


    const [editing, setEditing] = useState(false)

    return (
        <div>

            {

                editing ? (
                    <div>
                            <RegistroInicio setEditing={setEditing}/>
                    </div>
                ):(
                    <div>
                            <LogoInicio  setEditing={setEditing}/>
                    </div>
                )
            }
            

            
           <div className="footerLogin">
                <p> <a href="/"> Condiciones de uso </a></p>
                <p> <a href="/"> Aviso de privacidad </a></p>
                <p> <a href="/"> Ayuda </a></p>
          
           </div>
           <div className="creditos">
           <p>© 1996-2021, Amazon.com, Inc. o sus filiales</p>
           </div>
           
        </div>
    )
}

export default AppLoginYRegistro
