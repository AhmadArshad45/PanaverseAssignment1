// # 20-
console.log("\n\n// # 20-\n")
let fruits = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];
console.log("My favorite fruits are:");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// # 21-
console.log("\n\n// # 21-\n")
type Fruits = {
    name: string;
    price: number;
}
let fruits2: Fruits[] = [
    { name: "apple", price: 20},
    { name: "banana", price: 30},
    { name: "cherry", price: 50},
    { name: "dates", price: 70},
    { name: "elderberry", price: 100}
];
console.log(fruits2)
console.log(fruits2[0].name)

// # 22-
console.log("\n\n// # 22-\n")
  console.log("Done");

// # 23-
console.log("\n\n// # 23-\n")
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
let fruit = 'apple';
console.log("\nIs fruit == 'apple'? I predict True.")
console.log(fruit == 'apple')
let color = 'green';
console.log("\nIs color == 'green'? I predict True.")
console.log(color == 'green')
let color2 = 'blue';
console.log("\nIs color2 == 'blue'? I predict True.")
console.log(color2 == 'blue')
let color3 = 'red';
console.log("\nIs color3 == 'red'? I predict True.")
console.log(color3 == 'red')
let planet = 'mars';
console.log("\nIs planet == 'earth'? I predict True.")
console.log(planet == 'earth')
let planet2 = 'earth';
console.log("\nIs planet2 == 'mars'? I predict True.")
console.log(planet2 == 'mars')
let country = 'pakistan';
console.log("\nIs country == 'america'? I predict True.")
console.log(country == 'america')
let country2 = 'england';
console.log("\nIs country2 == 'pakistan'? I predict True.")
console.log(country2 == 'pakistan')
let person_gender = 'male';
console.log("\nIs person_gender == 'female'? I predict True.")
console.log(person_gender == 'female')

// # 24-
console.log("\n\n// # 24-\n")
let day = "Monday"
console.log("Predict the day of week : I predict Monday")
console.log(day == "Monday")
let Capital = "Islamabad"
console.log("Which city is not the capital of Pakistan ? \n 1- Rawapindi\n 2- Islamabad\n I Select Rawalpindi")
console.log(Capital !== "Rawalpindi")
let password = "AkashMazhar"
let user_input = "akashmazhar"
console.log(user_input == password.toLowerCase())
let age2 = 5;
console.log("Age is : "+age2)
console.log("Is age is less than 5")
console.log(age2<5)
console.log("Is age is greater than 5")
console.log(age2>5)
console.log("Is age is greater than or equal to 5")
console.log(age2>=5)
console.log("Is age is less than or equal to 5")
console.log(age2<=5)
let num1 = 8;
let num2 = 9;
console.log("\nNumber 1 = "+num1+ " and Number 2 = "+num2)
console.log("Number 1 and Number 2 are greater than 10")
console.log(num1 > 10 && num2 > 10)
console.log("Number 1 or Number 2 is equal to 8")
console.log(num1 == 8 || num2 == 8)
let test_array = [5,4,2,1,6]
console.log("Array is : "+test_array)
console.log("Is 2 present in array !")
console.log(test_array.includes(2))
console.log("Is 3 not present in array !")
console.log(!test_array.includes(3))

// # 25-
console.log("\n\n// # 25-\n")
let alien_color = "red";
if(alien_color=="red"){
    console.log("You just earned 5 points!")
}
if(alien_color=="green"){
    console.log("You just earned 5 points!")
}

// # 26-
console.log("\n\n// # 26-\n")
let alien2_color = "green";
if(alien2_color=="green"){
    console.log("You just earned 5 points for shooting the alien!")
}
else{
    console.log("You just earned 10 points!")
}
if(alien2_color=="red"){
    console.log("You just earned 5 points for shooting the alien!")
}
else{
    console.log("You just earned 10 points!")
}

// # 27-
console.log("\n\n// # 27-\n")
let alien3_color = "Green";
if(alien3_color=="Green"){
    console.log("You just earned 5 points!")
}
if(alien3_color=="Yellow"){
    console.log("You just earned 10 points!")
}
if(alien3_color=="Red"){
    console.log("You just earned 15 points!")
}
alien3_color = "Yellow";
if(alien3_color=="Green"){
    console.log("\nYou just earned 5 points!")
}
if(alien3_color=="Yellow"){
    console.log("You just earned 10 points!")
}
if(alien3_color=="Red"){
    console.log("You just earned 15 points!")
}
alien3_color = "Red";
if(alien3_color=="Green"){
    console.log("\nYou just earned 5 points!")
}
if(alien3_color=="Yellow"){
    console.log("You just earned 10 points!")
}
if(alien3_color=="Red"){
    console.log("You just earned 15 points!")
}


// # 28-
console.log("\n\n// # 28-\n")
let age=65;
if (age<2){
    console.log("The person is a baby!")
}
else if (age>=2 && age<4){
    console.log("The person is a toddler!")
}
else if (age>=4 && age<13){
    console.log("The person is a kid!")
}
else if (age>=13 && age<20){
    console.log("The person is a teenager!")
}
else if (age>=20 && age<65){
    console.log("The person is an adult!")
}
else if (age>=65){
    console.log("The person is an elder!")
}


// # 29-
console.log("\n\n// # 29-\n")
let favourite_fruits = ["Apple","Mango","Watermelon","Peach","Pear"]
if (favourite_fruits.includes("Apple")){
    console.log("Apple is your favourite fruit!")
}
if (favourite_fruits.includes("Banana")){
    console.log("Banana is your favourite fruit!")
}
if (favourite_fruits.includes("Pear")){
    console.log("Pear is your favourite fruit!")
}
if (favourite_fruits.includes("Strawberry")){
    console.log("Strawberry is your favourite fruit!")
}
if (favourite_fruits.includes("Orange")){
    console.log("Orange is your favourite fruit!")
}

// # 30-
console.log("\n\n// # 30-\n")
let user_names: string | any[] = [];

for (let i=0; i<user_names.length; i++){
    if(user_names[i]=="Admin"){
        console.log("Hello "+user_names[i]+", would you like to see a status report?")
    }
    else{
        console.log("Hello "+user_names[i]+", thank you for logging in again.")
    }
}

// # 31-
console.log("\n\n// # 31-\n")
if (user_names.length == 0){
    console.log("We need to find some Users !")
}
for (let i=0; i<user_names.length; i++){
   
    if(user_names[i]=="Admin"){
        console.log("Hello "+user_names[i]+", would you like to see a status report?")
    }
    else{
        console.log("Hello "+user_names[i]+", thank you for logging in again.")
    }
}


// # 32-
console.log("\n\n// # 32-\n");
let current_users = ["Ahmad","Kamran","Tayyab","Hammad","Noman"];
let new_users = ["Akash","Fahad","Noman","Ammar","Atif"];

for (let i=0; i<new_users.length; i++){
    let counter = 0;
    for (let j=0; j<current_users.length; j++){
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()){
            console.log("User name" +" '" +new_users[i]+"'"+ " already exists !");
            counter++;
        } 
    }
    if(counter==0){
        console.log("This User name "+"'"+new_users[i]+"' is available.");
        
    }
}

// # 33-
console.log("\n\n// # 33-\n");
let ordinal_numbers = [1,2,3,4,5,6,7,8,9];
for (let i=0; i<ordinal_numbers.length; i++){
    if(ordinal_numbers[i]==1){
        console.log(+ordinal_numbers[i]+"st");
    }
    else if(ordinal_numbers[i]==2){
        console.log(ordinal_numbers[i]+"nd");
    }
    else if(ordinal_numbers[i]==3){
        console.log(ordinal_numbers[i]+"rd");
    }
    else{
        console.log(ordinal_numbers[i]+"th");
    }
}

// # 34-
console.log("\n\n// # 34-\n");
let pizzaNames = ["Cheesy","Non veg Pizza","Fajita"];
for (let i=0; i<pizzaNames.length; i++){
    console.log("I like "+pizzaNames[i]);
}
console.log("I really love Pizza");

// # 35-
console.log("\n\n// # 35-\n");
let animals = ["Dog","Cat","Rabbit"];
for (let i=0; i<animals.length; i++){
    console.log("A "+animals[i]+" is a very good Pet.");
}
console.log("Any of these animals would make a great pet!");

// # 36-
console.log("\n\n// # 36-\n");
function make_shirt(size:number,message:string){
    console.log("The size of the shirt is : "+size+"\nThe message printed on the shirt is : " + message);
}
make_shirt(32,"'Love comes without warning'");

// # 37-
console.log("\n\n// # 37-\n");
function make_shirt2(size:string,message:string){
    size = size || "Large";
    if(size=="Large"){
        message = "I love TypeScript"
        console.log("The size of the shirt is : "+size+"\nThe message printed on the shirt is : " + message)
    }
    else{
        console.log("The size of the shirt is : "+size+"\nThe message printed on the shirt is : " + message);
    }
}
make_shirt2("Large","'Love comes without warning'");

// # 38-
console.log("\n\n// # 38-\n");
function describeCity(city:string, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
  }
  describeCity('Karachi'); // output: Karachi is in Pakistan.
  describeCity('Lahore'); // output: Lahore is in Pakistan.
  describeCity('Paris', 'France'); // output: Paris is in France.
    

// # 39-
console.log("\n\n// # 39-\n");
function cityCountry(city:string, country:string) {
    return `${city}, ${country}`;
  }
  console.log(cityCountry('Lahore', 'Pakistan')); // output: Lahore, Pakistan
  console.log(cityCountry('Paris', 'France')); // output: Paris, France
  console.log(cityCountry('New York', 'USA')); // output: New York, USA

  // # 40-
console.log("\n\n// # 40-\n");
interface Album {
  artist: string;
  title: string;
  tracks?: number;
}
function make_album(artist_name: string, album_title: string, num_tracks?: number): Album {
  let album: Album = {
    artist: artist_name,
    title: album_title
  };
  if (num_tracks !== undefined) {
    album.tracks = num_tracks;
  }
  return album;
}
let album1 = make_album("Taylor Swift", "Fearless");
console.log(album1); // {artist: "Taylor Swift", title: "Fearless"}
let album2 = make_album("Ed Sheeran", "x", 12);
console.log(album2); // {artist: "Ed Sheeran", title: "x", tracks: 12}
let album3 = make_album("Billie Eilish", "Happier Than Ever", 16);
console.log(album3); // {artist: "Billie Eilish", title: "Happier Than Ever", tracks: 16}

// # 41-
console.log("\n\n// # 41-\n");
const magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians(magician_list:any) {
  for (let i = 0; i < magician_list.length; i++) {
    console.log(magician_list[i]);
  }
}
show_magicians(magicians);

// # 42-
console.log("\n\n// # 42-\n");
function make_great(magician_list:any) {
  for (let i = 0; i < magician_list.length; i++) {
    magician_list[i] = "the Great " + magician_list[i];
  }
}
make_great(magicians);
show_magicians(magicians);

// # 43-
console.log("\n\n// # 43-\n");
const magicians2 = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
function show_magicians2(magician_list:any) {
  for (let i = 0; i < magician_list.length; i++) {
    console.log(magician_list[i]);
  }
}
function make_great2(magician_list:any) {
  let great_magicians = [];
  for (let i = 0; i < magician_list.length; i++) {
    great_magicians.push("the Great " + magician_list[i]);
  }
  return great_magicians;
}
const great_magicians = make_great(magicians.slice());
show_magicians(magicians2);
console.log("--------");
show_magicians(great_magicians);

// # 44-
console.log("\n\n// # 44-\n");
function makeSandwich(...items: string[]): void {
  console.log("Sandwich with:");
  for (let i = 0; i < items.length; i++) {
    console.log("- " + items[i]);
  }
  console.log("Enjoy your sandwich!\n");
}
makeSandwich("ham", "cheese", "lettuce");
makeSandwich("turkey", "bacon");
makeSandwich("peanut butter", "jelly", "banana");

// # 45-
console.log("\n\n// # 45-\n");
function makeCar(manufacturer:string, model:string, ...options:string[]) {
  const car = { manufacturer, model };
  for (let i = 0; i < options.length; i += 2) {
    const key = options[i];
    const value = options[i + 1];
    car[key] = value;
  }
  return car;
}
const car1 = makeCar("Toyota", "Corolla", "color", "blue", "transmission", "automatic");
console.log(car1);
const car2 = makeCar("Ford", "Mustang", "color", "red", "convertible", "true");
console.log(car2);