import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({coffee}) => {

    const {name , image , category, origin , type , id , popularity , rating} = coffee  ;

    return (
        <div className='flex relative'>
            <Link
             to={`/coffee/${id}`}
             className='transition hover:scale-105 shadow-xl rounded-xl overflow-hidden'
             >
            <figure className='w-full h-48 overflow-hidden'>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="p-4">
    <h2 className="text-xl">Name : {name}</h2>
    <p>Category : {category} </p>
    <p>Type : {type} </p>
    <p>Origin : {origin} </p>
    <p>Rating : {rating}</p>
    <p>Popularity : {popularity}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
            </Link>
        </div>
    );
};

export default Card;