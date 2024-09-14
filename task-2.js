/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(names){
    let smallestName = names[0];
    for(const friend of friends){
        if(friend < smallestName){
           smallestName = friend;
        }
    }
    return smallestName;

}
const smallName = getSmallestName(friends);
console.log(smallName);
