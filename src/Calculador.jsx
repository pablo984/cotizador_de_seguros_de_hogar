import Formulario from "./Formulario";

function Calculador(){
    const handlePropiedadSelect = (selectedPropiedad) => {
        console.log("Opción seleccionada:", selectedPropiedad)
    }
    return <>
        <Formulario onPropiedadSelect={handlePropiedadSelect} />
    </>
}

export default Calculador