import React from 'react';
import './Intervalo.css';

import Card from './Card';

export default props => {
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minino</strong>
                    <input value={0} readOnly></input>
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input value={10} readOnly></input>
                </span>
            </div>
        </Card>
    )
}