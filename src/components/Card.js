import ProgressBar from '../components/ProgressBar';

function Card (props) {
    // au delà de 95% d'occupation on ajoute une icone !
    let icon = "";
    if (props.parking.taux_doccupation >= 95){
        icon = <img className="icon" src="./exclamation-triangle-fill.svg" alt="icone attention"/>;
    }

    // si plus de place dispo, on affiche "complet" à la place de 0
    if(props.parking.places === 0){
        props.parking.places = "complet";
    }

    const update_date = new Date(props.parking.derniere_mise_a_jour_base);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = update_date.toLocaleString('fr-FR', options);

    return (
        <div className='col-sm-6 col-lg-4 col-xl-3 g-5'>
            <div className="card p-3 rounded-4 border-0 shadow">
                <div className="card-body">
                    <h5 className="card-title mb-3">{props.parking.nom}{icon}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Places restantes : {props.parking.places}</h6>
                    <ProgressBar taux_doccupation={props.parking.taux_doccupation} />
                    <div className='actualisation mt-2'>Dernière actualisation : {formattedDate}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;