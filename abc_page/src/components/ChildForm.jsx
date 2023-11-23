import React, { useState } from 'react';

const ChildForm = ({ index, handleChange, setFormData }) => {
  
  const [playsVideoGames, setPlaysVideoGames] = useState('');

  const handleVideoGamesChange = (e) => {
    setPlaysVideoGames(e.target.value);
    handleChange('playgames', e.target.value);
  };

  const handlePlatformChange = (childIndex, platform, checked) => {
    setFormData((prevFormData) => {
      const updatedChildren = [...prevFormData.children];
      const platforms = new Set(updatedChildren[childIndex].platforms || []);
  
      if (checked) {
        platforms.add(platform);
      } else {
        platforms.delete(platform);
      }
  
      updatedChildren[childIndex].platforms = platforms;
  
      return {
        ...prevFormData,
        children: updatedChildren,
      };
    });
  };

  return (
    <div key={index} className='mt-5 '>
    <h3 className='text-white text-center'>{`Información del Hijo ${index + 1}`}</h3>

    <div className='mt-3 flex flex-col items-center'>
      <label className='text-white'>{`Fecha de nacimiento: `}</label>
      <input
        type="date"
        onChange={(e) => handleChange(`birthdate`, e.target.value)}
        className='text-right'
      />
    </div>

    <div className='mt-3 flex flex-col items-center'>
      <label className='text-white'>{`Género: `}</label>
      <select onChange={(e) => handleChange(`gender`, e.target.value)} required
      >
        <option value="">Seleccionar</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
    </div>

    <div className='mt-3 flex flex-col items-center'>
      <label className='text-white'>{`Estudia?: `}</label>
      <select onChange={(e) => handleChange(`study`, e.target.value)} required
      >
        <option value="">Seleccionar</option>
        <option value="si">Si</option>
        <option value="no">No</option>
      </select>
    </div>

    <div className='mt-3 flex flex-col items-center'>
        <label className='text-white'>{`Juega Videojuegos?: `}</label>
        <select onChange={handleVideoGamesChange} required>
          <option value="">Seleccionar</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
    </div>
    
  {playsVideoGames === 'si' && (
  <div className='mt-3 flex flex-col items-center'>
    <label className='text-white'>Plataformas:</label>
    <div className='flex'>
      <label className='mr-3'>
        <input
          type='checkbox'
          onChange={(e) => handlePlatformChange(index, 'pc', e.target.checked)}
        />
        PC
      </label>
      <label className='mr-3'>
        <input
          type='checkbox'
          onChange={(e) => handlePlatformChange(index, 'ps', e.target.checked)}
        />
        PS
      </label>
      <label className='mr-3'>
        <input
          type='checkbox'
          onChange={(e) => handlePlatformChange(index, 'xbox', e.target.checked)}
        />
        Xbox
      </label>
      <label>
        <input
          type='checkbox'
          onChange={(e) => handlePlatformChange(index, 'nintendo', e.target.checked)}
        />
        Nintendo
      </label>
    </div>
  </div>
  )}

    
  </div>
  );
};

export default ChildForm;