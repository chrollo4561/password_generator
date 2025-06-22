function generatePassword(){
    var characterset= "";
    if(document.getElementById("addLetters").checked){
        characterset += "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    }
    if(document.getElementById("addNumbers").checked){
        characterset += "1234567890";
    }
    if(document.getElementById("addSymbols").checked){
        characterset += "!@#$%^&*()+_-=;:?,.";
    }
    
    var password = "";

    if(characterset === ""){
        alert("Select atleast one option");
        return;
    }

    var length = parseInt(document.getElementById("length").value);
    for(var i=0; i<length ; i++){
        password += characterset[Math.floor(Math.random()*characterset.length)];
    }

    document.getElementById("output").value= password;
}

function copyToClipboard(){
    if(document.getElementById("output").value === ""){
        alert("nothing in there to copy");
        return;
    }
    document.getElementById("output").select();
    document.execCommand("copy");
    alert("Copied to clipboard");
}
