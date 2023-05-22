import React, { useState } from 'react';
import axios from 'axios';

const [formData, setFormData] = useState({
    first_name: '',
    height_feet: null,
    height_inches: null,
    last_name: '',
    position: '',
    weight_pounds: null
  });
  
//Define un estado para almacenar los valores del formulario y manejar las actualizaciones:

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
//Implementa una función de manejo de cambios para actualizar el estado del formulario cuando se ingresen datos

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/nbaplayers/players/${playerId}`, formData);
      // Realiza alguna acción después de la actualización exitosa
    } catch (error) {
      console.log(error);
    }
  };

<form onSubmit={handleSubmit}>
  <input
    type="text"
    name="first_name"
    value={formData.first_name}
    onChange={handleChange}
    placeholder="First Name"
  />
  <input
    type="number"
    name="height_feet"
    value={formData.height_feet}
    onChange={handleChange}
    placeholder="Height (Feet)"
  />
  <input
    type="number"
    name="height_inches"
    value={formData.height_inches}
    onChange={handleChange}
    placeholder="Height (Inches)"
  />
  <input
    type="text"
    name="last_name"
    value={formData.last_name}
    onChange={handleChange}
    placeholder="Last Name"
  />
  <input
    type="text"
    name="position"
    value={formData.position}
    onChange={handleChange}
    placeholder="Position"
  />
  <input
    type="number"
    name="weight_pounds"
    value={formData.weight_pounds}
    onChange={handleChange}
    placeholder="Weight (Pounds)"
  />
  <button type="submit">Guardar</button>
</form>
