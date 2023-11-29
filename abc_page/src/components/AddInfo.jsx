import ChildForm from "./ChildForm";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddInfo = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    numberOfChildren: 0,
    children: [],
    placeOfBirth: {
      city: "",
      department: "",
      country: "",
    },
    placeLocation: {
      city: "",
      department: "",
      country: "",
      zipcode: "",
    },
    hobbies: "",
    sports: "",
    categories: {
      electrodomesticos: false,
      celulares: false,
      computadores: false,
      tv: false,
      accesorios: false,
      videojuegos: false,
    },
    status: {
      maritalStatus: "",
      marriageDate: "",
      divorceDate: "",
      widowDate: "",
      spouseName: "",
    },
  });

  const handleSelectChange = (e) => {
    const numberOfChildren = parseInt(e.target.value, 10);
    setFormData((prevFormData) => ({
      ...prevFormData,
      numberOfChildren,
    }));
  };

  const handleChildChange = (childIndex, fieldName, value) => {
    setFormData((prevFormData) => {
      const updatedChildren = [...prevFormData.children];
      const currentChild = updatedChildren[childIndex] || {};
      const updatedChild = {
        ...currentChild,
        [fieldName]: value,
      };
      updatedChildren[childIndex] = updatedChild;

      return {
        ...prevFormData,
        children: updatedChildren,
      };
    });
  };

  const handlePlaceOfBirthChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      placeOfBirth: {
        ...prevFormData.placeOfBirth,
        [field]: value,
      },
    }));
  };

  const handleLocationChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      placeLocation: {
        ...prevFormData.placeLocation,
        [field]: value,
      },
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (category) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      categories: {
        ...prevFormData.categories,
        [category]: !prevFormData.categories[category],
      },
    }));
  };

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: {
        ...prevFormData.status,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCategories = Object.keys(formData.categories).filter(
      (category) => formData.categories[category]
    );

    const selectedCategoriesObj = {};
    selectedCategories.forEach((category) => {
      selectedCategoriesObj[category] = true;
    });

    const statusWithValues = Object.fromEntries(
      Object.entries(formData.status).filter(([key, value]) => value !== "")
    );

    const customer = localStorage.getItem('customer')
    const customerObj = JSON.parse(customer)
    const id = customerObj.id

    const formDataToSend = {
      numberOfChildren: formData.numberOfChildren,
      children: formData.children,
      placeOfBirth: formData.placeOfBirth,
      placeLocation: formData.placeLocation,
      hobbies: formData.hobbies,
      sports: formData.sports,
      categories: selectedCategoriesObj,
      status: statusWithValues,
      id: id,
    };
    console.log(formDataToSend)
   
    axios
      .post("http://localhost:8000/salesApp/save_info_client/", formDataToSend)
      .then((response) => {
        console.log("Datos guardados exitosamente:", response.data); 
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error al guardar los datos:", error);
      });
    console.log("hola");
  };

  return (
    <div className="w-screen flex bg-azf h-[85vh]">
      <form
        onSubmit={handleSubmit}
        className="w-full flex bg-azs relative overflow-y-auto"
      >
        <section className="w-1/2 flex flex-col items-center bg-azs mt-5 overflow-y-auto ">
          <label className="text-white font-semibold mt-5">
            Número de Hijos:
          </label>
          <select
            name="numberOfChildren"
            onChange={handleSelectChange}
            required
            className="text-right mt-5 font-semibold rounded-md px-4"
          >
            <option value="0">No tengo</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          {formData.numberOfChildren > 0 &&
            Array.from({ length: formData.numberOfChildren }, (_, index) => (
              <ChildForm
                key={index}
                index={index}
                handleChange={(fieldName, value) =>
                  handleChildChange(index, fieldName, value)
                }
                setFormData={setFormData}
              />
            ))}

          <label className="text-white font-semibold mt-3">Hobbies:</label>
          <input
            type="text"
            placeholder="Hobbies"
            value={formData.hobbies}
            onChange={(e) => handleInputChange("hobbies", e.target.value)}
            className="mt-1 text-right rounded-md"
            required
          />

          <label className="text-white font-semibold mt-3">
            Deportes que practica:
          </label>
          <input
            type="text"
            placeholder="Deportes"
            value={formData.sports}
            onChange={(e) => handleInputChange("sports", e.target.value)}
            className="mt-1 text-right rounded-md"
          />

          <label className="text-white font-semibold mt-3">Intereses:</label>
          <div className="mt-1 flex flex-col">
            <label className="text-white">
              <input
                type="checkbox"
                checked={formData.categories.electrodomesticos}
                onChange={() => handleCheckboxChange("electrodomesticos")}
              />
              Electrodomésticos
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={formData.categories.celulares}
                onChange={() => handleCheckboxChange("celulares")}
              />
              Celulares
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={formData.categories.computadores}
                onChange={() => handleCheckboxChange("computadores")}
              />
              Computadores
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={formData.categories.tv}
                onChange={() => handleCheckboxChange("tv")}
              />
              TV
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={formData.categories.accesorios}
                onChange={() => handleCheckboxChange("accesorios")}
              />
              Accesorios
            </label>
            <label className="text-white">
              <input
                type="checkbox"
                checked={formData.categories.videojuegos}
                onChange={() => handleCheckboxChange("videojuegos")}
              />
              Videojuegos
            </label>
          </div>

          <label className="text-white mt-5">Estado Civil:</label>
          <select
            value={formData.status.maritalStatus}
            onChange={(e) => handleChange("maritalStatus", e.target.value)}
            className="mt-3 rounded-md px-4 mb-2"
          >
            <option value="">Seleccionar</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="viudo">Viudo</option>
            <option value="divorciado">Divorciado</option>
            <option value="Union Libre">Unión Libre</option>
          </select>

          {formData.status.maritalStatus === "casado" && (
            <div className="flex flex-col mt-5 mb-10">
              <label className="text-white">Fecha de Matrimonio:</label>
              <input
                type="date"
                value={formData.status.marriageDate}
                onChange={(e) => handleChange("marriageDate", e.target.value)}
                className="text-right rounded-md"
              />

              <label className="text-white">Nombre de la Pareja:</label>
              <input
                type="text"
                value={formData.status.spouseName}
                onChange={(e) => handleChange("spouseName", e.target.value)}
                className="text-right rounded-md"
              />
            </div>
          )}

          {formData.status.maritalStatus === "divorciado" && (
            <div className="flex flex-col mt-5 mb-10">
              <label className="text-white">Fecha de Divorcio:</label>
              <input
                type="date"
                value={formData.status.divorceDate}
                onChange={(e) => handleChange("divorceDate", e.target.value)}
                className="text-right rounded-md"
              />
            </div>
          )}

          {formData.status.maritalStatus === "viudo" && (
            <div className="flex flex-col mt-5 mb-10">
              <label className="text-white">Fecha de Viudez:</label>
              <input
                type="date"
                value={formData.status.widowDate}
                onChange={(e) => handleChange("widowDate", e.target.value)}
                className="text-right rounded-md"
              />
            </div>
          )}

          {formData.status.maritalStatus === "Union Libre" && (
            <div className="flex flex-col mt-5 mb-10">
              <label className="text-white">
                Nombre de la Pareja (Unión Libre):
              </label>
              <input
                type="text"
                value={formData.status.spouseName}
                onChange={(e) => handleChange("spouseName", e.target.value)}
                className="text-right rounded-md"
              />
            </div>
          )}
        </section>

        <section className="w-1/2 bg-azs overflow-y-auto">
          <div className="flex flex-col items-center">
            <label className="text-white font-semibold mt-5">
              Datos de Nacimiento:
            </label>

            <label className="text-white font-semibold mt-3">Ciudad:</label>
            <input
              type="text"
              placeholder="Ciudad"
              value={formData.placeOfBirth.city}
              onChange={(e) => handlePlaceOfBirthChange("city", e.target.value)}
              className="mt-1 rounded-md text-right"
              required
            />

            <label className="text-white font-semibold mt-3">
              Departamento:
            </label>
            <input
              type="text"
              placeholder="Departamento"
              value={formData.placeOfBirth.department}
              onChange={(e) =>
                handlePlaceOfBirthChange("department", e.target.value)
              }
              className="mt-1 text-right rounded-md"
              required
            />

            <label className="text-white font-semibold mt-3">País:</label>
            <input
              type="text"
              placeholder="País"
              value={formData.placeOfBirth.country}
              onChange={(e) =>
                handlePlaceOfBirthChange("country", e.target.value)
              }
              className="mt-1 text-right rounded-md"
              required
            />

            <label className="text-white font-semibold mt-5">
              Datos de Ubicacion:
            </label>

            <label className="text-white font-semibold mt-3">Ciudad:</label>
            <input
              type="text"
              placeholder="Ciudad"
              value={formData.placeLocation.city}
              onChange={(e) => handleLocationChange("city", e.target.value)}
              className="mt-1 text-right rounded-md"
            />

            <label className="text-white font-semibold mt-3">
              Departamento:
            </label>
            <input
              type="text"
              placeholder="Departamento"
              value={formData.placeLocation.department}
              onChange={(e) =>
                handleLocationChange("department", e.target.value)
              }
              className="mt-1 text-right rounded-md"
            />

            <label className="text-white font-semibold mt-3">País:</label>
            <input
              type="text"
              placeholder="País"
              value={formData.placeLocation.country}
              onChange={(e) => handleLocationChange("country", e.target.value)}
              className="mt-1 text-right rounded-md"
            />

            <label className="text-white font-semibold mt-3">
              Codigo Postal:
            </label>
            <input
              type="text"
              placeholder="Codigo Postal"
              value={formData.placeLocation.zipcode}
              onChange={(e) => handleLocationChange("zipcode", e.target.value)}
              className="mt-1 mb-8 text-right rounded-md"
            />
          </div>
        </section>
        <div className="absolute bottom-5 w-full flex justify-center">
          <button
            type="submit"
            className="bg-azp text-azf font-semibold px-12 py-2 rounded hover:bg-azt hover:text-azp hover:font-semibold"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInfo;
