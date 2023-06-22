import { useState } from 'react';
import { NewRoomForm } from './NewRoomForm.js';
import { UpdateHouseForm } from './UpdateHouseForm';
import { UpdateRoomForm } from './UpdateRoomForm';

import '../House.css';

// set states
const House = (props) => {
  const { house, updateHouse, deleteHouse } = props;
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [newHouseName, setNewHouseName] = useState(house.name);
  const [roomToUpdate, setRoomToUpdate] = useState(null);

  const deleteRoom = (roomId) => {
    const updatedHouse = {
      ...house, // copy all properties from house object
      rooms: house.rooms.filter((x) => x._id !== roomId), // remove room that matches id
    };
    updateHouse(updatedHouse); // update the state of house
    setRoomToUpdate(null); // clear roomToUpdate State
  };

  const addNewRoom = (room) =>
  // copy house object, add new room to copied object, update original object with added room
    updateHouse({ ...house, rooms: [...house.rooms, room] });

    // copy house object, update house name, 
  const updateHouseName = () => {
    const newHouse = { ...house, name: newHouseName };
    updateHouse(newHouse);
    setDisplayEditForm(false); // hide edit form
  };

  const rooms = () => (
    <ul className="room-list">
      {house.rooms.map((room, index) => (
        <li className="room-item" key={index}>
          <label>{`${room.name} Area: ${room.area}`}</label>
          <button
            className="edit-room-button"
            onClick={() => setRoomToUpdate(room)}
          >
            Edit
          </button>
          <button
            className="delete-room-button"
            onClick={(e) => deleteRoom(room._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

  const updateRoom = (updatedRoom) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.map((room) => {
        if (room._id === updatedRoom._id) {
          return updatedRoom;
        } else {
          return room;
        }
      }),
    };
    updateHouse(updatedHouse);
    setRoomToUpdate(null);
  };

  return (
    <div className="house-container">
      <h1 className="house-title">
        {displayEditForm ? (
          <form className="edit-form" onSubmit={updateHouseName}>
            <input
              className="edit-input"
              type="text"
              value={newHouseName}
              onChange={(e) => setNewHouseName(e.target.value)}
            />
            <button className="save-button" type="submit">
              Save
            </button>
            <button
              className="cancel-button"
              type="button"
              onClick={() => setDisplayEditForm(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            {house.name}
            <button
              className="edit-button"
              title="Edit House Name"
              onClick={() => setDisplayEditForm(true)}
            >
              Edit House Name
            </button>
          </>
        )}
        <button
          className="delete-button"
          title="Delete House"
          onClick={() => deleteHouse(house._id)}
        >
          Delete House
        </button>
      </h1>
      {rooms()}
      {roomToUpdate && (
        <UpdateRoomForm
          room={roomToUpdate}
          updateRoom={updateRoom}
          setRoomToUpdate={setRoomToUpdate}
        />
      )}

      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};

export default House;
