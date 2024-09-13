let qrText = document.getElementById("qr_text");
let qrGenerate = document.getElementById("qr_generate");
let DownloadQr = document.getElementById("Download_qr");
let qrDiv = document.getElementById("qr");
let QR = document.getElementById("QR_img");
let clearField = document.getElementById("clear_field");

clearField.addEventListener("click", function() {
    qrText.value = ""; 
    qrDiv.style.display = "none";
    DownloadQr.style.display = "none";

});

qrGenerate.addEventListener("click", function () {    
    if (qrText.value.length > 1) {
        qrGenerate.style.backgroundColor = "white";
        DownloadQr.style.display = "block";
        setTimeout(() => {
            qrGenerate.style.backgroundColor = "#7315ff";
        }, 200);
        qrDiv.style.display = "block";
        QR.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + qrText.value;
    }
    else {
        qrDiv.style.display = "none";
        DownloadQr.style.display = "none";
        qrGenerate.setAttribute("class", "shake");
        setTimeout(() => {
          qrGenerate.removeAttribute("class", "shake");
        }, 300);
    }
});


function downloadImage() {
  // Image URL
  var imageUrl = QR.src;

  // Fetch the image as a Blob
  fetch(imageUrl)
    .then(function (response) {
      return response.blob();
    })
    .then(function (blob) {
      // Create a download link
      var link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "image.jpg";

      // Trigger the download
      link.click();

      // Clean up the temporary URL
      URL.revokeObjectURL(link.href);
    });
}
