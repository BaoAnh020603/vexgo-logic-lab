# 🤖 VEX GO Logic Lab — iPad Edition (MindX Thuận An)

Nền tảng **Sa bàn Nhiệm vụ 2.5D & Cơ chế Khóa Tư Duy Ghép Lệnh (Block-Unlocking Engine)** được thiết kế tối ưu cho **iPad / Tablet** và dùng xuyên suốt toàn bộ các khóa học **VEX GO** tại MindX Thuận An.

---

## 🚀 Cách chạy ngay lập tức (Không cần cài đặt)

1. **Chạy trực tiếp trên máy tính / giáo viên kiểm thử**:
   - Mở trực tiếp file [`index.html`](./index.html) bằng trình duyệt Chrome, Edge hoặc Safari.
   - Bấm nút **`📱 Khung iPad`** ở góc phải trên cùng để xem giao diện mô phỏng khung máy tính bảng **iPad Air (Landscape)** hoặc chế độ **Toàn màn hình**.

2. **Đưa lên iPad cho học viên tại lớp**:
   - Đẩy thư mục `vexgo-logic-lab` lên **Vercel**, **Netlify** hoặc **GitHub Pages** (đã cấu hình sẵn [`vercel.json`](./vercel.json) và [`manifest.json`](./manifest.json)).
   - Trên Safari của iPad tại lớp, mở link web ➔ bấm **Share (Chia sẻ)** ➔ chọn **"Thêm vào MH chính" (Add to Home Screen)**. Ứng dụng sẽ mở full-screen chuẩn iPad App (ẩn thanh địa chỉ Safari, chống zoom nhầm khi bé chạm liên tục).

---

## ✨ Các tính năng cốt lõi giải quyết bài toán Phụ huynh & QC

1. **Lộ trình Xuyên suốt các khóa VEX GO (Data-Driven Architecture)**:
   - Tích hợp sẵn 4 khóa học mẫu:
     - **Khóa 1: Code Base & Mars Rover** (*Buổi 1: Bước đi 200mm*, *Buổi 3: Mê cung & Góc xoay 90°*, *Buổi 5: Cảm biến Mắt Eye Sensor & Vật cản Sao Hỏa*, *Buổi 8: Nam châm điện Electromagnet*).
     - **Khóa 2: Super Car & Cơ khí Truyền động** (*Buổi 5: Kiểm soát Tốc độ & Đường đua*).
     - **Khóa 3: Robot Arm & Tự động hóa Công nghiệp** (*Buổi 4: Gắp kiện hàng thép & Phân loại*).
     - **Khóa 4: Ocean Science Exploration** (*Buổi 6: Tàu ngầm ROV thu gom rác biển*).

2. **Quy trình 3 Chặng + Báo cáo Zalo Phụ huynh / QC**:
   - **Chặng 1 (`1. Linh kiện`)**: Nhận diện phần cứng VEX GO trực quan 2.5D (*Brain, Smart Motor, Eye Sensor, Electromagnet, LED Bumper, Gears*).
   - **Chặng 2 (`2. Sa bàn & Khóa lệnh`)**:
     - **Cơ chế "Hỏi mới cho ghép" (`🔒 Hỏi để mở khóa`)**: Khi học viên chạm vào khối lệnh VEXcode GO, hệ thống bật Popup hỏi về ý nghĩa hoặc phép tính ô lưới (`1 ô = 200 mm`, góc xoay `90°/180°`, chế độ `boost/drop`). Trả lời đúng mới mở khóa và gắn vào chương trình; trả lời sai sẽ hiện **Gợi ý tư duy** để bé tự suy luận.
     - **Bước `1. Kiểm tra Logic (Nhẩm đường)`**: Highlight từng dòng lệnh từ trên xuống dưới kèm **đường chấm vàng dự đoán (Ghost Trajectory)** trên sa bàn để bé nhẩm đường đi trước khi chạy.
     - **Bước `2. Chạy Robot VEX GO`**: Di chuyển mượt mà trên sa bàn 2.5D với tia quét Eye Sensor, hiệu ứng hút mẫu vật Electromagnet, đổi màu đèn LED Bumper và âm thanh tương tác.
   - **Chặng 3 (`3. Trắc nghiệm`)**: Củng cố kiến thức lập trình & cơ khí cuối buổi.
   - **Chặng 4 (`★ Báo cáo PH/QC`)**: Tự động tổng hợp chỉ số *"Đã hiểu bản chất X/X khối lệnh trước khi lập trình"*, *"Hoàn thành 3/3 nhiệm vụ sa bàn"* và xuất đoạn văn nhận xét mẫu để **1-click Sao chép gửi thẳng vào Zalo Phụ huynh / LMS MindX**.

3. **Công cụ Giáo viên (`👩‍🏫 Soạn bài JSON` - Visual Map Builder)**:
   - Chạm trực tiếp lên lưới ô vuông để đặt vị trí **Robot**, **Cờ đích**, **Đá vật cản**, **Đĩa kim loại** hoặc nạp nhanh cấu hình JSON từ Slide bài giảng trong chưa đầy 10 phút.
