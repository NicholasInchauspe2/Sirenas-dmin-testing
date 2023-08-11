import { height } from "@mui/system";

const usersMock = [];

function generateRandomName() {
    const names = ['John', 'Emma', 'Michael', 'Olivia', 'William', 'Sophia', 'James', 'Ava', 'Benjamin', 'Isabella'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Función para generar un ID aleatorio
function generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }

// Generar usuarios aleatorios
for (let i = 0; i < 60; i++) {
    const user = {
        id: generateRandomId(),
        name: generateRandomName(),
        lastname: 'Doe',
        dni: Math.floor(Math.random() * 100000000),
        age: Math.floor(Math.random() * 50) + 18,
        email: `${generateRandomName().toLowerCase()}@mail.com`,
        instagram: `@${generateRandomName().toLowerCase()}`,
        address: '123 Main St',
        phone: Math.floor(Math.random() * 1000000000),
        height: Math.floor(Math.random() * 100) / 100 + 1,
    };
    usersMock.push(user);
}


export default usersMock

// {
//     id,
//     name,
//     lastname,
//     dni,
//     age,
//     email,
//     instagram,
//     address,
//     phone,
//     height,
//     pay
// }