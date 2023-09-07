import React, { Component } from 'react';
import axios from 'axios';

class Parkings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { results: [] }, // Initialiser l'état data avec la structure appropriée
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
                this.setState({ data: response.data });
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données de l'API :", error);
            });
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();


        this.setState({ time: hours + ':' + minutes + ':' + seconds })
    }

    render() {
        const { results } = this.state.data;
        let background = '';

        return (
            <div className='parkings'>
                <p>Dernière actualisation : {this.state.time}</p>
                <div className='row'>
                    {results.map((parking, index) => (
                        <div className='col-md-4 mb-5'>
                            <div className="card" key={index} style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{parking.nom}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{parking.places}</h6>
                                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                        <div className={"progress-bar progress-bar-striped" + background} style={{width: parking.taux_doccupation}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Parkings;