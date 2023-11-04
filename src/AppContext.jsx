import { createContext, useEffect, useState } from "react";

//Contexto donde se guardará toda la data: 
export const AppContext = createContext();

//Recibe todos los elementos y provee el contexto:
export const AppProvider =  ({children}) => {
    //Estado: en el array [] se guadará el JSON consumido de la API:
    const [propiedades, setPropiedades] = useState([]);
    console.log(propiedades);

    const [ubicaciones, setUbicaciones] = useState([]);

    //Estado: en el objeto {} se guardarán todas las opciones elegidas por el usuario: 
    const [formulario, setFormulario] = useState({})
    
    //Control del estado. Al poner el array vacío, se ejecuta una vez
    //Una vez creado el estado, se ejecuta el fetch y se setean las propiedades en AppProvider
    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
            .then((res) => res.json())
            .then((propiedad) => setPropiedades(propiedad));
    }, [])

    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
            .then((res) => res.json())
            .then((ubicaciones) => setUbicaciones(ubicaciones));
    }, [])
    
    //Datos disponibles para utilizar en cualquier parte del programa (global):
    const data = {propiedades, formulario, setFormulario, ubicaciones};
    
    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
};