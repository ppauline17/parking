import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Clock from '../components/Clock';


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
        this.fetchData();

        // puis appel toutes les minutes pour actualiser les données
        setInterval(() => {
            this.fetchData();
        }, 1000 * 60);
    }
   

    fetchData() {
        // Effectuer la requête API ici
        axios
            .get("https://data.grandpoitiers.fr/api/explore/v2.1/catalog/datasets/mobilites-stationnement-des-parkings-en-temps-reel/records?limit=20")
            .then((response) => {
                // Mettre à jour l'état data avec les données de la réponse
                this.setState({ data: response.data.results });
                
                // mise à jour de l'heure de la dernière actualisation de la base de données
                const update_date = new Date(response.data.results[0].derniere_mise_a_jour_base);
                const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
                };
                const formattedDate = update_date.toLocaleString('fr-FR', options);
                this.setState({ time: formattedDate })

            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données de l'API :", error);
            });
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