import axios from "axios";

//Metodos Fachada
export const obtenerPorCedulaFachada = async (cedula) => {
    return await obtenerPorCedula(cedula);
}

export const insertarFachada = (body) => {
    insertar(body);
}

export const actualizarFachada = (id, body) => {
    actualizar(id, body);
}

export const buscarTodosFachada = () => {
    return buscarTodos()
}

export const borrarPorIdFachada = (id) => {
    borrarPorId(id);
}

export const borrarPorCedulaFachada = (cedula) => {
    borrarPorCedula(cedula);
}


//Metodos de consumos CRUD
const obtenerPorCedula = async (cedula) => {
    const data = axios.get(`http://localhost:8081/API/Facturacion/V1/clientes/${cedula}`).then(r => r.data)
    console.log(data)
    return data;
}

const insertar = async (body) => {
    axios.post(`http://localhost:8081/API/Facturacion/V1/clientes`, body).then(r => r.data)
}

const actualizar = (id, body) => {
    axios.put(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`,body).then(r => r.data)
}

const buscarTodos = () => {
    const data = axios.get(`http://localhost:8081/provincias`).then(r => r.data)
    console.log(data)
    return data;
}

const borrarPorId = (id) => {
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`).then(r => r.data)
}

const borrarPorCedula = (cedula) => {

}

/*
//Solo sirve para exponer UN solo metodo
export default obtenerPorCedulaFachada;*/

