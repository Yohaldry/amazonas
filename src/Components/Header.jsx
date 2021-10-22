import React from 'react'


import {HeaderT, HeaderD, Logo, Pheader, SearchCategoria, H3} from '../Styled/Stylos'

const Header = () => {
    return (
        <HeaderT>
            <Logo src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632613021/Amazonas/logo-amazon_w0ezyu.png" alt="" />
            <HeaderD>
                <Pheader>Hola</Pheader>
                <H3> <i class="fas fa-map-marker-alt"></i> Elige tu direccion</H3>
            </HeaderD>
            <SearchCategoria>
                <select className="Selects" name="" id="">
                         <option value="">Todas</option>
                         <option value="">Electronicos</option>
                         <option value="">Seccion mujeres</option>
                         <option value="">Seccion hombres</option>
                 </select>
                         <input className="search_box" type="text"  placeholder="search..."/>
                         <button className="BTNBuscar"><i class="fas fa-search"></i></button>
             </SearchCategoria>
             <HeaderD className="Secciones">
                <Pheader>Hola identificate</Pheader>
                <H3>Cuentas y listas</H3>
            </HeaderD>
            <HeaderD className="Secciones">
                <Pheader>Devoluciones</Pheader>
                <H3>y pedidos</H3>
            </HeaderD>
            <HeaderD className="Secciones">
                <h3 className="CarritoIcon"><i class="fas fa-cart-arrow-down"></i></h3>
            </HeaderD>
        </HeaderT>
    )
}

export default Header
