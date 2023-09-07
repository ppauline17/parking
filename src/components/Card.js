import React from 'react';

class Card extends React.Component {
    render (){
        return (
            <div>
                <p>{props.nom}</p>
            </div>
        );
    }
};

export default Card;