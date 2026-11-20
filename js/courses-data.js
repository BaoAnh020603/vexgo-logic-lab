// ============================================================================
// VEX GO LOGIC LAB - DATA-DRIVEN CURRICULUM DATABASE
// Xuyên suốt các khóa VEX GO tại MindX Thuận An (Code Base, Super Car, Robot Arm, Ocean)
// ============================================================================

window.VEXGO_HARDWARE_SVGS = {
  brain: `<svg viewBox="0 0 80 80" width="76" height="76">
    <rect x="12" y="14" width="56" height="52" rx="10" fill="#0284c7" stroke="#e2e8f0" stroke-width="3"/>
    <rect x="22" y="24" width="36" height="22" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="40" cy="56" r="5" fill="#22c55e"/>
    <text x="40" y="38" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="bold">VEX GO</text>
  </svg>`,
  eye_sensor: `<svg viewBox="0 0 80 80" width="76" height="76">
    <rect x="14" y="22" width="52" height="36" rx="12" fill="#10b981" stroke="#e2e8f0" stroke-width="3"/>
    <circle cx="40" cy="40" r="12" fill="#0f172a" stroke="#a7f3d0" stroke-width="2.5"/>
    <circle cx="40" cy="40" r="5" fill="#38bdf8"/>
    <circle cx="43" cy="37" r="2" fill="#fff"/>
  </svg>`,
  electromagnet: `<svg viewBox="0 0 80 80" width="76" height="76">
    <rect x="18" y="16" width="44" height="34" rx="8" fill="#6366f1" stroke="#e2e8f0" stroke-width="3"/>
    <circle cx="40" cy="52" r="14" fill="#312e81" stroke="#818cf8" stroke-width="3"/>
    <path d="M32 58 Q40 68 48 58" stroke="#38bdf8" stroke-width="2.5" fill="none" stroke-dasharray="3 2"/>
  </svg>`,
  led_bumper: `<svg viewBox="0 0 80 80" width="76" height="76">
    <rect x="16" y="22" width="48" height="36" rx="10" fill="#a855f7" stroke="#e2e8f0" stroke-width="3"/>
    <circle cx="40" cy="40" r="12" fill="#22c55e" stroke="#fff" stroke-width="2"/>
    <path d="M40 12 L40 18 M10 40 L15 40 M65 40 L70 40" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  motor: `<svg viewBox="0 0 80 80" width="76" height="76">
    <rect x="14" y="22" width="44" height="36" rx="7" fill="#475569" stroke="#e2e8f0" stroke-width="2.5"/>
    <circle cx="58" cy="40" r="12" fill="#0ea5e9" stroke="#fff" stroke-width="2.5"/>
    <rect x="54" y="36" width="8" height="8" fill="#0f172a"/>
  </svg>`,
  gear: `<svg viewBox="0 0 80 80" width="76" height="76">
    <circle cx="40" cy="40" r="22" fill="#f59e0b" stroke="#fef3c7" stroke-width="4" stroke-dasharray="9 5"/>
    <circle cx="40" cy="40" r="13" fill="#d97706"/>
    <rect x="35" y="35" width="10" height="10" fill="#0f172a"/>
  </svg>`
};

window.DEFAULT_VEXGO_COURSES = [
  {
    course_id: "VEX_GO_LVL1",
    course_name: "Khóa 1: Code Base & Mars Rover (Khám phá Sao Hỏa)",
    age_group: "Tiểu học (7 - 11 tuổi)",
    sessions: [
      {
        session_number: 1,
        title: "Buổi 1: Làm quen Code Base & Bước đi 200mm đầu tiên",
        theme: "lab",
        hardware_check: [
          {
            part_key: "brain",
            question: "Bộ phận nào đóng vai trò là 'Bộ não trung tâm' lưu trữ chương trình và điều khiển toàn bộ robot VEX GO?",
            options: ["Smart Motor (Động cơ)", "VEX GO Brain (Bộ não)", "Eye Sensor (Cảm biến mắt)"],
            correct_index: 1,
            explanation: "Chính xác! VEX GO Brain nhận lệnh từ iPad qua Bluetooth và điều khiển các động cơ, cảm biến."
          },
          {
            part_key: "motor",
            question: "Để 2 bánh xe của robot Code Base quay được giúp xe tiến hoặc lùi, ta cần gắn linh kiện nào?",
            options: ["2 Động cơ Smart Motor trái & phải", "Nam châm điện Electromagnet", "Đèn LED Bumper"],
            correct_index: 0,
            explanation: "Chuẩn luôn! Robot Code Base dùng 2 động cơ truyền lực xuống bánh xe để di chuyển."
          }
        ],
        levels: [
          {
            level_id: 1,
            level_name: "Cấp độ 1: Đi thẳng 2 ô tới cờ đích",
            mission_hint: "Mỗi ô vuông trên sa bàn dài đúng 200 mm. Hãy đếm số ô trước mặt robot nhé!",
            grid_size: [6, 6],
            start_pos: { x: 2, y: 4, dir: "NORTH" },
            targets: [{ x: 2, y: 2, type: "flag" }],
            obstacles: [{ x: 1, y: 3, type: "rock" }, { x: 3, y: 3, type: "rock" }],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "b1_drive_400",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600, 800],
                unlock_question: {
                  prompt: "Mỗi ô lưới dài 200 mm. Cờ đích cách mũi xe 2 ô thẳng phía trước. Con cần chọn thông số bao nhiêu mm?",
                  options: ["200 mm (1 ô)", "400 mm (2 ô)", "600 mm (3 ô)"],
                  correct_index: 1,
                  hint: "Con lấy 2 ô × 200 mm = 400 mm nhé!"
                }
              }
            ]
          },
          {
            level_id: 2,
            level_name: "Cấp độ 2: Tiến lấy mẫu rồi lùi về trạm",
            mission_hint: "Đi thẳng 3 ô lên phía trước rồi dùng lệnh Drive reverse để lùi 1 ô vào đúng lá cờ!",
            grid_size: [6, 6],
            start_pos: { x: 3, y: 5, dir: "NORTH" },
            targets: [{ x: 3, y: 3, type: "flag" }],
            obstacles: [{ x: 2, y: 3, type: "rock" }, { x: 4, y: 3, type: "rock" }],
            collectibles: [{ x: 3, y: 2, id: "sample_1", label: "Đĩa năng lượng" }],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "b2_drive_600",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 600,
                param_options: [200, 400, 600, 800],
                unlock_question: {
                  prompt: "Từ ô (3,5) đi thẳng lên ô có Đĩa năng lượng (3,2) là 3 ô. Khối lệnh Drive forward cần điền bao nhiêu mm?",
                  options: ["200 mm", "400 mm", "600 mm"],
                  correct_index: 2,
                  hint: "3 ô × 200 mm = 600 mm."
                }
              },
              {
                block_id: "b2_rev_200",
                block_type: "DRIVE_REVERSE",
                category: "drive",
                label: "Drive reverse for",
                unit: "mm",
                default_param: 200,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Khối lệnh 'Drive reverse for 200 mm' giúp robot thực hiện hành động gì?",
                  options: ["Đi lùi lại phía sau 1 ô (200 mm)", "Xoay đầu robot 180 độ", "Đi tiến thêm 1 ô"],
                  correct_index: 0,
                  hint: "Từ 'reverse' trong tiếng Anh nghĩa là đi lùi nhé!"
                }
              }
            ]
          },
          {
            level_id: 3,
            level_name: "Cấp độ 3: Chặng đường dài 4 ô chuẩn xác",
            mission_hint: "Đếm kỹ số ô từ vạch xuất phát tới cờ đích ở cuối hành lang đá!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 5, dir: "NORTH" },
            targets: [{ x: 1, y: 1, type: "flag" }],
            obstacles: [
              { x: 0, y: 4, type: "rock" }, { x: 2, y: 4, type: "rock" },
              { x: 0, y: 2, type: "rock" }, { x: 2, y: 2, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "b3_drive_800",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 800,
                param_options: [200, 400, 600, 800, 1000],
                unlock_question: {
                  prompt: "Robot đang ở hàng y=5, cờ đích ở hàng y=1 (cách 4 ô). Con cần cho robot tiến bao nhiêu mm?",
                  options: ["600 mm", "800 mm", "1000 mm"],
                  correct_index: 1,
                  hint: "4 ô × 200 mm = 800 mm!"
                }
              },
              {
                block_id: "b3_led_green",
                block_type: "SET_LED",
                category: "led",
                label: "Set LED Bumper color to",
                unit: "",
                default_param: "green",
                param_options: ["green", "blue", "red"],
                unlock_question: {
                  prompt: "Khi tới đích an toàn, khối lệnh 'Set LED Bumper color to green' dùng để làm gì?",
                  options: ["Bật đèn cản trước sang màu Xanh lá báo hiệu hoàn thành", "Tăng tốc độ động cơ", "Tắt nguồn robot"],
                  correct_index: 0,
                  hint: "LED Bumper là đèn tín hiệu gắn trên robot."
                }
              }
            ]
          }
        ],
        post_quiz: [
          {
            question: "Trong sa bàn tiêu chuẩn VEX GO, 1 ô lưới tương ứng với quãng đường bao nhiêu milimét (mm)?",
            options: ["100 mm", "200 mm", "500 mm"],
            correct_index: 1,
            explanation: "1 ô tiêu chuẩn của sa bàn VEX GO luôn bằng 200 mm (20 cm)."
          },
          {
            question: "Để robot lùi lại phía sau 2 ô lưới, con chọn khối lệnh nào?",
            options: ["Drive forward for 400 mm", "Drive reverse for 400 mm", "Turn right for 90 degrees"],
            correct_index: 1,
            explanation: "Drive reverse là đi lùi, 2 ô × 200 mm = 400 mm."
          },
          {
            question: "Khối lệnh màu vàng 'when started' ở đầu chương trình có ý nghĩa gì?",
            options: ["Là điểm bắt đầu chạy chuỗi lệnh khi bấm nút Start", "Làm robot dừng lại", "Kiểm tra pin của robot"],
            correct_index: 0,
            explanation: "Mọi khối lệnh gắn bên dưới 'when started' sẽ được chạy lần lượt từ trên xuống dưới."
          }
        ]
      },
      {
        session_number: 3,
        title: "Buổi 3: Điều hướng Mê cung & Góc xoay 90 độ",
        theme: "lab",
        hardware_check: [
          {
            part_key: "motor",
            question: "Khi robot thực hiện lệnh 'Turn right for 90 degrees' (Rẽ phải 90°), hai bánh xe của robot quay như thế nào?",
            options: ["Bánh trái quay tiến, bánh phải quay lùi (hoặc dừng) để xoay thân xe", "Cả hai bánh cùng quay tiến thật nhanh", "Cả hai bánh đứng yên"],
            correct_index: 0,
            explanation: "Khi 2 bánh quay ngược chiều nhau, thân xe sẽ xoay tại chỗ quanh tâm!"
          }
        ],
        levels: [
          {
            level_id: 1,
            level_name: "Cấp độ 1: Khúc cua chữ L đầu tiên",
            mission_hint: "Đi thẳng 2 ô lên (1,2), xoay phải 90 độ rồi đi thẳng 2 ô tới cờ (3,2)!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 4, dir: "NORTH" },
            targets: [{ x: 3, y: 2, type: "flag" }],
            obstacles: [{ x: 2, y: 4, type: "rock" }, { x: 2, y: 3, type: "rock" }, { x: 1, y: 1, type: "rock" }],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "s3_l1_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Để tiến 2 ô từ (1,4) lên ngã rẽ (1,2), con cần khối lệnh Drive forward bao nhiêu mm?",
                  options: ["200 mm", "400 mm", "600 mm"],
                  correct_index: 1,
                  hint: "2 ô × 200 mm = 400 mm."
                }
              },
              {
                block_id: "s3_l1_turn_r",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Khối lệnh 'Turn right for 90 degrees' chỉ làm robot xoay mũi xe sang phải một góc vuông tại chỗ hay vừa xoay vừa đi tới ô bên cạnh?",
                  options: ["Chỉ xoay mũi xe sang phải 90° tại đúng ô đang đứng", "Tự động nhảy sang ô bên phải luôn"],
                  correct_index: 0,
                  hint: "Nhớ nhé: Lệnh Turn chỉ xoay hướng mũi xe tại chỗ! Muốn đi tiếp phải ghép thêm lệnh Drive forward sau đó."
                }
              }
            ]
          },
          {
            level_id: 2,
            level_name: "Cấp độ 2: Zíc-zắc vượt hẻm đá",
            mission_hint: "Tiến 2 ô -> Xoay phải 90° -> Tiến 2 ô -> Xoay trái 90° -> Tiến 1 ô về đích!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 5, dir: "NORTH" },
            targets: [{ x: 3, y: 2, type: "flag" }],
            obstacles: [
              { x: 1, y: 2, type: "rock" },
              { x: 2, y: 4, type: "rock" },
              { x: 4, y: 3, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "s3_l2_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Ở chặng cuối sau khi rẽ trái hướng lên Bắc tại ô (3,3), cờ đích ở (3,2) chỉ cách 1 ô. Lúc đó con sẽ chỉnh thông số khối Drive forward cuối thành bao nhiêu?",
                  options: ["200 mm", "400 mm", "600 mm"],
                  correct_index: 0,
                  hint: "1 ô = 200 mm. Con có thể thêm khối Drive forward nhiều lần và chỉnh số mm cho từng khối!"
                }
              },
              {
                block_id: "s3_l2_turn_r",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Mũi xe đang hướng Lên trên (Bắc). Khi chạy lệnh 'Turn right for 90 degrees', mũi xe sẽ quay sang hướng nào?",
                  options: ["Hướng sang Phải (Đông)", "Hướng sang Trái (Tây)", "Quay ngược xuống Dưới (Nam)"],
                  correct_index: 0,
                  hint: "Tưởng tượng con đang nhìn thẳng lên bảng, tay phải của con chỉ về hướng Đông!"
                }
              },
              {
                block_id: "s3_l2_turn_l",
                block_type: "TURN_LEFT",
                category: "turn",
                label: "Turn left for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Sau khi đi ngang sang phải (hướng Đông) tới ô (3,3), muốn quay mũi xe nhìn Lên trên (hướng Bắc) về phía cờ (3,2), con cần xoay hướng nào?",
                  options: ["Turn left 90 degrees (Xoay trái 90°)", "Turn right 90 degrees (Xoay phải 90°)"],
                  correct_index: 0,
                  hint: "Đang nhìn sang Phải mà muốn ngước Lên trên thì phải ngoặt sang bên Trái của robot!"
                }
              }
            ]
          },
          {
            level_id: 3,
            level_name: "Cấp độ 3: Vòng lặp bậc thang (Tối ưu với Repeat)",
            mission_hint: "Dùng khối Repeat 2 times để lặp lại cặp lệnh hoặc điều hướng vượt bãi đá!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 4, dir: "NORTH" },
            targets: [{ x: 4, y: 4, type: "flag" }],
            obstacles: [
              { x: 2, y: 4, type: "rock" },
              { x: 3, y: 4, type: "rock" },
              { x: 2, y: 3, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "s3_l3_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Để đi vòng qua bãi đá ở giữa: Tiến 2 ô lên (1,2) -> Rẽ phải -> Tiến 3 ô sang (4,2) -> Rẽ phải -> Tiến 2 ô xuống (4,4). Chặng ngang ở giữa dài 3 ô là bao nhiêu mm?",
                  options: ["400 mm", "600 mm", "800 mm"],
                  correct_index: 1,
                  hint: "3 ô × 200 mm = 600 mm!"
                }
              },
              {
                block_id: "s3_l3_turn_r",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Nếu robot xoay phải 90° hai lần ở hai góc cua, tổng cộng hướng xe đã đổi bao nhiêu độ?",
                  options: ["90 độ", "180 độ (quay ngược chiều ban đầu)", "360 độ"],
                  correct_index: 1,
                  hint: "90° + 90° = 180° (từ hướng Bắc quay xuống hướng Nam)."
                }
              }
            ]
          }
        ],
        post_quiz: [
          {
            question: "Khi thực hiện khối lệnh 'Turn right for 90 degrees', vị trí ô của robot có thay đổi không?",
            options: ["Không, robot chỉ xoay hướng tại chỗ", "Có, robot đi sang phải 1 ô", "Có, robot lùi 1 ô"],
            correct_index: 0,
            explanation: "Lệnh Turn chỉ thay đổi góc hướng (Direction), không làm thay đổi tọa độ (x, y)."
          },
          {
            question: "Muốn robot quay ngược đầu lại hoàn toàn (từ hướng Bắc quay về hướng Nam), ta cần góc xoay bao nhiêu độ?",
            options: ["45 degrees", "90 degrees", "180 degrees"],
            correct_index: 2,
            explanation: "Góc bẹt 180 độ giúp robot quay ngược đầu lại phía sau."
          }
        ]
      },
      {
        session_number: 5,
        title: "Buổi 5: Khám phá Sao Hỏa - Cảm biến Mắt (Eye Sensor) & Vật cản",
        theme: "mars",
        hardware_check: [
          {
            part_key: "eye_sensor",
            question: "Trên tàu tự hành Mars Rover Buổi 5, linh kiện 'Eye Sensor' (Cảm biến Mắt) có khả năng đặc biệt gì?",
            options: [
              "Phát hiện vật cản phía trước và nhận diện màu sắc (Xanh, Đỏ...)",
              "Hút các vật bằng sắt thép",
              "Phát ra âm thanh nhạc chuông"
            ],
            correct_index: 0,
            explanation: "Chính xác! Eye Sensor vừa phát hiện được vật thể ở gần (near object) vừa phân biệt được màu sắc."
          },
          {
            part_key: "led_bumper",
            question: "Khi Mars Rover tìm thấy mẫu đá quý trên Sao Hỏa, linh kiện nào giúp robot phát sáng đổi màu báo hiệu về Trái Đất?",
            options: ["Smart Motor", "LED Bumper (Cản đèn LED)", "Bánh răng nhựa"],
            correct_index: 1,
            explanation: "Tuyệt vời! LED Bumper có thể đổi màu Xanh lá (Green), Đỏ (Red) hoặc Xanh dương (Blue)."
          },
          {
            part_key: "brain",
            question: "Cảm biến Eye Sensor và LED Bumper được cắm dây vào đâu trên robot VEX GO?",
            options: [
              "Các cổng màu (Smart Ports) trên bộ não VEX GO Brain",
              "Gắn trực tiếp vào lốp cao su",
              "Không cần cắm dây"
            ],
            correct_index: 0,
            explanation: "Đúng rồi! Các cảm biến kết nối với Brain qua các cổng Smart Port có đánh số và màu tương ứng."
          }
        ],
        levels: [
          {
            level_id: 1,
            level_name: "Cấp độ 1: Tiến tới Trạm thu thập Sao Hỏa",
            mission_hint: "Đường thẳng từ vị trí xuất phát (0,5) tới cờ Trạm thu thập (0,2) dài 3 ô. Hãy mở khóa lệnh Drive forward và bật đèn LED Xanh lá!",
            grid_size: [6, 6],
            start_pos: { x: 0, y: 5, dir: "NORTH" },
            targets: [{ x: 0, y: 2, type: "flag" }],
            obstacles: [{ x: 1, y: 3, type: "rock" }, { x: 2, y: 2, type: "rock" }],
            collectibles: [],
            sensor_tiles: [{ x: 0, y: 2, color: "green", label: "Trạm Xanh" }],
            available_blocks: [
              {
                block_id: "s5_l1_drive",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 600,
                param_options: [200, 400, 600, 800],
                unlock_question: {
                  prompt: "Mỗi ô trên sa bàn Sao Hỏa dài 200 mm. Để đi thẳng 3 ô tới cờ Trạm thu thập, con cần chọn thông số bao nhiêu mm?",
                  options: ["200 mm", "400 mm", "600 mm"],
                  correct_index: 2,
                  hint: "Con lấy 3 ô × 200 mm = 600 mm nhé!"
                }
              },
              {
                block_id: "s5_l1_led",
                block_type: "SET_LED",
                category: "led",
                label: "Set LED Bumper color to",
                unit: "",
                default_param: "green",
                param_options: ["green", "red", "blue"],
                unlock_question: {
                  prompt: "Sau khi tới Trạm thu thập thành công, khối lệnh 'Set LED Bumper color to green' sẽ làm gì?",
                  options: [
                    "Làm đèn LED trên robot phát sáng màu Xanh lá báo hiệu an toàn",
                    "Làm robot chạy lùi về vạch xuất phát",
                    "Làm robot xoay tròn"
                  ],
                  correct_index: 0,
                  hint: "Green là màu Xanh lá cây của đèn tín hiệu LED Bumper!"
                }
              }
            ]
          },
          {
            level_id: 2,
            level_name: "Cấp độ 2: Cảm biến Mắt phát hiện Đá Sao Hỏa & Rẽ tránh",
            mission_hint: "Phía trước ô (2,1) có tảng đá Sao Hỏa chắn đường! Hãy tiến tới ô cảm biến (2,2), dùng Eye Sensor kiểm tra vật cản, rẽ phải 90° rồi đi 2 ô tới cờ (4,2)!",
            grid_size: [6, 6],
            start_pos: { x: 2, y: 4, dir: "NORTH" },
            targets: [{ x: 4, y: 2, type: "flag" }],
            obstacles: [
              { x: 2, y: 1, type: "rock" },
              { x: 1, y: 2, type: "rock" },
              { x: 3, y: 4, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [{ x: 2, y: 2, color: "red", label: "Cảnh báo đá" }],
            available_blocks: [
              {
                block_id: "s5_l2_drive",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Từ ô xuất phát (2,4) tiến lên ô cảnh báo (2,2) ngay trước tảng đá là mấy ô (bao nhiêu mm)?",
                  options: ["1 ô (200 mm)", "2 ô (400 mm)", "3 ô (600 mm)"],
                  correct_index: 1,
                  hint: "Từ hàng 4 lên hàng 2 là 2 ô × 200 mm = 400 mm."
                }
              },
              {
                block_id: "s5_l2_sensor",
                block_type: "WAIT_UNTIL_EYE",
                category: "sensor",
                label: "Wait until Eye Sensor detects",
                unit: "",
                default_param: "near_object",
                param_options: ["near_object", "green", "red"],
                unlock_question: {
                  prompt: "Khối lệnh 'Wait until Eye Sensor detects near_object' hoạt động như thế nào?",
                  options: [
                    "Robot dùng Cảm biến Mắt quét phía trước, khi phát hiện tảng đá ở gần thì xác nhận để chuyển sang lệnh rẽ tránh",
                    "Làm tảng đá biến mất khỏi sa bàn",
                    "Đẩy tảng đá văng ra xa"
                  ],
                  correct_index: 0,
                  hint: "Eye Sensor giúp robot 'nhìn' thấy vật cản phía trước trước khi quyết định rẽ!"
                }
              },
              {
                block_id: "s5_l2_turn",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Sau khi Eye Sensor phát hiện tảng đá chắn ở (2,1), cờ đích nằm ở bên phải tại (4,2). Con cần xoay robot như thế nào?",
                  options: [
                    "Turn right for 90 degrees (Xoay phải 90°)",
                    "Turn left for 90 degrees (Xoay trái 90°)",
                    "Turn right for 180 degrees"
                  ],
                  correct_index: 0,
                  hint: "Cờ đích ở cột x=4 bên tay phải, nên xoay phải 90 độ rồi tiến thêm 400 mm!"
                }
              }
            ]
          },
          {
            level_id: 3,
            level_name: "Cấp độ 3: Thử thách Thám hiểm Hẻm núi Sao Hỏa",
            mission_hint: "Vượt qua hành lang hẻm núi hình bậc thang: Tiến 2 ô -> Rẽ phải 90° -> Tiến 2 ô -> Rẽ trái 90° -> Tiến 2 ô tới Trạm Cờ & Bật LED Xanh!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 5, dir: "NORTH" },
            targets: [{ x: 3, y: 1, type: "flag" }],
            obstacles: [
              { x: 1, y: 2, type: "rock" },
              { x: 2, y: 4, type: "rock" },
              { x: 4, y: 3, type: "rock" },
              { x: 2, y: 1, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [{ x: 3, y: 1, color: "green", label: "Căn cứ Sao Hỏa" }],
            available_blocks: [
              {
                block_id: "s5_l3_drive",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Trong lộ trình bậc thang từ (1,5) -> (1,3) -> (3,3) -> (3,1), mỗi đoạn thẳng đều dài 2 ô. Vậy mỗi lệnh Drive forward cần điền bao nhiêu mm?",
                  options: ["200 mm", "400 mm", "600 mm"],
                  correct_index: 1,
                  hint: "Mỗi đoạn 2 ô = 400 mm!"
                }
              },
              {
                block_id: "s5_l3_turn_r",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Tại ô (1,3), phía trước (1,2) bị đá chắn. Để rẽ sang hướng Đông đi tới (3,3), con chọn góc xoay nào?",
                  options: ["Turn right for 90 degrees", "Turn right for 180 degrees"],
                  correct_index: 0,
                  hint: "Một góc vuông sang phải là 90 degrees."
                }
              },
              {
                block_id: "s5_l3_turn_l",
                block_type: "TURN_LEFT",
                category: "turn",
                label: "Turn left for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Khi đang ở (3,3) và mũi xe hướng sang Phải (Đông), muốn quay mũi xe hướng Lên trên (Bắc) để đi tới cờ (3,1), con dùng lệnh nào?",
                  options: ["Turn left for 90 degrees (Xoay trái 90°)", "Turn right for 90 degrees (Xoay phải 90°)"],
                  correct_index: 0,
                  hint: "Từ hướng Đông quay lên hướng Bắc là rẽ sang Trái 90 độ!"
                }
              },
              {
                block_id: "s5_l3_led",
                block_type: "SET_LED",
                category: "led",
                label: "Set LED Bumper color to",
                unit: "",
                default_param: "green",
                param_options: ["green", "red", "blue"],
                unlock_question: {
                  prompt: "Để báo hiệu hoàn thành nhiệm vụ tại Căn cứ Sao Hỏa, ta đặt khối lệnh Set LED Bumper ở vị trí nào trong chương trình?",
                  options: [
                    "Đặt ở cuối chuỗi lệnh sau khi robot đã đi tới ô cờ đích",
                    "Đặt trước khi robot xuất phát"
                  ],
                  correct_index: 0,
                  hint: "Robot chạy tuần tự từ trên xuống dưới, nên lệnh báo hiệu về đích đặt ở cuối cùng!"
                }
              }
            ]
          }
        ],
        post_quiz: [
          {
            question: "Khối lệnh 'Drive forward for 600 mm' giúp robot VEX GO đi thẳng qua mấy ô trên sa bàn tiêu chuẩn?",
            options: ["2 ô lưới", "3 ô lưới", "6 ô lưới"],
            correct_index: 1,
            explanation: "Vì mỗi ô dài 200 mm nên 600 mm : 200 mm = 3 ô lưới."
          },
          {
            question: "Cảm biến Eye Sensor của VEX GO có thể nhận diện được những thông tin nào sau đây?",
            options: [
              "Vật cản ở gần (Near object) và màu sắc của vật (Đỏ, Xanh lá, Xanh dương)",
              "Nhiệt độ không khí và độ ẩm",
              "Trọng lượng nặng hay nhẹ của tảng đá"
            ],
            correct_index: 0,
            explanation: "Eye Sensor sử dụng cảm biến quang học để nhận biết khoảng cách gần và màu sắc."
          },
          {
            question: "Nếu con chỉ ghép khối lệnh 'Turn right for 90 degrees' mà KHÔNG có lệnh 'Drive forward' phía sau thì chuyện gì xảy ra?",
            options: [
              "Robot chỉ xoay mũi xe sang phải 90 độ tại chỗ chứ không tiến sang ô mới",
              "Robot tự động vừa xoay vừa đi thẳng 1 ô",
              "Robot báo lỗi không chạy"
            ],
            correct_index: 0,
            explanation: "Khối lệnh Turn chỉ điều khiển góc quay tại chỗ."
          },
          {
            question: "Tại sao chúng ta nên bấm nút 'Kiểm tra Logic' để nhẩm đường đi từng dòng lệnh trước khi bấm 'Chạy Robot'?",
            options: [
              "Để kiểm tra thứ tự từng bước xem robot có đâm vào đá hoặc rẽ nhầm hướng không, tránh bấm chạy thử mò mẫm",
              "Để sạc đầy pin cho robot",
              "Để làm sa bàn nhỏ lại"
            ],
            correct_index: 0,
            explanation: "Đọc và kiểm tra tuần tự (Step-by-step trace) là kỹ năng tư duy cốt lõi của lập trình viên!"
          },
          {
            question: "Khối lệnh 'Set LED Bumper color to green' thuộc nhóm chức năng nào?",
            options: [
              "Hiển thị tín hiệu ánh sáng (Looks / LED Bumper)",
              "Điều khiển bánh xe (Drivetrain)",
              "Nam châm điện (Magnet)"
            ],
            correct_index: 0,
            explanation: "LED Bumper giúp robot giao tiếp với con người qua tín hiệu màu sắc."
          }
        ]
      },
      {
        session_number: 8,
        title: "Buổi 8: Nam châm điện (Electromagnet) - Thu thập Đĩa Năng Lượng",
        theme: "mars",
        hardware_check: [
          {
            part_key: "electromagnet",
            question: "Nam châm điện (Electromagnet) trên robot VEX GO khác nam châm vĩnh cửu thông thường ở điểm nào?",
            options: [
              "Có thể điều khiển bằng lệnh lập trình để BẬT lực hút (Boost) hoặc NHẢ vật ra (Drop)",
              "Lúc nào cũng hút chặt không thể nhả vật ra được",
              "Hút được cả nhựa và gỗ"
            ],
            correct_index: 0,
            explanation: "Tuyệt vời! Electromagnet dùng dòng điện từ Brain nên ta có thể lập trình lệnh Boost (hút) và Drop (thả)."
          }
        ],
        levels: [
          {
            level_id: 1,
            level_name: "Cấp độ 1: Hút đĩa năng lượng và đưa về Trạm",
            mission_hint: "Đi thẳng 2 ô tới Đĩa năng lượng (2,3) -> Bật nam châm BOOST để hút đĩa -> Đi thẳng thêm 2 ô tới Trạm cờ (2,1) -> Thả đĩa DROP!",
            grid_size: [6, 6],
            start_pos: { x: 2, y: 5, dir: "NORTH" },
            targets: [{ x: 2, y: 1, type: "flag" }],
            obstacles: [{ x: 1, y: 3, type: "rock" }, { x: 3, y: 3, type: "rock" }],
            collectibles: [{ x: 2, y: 3, id: "disc_1", label: "Lõi Kim Loại" }],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "s8_l1_drive",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Từ ô xuất phát (2,5) tới ô có Lõi Kim Loại (2,3) là 2 ô. Con cần đi thẳng bao nhiêu mm trước khi bật nam châm hút?",
                  options: ["200 mm", "400 mm", "600 mm"],
                  correct_index: 1,
                  hint: "2 ô × 200 mm = 400 mm."
                }
              },
              {
                block_id: "s8_l1_mag_boost",
                block_type: "ENERGIZE_MAGNET",
                category: "magnet",
                label: "Energize magnet to",
                unit: "",
                default_param: "boost",
                param_options: ["boost", "drop"],
                unlock_question: {
                  prompt: "Khi robot đã đứng ngay trên Lõi Kim Loại, con chọn chế độ nào của khối 'Energize magnet' để HÚT vật phẩm lên?",
                  options: ["boost (Kích hoạt từ trường hút mẫu vật)", "drop (Ngắt từ trường để thả mẫu vật)"],
                  correct_index: 0,
                  hint: "BOOST = Tăng lực từ để hút; DROP = Thả vật xuống."
                }
              }
            ]
          },
          {
            level_id: 2,
            level_name: "Cấp độ 2: Thu hồi mẫu vật ở góc hẻm núi",
            mission_hint: "Tiến 2 ô lên (1,3) để lấy Lõi Kim Loại (Boost) -> Rẽ phải 90° -> Tiến 3 ô sang Trạm cờ (4,3) -> Thả vật (Drop)!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 5, dir: "NORTH" },
            targets: [{ x: 4, y: 3, type: "flag" }],
            obstacles: [{ x: 1, y: 2, type: "rock" }, { x: 2, y: 4, type: "rock" }],
            collectibles: [{ x: 1, y: 3, id: "disc_2", label: "Lõi Kim Loại" }],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "s8_l2_drive",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Sau khi hút mẫu vật tại (1,3) và rẽ phải 90°, Trạm cờ ở (4,3) cách robot mấy ô?",
                  options: ["2 ô (400 mm)", "3 ô (600 mm)", "4 ô (800 mm)"],
                  correct_index: 1,
                  hint: "Từ cột x=1 sang cột x=4 là 3 ô = 600 mm!"
                }
              },
              {
                block_id: "s8_l2_mag",
                block_type: "ENERGIZE_MAGNET",
                category: "magnet",
                label: "Energize magnet to",
                unit: "",
                default_param: "boost",
                param_options: ["boost", "drop"],
                unlock_question: {
                  prompt: "Khi đã mang Lõi Kim Loại tới đúng ô Trạm cờ (4,3), con thêm một khối 'Energize magnet' nữa và chỉnh sang chế độ nào để thả mẫu vật vào trạm?",
                  options: ["drop (Thả mẫu vật xuống trạm)", "boost (Hút tiếp)"],
                  correct_index: 0,
                  hint: "Dùng 'boost' ở chỗ lấy hàng và dùng 'drop' ở trạm đích nhé!"
                }
              },
              {
                block_id: "s8_l2_turn",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Khối lệnh 'Turn right for 90 degrees' cần đặt trước hay sau khi hút mẫu vật tại (1,3)?",
                  options: [
                    "Có thể hút mẫu vật tại (1,3) rồi xoay phải 90° để đi sang (4,3)",
                    "Đặt ở đầu chương trình khi chưa đi tới mẫu vật"
                  ],
                  correct_index: 0,
                  hint: "Đi thẳng tới ô (1,3), hút mẫu vật, rồi xoay phải 90° đi sang trạm!"
                }
              }
            ]
          },
          {
            level_id: 3,
            level_name: "Cấp độ 3: Nhiệm vụ Kép - Hút mẫu & Quay đầu 180°",
            mission_hint: "Tiến 3 ô lên (3,2) -> Hút mẫu vật (Boost) -> Xoay 180° quay ngược đầu -> Tiến 3 ô về Trạm (3,5) -> Thả mẫu (Drop)!",
            grid_size: [6, 6],
            start_pos: { x: 3, y: 5, dir: "NORTH" },
            targets: [{ x: 3, y: 5, type: "flag" }],
            obstacles: [
              { x: 2, y: 3, type: "rock" }, { x: 4, y: 3, type: "rock" },
              { x: 2, y: 2, type: "rock" }, { x: 4, y: 2, type: "rock" }
            ],
            collectibles: [{ x: 3, y: 2, id: "disc_3", label: "Pin Mặt Trời" }],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "s8_l3_drive",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 600,
                param_options: [200, 400, 600, 800],
                unlock_question: {
                  prompt: "Từ trạm (3,5) đi lên chỗ Pin Mặt Trời (3,2) là 3 ô. Lượt đi và lượt về đều dài bao nhiêu mm?",
                  options: ["400 mm", "600 mm", "800 mm"],
                  correct_index: 1,
                  hint: "3 ô × 200 mm = 600 mm."
                }
              },
              {
                block_id: "s8_l3_mag",
                block_type: "ENERGIZE_MAGNET",
                category: "magnet",
                label: "Energize magnet to",
                unit: "",
                default_param: "boost",
                param_options: ["boost", "drop"],
                unlock_question: {
                  prompt: "Trong nhiệm vụ này, con cần dùng khối 'Energize magnet' mấy lần?",
                  options: [
                    "2 lần: Lần 1 chọn 'boost' tại (3,2) để hút, Lần 2 chọn 'drop' khi về tới (3,5)",
                    "Chỉ 1 lần ở đầu chương trình"
                  ],
                  correct_index: 0,
                  hint: "Nhớ hút (boost) ở điểm lấy mẫu và thả (drop) khi về tới cờ trạm nhé!"
                }
              },
              {
                block_id: "s8_l3_turn",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 180,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Để robot quay ngược đầu từ hướng Bắc về hướng Nam ngay tại ô (3,2), con chọn góc xoay bao nhiêu độ?",
                  options: ["90 degrees", "180 degrees"],
                  correct_index: 1,
                  hint: "Xoay 180° giúp robot quay đầu ngược lại để tiến thẳng về trạm!"
                }
              }
            ]
          }
        ],
        post_quiz: [
          {
            question: "Hai chế độ của khối lệnh 'Energize magnet to [boost / drop]' có tác dụng gì?",
            options: [
              "Boost: Bật lực từ hút vật kim loại | Drop: Ngắt lực từ để thả vật xuống",
              "Boost: Tăng tốc bánh xe | Drop: Phanh gấp",
              "Boost: Bật đèn sáng | Drop: Tắt đèn"
            ],
            correct_index: 0,
            explanation: "Electromagnet dùng chế độ Boost để hút đĩa kim loại và Drop để nhả đĩa."
          },
          {
            question: "Nếu con bật 'Energize magnet to boost' khi robot CHƯA đi tới ô có đĩa kim loại thì robot có hút được đĩa từ xa cách 3 ô không?",
            options: [
              "Không, robot phải di chuyển tới đúng ô chứa đĩa kim loại rồi mới hút được",
              "Có, nam châm hút được xuyên qua toàn bộ sa bàn"
            ],
            correct_index: 0,
            explanation: "Nam châm điện cần tiếp xúc ngay phía trên lõi kim loại mới hút được vật phẩm."
          }
        ]
      }
    ]
  },
  {
    course_id: "VEX_GO_LVL2",
    course_name: "Khóa 2: Super Car & Cơ khí Truyền động",
    age_group: "Tiểu học (7 - 11 tuổi)",
    sessions: [
      {
        session_number: 5,
        title: "Buổi 5: Code Super Car - Kiểm soát Tốc độ & Đường đua",
        theme: "factory",
        hardware_check: [
          {
            part_key: "gear",
            question: "Trong mô hình Code Super Car, hệ thống Bánh răng (Gears) ăn khớp với nhau có tác dụng gì?",
            options: [
              "Truyền lực quay từ Động cơ (Motor) xuống bánh xe và thay đổi tốc độ / lực kéo",
              "Chỉ để trang trí cho xe đẹp hơn",
              "Dùng để phát sáng trong bóng tối"
            ],
            correct_index: 0,
            explanation: "Chính xác! Hệ truyền động bánh răng giúp truyền chuyển động từ trục động cơ tới bánh xe."
          }
        ],
        levels: [
          {
            level_id: 1,
            level_name: "Cấp độ 1: Tăng tốc Nước rút trên đường thẳng",
            mission_hint: "Cài đặt tốc độ (Set drive velocity) lên 100% rồi cho Super Car phóng thẳng 4 ô (800 mm) về đích!",
            grid_size: [6, 6],
            start_pos: { x: 2, y: 5, dir: "NORTH" },
            targets: [{ x: 2, y: 1, type: "flag" }],
            obstacles: [
              { x: 1, y: 4, type: "rock" }, { x: 3, y: 4, type: "rock" },
              { x: 1, y: 2, type: "rock" }, { x: 3, y: 2, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "sc_l1_vel",
                block_type: "SET_VELOCITY",
                category: "drive",
                label: "Set drive velocity to",
                unit: "%",
                default_param: 100,
                param_options: [50, 75, 100],
                unlock_question: {
                  prompt: "Khối lệnh 'Set drive velocity to 100 %' có tự làm xe chạy ngay không, hay chỉ cài đặt mức tốc độ cho các lệnh Drive phía sau?",
                  options: [
                    "Chỉ cài đặt tốc độ tối đa 100%, cần ghép thêm lệnh Drive forward phía sau xe mới chạy",
                    "Xe tự động chạy mãi không dừng"
                  ],
                  correct_index: 0,
                  hint: "Set drive velocity giống như chọn số xe, sau đó phải có lệnh Drive forward để xe lăn bánh!"
                }
              },
              {
                block_id: "sc_l1_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 800,
                param_options: [400, 600, 800],
                unlock_question: {
                  prompt: "Đường đua thẳng dài 4 ô từ (2,5) tới (2,1). Con cần chọn quãng đường bao nhiêu mm?",
                  options: ["400 mm", "600 mm", "800 mm"],
                  correct_index: 2,
                  hint: "4 ô × 200 mm = 800 mm."
                }
              }
            ]
          },
          {
            level_id: 2,
            level_name: "Cấp độ 2: Khúc cua Gấp chữ U trên đường đua",
            mission_hint: "Tiến 3 ô lên (1,2) -> Rẽ phải 90° -> Tiến 3 ô sang (4,2) -> Rẽ phải 90° -> Tiến 3 ô xuống đích (4,5)!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 5, dir: "NORTH" },
            targets: [{ x: 4, y: 5, type: "flag" }],
            obstacles: [
              { x: 2, y: 5, type: "rock" }, { x: 2, y: 4, type: "rock" }, { x: 2, y: 3, type: "rock" },
              { x: 3, y: 5, type: "rock" }, { x: 3, y: 4, type: "rock" }, { x: 3, y: 3, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "sc_l2_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 600,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Cả 3 cạnh của đường đua chữ U đều dài 3 ô lưới. Mỗi cạnh ứng với bao nhiêu mm?",
                  options: ["400 mm", "600 mm", "800 mm"],
                  correct_index: 1,
                  hint: "3 ô × 200 mm = 600 mm!"
                }
              },
              {
                block_id: "sc_l2_turn",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Trên đường đua chữ U này, Super Car phải ôm cua sang phải mấy lần?",
                  options: ["1 lần", "2 lần (tại hai góc trên của chữ U)", "4 lần"],
                  correct_index: 1,
                  hint: "Ôm cua góc trái trên (1,2) và góc phải trên (4,2) là 2 lần rẽ phải 90 độ!"
                }
              }
            ]
          },
          {
            level_id: 3,
            level_name: "Cấp độ 3: Đua xe Vòng lặp (Repeat Loop)",
            mission_hint: "Thử thách tối ưu code: Dùng lệnh điều hướng và bật đèn LED Xanh dương khi cán đích!",
            grid_size: [6, 6],
            start_pos: { x: 0, y: 5, dir: "NORTH" },
            targets: [{ x: 4, y: 1, type: "flag" }],
            obstacles: [
              { x: 0, y: 2, type: "rock" },
              { x: 2, y: 4, type: "rock" },
              { x: 4, y: 3, type: "rock" }
            ],
            collectibles: [],
            sensor_tiles: [],
            available_blocks: [
              {
                block_id: "sc_l3_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600, 800],
                unlock_question: {
                  prompt: "Lộ trình từ (0,5) -> tiến 2 ô lên (0,3) -> rẽ phải -> tiến 4 ô sang (4,3) -> rẽ trái -> tiến 2 ô lên (4,1). Đoạn ngang dài 4 ô từ cột 0 sang cột 4 là bao nhiêu mm?",
                  options: ["400 mm", "600 mm", "800 mm"],
                  correct_index: 2,
                  hint: "4 ô × 200 mm = 800 mm!"
                }
              },
              {
                block_id: "sc_l3_tr",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Tại ô (0,3), muốn rẽ sang hướng Đông để đi ngang qua sa bàn, con chọn lệnh gì?",
                  options: ["Turn right for 90 degrees", "Turn left for 90 degrees"],
                  correct_index: 0,
                  hint: "Rẽ phải 90 độ!"
                }
              },
              {
                block_id: "sc_l3_tl",
                block_type: "TURN_LEFT",
                category: "turn",
                label: "Turn left for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Tại ô (4,3), muốn hướng mũi xe lên phía Bắc về đích (4,1), con chọn lệnh gì?",
                  options: ["Turn left for 90 degrees", "Turn right for 90 degrees"],
                  correct_index: 0,
                  hint: "Đang nhìn sang Đông, rẽ trái 90° sẽ hướng lên Bắc!"
                }
              }
            ]
          }
        ],
        post_quiz: [
          {
            question: "Khối lệnh 'Set drive velocity to 100%' dùng để làm gì?",
            options: [
              "Cài đặt tốc độ di chuyển của robot nhanh tối đa (100%)",
              "Làm robot đi thẳng 100 mm",
              "Làm robot xoay 100 độ"
            ],
            correct_index: 0,
            explanation: "Velocity nghĩa là vận tốc/tốc độ, tính theo phần trăm từ 1% đến 100%."
          }
        ]
      }
    ]
  },
  {
    course_id: "VEX_GO_LVL3",
    course_name: "Khóa 3: Robot Arm & Tự động hóa Công nghiệp",
    age_group: "Tiểu học (8 - 11 tuổi)",
    sessions: [
      {
        session_number: 4,
        title: "Buổi 4: Robot vận chuyển Kiện hàng Nam châm & Phân loại Màu",
        theme: "factory",
        hardware_check: [
          {
            part_key: "electromagnet",
            question: "Trong dây chuyền nhà máy tự động, sự kết hợp giữa Eye Sensor và Electromagnet giúp robot làm được việc gì?",
            options: [
              "Hút kiện hàng kim loại, kiểm tra màu sắc kiện hàng và thả đúng kho phân loại",
              "Chỉ chạy vòng quanh nhà máy",
              "Tự động sạc điện"
            ],
            correct_index: 0,
            explanation: "Đúng rồi! Đây chính là nguyên lý của robot phân loại hàng hóa trong nhà máy thông minh."
          }
        ],
        levels: [
          {
            level_id: 1,
            level_name: "Cấp độ 1: Gắp kiện hàng thép đưa vào Kho Xanh",
            mission_hint: "Tiến 2 ô lấy kiện hàng tại (2,3) bằng Magnet Boost -> Tiến 2 ô tới Kho Xanh (2,1) -> Thả hàng Magnet Drop & Bật LED Green!",
            grid_size: [6, 6],
            start_pos: { x: 2, y: 5, dir: "NORTH" },
            targets: [{ x: 2, y: 1, type: "flag" }],
            obstacles: [{ x: 1, y: 2, type: "rock" }, { x: 3, y: 2, type: "rock" }],
            collectibles: [{ x: 2, y: 3, id: "cargo_1", label: "Kiện Hàng Thép" }],
            sensor_tiles: [{ x: 2, y: 1, color: "green", label: "Kho Xanh" }],
            available_blocks: [
              {
                block_id: "ra_l1_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Mỗi chặng từ điểm xuất phát -> Kiện hàng -> Kho Xanh đều cách nhau 2 ô. Con chọn thông số nào?",
                  options: ["200 mm", "400 mm", "600 mm"],
                  correct_index: 1,
                  hint: "2 ô × 200 mm = 400 mm."
                }
              },
              {
                block_id: "ra_l1_mag",
                block_type: "ENERGIZE_MAGNET",
                category: "magnet",
                label: "Energize magnet to",
                unit: "",
                default_param: "boost",
                param_options: ["boost", "drop"],
                unlock_question: {
                  prompt: "Để gắp Kiện Hàng Thép tại (2,3) rồi thả xuống tại Kho Xanh (2,1), thứ tự 2 khối lệnh Magnet trong chương trình là gì?",
                  options: ["Boost trước (tại 2,3) -> Drop sau (tại 2,1)", "Drop trước -> Boost sau"],
                  correct_index: 0,
                  hint: "Hút hàng lên (Boost) rồi mang tới kho mới thả xuống (Drop)!"
                }
              },
              {
                block_id: "ra_l1_led",
                block_type: "SET_LED",
                category: "led",
                label: "Set LED Bumper color to",
                unit: "",
                default_param: "green",
                param_options: ["green", "red", "blue"],
                unlock_question: {
                  prompt: "Khi thả hàng xong tại Kho Xanh, đèn LED bật màu Xanh lá (green) báo hiệu điều gì?",
                  options: ["Đã bàn giao kiện hàng thành công vào kho", "Báo động lỗi"],
                  correct_index: 0,
                  hint: "Đèn xanh báo hiệu quy trình hoàn tất!"
                }
              }
            ]
          }
        ],
        post_quiz: [
          {
            question: "Trong dây chuyền phân loại, vì sao phải thực hiện lệnh 'Energize magnet to drop' khi robot đã tới kho đích?",
            options: [
              "Để ngắt lực từ và đặt kiện hàng xuống kho",
              "Để hút kiện hàng chặt hơn",
              "Để robot quay về vị trí cũ"
            ],
            correct_index: 0,
            explanation: "Chế độ Drop ngắt dòng điện qua cuộn dây nam châm điện để thả vật."
          }
        ]
      }
    ]
  },
  {
    course_id: "VEX_GO_LVL4",
    course_name: "Khóa 4: Ocean Science Exploration (Khám phá Đại dương)",
    age_group: "Tiểu học (8 - 12 tuổi)",
    sessions: [
      {
        session_number: 6,
        title: "Buổi 6: Tàu ngầm ROV - Bảo vệ Rạn san hô & Thu gom Rác biển",
        theme: "ocean",
        hardware_check: [
          {
            part_key: "eye_sensor",
            question: "Dưới đáy đại dương, Tàu ngầm ROV dùng cảm biến nào để tránh đâm vào các rạn san hô quý hiếm?",
            options: ["Eye Sensor (Cảm biến Mắt)", "Nam châm điện", "Bánh xe cao su"],
            correct_index: 0,
            explanation: "Eye Sensor giúp phát hiện rạn san hô phía trước để tàu ngầm kịp thời đổi hướng."
          }
        ],
        levels: [
          {
            level_id: 1,
            level_name: "Cấp độ 1: Thu gom Lưới sắt cũ khỏi Rạn san hô",
            mission_hint: "Tiến 2 ô tới vị trí Lưới sắt (1,3) -> Hút bằng Magnet Boost -> Rẽ phải 90° -> Tiến 3 ô về Trạm tái chế (4,3) -> Thả Magnet Drop!",
            grid_size: [6, 6],
            start_pos: { x: 1, y: 5, dir: "NORTH" },
            targets: [{ x: 4, y: 3, type: "flag" }],
            obstacles: [{ x: 1, y: 2, type: "rock" }, { x: 3, y: 4, type: "rock" }],
            collectibles: [{ x: 1, y: 3, id: "trash_1", label: "Lồng Sắt Cũ" }],
            sensor_tiles: [{ x: 4, y: 3, color: "green", label: "Trạm Tái Chế" }],
            available_blocks: [
              {
                block_id: "oc_l1_fwd",
                block_type: "DRIVE_FORWARD",
                category: "drive",
                label: "Drive forward for",
                unit: "mm",
                default_param: 400,
                param_options: [200, 400, 600],
                unlock_question: {
                  prompt: "Từ (1,5) tiến lên (1,3) là 2 ô (400 mm), còn từ (1,3) đi ngang sang Trạm tái chế (4,3) là 3 ô. Vậy khối Drive forward thứ hai cần chỉnh thành bao nhiêu mm?",
                  options: ["400 mm", "600 mm", "800 mm"],
                  correct_index: 1,
                  hint: "3 ô × 200 mm = 600 mm!"
                }
              },
              {
                block_id: "oc_l1_mag",
                block_type: "ENERGIZE_MAGNET",
                category: "magnet",
                label: "Energize magnet to",
                unit: "",
                default_param: "boost",
                param_options: ["boost", "drop"],
                unlock_question: {
                  prompt: "Tàu ngầm dùng chế độ nào để hút Lồng Sắt Cũ dưới đáy biển?",
                  options: ["boost", "drop"],
                  correct_index: 0,
                  hint: "Boost để kích hoạt nam châm điện hút vật kim loại!"
                }
              },
              {
                block_id: "oc_l1_turn",
                block_type: "TURN_RIGHT",
                category: "turn",
                label: "Turn right for",
                unit: "degrees",
                default_param: 90,
                param_options: [90, 180],
                unlock_question: {
                  prompt: "Phía trước ô (1,2) là rạn san hô không được chạm vào. Tại (1,3) tàu ngầm cần xoay hướng nào để đi sang (4,3)?",
                  options: ["Turn right for 90 degrees", "Turn left for 90 degrees"],
                  correct_index: 0,
                  hint: "Trạm tái chế ở bên phải (cột x=4), nên xoay phải 90 độ!"
                }
              }
            ]
          }
        ],
        post_quiz: [
          {
            question: "Khi lập trình robot thu gom vật phẩm kim loại về trạm, quy trình 4 bước chuẩn là gì?",
            options: [
              "Di chuyển tới vật phẩm -> Magnet Boost -> Di chuyển tới trạm đích -> Magnet Drop",
              "Magnet Drop -> Di chuyển -> Magnet Boost",
              "Chỉ cần đứng tại chỗ bật Magnet Boost"
            ],
            correct_index: 0,
            explanation: "Đó là quy trình chuẩn của mọi bài toán gắp - thả vật phẩm trên sa bàn VEX GO."
          }
        ]
      }
    ]
  }
];

// ============================================================================
// STUDENT ROSTER & LOCALSTORAGE DATA MANAGER (MindX Thuận An)
// ============================================================================
window.DEFAULT_STUDENTS_ROSTER = [
  { id: "st_1", name: "Gia Huy", class_code: "VEXGO-TA05", avatar: "GH" },
  { id: "st_2", name: "Minh Khang", class_code: "VEXGO-TA05", avatar: "MK" },
  { id: "st_3", name: "Bảo Ngọc", class_code: "VEXGO-TA05", avatar: "BN" },
  { id: "st_4", name: "Tuấn Kiệt", class_code: "VEXGO-TA05", avatar: "TK" },
  { id: "st_5", name: "Thiên Ân", class_code: "VEXGO-TA06", avatar: "TA" }
];

window.CourseStorage = {
  STORAGE_KEY: "vexgo_mindx_courses_v1",
  ROSTER_KEY: "vexgo_mindx_roster_v1",
  HISTORY_KEY: "vexgo_mindx_reports_v1",

  loadCourses() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn("Could not read courses from localStorage", e);
    }
    return JSON.parse(JSON.stringify(window.DEFAULT_VEXGO_COURSES));
  },

  saveCourses(courses) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
    } catch (e) {
      console.warn("Could not save courses", e);
    }
  },

  resetToDefault() {
    localStorage.removeItem(this.STORAGE_KEY);
    return JSON.parse(JSON.stringify(window.DEFAULT_VEXGO_COURSES));
  },

  loadRoster() {
    try {
      const raw = localStorage.getItem(this.ROSTER_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return JSON.parse(JSON.stringify(window.DEFAULT_STUDENTS_ROSTER));
  },

  saveRoster(roster) {
    try {
      localStorage.setItem(this.ROSTER_KEY, JSON.stringify(roster));
    } catch (e) {}
  },

  loadReports() {
    try {
      const raw = localStorage.getItem(this.HISTORY_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
  },

  saveReport(reportItem) {
    try {
      const list = this.loadReports();
      const existingIdx = list.findIndex(
        r => r.student_id === reportItem.student_id &&
             r.course_id === reportItem.course_id &&
             r.session_number === reportItem.session_number
      );
      if (existingIdx >= 0) {
        list[existingIdx] = reportItem;
      } else {
        list.unshift(reportItem);
      }
      localStorage.setItem(this.HISTORY_KEY, JSON.stringify(list));
    } catch (e) {}
  }
};
