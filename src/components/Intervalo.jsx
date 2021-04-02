import React from 'react';
import './Intervalo.css';

import Card from './Card';

const Intervalo = props => {

    const { min, max } = props;

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minino</strong>
                    <input type="number" value={min} onChange={ e => props.onMinChanged(+e.target.value)}></input>
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input type="number" value={max} onChange={ e => props.onMaxChanged(+e.target.value)}></input>
                </span>
            </div>
        </Card>
    )
}

export default Intervalo;