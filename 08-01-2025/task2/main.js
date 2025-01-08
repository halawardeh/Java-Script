

// Function to fetch user data from the API
async function fetchUserData() {

  
    // Fetch data from the API
    const response = await fetch('https://api.npoint.io/0671c214bb1f593dde2b')
    // Parse the JSON data
    const data = await response.json();
    

    // Display the data on the page
    const outputDiv = document.getElementById('output');


    // Create user cards for each user
    for (const user of data) {
        
        const userCard = document.createElement('div');
        
        userCard.innerHTML =
        `
            <div style= "border: 1px solid black; padding: 10px; margin:5px;">
            <p><strong>${user.name}</strong></p>
            <p><strong>Age: </strong> ${user.age}</p>
            <p><strong>email: </strong> ${user.email}</p>
            <p><strong>Profession: </strong> ${user.Profession}</p>
            </div>
`;
        outputDiv.appendChild(userCard);
    }


}
















