import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()

    const [coffee ,setCoffee] = useState({})
    useEffect( ()=> {
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)
    },{data , id})


    const {
        name,
        image,
        ingredients,
        nutrition_info,
        description,
        making_process,
        rating,
        popularity,
      } = coffee


    return (
        <div>
             <div className='my-12'>
      {/* Description */}
      <h1 className='text-2xl md:text-4xl font-thin mb-6'>{description}</h1>
      {/* Image */}
      <div className='w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl'>
        <img className='w-full h-full' src={image} alt='' />
      </div>
      {/* Title and Favorite Button */}
      <div className='flex justify-between items-center my-6'>
        <div>
          <h1 className='text-2xl md:text-3xl font-thin'>{name}</h1>
          <p className='text-base'>Popularity: {popularity}</p>
          <p className='text-base'>Rating: {rating}</p>
        </div>
        <div>
          <button
            className='btn btn-warning'
          >
            Add Favorite
          </button>
        </div>
      </div>

    </div>
        </div>
    );
};

export default CoffeeDetails;