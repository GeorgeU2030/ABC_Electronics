import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        cellphone: '',
        homephone: '',
        birthdate: '',
        address: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();   

        try {
          const response = await axios.post('http://localhost:8000/salesApp/register/', {
            name: formData.name,
            lastname: formData.lastname,
            email: formData.email,
            cell_phone: formData.cellphone,
            homephone: formData.homephone,
            birthdate: formData.birthdate,
            address: formData.address
          });
          console.log(response.data)
          localStorage.setItem('customer',JSON.stringify(response.data));
          navigate('/mainmenu')
        } catch (error) {
          console.error(error);
        }
    };

  return (<>
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-azp'>
    <h1 className='mb-10 text-3xl font-semibold text-azf'>abc Electronics</h1>
    <div className='border-2 border-azblue rounded-lg w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center bg-azf'>
        <form onSubmit={handleSubmit} className='w-4/5 md:w-2/3 lg:w-3/4 xl:w-4/5'>
        <div className="form-group font-semibold text-center mt-5">
            <label htmlFor="name">Nombre</label>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='rounded-md mt-1 text-right font-normal  border-2 border-azs w-full'
            />
        </div>
        <div className="form-group font-semibold text-center mt-5 flex flex-col items-center">
            <label htmlFor="lastname">Apellido</label>
            <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className='rounded-md mt-1 text-right font-normal  border-2 border-azs'
            />
        </div>
        <div className="form-group font-semibold text-center mt-5 flex flex-col items-center " >
            <label htmlFor="email">Correo Electronico</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='rounded-md mt-1 text-right font-normal border-2 border-azs '
            />
        </div>
        <div className="form-group font-semibold text-center mt-5 flex flex-col items-center">
            <label htmlFor="cellphone">Celular</label>
            <input
                type="text"
                id="cellphone"
                name="cellphone"
                value={formData.cellphone}
                onChange={handleChange}
                className='rounded-md mt-1 text-right font-normal  border-2 border-azs'
            />
        </div>
        <div className="form-group font-semibold text-center mt-5 flex flex-col items-center">
            <label htmlFor="homephone">Teléfono Fijo</label>
            <input
                type="text"
                id="homephone"
                name="homephone"
                value={formData.homephone}
                onChange={handleChange}
                className='rounded-md mt-1 text-right font-normal  border-2 border-azs'
            />
        </div>
      <div className="form-group font-semibold text-center mt-5">
        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          className='rounded-md mt-1 text-right font-normal  border-2 border-azs w-full'
          placeholder="YYYY-MM-DD"
        />
      </div>
      <div className="form-group font-semibold text-center mt-5">
        <label htmlFor="address">Dirección</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className='rounded-md mt-1 text-right font-normal  border-2 border-azs w-full'
        />
      </div>
      <button
        type="submit"
        className='mt-10 py-1 px-1 bg-azs text-azf font-semibold hover:bg-azt hover:text-azp hover:font-semibold  w-full rounded-md border-2 border-azs'
      >
        Registrarse
      </button>
    </form>
  </div>
</div>

  </>)
}

export default RegisterPage