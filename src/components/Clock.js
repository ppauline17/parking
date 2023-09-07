function Clock(props){

    return (
        <p>Dernière actualisation : 
            <span className='clock'>{props.time}</span>
        </p>
    );
}

export default Clock;