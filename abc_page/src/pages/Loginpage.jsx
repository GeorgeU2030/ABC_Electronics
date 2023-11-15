import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Loginpage = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        cellphone: '',
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
          const response = await axios.post('http://localhost:8000/salesApp/lookup/', {
            email: formData.email,
            cell_phone: formData.cellphone,
          });
          console.log(response.data)
          localStorage.setItem('customer',JSON.stringify(response.data));
          navigate('/mainmenu')
        } catch (error) {
          console.error(error);
        }
    };

  return (
    <>
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-azp'>
        <h1 className='mb-10 text-3xl font-semibold text-azf'>abc Electronics</h1>
        <div className='border-2 border-azblue rounded-lg w-1/2 h-2/3 flex flex-col justify-center items-center bg-azf'>
        <form onSubmit={handleSubmit} className='w-2/5'>
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
        <button type="submit" className='mt-10 py-1 px-1 bg-azs text-azf font-semibold hover:bg-azt hover:text-azp hover:font-semibold  w-full rounded-md border-2 border-azs'>
          Ingresar</button>
        </form>
         <button type="submit" className='mt-5 py-1 px-1 bg-azs text-azf font-semibold hover:bg-azt hover:text-azp hover:font-semibold  w-2/5 rounded-md border-2 border-azs'>
          Registrarse</button>
        </div>
    </div>
    </>
  )
}

export default Loginpage