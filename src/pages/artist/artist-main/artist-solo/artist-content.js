import React from 'react';
import Miguel from './miguel';
import Pat from './pat';
import Eloi from './eloi';
import Jacob from './jacob';
import Clars from './clars';
import Albert from './albert';
import Section2 from '../components/section2'

const ArtistContent = ({artist}) => {
        switch(artist){
            case 'MiguelMonasterial':
                return(<Miguel />);
            case 'PatriciaPangilinan':
                return(<Pat />);
            case 'EloiIgni':
                return(<Eloi />);    
            case 'ClarissaLorenzo':
                return(<Clars />);
            case 'JayLacdao':
                return(<Jacob />);
            case 'GualbertsanSual':
                return(<Albert />);   
            default:
                return(<Section2 />);
        }
}

export default ArtistContent;