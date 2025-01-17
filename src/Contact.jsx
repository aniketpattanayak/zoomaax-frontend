import React from 'react';
 
const Contact = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block mb-2 font-bold">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
