function Submitted(){
    let response = document.querySelector('input[name="yes_no"]:checked').value;
    if (response === "Yes"){
        alert('Welcome to the spcae.')
    } else if ( response === "No"){
        alert('Thank you for your time, we hope you change your mind.')
    } 
}


// function Submitted(){
//     let response;
//     if (response === 'Yes'){
//     alert('Welcome to the space.');
// } else if (response === 'No'){
//     alert('Thank you for your time, we hope you change your mind.')
// }
// }