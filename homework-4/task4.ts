interface UserData {
    id: number,
    name: string,
    age: number
}

function mockApi(): Promise<UserData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data: UserData = {id: 1, name: 'Hayko', age: 14}
            resolve(data)
        }, 1000);
    })
}

async function fetchData(): Promise<UserData> {
    try {
        console.log('Fetching data...');
        const data = await mockApi()
        console.log('Data fetched.');
        return data
    } catch(err) {
        console.error("Error while fetching data:", err);
        throw err;
    }
}

fetchData()
    .then((data: UserData)=> {
        console.log("Resolved data:", data);
    })
    .catch((err) => {
        console.error("Promise rejected:", err);
    })