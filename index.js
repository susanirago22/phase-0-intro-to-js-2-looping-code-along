//// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }
// let string_name = ["Ada", "Brendan", "Ali"];
// let event_name = "birthday";
// const string_name = [];
// let event_name = "";
function writeCards(string_name, event_name)
{
    var array_store = []; 
    for (let counter = 0; counter < string_name.length; counter++)
    {    
        array_store.push(`Thank you, ${string_name[counter]}, for the wonderful ${event_name} gift!`);
        
    }
    return array_store;
}

 function countDown(integer)
 {
    
    while (integer >= 0)
    {
        console.log(integer)
        integer--;
    }
 } 
