import React from 'react'
import Carrusel from '../Components/Carrusel'
import Contenido from '../Components/Contenido'
import FooterContenido from '../Components/FooterContenido'
import FooterTitle from '../Components/FooterTitle'
import Header from '../Components/Header'
import Header2 from '../Components/Header2'
import '../Styled/main.css'

const AppPrincipal = () => {
    return (
        <div className="ContainerPrincipal">
            <Header />
            <Header2 />
            <Carrusel />
            <Contenido />
            <FooterTitle />
            <FooterContenido />
        </div>
    )
}

export default AppPrincipal
