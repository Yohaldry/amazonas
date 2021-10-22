import React from 'react'

const RegistroInicio = ({setEditing}) => {
    return (
        <div className="container_login">
            <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632613021/Amazonas/logo-amazon_w0ezyu.png" alt="" />
            <div className="recuadroRegister">
                <h1>Registro</h1>
                <p>Direccion de correo electronico</p>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Apellido"/>
                <input type="email" placeholder="Correo"/>
                <input type="password" placeholder="Contraseña"/>
                <button>Continuar</button>
                <p>Al continuar, aceptas las 
                    <a href=""> Condiciones de uso </a> y el<br/> <a href=""> Aviso 
                    de privacidad</a> de Amazon.</p>

                    <p><i class="fas fa-caret-right"></i> <a href=""> ¿Necesitas Ayuda?</a></p>
            </div>
            <div className="register">
            <p className="registerP">¿Ya tienes Cuenta?</p>
            <button 
            onClick={
                () => {setEditing(false)}}
            >Iniciar Sesion</button>
            </div>
        </div>
    )
}

export default RegistroInicio
