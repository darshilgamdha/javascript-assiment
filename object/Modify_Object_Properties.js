// Modify Object Properties:
// Task: Given the object house = { rooms: 4, color: 'blue', location: 'city' }, write a function to update the color property to 'green'.

 house = {
    rooms: 4,
    color: "blue",
    location: "city"
}

function updateColor(newColor) {
    house.color = newColor;
}

updateColor('green');

console.log(house.color); // 


