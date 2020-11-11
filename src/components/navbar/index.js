import React from 'react'

const Navbar = () => {
    return (
      <div className="bg-black text-white flex items-center justify-between p-2">
        <div className="flex items-center justify-center">
          <svg
            className="w-4 h-4 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <div className="text-sm">4G</div>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center justify-center mx-2">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <div className="text-sm">16C</div>
          </div>
          <div className="mx-2 text-sm">16 Nov</div>

          <div className="mx-2 text-sm">7:51 PM</div>
        </div>
      </div>
    );
}

export default Navbar
