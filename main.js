


async function payWithPaystack(){

 var no = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

// const fileInput = document.getElementById('fileImage');
// const fileInputed = document.getElementById('fileImage').files;




if(no === ''||email === '' ){
 alert("Please fill in all mandatory fields");
return false;

 }


//  if ( fileInputed.length >5  ) {
//         alert("You can only select a maxium of 5 images.");
//         return;

//     }

  //  const files = fileInput.files;

//             const formData = new FormData();

//  for (let i = 0; i < files.length; i++) {
//                 formData.append('images', files[i]);
//             }
// formData.append('userids', userids);

 var handler = PaystackPop.setup({

key:'pk_live_b3635cadaea0a7a02518aed3dd9e8ac3d64a83cc',
    //  key:'pk_test_733942352847369db55d32dc2b83d44db6b47fb1',
      email:email,
      amount: 3500 * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: '',
                variable_name: "mobile_number",
                value: no
            }
         ]
      },
      callback: function (response){
 if (response.status){
window.open('download.html','Title','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no');

window.history.replaceState('','','/');


}
else{
    alert('Try again in a few minutes')
}

      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();


}

function homepage() {
 window.location.href ='index.html';
}


function on2() {
  document.getElementById("overlay2").style.display = "block";
}

function off2() {
 document.getElementById("overlay2").style.display = "none";
}