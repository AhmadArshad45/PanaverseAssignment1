const guestlist3=["Dr Muhammad Iqbal","Nusrat Fateh Ali Khan",'Jaun Elia','Virat Kohli'];
console.log(guestlist3[3],"is unable to attend the dinner.");
guestlist3[3]='Shahid Afridi';
for(let i=0; i<guestlist3.length;i++)
    {
        console.log('Dear',guestlist3[i],',You are invited to a Dinner at my house.');

}
console.log('Guys I have a bigger dinner table');
guestlist3.unshift('Babar Azam');                   //add to begining
guestlist3.push("Emran Hashmi");                     //add to end
guestlist3.splice(3,0,'Salman Khan');               //add to middle
for(let i=0; i<guestlist3.length;i++)
    {
        console.log('Dear',guestlist3[i],',You are invited to a Dinner at my house.');

}
console.log("I have space for only two guest");
while(guestlist3.length>2){
let name= guestlist3.pop();
console.log("Sorry you are not invited to Dinner",name);
}
console.log('You are still invited',guestlist3);
while(guestlist3.length>0){
    guestlist3.pop();
    
    }
    console.log("Empty guest list",guestlist3);