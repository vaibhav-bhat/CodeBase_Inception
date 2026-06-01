const characters = ["A","B","C","D","E","F","G","H",
    "I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2",
     "3", "4", "5", "6", "7", "8", "9","~","`","!",
     "@","#","$","%","^","&","*","(",")","_","-","+",
     "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];



let pass1Text = document.getElementById("pwd1")
let pass2Text = document.getElementById("pwd2")


function fillPassword()
{
    let pwdLen = parseInt(document.getElementById("pass-len").value);
    console.log("generating password of length "+ pwdLen)
    pass1Text.textContent = generatePassword(pwdLen)
    pass2Text.textContent = generatePassword(pwdLen)
}
function generatePassword(pwdLen)
{
    let password = ""
    if(isNaN(pwdLen))
    {
        console.log("enter only the numbers")   
        return ""    
    }
    else if(pwdLen < 8)
    {
        console.error("Password should be atelast 8 charecters long");
        
    }
    else
    {
        for(let i = 0;i<pwdLen; i++)
        {
            let randomIndex = Math.floor( Math.random()*characters.length)
            password+=characters[randomIndex]
        }

    }
     return password
}


