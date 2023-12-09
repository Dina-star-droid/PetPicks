document.getElementById("upload-form").addEventListener("submit", function (e){
  
    e.preventDefult();

    let formData = new formData(this);
    
    fetch("/upload", {
        method: "post",
        body: formData
    })
    .then(response => response.json())
        .then(data => {
            document.getElementById('result-container').innertext = 'result:' + data.result;
        })
        .catch(error => {
            console.log(error);
        });
});

