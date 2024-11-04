import React from 'react';
import Banner from '../Banner';
import Heading from '../Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Categories';

const Home = () => {

    const categories = useLoaderData()
    console.log(categories);

    return (
        <div>
            {/* banner */}
            <Banner></Banner>

            {/* heading */}
            <Heading title={'Browse Coffee by Category'} subtitle={'Choose your desired coffee category to browse through specific coffee in your taste.'}></Heading>

            {/* categories tap section */}
           <Categories categories={categories}></Categories>

            {/* nested components */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;