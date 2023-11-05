import React from 'react';

function Cotizador({ factorPropiedad, actualizarClase, guardarEnLocalStorage }){

    return <>  
        <div className="center separador">            
            <p className={`importe ${actualizarClase ? '' : 'ocultar'}`}>Precio estimado: $ <span id="valorPoliza">{factorPropiedad}</span><span className="guardar" title="Guardar en historial" onClick={guardarEnLocalStorage}>💾</span></p>
        </div>
    </> 
}

export default Cotizador