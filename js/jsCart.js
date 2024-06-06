// Hàm cập nhật tổng tiền
function updateTotal() {
    const items = document.querySelectorAll('.cart-item');
    let total = 0;

    items.forEach(item => {
        const quantity = item.querySelector('input[type="number"]').value;
        const price = item.querySelector('input[type="number"]').dataset.price;
        total += quantity * price;
    });

    document.getElementById('total-amount').innerText = total.toLocaleString();
    document.getElementById('final-amount').innerText = total.toLocaleString();
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItem(button) {
    const item = button.closest('.cart-item');
    item.remove();
    updateTotal();
}

// Hàm áp dụng mã giảm giá
function applyVoucher() {
    const voucher = document.getElementById('voucher').value;
    const totalAmount = parseInt(document.getElementById('total-amount').innerText.replace(/,/g, ''));
    
    // Giả sử mã giảm giá là "DISCOUNT10" và giảm 10%
    if (voucher === '25%') {
        const discount = totalAmount * 0.1;
        const finalAmount = totalAmount - discount;
        document.getElementById('final-amount').innerText = finalAmount.toLocaleString();
        alert('Áp dụng mã giảm giá thành công!');
    } else {
        alert('Mã giảm giá không hợp lệ!');
    }
}

// Hàm tiếp tục mua hàng
function continueShopping() {
    alert('Chức năng tiếp tục mua hàng chưa được triển khai.');
}