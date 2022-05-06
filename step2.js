const sumZero = (arr) => {
    let result = false
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] + arr[i] === 0){
                result = true
                return result
            }else{
                return result
            }
        }
    }
}
// console.log(sumZero([1,2,3,4,2]))
// Run time 
// O(n^2)
// SpaceTime 
// O(1)

const hasUniqueChars = (string) => {
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < string.length; j++){
            if(i !== j){
                if(string[i] === string[j]){
                    return false;
                     }
                 }
              }
        
        
        }
    return true;
}

// console.log(hasUniqueChars('hello'), hasUniqueChars('random'))
// Run Time 
// O(n^2)
//SpaceTime
// O(1)



const isPangram = (string) => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0){
            return false
        }
    }
    return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// RunTime
// O(n)
// SpaceTime 
// O(n)


const longestWord = (arr) => {
    let longWord = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longWord.length){
            longWord.splice(0, 1, arr[i])
        }
    }
    return longWord[0].length
}

// console.log(longestWord(['hi', 'hello', 'wounderful']))
// RunTime 
// O(n)
// SpaceTime
// O(1)