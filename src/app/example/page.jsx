'use client'


import React, { useState, useEffect } from 'react';
import EmployeeCard from '../../components/employeesCards'; // Ajusta la ruta según tu estructura de carpetas

const Page = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    age: '',
    address: '',
    salary: '',
  });

  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apisuite.azurewebsites.net/api/employees');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleAddEmployee = async () => {
    try {
      const response = await fetch('https://apisuite.azurewebsites.net/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
        const data = await response.json();
        setEmployees((prevEmployees) => [...prevEmployees, data]);
        setNewEmployee({ name: '', age: '', address: '', salary: '' });
      } else {
        console.error('Failed to add employee');
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleEditEmployee = async (id) => {
    try {
      const response = await fetch(`https://apisuite.azurewebsites.net/api/employees/${id}`);
      if (response.ok) {
        const data = await response.json();
        setEditingEmployee(data);
        setNewEmployee({
          name: data.name || '',
          age: data.age || '',
          address: data.address || '',
          salary: data.salary || '',
        });
      } else {
        console.error(`Failed to fetch employee for editing with ID: ${id}`);
      }
    } catch (error) {
      console.error(`Error fetching employee for editing with ID: ${id}`, error);
    }
  };

  const handleUpdateEmployee = async () => {
    try {
      const response = await fetch(`https://apisuite.azurewebsites.net/api/employees/${editingEmployee.id}`, {
        method: 'PATCH',  // Cambiado de PUT a PATCH
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });
  
      if (response.ok) {
        const data = await response.json();
        setEmployees((prevEmployees) => prevEmployees.map((employee) => (employee.id === data.id ? data : employee)));
        setEditingEmployee(null);
        setNewEmployee({ name: '', age: '', address: '', salary: '' });
      } else {
        console.error(`Failed to update employee with ID: ${editingEmployee.id}`);
      }
    } catch (error) {
      console.error(`Error updating employee with ID: ${editingEmployee.id}`, error);
    }
  };
  

  const handleDeleteEmployee = async (id) => {
    try {
      const response = await fetch(`https://apisuite.azurewebsites.net/api/employees/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
      } else {
        console.error(`Failed to delete employee with ID: ${id}`);
      }
    } catch (error) {
      console.error(`Error deleting employee with ID: ${id}`, error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Employee List:</h1>
      <div className="flex flex-wrap">
        {employees.map((employee) => (
          <div key={employee.id} className="mr-4 mb-4">
            <EmployeeCard employee={employee} />
            <button
              onClick={() => handleEditEmployee(employee.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2 inline-block"
            >
              Editar
            </button>
            <button
              onClick={() => handleDeleteEmployee(employee.id)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2 inline-block ml-2"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">
          {editingEmployee ? 'Editar empleado:' : 'Agregar nuevo empleado:'}
        </h2>
        <div className="flex">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={newEmployee.name}
            onChange={handleInputChange}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            name="age"
            placeholder="Edad"
            value={newEmployee.age}
            onChange={handleInputChange}
            className="border p-2 mr-2"
          />
          <input
            type="date"
            name="address"
            placeholder="Dirección"
            value={newEmployee.address}
            onChange={handleInputChange}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            name="salary"
            placeholder="Salario"
            value={newEmployee.salary}
            onChange={handleInputChange}
            className="border p-2 mr-2"
          />
          {editingEmployee ? (
            <button
              onClick={handleUpdateEmployee}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Actualizar
            </button>
          ) : (
            <button
              onClick={handleAddEmployee}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
