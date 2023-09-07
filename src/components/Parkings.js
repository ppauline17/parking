import React from 'react';
import axios from 'axios';
import Card from '../components/Card';


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
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données de l'API :", error);
            });
        const currentDate = new Date();
        let hours = currentDate.getHours();
        if (hours < 10){
            hours = '0' + hours;
        }
        let minutes = currentDate.getMinutes();
        if (minutes < 10){
            minutes = '0' + minutes;
        }


        this.setState({ time: hours + ':' + minutes })
    }

    render() {

        return (
            <div className='parkings'>
                <p>Dernière actualisation : 
                    <span className='clock'>{this.state.time}</span>
                </p>
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