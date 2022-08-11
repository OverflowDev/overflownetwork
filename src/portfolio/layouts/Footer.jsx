import React from 'react'

function Footer() {
  return (
    <footer className="text-center text-teal-900 bg-teal-100 dark:text-white dark:bg-teal-900">
      <div className="container p-2">
        <div className="">
          <p className="flex justify-center items-center">
            <button type="button" className="inline-block px-6 py-2 border-2 border-teal-900 text-teal-900 dark:border-teal-100 dark:text-teal-100 font-medium text-lg leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Contact
            </button>
          </p>
        </div>
      </div>

      <div className="text-center ">
        OverFlow - © 2022 Copyright 
      </div>
    </footer>
  )
}

export default Footer