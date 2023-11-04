import React, { useState, useContext } from 'react';
import Cotizador from './Cotizador.jsx'
import { AppContext } from './AppContext.jsx';

// let inmuebleElegido;
// let factorDelInmueble;
// let ciudadElegida;

function Formulario(){
    const [factorPropiedad, setFactorPropiedad] = useState(0);
    const [mostrarCotizador, setMostrarCotizador] = useState(false);

    //ChatGPT:
    const [inmuebleElegido, setInmuebleElegido] = useState('');
    const [factorDelInmueble, setFactorDelInmueble] = useState(0);
    const [ciudadElegida, setCiudadElegida] = useState('');
    
    //Traigo las propiedades desde el contexto creado previamente: 
    const {propiedades, ubicaciones, formulario, setFormulario} = useContext(AppContext);    

    //Muestra el ID de la propiedad elegida: 
    const handleChange = (event) => {
        console.log("El ID de la propiedad elegida es: " + event.target.value);

        const propiedadElegida = propiedades.find((propiedad) => propiedad.id == event.target.value);
        // console.log("La propiedad elegida es: " + propiedadElegida.tipo); 

        const ubicacionElegida = ubicaciones.find((ubicacion) => ubicacion.id == event.target.value);
        // console.log("La ubicación elegida es: " + ubicacionElegida.tipo)

        //ChatGPT
        setInmuebleElegido(propiedadElegida.tipo);
        setFactorDelInmueble(propiedadElegida.factor);
        setCiudadElegida(ubicacionElegida.tipo);

        setFactorPropiedad({...factorPropiedad, factorDelInmueble});
        
        //Los "..." mantienen la info, y además agrega la propiedad elegida x el usuario:
        setFormulario({...formulario, propiedadElegida});

        //UBICACIONES: 
        

    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleClick = () => {
        // Aquí puedes realizar otras operaciones y luego mostrar el Cotizador
        setMostrarCotizador(true);
    };

    function subirAlLocalStorage(){
        const nuevoJSON = {
            fechaCotizacion:new Date().toLocaleString(),
            propiedad:inmuebleElegido,      
            factor:factorDelInmueble,
            ciudad:ciudadElegida                 
        };
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []
          historialCotizaciones.push(nuevoJSON)
          localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones))
    }

    // setFactorPropiedad(factorDeLaPropiedad);
    const calcular = () => {
        // setFactorPropiedad(factorPropiedad);
        handleClick();      
        subirAlLocalStorage();  
    }

    const handleInputChange = (event) => {
        const newValue = (event.target.value);
        setMetros2(newValue);
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
                <select id="ubicacion" onChange={handleChange}>
                    <option>...</option>
                    {ubicaciones.map((ubicacion) => (
                        <option key={ubicacion.id} value={ubicacion.id}>
                            {ubicacion.tipo}
                        </option> 
                    ))
                    }                
                </select>
                
                       
                <div className="center separador">
                    <button className="button button-outline" type="submit" onClick={calcular} >Cotizar</button>
                </div>                 
            </form>
        </div>
        {mostrarCotizador && <Cotizador factorPropiedad={factorDelInmueble} actualizarClase={true}/>}
    </> 
}

export default Formulario