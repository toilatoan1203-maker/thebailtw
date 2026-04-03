# Memory Matching Game

Một trò chơi ghép đôi thẻ nhớ cổ điển với hiệu ứng lật 3D hiện đại và thiết kế đáp ứng (responsive).

## ✨ Tính năng
- **Hiệu ứng lật 3D**: Sử dụng CSS Transform 3D cao cấp.
- **Thiết kế Responsive**: Tự động chuyển đổi giữa 2 cột (mobile) và 4 cột (desktop).
- **Logic Trò chơi**: Bao gồm xáo bài, kiểm tra cặp trùng, đếm lượt chơi và thông báo chiến thắng.
- **Giao diện Hiện đại**: Chế độ tối (dark mode), hiệu ứng kính (glassmorphism) và chuyển động mượt mà.

## 📁 Cấu trúc thư mục
Dự án được tổ chức theo tiêu chuẩn:

```text
gamelatthe/
├── 📁 assets/               # Tài nguyên của trang web
│   ├── 📁 css/              # File định dạng giao diện (.css)
│   │   └── style.css
│   ├── 📁 js/               # File xử lý logic (.js)
│   │   └── script.js
│   ├── 📁 img/              # Hình ảnh (jpg, png, svg...)
│   └── 📁 fonts/            # Bộ font chữ
├── 📁 vendor/               # Thư viện bên ngoài (nếu có)
├── index.html               # Trang chủ chính
├── project.md               # Thông tin kỹ thuật dự án
└── README.md                # Ghi chú dự án
```

## 🎮 Cách chơi
1. Click vào một thẻ để lật.
2. Tìm thẻ thứ hai có cùng biểu tượng.
3. Nếu khớp, chúng sẽ giữ nguyên trạng thái mở.
4. Nếu không khớp, chúng sẽ tự lật lại sau 1 giây.
5. Ghép đúng tất cả các cặp để giành chiến thắng!

## 🛠 Phát triển
- **HTML**: Sử dụng các thẻ semantic để tối ưu SEO.
- **CSS**: Vanilla CSS cho độ linh hoạt cao, không dùng thư viện ngoài.
- **JS**: Vanilla JS xử lý logic mượt mà.

---
Phát triển bởi **Antigravity AI**.
