// # 20-
console.log("\n\n// # 20-\n");
var fruits = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];
console.log("My favorite fruits are:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// # 21-
console.log("\n\n// # 21-\n");
var fruits2 = [
    { name: "apple", price: 20 },
    { name: "banana", price: 30 },
    { name: "cherry", price: 50 },
    { name: "dates", price: 70 },
    { name: "elderberry", price: 100 }
];
console.log(fruits2);
console.log(fruits2[0].name);
// # 22-
console.log("\n\n// # 22-\n");
console.log("Done");
// # 23-
console.log("\n\n// # 23-\n");
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
var fruit = 'apple';
console.log("\nIs fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
var color = 'green';
console.log("\nIs color == 'green'? I predict True.");
console.log(color == 'green');
var color2 = 'blue';
console.log("\nIs color2 == 'blue'? I predict True.");
console.log(color2 == 'blue');
var color3 = 'red';
console.log("\nIs color3 == 'red'? I predict True.");
console.log(color3 == 'red');
var planet = 'mars';
console.log("\nIs planet == 'earth'? I predict True.");
console.log(planet == 'earth');
var planet2 = 'earth';
console.log("\nIs planet2 == 'mars'? I predict True.");
console.log(planet2 == 'mars');
var country = 'pakistan';
console.log("\nIs country == 'america'? I predict True.");
console.log(country == 'america');
var country2 = 'england';
console.log("\nIs country2 == 'pakistan'? I predict True.");
console.log(country2 == 'pakistan');
var person_gender = 'male';
console.log("\nIs person_gender == 'female'? I predict True.");
console.log(person_gender == 'female');
// # 24-
console.log("\n\n// # 24-\n");
var day = "Monday";
console.log("Predict the day of week : I predict Monday");
console.log(day == "Monday");
var Capital = "Islamabad";
console.log("Which city is not the capital of Pakistan ? \n 1- Rawapindi\n 2- Islamabad\n I Select Rawalpindi");
console.log(Capital !== "Rawalpindi");
var password = "AkashMazhar";
var user_input = "akashmazhar";
console.log(user_input == password.toLowerCase());
var age2 = 5;
console.log("Age is : " + age2);
console.log("Is age is less than 5");
console.log(age2 < 5);
console.log("Is age is greater than 5");
console.log(age2 > 5);
console.log("Is age is greater than or equal to 5");
console.log(age2 >= 5);
console.log("Is age is less than or equal to 5");
console.log(age2 <= 5);
var num1 = 8;
var num2 = 9;
console.log("\nNumber 1 = " + num1 + " and Number 2 = " + num2);
console.log("Number 1 and Number 2 are greater than 10");
console.log(num1 > 10 && num2 > 10);
console.log("Number 1 or Number 2 is equal to 8");
console.log(num1 == 8 || num2 == 8);
var test_array = [5, 4, 2, 1, 6];
console.log("Array is : " + test_array);
console.log("Is 2 present in array !");
console.log(test_array.includes(2));
console.log("Is 3 not present in array !");
console.log(!test_array.includes(3));
// # 25-
console.log("\n\n// # 25-\n");
var alien_color = "red";
if (alien_color == "red") {
    console.log("You just earned 5 points!");
}
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
// # 26-
console.log("\n\n// # 26-\n");
var alien2_color = "green";
if (alien2_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
if (alien2_color == "red") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
// # 27-
console.log("\n\n// # 27-\n");
var alien3_color = "Green";
if (alien3_color == "Green") {
    console.log("You just earned 5 points!");
}
if (alien3_color == "Yellow") {
    console.log("You just earned 10 points!");
}
if (alien3_color == "Red") {
    console.log("You just earned 15 points!");
}
alien3_color = "Yellow";
if (alien3_color == "Green") {
    console.log("\nYou just earned 5 points!");
}
if (alien3_color == "Yellow") {
    console.log("You just earned 10 points!");
}
if (alien3_color == "Red") {
    console.log("You just earned 15 points!");
}
alien3_color = "Red";
if (alien3_color == "Green") {
    console.log("\nYou just earned 5 points!");
}
if (alien3_color == "Yellow") {
    console.log("You just earned 10 points!");
}
if (alien3_color == "Red") {
    console.log("You just earned 15 points!");
}
// # 28-
console.log("\n\n// # 28-\n");
var age = 65;
if (age < 2) {
    console.log("The person is a baby!");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler!");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid!");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager!");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult!");
}
else if (age >= 65) {
    console.log("The person is an elder!");
}
// # 29-
console.log("\n\n// # 29-\n");
var favourite_fruits = ["Apple", "Mango", "Watermelon", "Peach", "Pear"];
if (favourite_fruits.includes("Apple")) {
    console.log("Apple is your favourite fruit!");
}
if (favourite_fruits.includes("Banana")) {
    console.log("Banana is your favourite fruit!");
}
if (favourite_fruits.includes("Pear")) {
    console.log("Pear is your favourite fruit!");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("Strawberry is your favourite fruit!");
}
if (favourite_fruits.includes("Orange")) {
    console.log("Orange is your favourite fruit!");
}
// # 30-
console.log("\n\n// # 30-\n");
var user_names = [];
for (var i_1 = 0; i_1 < user_names.length; i_1++) {
    if (user_names[i_1] == "Admin") {
        console.log("Hello " + user_names[i_1] + ", would you like to see a status report?");
    }
    else {
        console.log("Hello " + user_names[i_1] + ", thank you for logging in again.");
    }
}
// # 31-
console.log("\n\n// # 31-\n");
if (user_names.length == 0) {
    console.log("We need to find some Users !");
}
for (var i_2 = 0; i_2 < user_names.length; i_2++) {
    if (user_names[i_2] == "Admin") {
        console.log("Hello " + user_names[i_2] + ", would you like to see a status report?");
    }
    else {
        console.log("Hello " + user_names[i_2] + ", thank you for logging in again.");
    }
}
// # 32-
console.log("\n\n// # 32-\n");
var current_users = ["Ahmad", "Kamran", "Tayyab", "Hammad", "Noman"];
var new_users = ["Akash", "Fahad", "Noman", "Ammar", "Atif"];
for (var i_3 = 0; i_3 < new_users.length; i_3++) {
    var counter = 0;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i_3].toLowerCase() == current_users[j].toLowerCase()) {
            console.log("User name" + " '" + new_users[i_3] + "'" + " already exists !");
            counter++;
        }
    }
    if (counter == 0) {
        console.log("This User name " + "'" + new_users[i_3] + "' is available.");
    }
}
// # 33-
console.log("\n\n// # 33-\n");
var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i_4 = 0; i_4 < ordinal_numbers.length; i_4++) {
    if (ordinal_numbers[i_4] == 1) {
        console.log(+ordinal_numbers[i_4] + "st");
    }
    else if (ordinal_numbers[i_4] == 2) {
        console.log(ordinal_numbers[i_4] + "nd");
    }
    else if (ordinal_numbers[i_4] == 3) {
        console.log(ordinal_numbers[i_4] + "rd");
    }
    else {
        console.log(ordinal_numbers[i_4] + "th");
    }
}
// # 34-
console.log("\n\n// # 34-\n");
var pizzaNames = ["Cheesy", "Non veg Pizza", "Fajita"];
for (var i_5 = 0; i_5 < pizzaNames.length; i_5++) {
    console.log("I like " + pizzaNames[i_5]);
}
console.log("I really love Pizza");
// # 35-
console.log("\n\n// # 35-\n");
var animals = ["Dog", "Cat", "Rabbit"];
for (var i_6 = 0; i_6 < animals.length; i_6++) {
    console.log("A " + animals[i_6] + " is a very good Pet.");
}
console.log("Any of these animals would make a great pet!");
// # 36-
console.log("\n\n// # 36-\n");
function make_shirt(size, message) {
    console.log("The size of the shirt is : " + size + "\nThe message printed on the shirt is : " + message);
}
make_shirt(32, "'Love comes without warning'");
// # 37-
console.log("\n\n// # 37-\n");
function make_shirt2(size, message) {
    size = size || "Large";
    if (size == "Large") {
        message = "I love TypeScript";
        console.log("The size of the shirt is : " + size + "\nThe message printed on the shirt is : " + message);
    }
    else {
        console.log("The size of the shirt is : " + size + "\nThe message printed on the shirt is : " + message);
    }
}
make_shirt2("Large", "'Love comes without warning'");
// # 38-
console.log("\n\n// # 38-\n");
function describeCity(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity('Karachi'); // output: Karachi is in Pakistan.
describeCity('Lahore'); // output: Lahore is in Pakistan.
describeCity('Paris', 'France'); // output: Paris is in France.
// # 39-
console.log("\n\n// # 39-\n");
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(cityCountry('Lahore', 'Pakistan')); // output: Lahore, Pakistan
console.log(cityCountry('Paris', 'France')); // output: Paris, France
console.log(cityCountry('New York', 'USA')); // output: New York, USA
// # 40-
console.log("\n\n// # 40-\n");
function make_album(artist_name, album_title, num_tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (num_tracks !== undefined) {
        album.tracks = num_tracks;
    }
    return album;
}
var album1 = make_album("Taylor Swift", "Fearless");
console.log(album1); // {artist: "Taylor Swift", title: "Fearless"}
var album2 = make_album("Ed Sheeran", "x", 12);
console.log(album2); // {artist: "Ed Sheeran", title: "x", tracks: 12}
var album3 = make_album("Billie Eilish", "Happier Than Ever", 16);
console.log(album3); // {artist: "Billie Eilish", title: "Happier Than Ever", tracks: 16}
// # 41-
console.log("\n\n// # 41-\n");
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians(magician_list) {
    for (var i_7 = 0; i_7 < magician_list.length; i_7++) {
        console.log(magician_list[i_7]);
    }
}
show_magicians(magicians);
// # 42-
console.log("\n\n// # 42-\n");
function make_great(magician_list) {
    for (var i_8 = 0; i_8 < magician_list.length; i_8++) {
        magician_list[i_8] = "the Great " + magician_list[i_8];
    }
}
make_great(magicians);
show_magicians(magicians);
// # 43-
console.log("\n\n// # 43-\n");
var magicians2 = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians2(magician_list) {
    for (var i_9 = 0; i_9 < magician_list.length; i_9++) {
        console.log(magician_list[i_9]);
    }
}
function make_great2(magician_list) {
    var great_magicians = [];
    for (var i_10 = 0; i_10 < magician_list.length; i_10++) {
        great_magicians.push("the Great " + magician_list[i_10]);
    }
    return great_magicians;
}
var great_magicians = make_great(magicians.slice());
show_magicians(magicians2);
console.log("--------");
show_magicians(great_magicians);
// # 44-
console.log("\n\n// # 44-\n");
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich with:");
    for (var i_11 = 0; i_11 < items.length; i_11++) {
        console.log("- " + items[i_11]);
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("ham", "cheese", "lettuce");
makeSandwich("turkey", "bacon");
makeSandwich("peanut butter", "jelly", "banana");
// # 45-
console.log("\n\n// # 45-\n");
function makeCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var i_12 = 0; i_12 < options.length; i_12 += 2) {
        var key = options[i_12];
        var value = options[i_12 + 1];
        car[key] = value;
    }
    return car;
}
var car1 = makeCar("Toyota", "Corolla", "color", "blue", "transmission", "automatic");
console.log(car1);
var car2 = makeCar("Ford", "Mustang", "color", "red", "convertible", "true");
console.log(car2);
