import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha.svg";

const Titulares = ({ titulares, RetornarJugador }) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => RetornarJugador(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha de Fútbol"/>
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const MapDispatchToProps = dispatch => ({
    RetornarJugador(jugador){
        dispatch({
            type: "REGRESAR_JUGADOR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, MapDispatchToProps)(Titulares);