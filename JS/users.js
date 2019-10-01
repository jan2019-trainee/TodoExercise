const userData = [
  {
    id: "1",
    firstName: "Ayo",
    lastName: "Ogunsoundie",
    occupation: "General",
    profilePicture:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "2",
    firstName: "Sam",
    lastName: "Burriss",
    occupation: "Painter",
    profilePicture:
      "https://images.unsplash.com/photo-1506468203959-a06c860af8f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "3",
    firstName: "Andrey",
    lastName: "Martel",
    occupation: "Laborer",
    profilePicture:
      "https://images.unsplash.com/photo-1543762446-67600aab041f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "4",
    firstName: "Minamonoto",
    lastName: "Yaiba",
    occupation: "Shugon",
    profilePicture:
      "https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "5",
    firstName: "Eric",
    lastName: "Mclean",
    occupation: "Soldier",
    profilePicture:
      "https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "6",
    firstName: "John",
    lastName: "Doe",
    occupation: "Journalist",
    profilePicture:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "7",
    firstName: "Muzan",
    lastName: "Lih",
    occupation: "Dancer",
    profilePicture:
      "https://images.unsplash.com/photo-1542131597-a4390333d136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "8",
    firstName: "Bob",
    lastName: "Reck",
    occupation: "Builder",
    profilePicture:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "9",
    firstName: "Bezel",
    lastName: "Bub",
    occupation: "Teacher",
    profilePicture:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "10",
    firstName: "Sena",
    lastName: "IV",
    occupation: "Player",
    profilePicture:
      "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

// FOR FILTERING
const searchInput = document.getElementById("search");
const tableElement = document.getElementById("users-table");

searchInput.addEventListener("keyup", event => {
  const searchText = searchInput.value.toLowerCase();

  if (!searchText) {
    clearRows();
    addRows(userData);
  } else {
    const filteredUsers = userData.filter(user => {
      return (
        user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText)
      );
    });
    clearRows();
    addRows(filteredUsers);
  }
});

const clearRows = () => {
  const tbody = tableElement.children[1];
  Array.from(tbody.children).forEach((row) => {
    row.remove();
  });
};

const addRows = users => {
  const forEachCallbackFn = function(user) {
    const rowElement = document.createElement("tr");
    rowElement.classList = "row";

    const id = document.createElement("td");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const occupation = document.createElement("td");

    id.textContent = user.id;
    firstName.textContent = user.firstName;
    lastName.textContent = user.lastName;
    occupation.textContent = user.occupation;

    rowElement.appendChild(id);
    rowElement.appendChild(firstName);
    rowElement.appendChild(lastName);
    rowElement.appendChild(occupation);

    tableElement.children[1].appendChild(rowElement);
  };

  users.forEach(forEachCallbackFn);
};

addRows(userData);
