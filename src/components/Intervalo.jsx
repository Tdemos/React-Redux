import React from 'react';
import './Intervalo.css';

import Card from './Card';

const Intervalo = props => {

    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minino</strong>
                    <input type="number" value={0} readOnly></input>
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input type="number" value={10} readOnly></input>
                </span>
            </div>
        </Card>
    )
}

export default Intervalo;