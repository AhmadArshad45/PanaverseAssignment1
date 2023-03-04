var guestlist1 = ["Dr Muhammad Iqbal", "Nusrat Fateh Ali Khan", 'Jaun Elia', 'Virat Kohli'];
console.log(guestlist1[3], "is unable to attend the dinner.");
guestlist1[3] = 'Shahid Afridi';
for (var i = 0; i < guestlist1.length; i++) {
    console.log('Dear', guestlist1[i], ',You are invited to a Dinner at my house.');
}
