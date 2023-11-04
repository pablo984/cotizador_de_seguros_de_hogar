import {Link} from 'react-router-dom'; {/* Es importante importar esto para usar Link */}

function Cabecera(){
    return <>
        <div className="historial"><Link to="/historial"><span title="Ver Historial">📋</span></Link></div> 
        <h1 className="center separador">Seguros del hogar 🏡</h1>
    </> 
}

export default Cabecera

