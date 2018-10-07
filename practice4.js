//partition labels problem
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let countHash = {};
    for(let i = 0; i < S.length; i++){
        if(countHash[S[i]]){
            countHash[S[i]] += 1;
        }else {
            countHash[S[i]] = 1;
        }
    }
    
    let counter = null;
    let currentCheck = {};
    let result = [];
    let lastIdx = 0;
    for(let j = 0; j < S.length; j++){
        if(!counter && countHash[S[j]] === 1){
            result.push(1);
            lastIdx = j + 1;
            continue;
        }
         if(!counter){
            counter = 1;
            currentCheck = {};
            currentCheck[S[j]] = true;
             countHash[S[j]] -= 1;  
             continue;
        }
        
        if (counter > 0){
            if(!currentCheck[S[j]]){
                if(countHash[S[j]] > 1){
                 countHash[S[j]] -= 1;
                currentCheck[S[j]] = true;
                counter += 1;
                }
            }else {
                countHash[S[j]] -= 1;
                if(countHash[S[j]] === 0) counter -= 1;
            }
        }
        
        if(counter === 0){
            counter = null;
            currentCheck = {};
            result.push(j + 1 - lastIdx);
            lastIdx = j + 1;
        }
    }
    return result;
};