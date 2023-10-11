import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="page_404 p-10 bg-white font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="sm:w-10/12 text-center">
            <div
              className="four_zero_four_bg"
              style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)', height: '400px', backgroundPosition: 'center' }}
            >
              <h1 className="text-5xl">404</h1>
            </div>
            
            <div className="contant_box_404 mt-0">
              <h3 className="text-5xl">
                Look like you're lost
              </h3>
              
              <p>The page you are looking for is not available!</p>
              <Link to={"/"} className="link_404 text-white py-2 px-4 bg-green-500 my-5 inline-block">
              Go to Home
              </Link>
              {/* <a href="/" className="link_404 text-white py-2 px-4 bg-green-500 my-5 inline-block">Go to Home</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NotFound};

