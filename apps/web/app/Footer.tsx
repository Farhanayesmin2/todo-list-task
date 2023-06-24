"use client"
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiCheckSquare } from 'react-icons/fi';
const Footer = () => {
    return (
        <div>
             <footer className="bg-gray-800 text-white py-8 px-4">
  <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 md:justify-between">
    <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
      <span className="text-2xl mr-2 text-white">
        <FiCheckSquare />
      </span>
      <span className="text-lg text-cyan-400 font-bold">TODO</span>
    </div>
    <div className="flex flex-wrap justify-center md:justify-center">
      <a href="/" className="text-white mr-6 mb-2 md:mb-0">About</a>
      <a href="/" className="text-white mr-6 mb-2 md:mb-0">Blog</a>
      <a href="/" className="text-white mr-6 mb-2 md:mb-0">Jobs</a>
      <a href="/" className="text-white mr-6 mb-2 md:mb-0">Press</a>
      <a href="/" className="text-white mr-6 mb-2 md:mb-0">Accessibility</a>
      <a href="/" className="text-white mr-6 mb-2 md:mb-0">Partners</a>
      <a href="/" className="text-white mr-6 mb-2 md:mb-0">Contact</a>
    </div>
    <div className="flex justify-center md:justify-end mt-4 md:mt-0">
      <a href="/" className="text-white mr-3">
        <FaFacebook className="w-8 h-8 rounded-md text-blue-600 shadow-lg shadow-sky-400" />
      </a>
      <a href="/" className="text-white mr-3">
        <FaInstagram className="w-8 h-8 rounded-md text-rose-700 shadow-lg shadow-sky-400" />
      </a>
      <a href="/" className="text-white mr-3">
        <FaTwitter className="w-8 h-8 rounded-md text-sky-400 shadow-lg shadow-sky-400" />
      </a>
      <a href="/" className="text-white mr-3">
        <FaGithub className="w-8 h-8 rounded-md text-gray-400 shadow-lg shadow-sky-400" />
      </a>
      <a href="/" className="text-white mr-3">
        <FaYoutube className="w-8 h-8 rounded-md text-red-700 shadow-lg shadow-sky-400" />
      </a>
    </div>
  </div>
  <div className="container mx-auto mt-4 text-center">
    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} farhana Yesmin, Inc. All rights reserved.</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;