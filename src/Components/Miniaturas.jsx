import React from 'react'

const Miniaturas = () => {
    return (
        <div className="General">
            <div className="miniatura">
               
                <img src="https://m.decamaras.com/imagen/camaras20/250/fujifilm-xt4.jpg" alt="" />
                <img src="https://i.blogs.es/dbe858/a7iii_fe2870_front_eu01/1366_2000.jpg" alt="" />
                <img src="https://http2.mlstatic.com/D_NQ_NP_814820-MCO31546837423_072019-O.jpg" alt="" />
            </div>
            <div className="vistaGrande">
                <img src="https://m.decamaras.com/imagen/camaras20/250/fujifilm-xt4.jpg" alt="" />
            </div>
            <div className="InformacionArticulo">
                <h1>Canon EOS R6 - Cámara sin Espejo de Marco Completo 
                    + Lente RF24-105mm F4 L IS USM</h1>
                    <p>Precio 	$100,669.00  Envío GRATIS. Detalles<br/>
                    Hasta 18 meses sin intereses de $5,592.76. Ver mensualidades 
                    Solicita tu tarjeta Amazon Recargable y obtén $100 de descuento
                    en tu primera compra mayor a $500</p>
            </div>
            <div className="precios">
                <h1>$100.000</h1>
                <p>Envios GRATIS. <a href="/">Detalles</a> </p>
                <p>Llega: <strong>dic 15 - 28</strong></p>
                <p className="puede"><strong>Puede que lo reciba despues de navidad</strong></p>
                <button>Agregar al carrito</button>
                <button>Comprar Ahora</button>
                <p className="transaccion"><a href="/">Transaccion segurda</a></p>
            </div>
        </div>
    )
}

export default Miniaturas
