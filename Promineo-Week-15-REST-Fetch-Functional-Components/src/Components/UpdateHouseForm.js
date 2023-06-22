import { useState } from 'react';

export const UpdateHouseForm = (props) => {
    const { currentName, newName } = props;
    const [name, setName] = useState(currentName);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name) {
            newName(name);
            setName('');
        } else {
            console.log(`Oops, looks like update House had an issue.`)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}
            type='text'
            placeholder='House Name'
            onChange={(e) => setName(e.target.value)}
            value={name}>
        <button
            type='submit'
            >Update</button>        
            </form>
        </div>    
    )
};
