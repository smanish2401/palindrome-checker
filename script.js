const userInput = document.getElementById("text-input");
const checkPalindromeBTN = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkForPalindrome = (input)=>{
    const originalInput  = input;
    if(input === ''){
        alert("Please input a value")
    }

    // // Remove the previous result
    resultDiv.replaceChildren()

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
    //console.log("lowercasestr",lowerCaseStr)
    let resultMsg = `<strong>${originalInput}</strong> ${
        lowerCaseStr === [...lowerCaseStr].reverse().join("")? "is" : "is not"
    } a palindrome.`
     //console.log(resultMsg)

     const pTag = document.createElement("p");
        pTag.innerHTML = resultMsg;
        resultDiv.append(pTag)

//showResult
   resultDiv.classList.remove('hidden')
}

checkPalindromeBTN.addEventListener("click",()=>{
    checkForPalindrome(userInput.value);
    userInput.value = '';
})
userInput.addEventListener("keydown",(e)=>{
    //console.log(e.key)
    if(e.key === "Enter"){
        checkForPalindrome(userInput.value);
        userInput.value = ''; 
    }

    
})