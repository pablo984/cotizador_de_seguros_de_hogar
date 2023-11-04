import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Inicio'; {/* Vista de la página principal */}
import Historial from './Historial'; {/* Vista de la página del historial */}
import NotFound from './NotFound'; {/* Vista a una página NotFound si no se pone la URL correcta */}


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Inicio} />
            <Route path="/historial" Component={Historial} />
            <Route path='*' Component={NotFound} />
        </Routes>
    </BrowserRouter> 
  )
}

export default App
