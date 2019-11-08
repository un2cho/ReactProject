import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{
            color
        }}>
        {/*{isSpecial && <b>*</b>}*/}
        <b>{isSpecial ? 'is special' : 'not special'}</b>
            안녕하세요.{name}
        </div>
    );
}

Hello.defaultProps = {
    name: 'none name'
};

export default Hello;