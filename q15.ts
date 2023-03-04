const guestlist2=["Dr Muhammad Iqbal","Nusrat Fateh Ali Khan",'Jaun Elia','Virat Kohli'];
console.log(guestlist2[3],"is unable to attend the dinner.");
guestlist2[3]='Shahid Afridi';
for(let i=0; i<guestlist2.length;i++)
    {
        console.log('Dear',guestlist2[i],',You are invited to a Dinner at my house.');

}
console.log('Guys I have a bigger dinner table');
guestlist2.unshift('Babar Azam');                   //add to begining
guestlist2.push("Emran Hashmi");                     //add to end
guestlist2.splice(3,0,'Salman Khan');               //add to middle
for(let i=0; i<guestlist2.length;i++)
    {
        console.log('Dear',guestlist2[i],',You are invited to a Dinner at my house.');

}
