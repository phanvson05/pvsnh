var isButton = document.querySelectorAll('a[role="button"]');
isButton.forEach((x) => {
    x.addEventListener('click', function(){
        alert('Đã thêm sản phẩm vào giỏ hàng!')
    })
})