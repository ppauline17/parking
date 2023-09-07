
function Card (props) {
    let background = '';
    let icon = "";

    if (props.parking.taux_doccupation >= 95){
        icon = <img className="icon" src="./exclamation-triangle-fill.svg" alt="icone attention"/>;
        background = "bg-rouge";
    }else if (props.parking.taux_doccupation >= 75){
        background = "bg-rouge";
    }else if (props.parking.taux_doccupation >= 50 && props.parking.taux_doccupation < 75){
        background = "bg-jaune";
    }else if (props.parking.taux_doccupation < 50 ){
        background = "bg-vert";
    }


    if(props.parking.places === 0){
        props.parking.places = "complet";
    }

    return (
        <div className='col-md-4 mb-5'>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title mb-3">{props.parking.nom}{icon}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.parking.places}</h6>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        <div className={"progress-bar progress-bar-striped "+background} style={{width: props.parking.taux_doccupation + "%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;