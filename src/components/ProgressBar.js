function Progressbar(props){
    // on défini la couleur de la barre de progression en fonction du taux d'occupation
    let background = '';
    if (props.taux_doccupation >= 75){
        background = "bg-rouge";
    }else if (props.taux_doccupation >= 50 && props.taux_doccupation < 75){
        background = "bg-jaune";
    }else if (props.taux_doccupation < 50 ){
        background = "bg-vert";
    }

    return (
        <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
            <div className={"progress-bar progress-bar-striped "+background} style={{width: props.taux_doccupation + "%"}}></div>
        </div>
    )
}

export default Progressbar;