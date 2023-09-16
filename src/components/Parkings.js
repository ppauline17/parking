import React from 'react';
import Card from '../components/Card';
import Clock from '../components/Clock';
import {fetchData} from '../datas/fetchData';

class Parkings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], // Initialiser l'état data avec la structure appropriée
            time: null
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
      
            // Mise à jour de l'heure de la dernière actualisation de la base de données
            const update_date = new Date(data.results[0].derniere_mise_a_jour_base);
            const options = {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            };
            const formattedDate = update_date.toLocaleString('fr-FR', options);
            this.setState({ time: formattedDate });
        })
    }

    render() {
        return (
            <div className='parkings mb-5'>
                <Clock time={this.state.time} />
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