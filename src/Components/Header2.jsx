import React from 'react'

import {HeaderDOS, HeaderDOSC} from '../Styled/Stylos'

const Header2 = () => {
    return (
        <HeaderDOSC>
            <HeaderDOS>
                <li className="List"><i class="fas fa-bars"></i> Todo</li>
                <li className="List">Ofertas del Dia</li>
                <li className="List">Servicio al Cliente</li>
                <li className="List">Listas</li>
                <li className="List">Tarjetas de Regalo</li>
                <li className="List">Vender</li>
            </HeaderDOS>
        </HeaderDOSC>
    )
}

export default Header2
