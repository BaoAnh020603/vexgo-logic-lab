// ============================================================================
// MINDX VEX GO - HỆ THỐNG TRẮC NGHIỆM LUÂN PHIÊN THEO NHÓM (PREA - PREB - PREI)
// Thiết kế cho lớp 5 học viên (Chia nhóm 2-3 bạn / 1 iPad - Bắt buộc đổi lượt mỗi câu)
// ============================================================================

window.VEXGO_VISUAL_SVGS = {
  // Khối lệnh VEXcode GO chuẩn (Giống slide p19)
  block_when_started: `
    <div class="vex-visual-block hat-yellow">
      <span>when started</span>
    </div>
  `,
  block_spin_forward: `
    <div class="vex-visual-block motion-blue">
      <span>spin</span>
      <span class="v-rect">Motor1 ▾</span>
      <span class="v-rect">forward ▾</span>
    </div>
  `,
  block_spin_for_90: `
    <div class="vex-visual-block motion-blue">
      <span>spin</span>
      <span class="v-rect">Motor1 ▾</span>
      <span class="v-rect">forward ▾</span>
      <span>for</span>
      <span class="v-oval">90</span>
      <span class="v-rect">degrees ▾</span>
      <span>▶</span>
    </div>
  `,
  block_spin_to_pos: `
    <div class="vex-visual-block motion-blue">
      <span>spin</span>
      <span class="v-rect">Motor1 ▾</span>
      <span>to position</span>
      <span class="v-oval">90</span>
      <span class="v-rect">degrees ▾</span>
      <span>▶</span>
    </div>
  `,
  block_stop_motor: `
    <div class="vex-visual-block motion-blue">
      <span>stop</span>
      <span class="v-rect">Motor1 ▾</span>
    </div>
  `,
  block_set_velocity: `
    <div class="vex-visual-block motion-blue">
      <span>set</span>
      <span class="v-rect">Motor1 ▾</span>
      <span>velocity to</span>
      <span class="v-oval">50</span>
      <span>%</span>
    </div>
  `,
  block_set_stopping: `
    <div class="vex-visual-block motion-blue">
      <span>set</span>
      <span class="v-rect">Motor1 ▾</span>
      <span>stopping to</span>
      <span class="v-rect">brake ▾</span>
    </div>
  `,
  block_set_torque: `
    <div class="vex-visual-block motion-blue">
      <span>set</span>
      <span class="v-rect">Motor1 ▾</span>
      <span>max torque to</span>
      <span class="v-oval">50</span>
      <span>%</span>
    </div>
  `,
  block_set_timeout: `
    <div class="vex-visual-block motion-blue">
      <span>set</span>
      <span class="v-rect">Motor1 ▾</span>
      <span>timeout to</span>
      <span class="v-oval">1</span>
      <span>seconds</span>
    </div>
  `,
  // Linh kiện phần cứng VEX GO
  part_brain: `
    <svg viewBox="0 0 120 90" width="110" height="84">
      <rect x="20" y="10" width="80" height="70" rx="12" fill="#0072ce" stroke="#e2e8f0" stroke-width="3"/>
      <rect x="32" y="22" width="56" height="30" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="60" cy="66" r="6" fill="#22c55e"/>
      <text x="60" y="41" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="900">VEX GO BRAIN</text>
    </svg>
  `,
  part_motor: `
    <svg viewBox="0 0 120 90" width="110" height="84">
      <rect x="18" y="22" width="60" height="46" rx="8" fill="#475569" stroke="#e2e8f0" stroke-width="3"/>
      <circle cx="82" cy="45" r="16" fill="#0ea5e9" stroke="#fff" stroke-width="3"/>
      <rect x="77" y="40" width="10" height="10" fill="#0f172a"/>
      <text x="46" y="49" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">MOTOR 1</text>
    </svg>
  `,
  part_pins_beams: `
    <svg viewBox="0 0 120 90" width="110" height="84">
      <rect x="14" y="20" width="92" height="22" rx="5" fill="#f97316" stroke="#fff" stroke-width="2"/>
      <circle cx="30" cy="31" r="4" fill="#0f172a"/>
      <circle cx="60" cy="31" r="4" fill="#0f172a"/>
      <circle cx="90" cy="31" r="4" fill="#0f172a"/>
      <rect x="36" y="54" width="18" height="22" rx="4" fill="#ef4444" stroke="#fff" stroke-width="2"/>
      <rect x="66" y="54" width="18" height="22" rx="4" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
    </svg>
  `,
  part_pin_tool: `
    <svg viewBox="0 0 120 90" width="110" height="84">
      <path d="M25 55 L70 25 L95 40 L50 70 Z" fill="#0284c7" stroke="#fff" stroke-width="2.5"/>
      <circle cx="78" cy="38" r="6" fill="#0f172a"/>
      <text x="60" y="82" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="800">PIN TOOL (KÌM GỠ CHỐT)</text>
    </svg>
  `,
  part_eye_sensor: `
    <svg viewBox="0 0 120 90" width="110" height="84">
      <rect x="24" y="22" width="72" height="46" rx="14" fill="#10b981" stroke="#fff" stroke-width="3"/>
      <circle cx="60" cy="45" r="15" fill="#0f172a" stroke="#a7f3d0" stroke-width="2.5"/>
      <circle cx="60" cy="45" r="6" fill="#38bdf8"/>
    </svg>
  `,
  part_gears: `
    <svg viewBox="0 0 120 90" width="110" height="84">
      <circle cx="45" cy="45" r="22" fill="#f59e0b" stroke="#fef3c7" stroke-width="4" stroke-dasharray="8 4"/>
      <circle cx="82" cy="45" r="14" fill="#ec4899" stroke="#fce7f3" stroke-width="3" stroke-dasharray="6 3"/>
      <rect x="41" y="41" width="8" height="8" fill="#0f172a"/>
      <rect x="79" y="42" width="6" height="6" fill="#0f172a"/>
    </svg>
  `,
  zoo_theme: `
    <svg viewBox="0 0 120 90" width="110" height="84">
      <rect x="10" y="12" width="100" height="66" rx="12" fill="#065f46" stroke="#34d399" stroke-width="2.5"/>
      <text x="60" y="42" text-anchor="middle" fill="#fff" font-size="24">🦁🦒🐘</text>
      <text x="60" y="66" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="900">THẢO CẦM VIÊN VEX GO</text>
    </svg>
  `
};

// ============================================================================
// DANH SÁCH 5 HỌC VIÊN MẶC ĐỊNH CỦA LỚP (Chia thành 2 Nhóm: Nhóm 2 bạn & Nhóm 3 bạn)
// Giáo viên có thể sửa tên trực tiếp trên iPad
// ============================================================================
window.DEFAULT_CLASS_GROUPS = [
  {
    group_id: "GRP_1",
    group_name: "Nhóm 1 (2 Học viên)",
    members: [
      { id: "s1", name: "Bạn số 1 (Gia Huy)", color: "#0284c7", avatar: "1" },
      { id: "s2", name: "Bạn số 2 (Minh Khang)", color: "#10b981", avatar: "2" }
    ]
  },
  {
    group_id: "GRP_2",
    group_name: "Nhóm 2 (2 Học viên)",
    members: [
      { id: "s3", name: "Bạn số 3 (Bảo Ngọc)", color: "#8b5cf6", avatar: "3" },
      { id: "s4", name: "Bạn số 4 (Tuấn Kiệt)", color: "#f59e0b", avatar: "4" }
    ]
  },
  {
    group_id: "GRP_3",
    group_name: "Nhóm 3 (Ghép 3 Học viên trong lớp 5 bạn)",
    members: [
      { id: "s3", name: "Bạn số 3 (Bảo Ngọc)", color: "#8b5cf6", avatar: "3" },
      { id: "s4", name: "Bạn số 4 (Tuấn Kiệt)", color: "#f59e0b", avatar: "4" },
      { id: "s5", name: "Bạn số 5 (Thiên Ân)", color: "#ec4899", avatar: "5" }
    ]
  }
];

// ============================================================================
// NGÂN HÀNG TRẮC NGHIỆM XUYÊN SUỐT CÁC KHÓA VEX GO (PREA, PREB, PREI)
// Mặc định mở: [PREA] Buổi 1: Cuộc Dạo Chơi Ở Thảo Cầm Viên
// ============================================================================
window.DEFAULT_VEXGO_QUIZ_COURSES = [
  {
    course_id: "ROB_PREA",
    course_name: "[ROB - PREA] Khám Phá Thế Giới Robot & Động Vật (Buổi 1 - 13)",
    sessions: [
      {
        session_number: 1,
        title: "Buổi 1: Cuộc Dạo Chơi Ở Thảo Cầm Viên",
        subtitle: "Làm quen bộ VEX GO, Linh kiện cơ bản & Nhóm lệnh Motion trên VEXcode GO",
        questions: [
          {
            id: "prea_b1_q1",
            topic: "Khám phá Thảo Cầm Viên & VEX GO",
            visual_key: "zoo_theme",
            question: "Trong bài học 'Cuộc Dạo Chơi Ở Thảo Cầm Viên', khi 2 bạn cùng lắp ráp và lập trình mô hình VEX GO trong nhóm, nguyên tắc làm việc nhóm nào là ĐÚNG NHẤT?",
            options: [
              "Một bạn giữ khư khư iPad làm hết, bạn kia chỉ ngồi nhìn",
              "Chia sẻ nhiệm vụ: Cùng nhau lắp ráp và luân phiên từng bạn trả lời - lập trình trên iPad",
              "Mỗi bạn giấu linh kiện đi để làm riêng",
              "Tự ý tháo mô hình khi bạn đang lắp"
            ],
            correct_index: 1,
            explanation: "Trong giờ học VEX GO tại MindX, các thành viên trong nhóm luôn luân phiên nhau thao tác và hỗ trợ nhau, tuyệt đối không để 1 bạn làm 1 bạn nhìn!"
          },
          {
            id: "prea_b1_q2",
            topic: "Linh kiện VEX GO cơ bản",
            visual_key: "part_brain",
            question: "Bộ phận hình hộp màu trắng - xanh có nút bấm nguồn ở giữa được gọi là gì và có vai trò gì trong mô hình tại Thảo Cầm Viên?",
            options: [
              "VEX GO Brain (Bộ não trung tâm) - nhận lệnh Bluetooth từ iPad để điều khiển động cơ",
              "Cục gạch trang trí cho mô hình nặng hơn",
              "Bánh xe giúp robot lăn trên sàn",
              "Kìm gỡ chốt Pin Tool"
            ],
            correct_index: 0,
            explanation: "VEX GO Brain là 'Bộ não' của robot: cung cấp nguồn điện và nhận chương trình từ VEXcode GO trên iPad qua Bluetooth!"
          },
          {
            id: "prea_b1_q3",
            topic: "Linh kiện Truyền động",
            visual_key: "part_motor",
            question: "Để mô hình con vật hoặc cổng xoay ở Thảo Cầm Viên có thể tự cử động quay được, chúng ta cần gắn linh kiện nào kết nối dây với bộ não Brain?",
            options: [
              "Thanh Beam nhựa màu cam",
              "Động cơ thông minh (Smart Motor / Motor1)",
              "Tấm Plate nhựa phẳng",
              "Chốt Pin màu đỏ"
            ],
            correct_index: 1,
            explanation: "Smart Motor (Motor1) biến năng lượng điện từ Brain thành chuyển động quay giúp mô hình cử động!"
          },
          {
            id: "prea_b1_q4",
            topic: "Kỹ năng Lắp ráp An toàn",
            visual_key: "part_pin_tool",
            question: "Khi muốn tháo các chốt nhựa (Pins) bị gắn chặt trên thanh Beam của VEX GO, con phải sử dụng dụng cụ nào để không bị đau tay hay hỏng linh kiện?",
            options: [
              "Dùng răng cắn chốt Pin ra",
              "Dùng dụng cụ gỡ chốt chuyên dụng màu xanh (Pin Tool)",
              "Đập mạnh mô hình xuống mặt bàn",
              "Dùng bút chì chọc vào lỗ"
            ],
            correct_index: 1,
            explanation: "Pin Tool (Kìm/Cây gỡ chốt màu xanh) có đầu kẹp và đầu đẩy giúp tháo chốt Pin nhẹ nhàng, an toàn tuyệt đối!"
          },
          {
            id: "prea_b1_q5",
            topic: "Lập trình VEXcode GO (Slide 19)",
            visual_key: "block_when_started",
            question: "Trên giao diện lập trình VEXcode GO, khối lệnh màu vàng có dòng chữ 'when started' nằm sẵn trên màn hình trắng có tác dụng gì?",
            options: [
              "Là khối lệnh Khởi đầu: Mọi khối lệnh ghép bên dưới nó sẽ chạy tuần tự khi bấm nút START (▶)",
              "Làm động cơ dừng lại ngay lập tức",
              "Dùng để ngắt kết nối Bluetooth",
              "Chỉ dùng để đổi màu màn hình"
            ],
            correct_index: 0,
            explanation: "Khối mũ 'when started' là điểm xuất phát của chương trình. Khối lệnh nào không gắn vào dưới 'when started' sẽ không chạy!"
          },
          {
            id: "prea_b1_q6",
            topic: "Nhóm lệnh Motion - Actions (Slide 19)",
            visual_key: "block_spin_forward",
            question: "Quan sát khối lệnh màu xanh tím 'spin [Motor1] [forward]' trong mục Motion. Khi chạy khối lệnh này, động cơ Motor1 sẽ hoạt động như thế nào?",
            options: [
              "Động cơ Motor1 đứng yên không quay",
              "Động cơ Motor1 quay liên tục theo chiều tiến (forward) cho đến khi gặp lệnh dừng",
              "Động cơ chỉ nhích nhẹ 1 độ rồi tắt",
              "Động cơ phát ra tiếng nhạc"
            ],
            correct_index: 1,
            explanation: "Khối lệnh 'spin Motor1 forward' (không giới hạn số độ) sẽ làm trục động cơ quay liên tục theo chiều thuận!"
          },
          {
            id: "prea_b1_q7",
            topic: "Nhóm lệnh Motion - Đổi chiều quay",
            visual_key: "block_spin_forward",
            question: "Trong khối lệnh 'spin [Motor1] [forward]', nếu con bấm vào chữ 'forward' và đổi thành 'reverse' thì điều gì sẽ xảy ra?",
            options: [
              "Động cơ Motor1 sẽ đảo ngược chiều quay (quay lùi / ngược lại)",
              "Động cơ quay nhanh gấp 10 lần",
              "Động cơ bị khóa cứng",
              "Bộ não Brain tự tắt nguồn"
            ],
            correct_index: 0,
            explanation: "'Forward' là quay chiều tiến/thuận, còn 'Reverse' là quay chiều ngược lại!"
          },
          {
            id: "prea_b1_q8",
            topic: "Nhóm lệnh Motion - Quay theo Góc (Slide 19)",
            visual_key: "block_spin_for_90",
            question: "Khối lệnh 'spin [Motor1] [forward] for (90) [degrees]' khác gì so với khối lệnh 'spin Motor1 forward' ngắn?",
            options: [
              "Không khác gì cả, hai lệnh giống hệt nhau",
              "Động cơ Motor1 chỉ quay đúng một góc 90 độ (1/4 vòng tròn) rồi tự động dừng lại",
              "Động cơ quay liên tục trong 90 phút",
              "Động cơ chạy với tốc độ 90%"
            ],
            correct_index: 1,
            explanation: "Có thêm 'for 90 degrees' nghĩa là giới hạn góc quay: quay đủ đúng 90 độ (1 góc vuông) thì động cơ tự dừng!"
          },
          {
            id: "prea_b1_q9",
            topic: "Tính toán Vòng quay Động cơ",
            visual_key: "block_spin_for_90",
            question: "Biết rằng 1 vòng quay tròn đầy đủ bằng 360 độ (degrees). Muốn động cơ Motor1 quay đúng 1 vòng tròn rồi dừng, con cần sửa số (90) trong ô tròn trắng thành số bao nhiêu?",
            options: [
              "100 degrees",
              "180 degrees",
              "360 degrees",
              "10 degrees"
            ],
            correct_index: 2,
            explanation: "1 góc vuông = 90°, nửa vòng = 180°, và 1 vòng tròn trọn vẹn = 360 degrees!"
          },
          {
            id: "prea_b1_q10",
            topic: "Nhóm lệnh Motion - Dừng động cơ (Slide 19)",
            visual_key: "block_stop_motor",
            question: "Khối lệnh ngắn 'stop [Motor1]' trong mục Motion - Actions được dùng khi nào?",
            options: [
              "Dùng khi muốn dừng ngay chuyển động quay của động cơ Motor1",
              "Dùng để khởi động động cơ quay nhanh hơn",
              "Dùng để xóa hết bài lập trình",
              "Dùng để kết nối Wi-Fi"
            ],
            correct_index: 0,
            explanation: "'stop Motor1' dùng để ngắt điện và dừng trục quay của động cơ Motor1."
          },
          {
            id: "prea_b1_q11",
            topic: "Nhóm lệnh Motion - Settings (Slide 19)",
            visual_key: "block_set_velocity",
            question: "Trong mục Motion - Settings (Cài đặt chuyển động), khối lệnh 'set [Motor1] velocity to (50) %' dùng để điều chỉnh đại lượng nào của động cơ?",
            options: [
              "Điều chỉnh TỐC ĐỘ quay nhanh hay chậm của động cơ (từ 1% đến 100%)",
              "Điều chỉnh âm lượng loa của iPad",
              "Điều chỉnh độ sáng màn hình",
              "Đếm số lượng chốt Pin trên mô hình"
            ],
            correct_index: 0,
            explanation: "'Velocity' là vận tốc/tốc độ quay! Muốn mô hình ở Thảo Cầm Viên quay nhanh tối đa, ta chỉnh thành 100%; muốn quay chậm nhẹ nhàng, ta chỉnh 20% - 30%."
          },
          {
            id: "prea_b1_q12",
            topic: "Kết nối Bluetooth & Chạy chương trình",
            visual_key: "part_brain",
            question: "Sau khi hai bạn trong nhóm đã ghép xong các khối lệnh dưới 'when started' và kết nối biểu tượng BRAIN chuyển sang màu Xanh lá, con bấm nút nào ở góc phải trên để robot bắt đầu chạy?",
            options: [
              "Nút START (Hình tam giác ▶)",
              "Nút UNDO (Mũi tên quay lui)",
              "Nút FILE",
              "Nút TUTORIALS"
            ],
            correct_index: 0,
            explanation: "Bấm START (▶) để truyền chương trình qua Bluetooth xuống bộ não VEX GO Brain và kích hoạt động cơ chạy!"
          }
        ]
      },
      {
        session_number: 2,
        title: "Buổi 2: Cánh Cổng Thần Kỳ",
        subtitle: "Lắp ráp cơ cấu Cổng đóng/mở tự động & Điều khiển góc quay Motor1",
        questions: [
          {
            id: "prea_b2_q1",
            topic: "Cơ cấu Cánh Cổng Thần Kỳ",
            visual_key: "part_motor",
            question: "Để Cánh Cổng Thần Kỳ có thể tự động nâng lên (Mở cổng) rồi hạ xuống (Đóng cổng), thanh chắn cổng được gắn trực tiếp vào bộ phận nào?",
            options: [
              "Trục quay (Shaft) cắm vào Động cơ Smart Motor (Motor1)",
              "Gắn cố định vào mặt bàn không nhúc nhích",
              "Dán băng keo vào màn hình iPad",
              "Cắm vào kìm Pin Tool"
            ],
            correct_index: 0,
            explanation: "Trục kim loại (Shaft) xuyên qua động cơ Motor1 giúp truyền lực nâng và hạ thanh chắn cổng!"
          },
          {
            id: "prea_b2_q2",
            topic: "Lập trình Mở & Đóng cổng",
            visual_key: "block_spin_for_90",
            question: "Khi Cánh Cổng đang đóng nằm ngang (0°), muốn cổng nâng thẳng đứng lên 1 góc vuông để xe đi qua, ta dùng khối lệnh nào?",
            options: [
              "spin Motor1 forward for 90 degrees",
              "stop Motor1",
              "set Motor1 velocity to 0 %",
              "spin Motor1 forward for 1000 degrees"
            ],
            correct_index: 0,
            explanation: "Góc giữa phương nằm ngang và phương thẳng đứng là 1 góc vuông = 90 degrees!"
          },
          {
            id: "prea_b2_q3",
            topic: "Đảo chiều Hạ cổng xuống",
            visual_key: "block_spin_for_90",
            question: "Sau khi cổng đã mở lên bằng lệnh 'spin Motor1 forward for 90 degrees', muốn hạ cổng đóng xuống vị trí ban đầu thì khối lệnh tiếp theo phải chỉnh như thế nào?",
            options: [
              "spin Motor1 reverse for 90 degrees (Quay ngược chiều 90 độ)",
              "spin Motor1 forward for 90 degrees (Quay tiếp cùng chiều)",
              "Tắt Bluetooth",
              "Tháo trục bánh răng ra"
            ],
            correct_index: 0,
            explanation: "Mở lên bằng chiều 'forward' 90° thì khi đóng xuống phải quay chiều ngược lại 'reverse' đúng 90°!"
          },
          {
            id: "prea_b2_q4",
            topic: "Chế độ Phanh giữ cổng (Stopping Mode)",
            visual_key: "block_set_stopping",
            question: "Trong khối lệnh 'set Motor1 stopping to [brake / coast / hold]', để thanh cổng khi nâng lên không bị sức nặng kéo sập xuống, chế độ phanh nào giữ cổng chắc nhất?",
            options: [
              "brake hoặc hold (Phanh cứng và giữ chặt góc động cơ)",
              "coast (Thả trôi tự do không phanh)",
              "Không cần động cơ"
            ],
            correct_index: 0,
            explanation: "Chế độ 'brake' và 'hold' giúp khóa trục động cơ tại chỗ khi dừng, không cho cổng tự rơi xuống!"
          },
          {
            id: "prea_b2_q5",
            topic: "Linh kiện Chốt & Thanh dầm",
            visual_key: "part_pins_beams",
            question: "Khi lắp khung trụ đỡ cho Cánh Cổng Thần Kỳ đứng vững không bị đổ nghiêng, ta cần chú ý điều gì?",
            options: [
              "Gắn đủ tối thiểu 2 chốt Pin ở mỗi mối nối để khung không bị xoay lỏng lẻo",
              "Chỉ gắn hờ 1 nửa chốt Pin",
              "Không cần gắn chân đế",
              "Lắp lệch 1 bên cao 1 bên thấp"
            ],
            correct_index: 0,
            explanation: "Trong cơ khí VEX GO, 1 chốt Pin tạo khớp xoay, còn từ 2 chốt Pin trở lên sẽ khóa cố định thanh dầm chắc chắn!"
          },
          {
            id: "prea_b2_q6",
            topic: "Điều khiển Vị trí Tuyệt đối",
            visual_key: "block_spin_to_pos",
            question: "Nếu ban đầu cổng đã được đặt mốc 'set Motor1 position to 0 degrees', thì lệnh 'spin Motor1 to position 90 degrees' rồi sau đó 'spin Motor1 to position 0 degrees' sẽ làm cổng hoạt động ra sao?",
            options: [
              "Cổng quay lên vị trí góc 90 độ, sau đó tự động quay về đúng vị trí mốc 0 độ ban đầu",
              "Cổng quay tròn liên tục không dừng",
              "Cổng không nhúc nhích",
              "Cổng quay đủ 360 độ"
            ],
            correct_index: 0,
            explanation: "Khối lệnh 'to position' giúp đưa trục động cơ về chính xác tọa độ góc đã đánh dấu!"
          }
        ]
      },
      {
        session_number: 3,
        title: "Buổi 3: Chiếc Hộp Kì Bí",
        subtitle: "Khám phá hệ truyền động Bánh răng (Gears) & Cơ cấu mở nắp hộp tự động",
        questions: [
          {
            id: "prea_b3_q1",
            topic: "Truyền động Bánh răng",
            visual_key: "part_gears",
            question: "Trong mô hình 'Chiếc Hộp Kì Bí', khi hai bánh răng gắn ăn khớp răng với nhau, nếu bánh răng chủ động (gắn với Motor1) quay theo chiều kim đồng hồ thì bánh răng bị động bên cạnh quay chiều nào?",
            options: [
              "Quay NGƯỢC chiều kim đồng hồ",
              "Quay CÙNG chiều kim đồng hồ",
              "Đứng yên không quay",
              "Văng ra khỏi trục"
            ],
            correct_index: 0,
            explanation: "Hai bánh răng ăn khớp trực tiếp với nhau luôn quay NGƯỢC CHIỀU nhau!"
          },
          {
            id: "prea_b3_q2",
            topic: "Tỉ số truyền Tốc độ",
            visual_key: "part_gears",
            question: "Nếu động cơ Motor1 gắn với một Bánh răng LỚN (nhiều răng) kéo một Bánh răng NHỎ (ít răng), thì bánh răng nhỏ sẽ quay như thế nào?",
            options: [
              "Bánh răng nhỏ sẽ quay NHANH HƠN bánh răng lớn",
              "Bánh răng nhỏ quay chậm hơn bánh răng lớn",
              "Hai bánh quay bằng nhau",
              "Không quay được"
            ],
            correct_index: 0,
            explanation: "Khi bánh răng lớn kéo bánh răng nhỏ: Bánh răng lớn quay 1 vòng thì bánh răng nhỏ đã quay được nhiều vòng (Tăng tốc)!"
          },
          {
            id: "prea_b3_q3",
            topic: "Cài đặt Lực kéo (Max Torque)",
            visual_key: "block_set_torque",
            question: "Khi nắp Chiếc Hộp Kì Bí khá nặng, để động cơ Motor1 có đủ sức mạnh nâng nắp hộp lên, ta cài đặt khối lệnh 'set Motor1 max torque' ở mức nào là khỏe nhất?",
            options: [
              "100 % (Lực kéo / mô-men xoắn tối đa)",
              "5 % (Lực kéo yếu nhất)",
              "0 %",
              "1 %"
            ],
            correct_index: 0,
            explanation: "Max torque = 100% cung cấp lực kéo tối đa cho động cơ để nâng nắp hộp nặng!"
          },
          {
            id: "prea_b3_q4",
            topic: "Bảo vệ động cơ khi kẹt nắp hộp",
            visual_key: "block_set_timeout",
            question: "Khối lệnh 'set Motor1 timeout to 1 seconds' giúp bảo vệ Chiếc Hộp Kì Bí như thế nào nếu nắp hộp mở hết cỡ bị vướng thành hộp?",
            options: [
              "Sau 1 giây nếu trục bị vướng không quay thêm được nữa, động cơ sẽ tự ngắt lệnh để không bị kẹt cháy mô-tơ",
              "Làm nắp hộp đóng sập lại sau 1 giây",
              "Tăng tốc độ lên 100%",
              "Xóa chương trình"
            ],
            correct_index: 0,
            explanation: "Timeout là thời gian bảo hiểm tối đa cho 1 lệnh quay có đích đến!"
          }
        ]
      },
      {
        session_number: 5,
        title: "Buổi 5: Voi Con Khát Nước",
        subtitle: "Lắp ráp cơ cấu Vòi voi nâng hạ uống nước & Điều khiển vị trí góc",
        questions: [
          {
            id: "prea_b5_q1",
            topic: "Cơ cấu Vòi Voi",
            visual_key: "part_motor",
            question: "Trong mô hình 'Voi Con Khát Nước', bộ phận nào của chú voi được nối với trục quay của động cơ Motor1 để cúi xuống hút nước và ngẩng lên?",
            options: [
              "Chiếc vòi của Voi Con",
              "Cái đuôi cố định phía sau",
              "Đôi tai nhựa cố định",
              "Mắt trang trí"
            ],
            correct_index: 0,
            explanation: "Chiếc vòi voi được lắp vào trục Motor1 để có thể hạ xuống chậu nước và nâng lên!"
          },
          {
            id: "prea_b5_q2",
            topic: "Chuỗi lệnh Uống nước tuần tự",
            visual_key: "block_spin_for_90",
            question: "Để Voi Con hạ vòi xuống uống nước (chiều forward 60 độ) rồi ngẩng vòi lên lại vị trí cũ, thứ tự 2 khối lệnh nào dưới đây là đúng?",
            options: [
              "Bước 1: spin Motor1 forward for 60 degrees ➔ Bước 2: spin Motor1 reverse for 60 degrees",
              "Bước 1: stop Motor1 ➔ Bước 2: stop Motor1",
              "Chỉ dùng 1 lệnh set velocity to 50%",
              "Quay cùng chiều forward cả 2 lần"
            ],
            correct_index: 0,
            explanation: "Hạ xuống 60 độ theo chiều forward rồi nâng lên 60 độ theo chiều ngược lại (reverse)!"
          },
          {
            id: "prea_b5_q3",
            topic: "Điều chỉnh tốc độ Vòi voi",
            visual_key: "block_set_velocity",
            question: "Nếu chiếc vòi voi đập xuống quá mạnh làm đổ chậu nước, con nên thêm khối lệnh nào ở đầu chương trình để vòi voi di chuyển êm ái, nhẹ nhàng hơn?",
            options: [
              "set Motor1 velocity to 25 % (Giảm tốc độ quay xuống 25%)",
              "set Motor1 velocity to 100 % (Tăng tốc tối đa)",
              "spin Motor1 forward for 720 degrees",
              "Không cắm dây động cơ"
            ],
            correct_index: 0,
            explanation: "Giảm velocity xuống 25% - 30% giúp vòi voi chuyển động chậm rãi và chính xác!"
          },
          {
            id: "prea_b5_q4",
            topic: "Ghi nhớ vị trí gốc 0 độ",
            visual_key: "block_spin_to_pos",
            question: "Trước khi chạy lệnh 'spin Motor1 to position 60 degrees', tại sao ta nên đặt khối lệnh 'set Motor1 position to 0 degrees' ở ngay dưới 'when started'?",
            options: [
              "Để đánh dấu vị trí vòi voi đang đứng yên ban đầu là mốc 0 độ chuẩn",
              "Để tắt động cơ",
              "Để đổi tên động cơ",
              "Để tăng pin cho Brain"
            ],
            correct_index: 0,
            explanation: "Reset vị trí gốc về 0 degrees giúp mọi góc quay 'to position' phía sau luôn chính xác!"
          }
        ]
      },
      {
        session_number: 7,
        title: "Buổi 7: Bạn Kiến Tìm Đường",
        subtitle: "Khám phá Cảm biến Mắt (Eye Sensor) nhận diện màu sắc & vật cản",
        questions: [
          {
            id: "prea_b7_q1",
            topic: "Cảm biến Mắt (Eye Sensor)",
            visual_key: "part_eye_sensor",
            question: "Trong bài 'Bạn Kiến Tìm Đường', linh kiện Eye Sensor đóng vai trò như bộ phận nào của Bạn Kiến?",
            options: [
              "Đôi mắt thông minh giúp phát hiện vật cản phía trước và phân biệt màu sắc thức ăn/đường đi",
              "Đôi chân dùng để bò",
              "Chiếc lưng dùng để chở hàng",
              "Cục pin dự phòng"
            ],
            correct_index: 0,
            explanation: "Eye Sensor là cảm biến quang học giúp robot 'nhìn' được vật thể ở gần (near object) và màu sắc (Đỏ, Xanh lá, Xanh dương)!"
          },
          {
            id: "prea_b7_q2",
            topic: "Phân biệt Nhóm lệnh Eye trên VEXcode GO",
            visual_key: "part_eye_sensor",
            question: "Trên thanh danh mục bên trái của VEXcode GO, các khối lệnh kiểm tra Cảm biến Mắt nằm trong vòng tròn danh mục nào?",
            options: [
              "Eye (Vòng tròn màu Xanh ngọc)",
              "Motion (Vòng tròn màu Xanh tím)",
              "Console",
              "File"
            ],
            correct_index: 0,
            explanation: "Danh mục 'Eye' chứa toàn bộ các khối lệnh cảm biến khoảng cách và màu sắc của Eye Sensor!"
          }
        ]
      },
      {
        session_number: 10,
        title: "Buổi 10: Tay Ai Khỏe Nhất? & Buổi 11: Báo Đốm Dũng Mãnh",
        subtitle: "Cơ cấu Tay đòn, Mô-men xoắn (Max Torque) & Tốc độ Báo Đốm",
        questions: [
          {
            id: "prea_b10_q1",
            topic: "So sánh Tốc độ & Lực kéo",
            visual_key: "block_set_torque",
            question: "Trong bài 'Tay Ai Khỏe Nhất?', để cánh tay robot thắng được lực cản lớn, ta cần ưu tiên thông số nào cao nhất?",
            options: [
              "set Motor1 max torque to 100 % (Tối đa hóa lực kéo/mô-men xoắn)",
              "set Motor1 max torque to 10 %",
              "stop Motor1",
              "set timeout to 0 seconds"
            ],
            correct_index: 0,
            explanation: "Max torque 100% giúp động cơ phát huy tối đa sức mạnh cơ học!"
          },
          {
            id: "prea_b11_q2",
            topic: "Báo Đốm Dũng Mãnh tăng tốc",
            visual_key: "block_set_velocity",
            question: "Khi lập trình cho mô hình 'Báo Đốm Dũng Mãnh' chạy nước rút về đích nhanh nhất, con cài đặt khối lệnh velocity như thế nào?",
            options: [
              "set Motor1 velocity to 100 % trước khối lệnh spin Motor1 forward",
              "set Motor1 velocity to 10 %",
              "Đặt lệnh set velocity ở sau cùng khi robot đã dừng",
              "Dùng lệnh stop Motor1"
            ],
            correct_index: 0,
            explanation: "Phải cài đặt 'set Motor1 velocity to 100%' TRƯỚC lệnh 'spin Motor1' thì Báo Đốm mới phóng đi với tốc độ tối đa!"
          }
        ]
      }
    ]
  },
  {
    course_id: "ROB_PREB",
    course_name: "[ROB - PREB] Thám Hiểm Sao Hỏa - Mars Rover & Super Car (Buổi 1 - 14)",
    sessions: [
      {
        session_number: 1,
        title: "Buổi 1: Bệ Phóng Tên Lửa & Буổi 3: Phương Tiện Sao Hỏa",
        subtitle: "Khám phá lực đàn hồi, Bệ phóng & Điều khiển Tàu tự hành Sao Hỏa",
        questions: [
          {
            id: "preb_b1_q1",
            topic: "Phương tiện Thám hiểm Sao Hỏa",
            visual_key: "part_brain",
            question: "Vì sao con người phải gửi các robot tự hành (Mars Rover) lên thám hiểm Sao Hỏa trước khi đưa phi hành gia lên?",
            options: [
              "Vì môi trường Sao Hỏa khắc nghiệt, robot có thể làm việc an toàn và gửi dữ liệu về Trái Đất",
              "Vì robot không cần dùng điện",
              "Vì Sao Hỏa ở ngay sát mặt đất",
              "Vì robot tự mọc ra trên Sao Hỏa"
            ],
            correct_index: 0,
            explanation: "Robot tự hành Mars Rover giúp con người khảo sát địa hình, đá và khí hậu Sao Hỏa một cách an toàn!"
          },
          {
            id: "preb_b1_q2",
            topic: "Điều khiển Động cơ Rover",
            visual_key: "block_spin_for_90",
            question: "Muốn bánh xe của Tàu tự hành Sao Hỏa quay tiến đúng 2 vòng tròn (mỗi vòng 360 độ), con điền số bao nhiêu vào khối 'spin Motor1 forward for (...) degrees'?",
            options: [
              "720 degrees (vì 360 × 2 = 720)",
              "90 degrees",
              "180 degrees",
              "360 degrees"
            ],
            correct_index: 0,
            explanation: "1 vòng = 360°, nên 2 vòng = 360° × 2 = 720 degrees!"
          }
        ]
      },
      {
        session_number: 5,
        title: "Buổi 5: Siêu Xe Tránh Bão & Buổi 9: Thu Thập Mẫu Vật",
        subtitle: "Cơ khí Siêu xe có động cơ, Cảm biến Mắt & Nam châm điện thu thập mẫu",
        questions: [
          {
            id: "preb_b5_q1",
            topic: "Siêu Xe Tránh Bão",
            visual_key: "block_set_velocity",
            question: "Khi phát hiện bão bụi Sao Hỏa đang kéo tới, Siêu Xe cần tăng tốc từ 50% lên 100% để về trạm trú ẩn. Khối lệnh nào thực hiện việc đó?",
            options: [
              "set Motor1 velocity to 100 %",
              "stop Motor1",
              "set Motor1 position to 0 degrees",
              "set Motor1 stopping to coast"
            ],
            correct_index: 0,
            explanation: "Chỉnh velocity lên 100% giúp động cơ Siêu Xe đạt vận tốc tối đa!"
          },
          {
            id: "preb_b5_q2",
            topic: "Phân loại Đá màu (Buổi 10)",
            visual_key: "part_eye_sensor",
            question: "Trong bài 'Những Hòn Đá Đầy Màu Sắc', cảm biến nào giúp xe tự hành phân biệt được viên đá màu Xanh lá (Green) với viên đá màu Đỏ (Red)?",
            options: [
              "Eye Sensor (Cảm biến Mắt)",
              "Smart Motor (Động cơ)",
              "Pin Tool",
              "Bánh răng nhựa"
            ],
            correct_index: 0,
            explanation: "Eye Sensor có khả năng nhận diện chính xác màu sắc của các mẫu đá trên Sao Hỏa!"
          }
        ]
      }
    ]
  },
  {
    course_id: "ROB_PREI",
    course_name: "[ROB - PREI] Robot Công Nghiệp & Tự Động Hóa (Buổi 1 - 14)",
    sessions: [
      {
        session_number: 1,
        title: "Buổi 1: Hội Chợ Việc Làm Robot & Buổi 2: Cần Trục Thông Minh",
        subtitle: "Ứng dụng Robot công nghiệp, Cần trục nâng hàng & Bánh răng trợ lực",
        questions: [
          {
            id: "prei_b1_q1",
            topic: "Cần Trục Thông Minh",
            visual_key: "part_gears",
            question: "Trong mô hình 'Cần Trục Thông Minh' và 'Bánh Răng Trợ Lực', để động cơ nhỏ có thể cẩu được kiện hàng nặng mà không bị tuột, ta dùng cách ghép bánh răng nào?",
            options: [
              "Bánh răng NHỎ (gắn vào Motor1) kéo Bánh răng LỚN (gắn vào trục cẩu) để tăng lực kéo",
              "Không dùng bánh răng",
              "Tháo chốt trục ra",
              "Chỉnh max torque về 0%"
            ],
            correct_index: 0,
            explanation: "Bánh răng nhỏ kéo bánh răng lớn là cơ cấu GIẢM TỐC - TRỢ LỰC, giúp tăng lực nâng gấp nhiều lần!"
          },
          {
            id: "prei_b1_q2",
            topic: "Dừng Xe Khẩn Cấp (Buổi 6)",
            visual_key: "block_stop_motor",
            question: "Khi Xe Tải Siêu Trọng đang chạy mà Cảm biến Mắt phát hiện chướng ngại vật ngay phía trước, hệ thống phải gọi ngay khối lệnh nào để phanh xe?",
            options: [
              "stop Motor1 (kết hợp chế độ phanh brake/hold)",
              "spin Motor1 forward",
              "set Motor1 velocity to 100 %",
              "set Motor1 stopping to coast"
            ],
            correct_index: 0,
            explanation: "Lệnh 'stop Motor1' ở chế độ 'brake' giúp xe phanh khẩn cấp ngay lập tức, tránh va chạm!"
          }
        ]
      }
    ]
  }
];

// ============================================================================
// LOCALSTORAGE MANAGER
// ============================================================================
window.QuizStorage = {
  COURSES_KEY: "mindx_vexgo_turnquiz_courses_v2",
  GROUPS_KEY: "mindx_vexgo_turnquiz_groups_v2",
  HISTORY_KEY: "mindx_vexgo_turnquiz_history_v2",

  loadCourses() {
    try {
      const raw = localStorage.getItem(this.COURSES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return JSON.parse(JSON.stringify(window.DEFAULT_VEXGO_QUIZ_COURSES));
  },

  saveCourses(courses) {
    try {
      localStorage.setItem(this.COURSES_KEY, JSON.stringify(courses));
    } catch (e) {}
  },

  loadGroups() {
    try {
      const raw = localStorage.getItem(this.GROUPS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return JSON.parse(JSON.stringify(window.DEFAULT_CLASS_GROUPS));
  },

  saveGroups(groups) {
    try {
      localStorage.setItem(this.GROUPS_KEY, JSON.stringify(groups));
    } catch (e) {}
  },

  resetAll() {
    localStorage.removeItem(this.COURSES_KEY);
    localStorage.removeItem(this.GROUPS_KEY);
  }
};
