// Đợi cho toàn bộ trang web tải xong
document.addEventListener("DOMContentLoaded", function() {

    // Lấy các phần tử (element) bằng ID của chúng
    const openButton = document.getElementById("open-button");
    const closedCard = document.getElementById("closed-card");
    const openCard = document.getElementById("open-card");
    const messageElement = document.getElementById("message-text"); // Thêm ID cho đoạn P

    // Lưu nội dung tin nhắn ban đầu và xóa nó để chuẩn bị cho hiệu ứng gõ chữ
    const fullMessage = messageElement.innerHTML.trim();
    messageElement.innerHTML = "";

    // Hàm tạo hiệu ứng gõ chữ
    function typeEffect(element, text) {
      let i = 0;

      function typing() {
        if (i < text.length) {
          // Thêm ký tự và giữ nguyên các khoảng trắng, xuống dòng (pre-wrap)
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, 35); // Tốc độ gõ (35ms)
        }
      }

      typing();
    }

    // Thêm trình nghe sự kiện "click" vào nút "Mở"
    openButton.addEventListener("click", function() {
        
        // 1. Ẩn tấm thiệp đang đóng đi
        closedCard.style.display = "none";
        
        // 2. Hiển thị nội dung tấm thiệp (Kích hoạt hiệu ứng zoomIn của CSS)
        openCard.style.display = "block";

        // 3. Gọi hàm gõ chữ lên đoạn P
        typeEffect(messageElement, fullMessage);
    });
});