import {Link} from 'react-router-dom'; {/* Es importante importar esto para usar Link */}
import React, { useState, useEffect } from 'react';

function Historial(){
    const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

    useEffect(() => {
        // Obtener datos del localStorage al cargar el componente
        const historialGuardado = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
        setHistorialCotizaciones(historialGuardado);
    }, []);


    return <>
        <h1 className="center separador">Ver Historial 📋</h1>    
        <div className=" center div-cotizador">
        <table>
            <thead>
                <tr>
                    <th>Fecha de cotización</th>
                    <th>Propiedad</th>
                    <th>Ubicación</th>
                    <th>Metros cuadrados</th>
                    <th>Póliza mensual</th>
                </tr>
            </thead>
            <tbody>
                {historialCotizaciones.map((cotizacion, index) => (
                    <tr key={index}>
                        <td>{cotizacion.fechaCotizacion}</td>
                        <td>{cotizacion.propiedad}</td>
                        <td>{cotizacion.ubicacion}</td>
                        <td>{cotizacion.metrosCuadrados}</td>
                        <td>${cotizacion.poliza}</td>
                    </tr>
                ))}    
            </tbody>
        </table>
        <div className="center separador">
            <Link to="/"><button className="button button-outline">VOLVER</button></Link>
        </div>
    </div>    
    </> 
}

export default Historial