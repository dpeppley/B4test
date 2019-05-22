var initiate = false;
window.onload = function () {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    console.log("Image find function initiated");
    fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;
        if (file.type.match(imageType)) {
            var reader = new FileReader();
            reader.onload = function (e) {
                fileDisplayArea.innerHTML = "";
                var img = new Image();
                img.id = "fileDisplayArea";
                img.class = "img-zoom-result";
                console.log(img.src);
                img.src = reader.result;
                fileDisplayArea.appendChild(img);
                var img = new Image();
                img.src = reader.result;
                initiate = true;
                console.log(initiate);
                console.log("complete");
            }

            reader.readAsDataURL(file);
        } else {
            fileDisplayArea.innerHTML = "File type not supported";
        }
    });
}
