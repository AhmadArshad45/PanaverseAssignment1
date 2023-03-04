const guestlist4=["Dr Muhammad Iqbal","Nusrat Fateh Ali Khan",'Jaun Elia','Virat Kohli'];
console.log(guestlist4[3],"is unable to attend the dinner.");
guestlist4[3]='Shahid Afridi';
for(let i=0; i<guestlist4.length;i++)
    {
        console.log('Dear',guestlist4[i],',You are invited to a Dinner at my house.');

}
console.log('Guys I have a bigger dinner table');
guestlist4.unshift('Babar Azam');                   //add to begining
guestlist4.push("Emran Hashmi");                     //add to end
guestlist4.splice(3,0,'Salman Khan');
console.log(guestlist4.length);