const submit = document.getElementById('submitBtn');
submit.addEventListener('click', ()=>{
    checkPalindrome();
});

function checkPalindrome(){
    const palindromeText = document.getElementById('palindromeText').value;
    alert(palindromeText == palindromeText.split('').reverse().join(''));
};

function basicCheckPalindrome(){
    const palindromeText = document.getElementById('palindromeText').value;
    let isPalindrome = true;
    if (palindromeText.length > 1){
        // split in half, check if first half = reversed second half
        if (palindromeText.length % 2 === 0){
            isPalindrome = palindromeText.substring(0, palindromeText.length / 2) === palindromeText.substring(palindromeText.length/2).split('').reverse().join('');
        }else{
            isPalindrome = palindromeText.substring(0, palindromeText.length / 2) === palindromeText.substring(palindromeText.length/2 + 1).split('').reverse().join('');
        }
    }
    alert(isPalindrome);
};