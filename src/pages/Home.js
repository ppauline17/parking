import React from 'react';
import Title from '../components/Title';
import Navigation from '../components/Navigation';
import Parkings from '../components/Parkings';

class Home extends React.Component {
    render (){
        return (
            <div className='container'>
                <Title />
                <Navigation />
                <Parkings />
            </div>
            
        );
    }
    
};

export default Home;