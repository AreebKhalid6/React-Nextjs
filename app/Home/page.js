// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <a href="https://nextjs.org" className="text-orange-600">Koretechx</a>!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get started by editing <code className="bg-gray-100 p-1 rounded">pages/index.js</code>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Some description about Feature 1.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
            <p>Some description about Feature 2.</p>
          </div>

          {/* Add more features as needed */}
        </div>
        <br></br>
        <button className="bg-black text-orange-100 p-2 rounded">Call us for more Details</button>
      </main>
      
    </div>
  );
};

export default Home;
