const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    // Read data
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log(`Oops, looks like fetchHouses had an issue.`, e);
        }
    }

    // Update
    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log(`Oops, looks like updating houses had an issue.`, e);
        }
    }

    post = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log(`Oops, looks like adding new houses had an issue.`, e);
        }
    }

    delete = async (id) => {
        try {
          const resp = await fetch(`${HOUSES_ENDPOINT}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
          });
          return await resp.json();
          
        } catch (e) {
          console.log(`Oops, looks like we had an issue deleting this house.`, e);
        }
      };
}

// create an instance of HousesApi class
export const housesApi = new HousesApi();