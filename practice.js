var reorderedPowerOf2 = function(N) {
    let highestN = N.toString().split('').sort((a,b) => b - a).join('');
    let cache = cacheBuilder(parseInt(highestN));
    if(N.toString().includes('0') && N < 100) return false;
    
    let counterHash = {};
    let stringN = N.toString();
    for(let j = 0; j < stringN.length; j++){
        if(counterHash[stringN[j]]){
            counterHash[stringN[j]] += 1;
        }else {
            counterHash[stringN[j]] = 1;
        }
    }
    
    let counterString = JSON.stringify(counterHash);
    let valueArr = Object.values(cache);
    for(let k = 0; k < valueArr.length; k ++){
        if(JSON.stringify(valueArr[k]) === counterString){
            return true;
        }
    }
    return false;
};

function cacheBuilder(x){
    let cache = {};
    let current = 1;
    while (current <= x && current <= Number.MAX_SAFE_INTEGER){
        currentX = current.toString();
        cache[current] = {};
        for(let i = 0; i < currentX.length; i++){
            if(cache[current][currentX[i]]){
                cache[current][currentX[i]] += 1;
            }else {
                cache[current][currentX[i]] = 1;
            }
        }
        
        current = current * 2;
        
    }
    return cache;
}