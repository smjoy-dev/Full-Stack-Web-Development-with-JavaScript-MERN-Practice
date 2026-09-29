// Get HTML elements
const ui = {
    userGrid: document.getElementById("userGrid"),
    loading: document.getElementById("loading"),
    searchInput: document.getElementById("searchInput"),
    searchButton: document.getElementById("searchButton"),
    error: document.getElementById("error"),
};


// Store all users here
let allUsers = [];


// Show / Hide Loading
function showLoading(isLoading) {

    ui.loading.style.display = isLoading ? "block" : "none";

}


// Show / Hide Error
function showError(message) {

    ui.error.textContent = message;

    ui.error.style.display = message ? "block" : "none";

}


// Display users on webpage
function renderUsers(users) {

    // Clear previous users
    ui.userGrid.innerHTML = "";


    // If no user found
    if (users.length === 0) {

        ui.userGrid.innerHTML = `
            <p class="text-gray-500">
                No users found.
            </p>
        `;

        return;
    }


    // Create card for every user
    users.forEach(user => {

        const userCard = document.createElement("div");


        userCard.className = `
            bg-white
            p-5
            rounded-lg
            border
            border-gray-200
            shadow-sm
            hover:shadow-md
            transition
        `;


        userCard.innerHTML = `

            <img
                src="${user.picture.medium}"
                alt="${user.name.first}"
                class="w-20 h-20 rounded-full mx-auto mb-3"
            >

            <h2 class="text-lg font-bold text-center">
                ${user.name.first} ${user.name.last}
            </h2>

            <p class="text-sm text-gray-500 text-center mb-4">
                ${user.location.country}
            </p>

            <p class="text-sm text-gray-600">
                ${user.email}
            </p>

            <p class="text-sm text-gray-600">
                ${user.phone}
            </p>

        `;


        // Add card to grid
        ui.userGrid.appendChild(userCard);

    });

}


// Fetch users from API
async function fetchUsers() {

    // Show loading
    showLoading(true);

    // Remove previous error
    showError("");


    try {

        const response = await fetch(
            "https://randomuser.me/api/?results=12"
        );


        // Check API response
        if (!response.ok) {

            throw new Error("Failed to fetch users");

        }


        // Convert response to JSON
        const data = await response.json();


        // Store users
        allUsers = data.results;


        // Display users
        renderUsers(allUsers);

    }


    catch (error) {

        console.log(error);

        showError(
            "Could not load users. Please try again."
        );

    }


    finally {

        // Hide loading
        showLoading(false);

    }

}


// Search users
function searchUsers() {

    // Get search text
    const searchText =
        ui.searchInput.value.toLowerCase();


    // Filter users
    const filteredUsers = allUsers.filter(user => {

        const fullName =
            `${user.name.first} ${user.name.last}`
            .toLowerCase();

        const email =
            user.email.toLowerCase();


        return (
            fullName.includes(searchText) ||
            email.includes(searchText)
        );

    });


    // Show filtered users
    renderUsers(filteredUsers);

}


// Search button click
ui.searchButton.addEventListener(
    "click",
    searchUsers
);


// Search while typing
ui.searchInput.addEventListener(
    "input",
    searchUsers
);


// Load users when page opens
fetchUsers();