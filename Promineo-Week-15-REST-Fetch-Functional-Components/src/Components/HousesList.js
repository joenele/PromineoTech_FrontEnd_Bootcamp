import { useState, useEffect } from 'react';
import  House  from './House';
import { NewHouseForm } from './NewHouseForm';
import { housesApi } from '../rest/HousesApi.js';

export default function HousesList() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetchHouses();
    }, []);

    const fetchHouses = async () => {
        const houses = await housesApi.get();
        setHouses(houses);
    };

    const updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        fetchHouses();
    };

    const addHouse = async (house) => {
        await housesApi.post(house);
        fetchHouses();
    };

    const deleteHouse = async (id) => {
        await housesApi.delete(id);
        fetchHouses();
    }

    return (
        <div>
            <h2>Add a New House</h2>
        <NewHouseForm 
           addHouse={addHouse}
        />
            <div className="house-list">
                {houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={updateHouse}
                        deleteHouse={deleteHouse}
                    />
                ))}
            </div>
        </div>
    );
}
