import React from 'react';
import Title from '../components/Title';
import Navigation from '../components/Navigation';

class About extends React.Component {
    render (){
        return (
            <div className='container'>
                <Title />
                <Navigation />
                <h2>A propos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam recusandae ad deleniti necessitatibus cupiditate voluptas sunt aliquid voluptatibus sed iusto dolore veniam quaerat, temporibus adipisci vero quibusdam non. Dolore.</p>
            </div>
        );
    }
    
};

export default About;