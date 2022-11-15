import React, { useEffect, useState } from 'react';
import './Tarjets.css';
import axios from 'axios';

const Tarjets = () => {
  const [rockets, setRockets] = useState([])
  const traerInformacion = async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets')

    setRockets(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    traerInformacion()
  }, [])

  return (
    <div className="container">
      {rockets.map((data) => (
        <div key={data.id} className="content-space">
            <div className='slider-image'>
                <img className="Image" src={data.flickr_images} alt={data.rocket_name}/>
            </div>

            <div className='content-info'>
                
                <div className='nameType'>
                    <h4 className='nameRocket'>{data.rocket_name}</h4>
                    <p className='typeRocket'>{data.rocket_type}</p>
                </div>
                
                <p className='descriptionRocket'>{data.description}</p>

                <div className='infoBottom'>

                    <p>{data.first_flight}</p>
                    <p>{data.country}</p>
                    <p>{data.company}</p>
                    <a className="linkVermas" href={data.wikipedia}>Saber más</a>

                </div>
                

               
            </div>
        </div>
      ))}
    </div>
  )
}

export default Tarjets