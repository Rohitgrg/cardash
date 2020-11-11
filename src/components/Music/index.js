import React from 'react'
import lazy from "../../assets/lazy.mp3"

const Music = () => {
    return (
      <div className="p-4 bg-gray-800 text-white m-2 rounded-lg flex flex-row">
        <div>
          <img
            className="rounded-lg shadow w-24 h-24"
            src="https://brunomarsforever.files.wordpress.com/2012/01/der.jpg"
            alt="Bruno Mars"
          />
        </div>
        <div className="mx-2 px-2 pr-4 border-r border-gray-700 flex flex-col item-center justify-center">
          <div className="text-gray-100 font-semi-bold text-lg">
            The Lazy Song
          </div>
          <div className="font-bold text-xs text-gray-500">Bruno Mars</div>
          <div className="font-bold text-xs text-gray-600">
            Doo Wop and Hooligans
          </div>
        </div>
         <audio controls className="bg-gray-800 m-4">
          <source src={lazy} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
}

export default Music
