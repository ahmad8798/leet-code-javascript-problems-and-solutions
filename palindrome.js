var isPalindrome = function(x) {
    let temp = x;
    let reversed = 0;
    
    while(x>0){
        let remainder = x%10;
        reversed=reversed*10+remainder;
        x = parseInt(x/10)
    }
    if(temp==reversed){
        return true
    }
    else{
        return false
    }
};