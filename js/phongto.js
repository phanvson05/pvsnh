// Lấy tất cả các ảnh trong .box-index và gắn sự kiện click
var images = document.querySelectorAll(".box-index img");

images.forEach(function (image) {
  image.onclick = function () {
    var lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "block"; // Sử dụng flex để căn giữa ảnh
    lightbox.querySelector("img").src = this.src;

    // Đóng lightbox khi nhấn vào vùng xung quanh ảnh
    lightbox.querySelector("div").onclick = function () {
      lightbox.style.display = "none";
    };
  };
});
