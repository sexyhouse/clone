

const Divisao = (props) => {

    return (
        <div className="predefinicao">
            <div className="principal">
                <img src={props.status} alt="" className="status" />
                <img src={props.artist} alt="" className="artist" />
                <h3 className="name">{props.name}</h3>
            </div>
            <div className="final">
                <a href={props.link} target={"_blank"}>
                    <div className="visita">
                        <h2>Visitar</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Divisao