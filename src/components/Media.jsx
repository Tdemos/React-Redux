import React from 'react';

import Card from './Card';

const Media = props => {

    const { min, max } = props;

    return (
        <Card title="Media dos Numeros" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Media;