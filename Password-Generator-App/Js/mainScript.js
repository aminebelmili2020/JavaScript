function getPassowrd(){
    let chars = "0123456789abcdefigklmnopqrstuvwxyz=)_-(&²#{[|^@/*+.";
    var passowrdLength = 20;
    let Passowrd = "";

    for(let i=0; i<passowrdLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        Passowrd += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value = Passowrd
}
function Copied() {
    let copyText = document.getElementById("password");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    if (copyText.value==""){
        alert('No Password!! Please click "Generate Password"');
    }else{
        navigator.clipboard.writeText(copyText.value);
        alert("Copied Password \n "+ copyText.value);
    }
  }