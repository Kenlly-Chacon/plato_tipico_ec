

<template>
  <div class="sistema-platillos animate__animated animate__fadeIn">
    <h1>Sistema de Platillos Favoritos por Región</h1>

    <div class="controles">
      <select v-model="estadoSeleccionado" @change="buscarPlatillos">
        <option value="">Seleccione Estado/Municipio</option>
        <option v-for="estado in estados" :key="estado.id" :value="estado.id">
          {{ estado.nombre }}
        </option>
      </select>

      <input v-model="busqueda" placeholder="Buscar platillo" />
      <button @click="buscarPlatillos">Buscar</button>
    </div>

    <table class="table-platillos animate__animated animate__fadeIn">
      <thead>
      <tr>
        <th>Platillo</th>
        <th>Cant. Personas</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="platillo in platillosFiltrados" :key="platillo.id" class="animate__animated animate__fadeIn">
        <td>{{ platillo.platillo.nombre }}</td>
        <td>{{ platillo.cantidadPersonas }}</td>
        <td>
          <button @click="editarPlatillo(platillo)" class="btn-editar animate__animated animate__bounceIn">Editar</button>
          <button @click="eliminarPlatillo(platillo.id)" class="btn-eliminar animate__animated animate__bounceIn">Eliminar</button>
        </td>
      </tr>
      </tbody>
    </table>

    <button @click="mostrarFormulario = true" class="btn-agregar animate__animated animate__bounceIn">Agregar Nuevo Platillo</button>

    <div v-if="mostrarFormulario" class="formulario-platillo animate__animated animate__fadeIn">
      <h2>{{ modoEdicion ? 'Editar' : 'Agregar' }} Platillo</h2>
      <input v-model="platilloActual.nombre" placeholder="Nombre del platillo" />
      <input v-model.number="platilloActual.cantidadPersonas" type="number" placeholder="Cantidad de personas" />
      <button @click="guardarPlatillo" class="btn-guardar animate__animated animate__bounceIn">Guardar</button>
      <button @click="cancelarEdicion" class="btn-cancelar animate__animated animate__bounceIn">Cancelar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { buscarTodosFachada } from "@/assets/js/ProcesarProvincia";

export default {
  data() {
    return {
      estados: [],
      estadoSeleccionado: '',
      busqueda: '',
      platillos: [],
      platilloActual: { nombre: '', cantidadPersonas: 0 },
      mostrarFormulario: false,
      modoEdicion: false,
    };
  },
  computed: {
    platillosFiltrados() {
      return this.platillos.filter(platillo =>
          platillo.platillo.nombre && platillo.platillo.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    },
  },
  methods: {
    async cargarEstados() {
      try {
        const response = await buscarTodosFachada();
        this.estados = response;
      } catch (error) {
        console.error('Error al cargar los estados:', error);
      }
    },
    async buscarPlatillos() {
      if (this.estadoSeleccionado) {
        try {
          const response = await axios.get(`http://localhost:8081/favoritos?provinciaId=${this.estadoSeleccionado}`);
          this.platillos = response.data;
        } catch (error) {
          console.error('Error al buscar los platillos:', error);
        }
      } else {
        this.platillos = [];
      }
    },
    editarPlatillo(platillo) {
      this.platilloActual = { id: platillo.id, nombre: platillo.platillo.nombre, cantidadPersonas: platillo.cantidadPersonas };
      this.modoEdicion = true;
      this.mostrarFormulario = true;
    },
    async guardarPlatillo() {
      try {
        if (this.modoEdicion) {
          await axios.put(`http://localhost:8081/favoritos/${this.platilloActual.id}`, {
            platillo: { nombre: this.platilloActual.nombre },
            cantidadPersonas: this.platilloActual.cantidadPersonas,
            provinciaId: this.estadoSeleccionado
          });
        } else {
          await axios.post('http://localhost:8081/favoritos', {
            platillo: { nombre: this.platilloActual.nombre },
            cantidadPersonas: this.platilloActual.cantidadPersonas,
            provinciaId: this.estadoSeleccionado
          });
        }
        await this.buscarPlatillos();
        this.cancelarEdicion();
      } catch (error) {
        console.error('Error al guardar el platillo:', error);
      }
    },
    cancelarEdicion() {
      this.platilloActual = { nombre: '', cantidadPersonas: 0 };
      this.mostrarFormulario = false;
      this.modoEdicion = false;
    },
    async eliminarPlatillo(id) {
      try {
        await axios.delete(`http://localhost:8081/favoritos/${id}`);
        this.platillos = this.platillos.filter(p => p.id !== id);
      } catch (error) {
        console.error('Error al eliminar el platillo:', error);
      }
    },
  },
  mounted() {
    this.cargarEstados();
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.sistema-platillos {
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.controles {
  margin-bottom: 20px;
}

select, input {
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #555;
  border-radius: 5px;
  background: #555;
  color: #fff;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.3s ease;
  color: black;
}

button:hover {
  background: #fff;
  color: #333;
}

.table-platillos {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #555;
  padding: 12px;
  text-align: left;
  background: rgba(50, 50, 50, 0.9);
  color: #fff;
}

th {
  background: rgba(0, 0, 0, 0.6);
}

.btn-editar {
  background: #4caf50;
}

.btn-eliminar {
  background: #f44336;
}

.btn-agregar {
  background: #5d5d5d;
  margin-top: 20px;
  color: white;
}

.formulario-platillo {
  margin-top: 20px;
  padding: 20px;
  background: rgba(50, 50, 50, 0.9);
  border-radius: 5px;
}

.btn-guardar {
  background: #4caf50;
  margin-top: 10px;
}

.btn-cancelar {
  background: #f44336;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .sistema-platillos {
    padding: 10px;
  }

  h1 {
    font-size: 2em;
  }

  .controles {
    display: flex;
    flex-direction: column;
  }

  select, input, button {
    margin: 5px 0;
    width: 100%;
  }

  th, td {
    font-size: 0.9em;
  }

  .btn-agregar {
    width: 100%;
  }
}
</style>
