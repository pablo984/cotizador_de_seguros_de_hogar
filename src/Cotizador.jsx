import React, { useState, useEffect, useRef, useContext } from 'react';


function Cotizador({ factorPropiedad, actualizarClase  }){

    const handleClickDiskette = () => {
        console.log("Se hizo clic en el diskette");
        // Aquí puedes agregar lógica adicional cuando se hace clic en el diskette
    };

    return <>  
        <div className="center separador">            
            <p className={`importe ${actualizarClase ? '' : 'ocultar'}`}>Precio estimado: $ <span id="valorPoliza">{factorPropiedad}</span><span className="guardar" title="Guardar en historial" onClick={handleClickDiskette}>💾</span></p>
        </div>
    </> 
}

export default Cotizador