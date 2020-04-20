import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, RetornarJugador }) => (
    <section>
        <h2>Suplentes</h2>
        <div className="cancha">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => RetornarJugador(j)}>X</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const MapDispatchToProps = dispatch => ({
    RetornarJugador(jugador){
        dispatch({
            type: "REGRESAR_JUGADOR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, MapDispatchToProps)(Suplentes);