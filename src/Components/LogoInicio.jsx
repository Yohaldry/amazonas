import React from 'react'

const LogoInicio = ({setEditing}) => {
    return (
        <div className="container_login">
            <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632613021/Amazonas/logo-amazon_w0ezyu.png" alt="" />
            <div className="recuadro">
                <h1>Iniciar Sesion</h1>
                <p>Direccion de correo electronico</p>
                <input type="text" />
                <button>Continuar</button>
                <p>Al continuar, aceptas las 
                    <a href=""> Condiciones de uso </a> y el<br/> <a href=""> Aviso 
                    de privacidad</a> de Amazon.</p>

                    <p><i class="fas fa-caret-right"></i> <a href=""> ¿Necesitas Ayuda?</a></p>
            </div>
            <div className="register">
            <p className="Pregister">¿Eres nuevo en Amazonas?</p>
            <button
            onClick={
                () => {setEditing(true)}}
            >Crear una cuenta de Amazonas</button>
            </div>
        </div>
    )
}

export default LogoInicio
