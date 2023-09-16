import React from 'react';
import Card from '../components/Card';
import {fetchData} from '../datas/fetchData';

class Parkings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] // Initialiser l'état data avec la structure appropriée
        };
    }

    componentDidMount(){
        // appel de la fonction au chargement de la page
        this.setData();

        // puis appel toutes les minutes pour actualiser les données
        setInterval(() => {
            this.setData();
        }, 1000 * 60);
    }
   

    setData() {
        fetchData()
          .then(data => {
            // Mettre à jour l'état data avec les données de la réponse
            this.setState({ data: data.results });
        })
    }

    render() {
        return (
            <div className='parkings mb-5'>
                <div className='row'>
                    {this.state.data.map((parking) => (
                        <Card parking={parking} key={parking.id}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Parkings;