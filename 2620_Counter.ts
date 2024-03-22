var createCounter = function(n: number) {
    return function() {
        return n++;    
    }  
};
 
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12