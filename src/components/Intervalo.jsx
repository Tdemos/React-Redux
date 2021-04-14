import React from 'react';
import { connect } from 'react-redux';

import './Intervalo.css';

import Card from './Card';

import { alterarNumeroMinino, alterarNumeroMaximo } from '../store/actions/numeros';

const Intervalo = props => {

    const { min, max } = props;

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minino</strong>
                    <input type="number" value={min} onChange={e => props.alterarMinino(+e.target.value)} ></input>
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)}></input>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        alterarMinino(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinino(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchTopProps)(Intervalo);