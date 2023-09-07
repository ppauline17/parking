import React from 'react';
import Title from '../components/Title';
import Parkings from '../components/Parkings';

class Home extends React.Component {
    render (){
        return (
            <div className='container'>
                <Title />
                <Parkings />
            </div>
            
        );
    }
    
};

export default Home;