import React, { useState } from 'react';

export const NewHouseForm = (props) => {
    const { addHouse } = props;
    const [name, setName] = useState('');

  
    const onSubmit = (e) => {
        e.preventDefault();
        if(name) {
            addHouse({name});
            setName('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='House Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type='submit'>Add House</button>
            </form>
        </div>
    )
};