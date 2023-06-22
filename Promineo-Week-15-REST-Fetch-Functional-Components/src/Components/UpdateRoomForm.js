import { useState } from 'react';

export const UpdateRoomForm = (props) => {
  const { room, updateRoom, setRoomToUpdate } = props;
  const [name, setName] = useState(room.name);
  const [area, setArea] = useState(room.area);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && area) {
      const updatedRoom = { ...room, name: name, area: area };
      updateRoom(updatedRoom);
      setName('');
      setArea('');
      setRoomToUpdate(null);
    } else {
      console.log(`Oops, looks like update room had an issue.`);
    }
  };

  const handleAreaInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setArea(int >= 0 ? int : '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Room Name' onChange={(e) => setName(e.target.value)} value={name} />
        <input type='text' placeholder='Area' onChange={handleAreaInput} value={area} />
        <button type='submit'>Update</button>
        <button type='button' onClick={() => setRoomToUpdate(null)}>Cancel</button>
      </form>
    </div>
  );
};
