async function sendRequest() {
    const fNmae = document.getElementById('first-name');
    const lName = document.getElementById('last-name');
    const pAge = document.getElementById('age');
    const data = {
        firstName: `${fNmae.value}`,
        lastName: `${lName.value}`,
        age: `${pAge.value}`,
    };
    const request = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Add this header
        },
        body: JSON.stringify(data),// converting data into json format
    });
z
    const send = await request.json();
    console.log(send);
}