import React, { useState, useContext } from 'react';
import Cotizador from './Cotizador.jsx'
import { AppContext } from './AppContext.jsx';

function Formulario(){
    const [mostrarCotizador, setMostrarCotizador] = useState(false);
    
    //Traigo las propiedades desde el contexto creado previamente: 
    const {propiedades, ubicaciones, formulario, setFormulario} = useContext(AppContext);    
    
    const [inmuebleElegido, setInmuebleElegido] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [factorDelInmueble, setFactorDelInmueble] = useState(0);
    const [factorDeLaCiudad, setFactorDeLaCiudad]  = useState(0);
    const [resultado, setResultado] = useState(0);
    const [metros, setMetros] = useState(20);

    const handleChange = (event) => {        
        const propiedadElegida = propiedades.find((propiedad) => propiedad.id == event.target.value);        
        
        setInmuebleElegido(propiedadElegida.tipo);        
        setFactorDelInmueble(propiedadElegida.factor);       

        setFormulario({...formulario, propiedadElegida});
    }
    
    const handleChange2 = (event) => {
        const ubicacionElegida = ubicaciones.find((ubicacion) => ubicacion.id == event.target.value);
        
        setCiudad(ubicacionElegida.tipo);
        setFactorDeLaCiudad(ubicacionElegida.factor);        

        setFormulario({...formulario, ubicacionElegida});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleClick = () => {
        setMostrarCotizador(true);
    };

    function subirAlLocalStorage(){
        const nuevoJSON = {
            fechaCotizacion:new Date().toLocaleString(),
            propiedad:inmuebleElegido,      
            poliza:resultado.toString(),
            ubicacion:ciudad,
            metrosCuadrados:metros.toString()                 
        };
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []
          historialCotizaciones.push(nuevoJSON)
          localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones))
    }

    function realizarCalculo(){
        const costoM2 = 35.86; 
        let cotizacion = (factorDelInmueble * factorDeLaCiudad * metros * costoM2);
        setResultado(cotizacion.toFixed(2));
    }

    const cotizar = () => {
        if(inmuebleElegido == "" || ciudad == ""){
            alert("Error: debes completar todos los datos en pantalla");
        }
        else if(metros < 20 || metros > 500){
            alert("Los metros deben ser mayores o igual a 20 metros y no deben superar los 500 metros")
        }
        else{
            handleClick();      
            realizarCalculo();
        }
    }

    const handleChange3 = (event) => {
        setMetros(event.target.value);
    };

    return <>
        <div className=" center div-cotizador">
            <h2 className="center separador">Completa los datos solicitados</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
                <select id="propiedad" onChange={handleChange}>
                    <option>...</option>                    
                    {propiedades.map((propiedad) => (
                        <option key={propiedad.id} value={propiedad.id}>
                            {propiedad.tipo}
                        </option> 
                    ))
                    }                
                </select>

                <label htmlFor="ubicacion">Selecciona su ubicación</label>
                <select id="ubicacion" onChange={handleChange2}>
                    <option>...</option>
                    {ubicaciones.map((ubicacion) => (
                        <option key={ubicacion.id} value={ubicacion.id}>
                            {ubicacion.tipo}
                        </option> 
                    ))
                    }                
                </select>

                <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
                <input type="number" id="metros2" value={metros} onChange={handleChange3} min="20" max="500" required></input>
                       
                <div className="center separador">
                    <button className="button button-outline" type="submit" onClick={cotizar}>Cotizar</button>
                </div>                 
            </form>
        </div>
        {mostrarCotizador && <Cotizador factorPropiedad={resultado} guardarEnLocalStorage={subirAlLocalStorage} actualizarClase={true}/>}        
    </> 
}

export default Formulario
