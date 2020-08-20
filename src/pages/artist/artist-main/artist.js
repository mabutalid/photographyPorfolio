import React from 'react';
import ArtistContent from './artist-solo/artist-content';

const Artist = ({location}) => {
   const artist = location.search.split("=")[1];
    return(
      <div>
          <div className="h-100vh flex flex-wrap content-center">
                <div className="w-20vh h-20vh pt-16 sm:pt-0 lg:pt-20 mx-auto relative">
                    <img className="object-cover absolute top-0" src={require("../../../images/LOGO.png")} alt="logo" />
                </div>
          </div>
          <ArtistContent artist={artist} />
      </div>  
    );
}

export default Artist;