// ============================================================================
// VEXCODE GO (codego.vex.com) REPLICA + MINDX LOGIC LAB + WEB BLUETOOTH
// Full Block-Unlocking Engine, 2.5D Playground, BLE GATT & Parent/QC Report
// ============================================================================

const DIR_ORDER = ["NORTH", "EAST", "SOUTH", "WEST"];
const DIR_DELTAS = {
  NORTH: { dx: 0, dy: -1, angle: 0, label: "Bắc (0° ↑)" },
  EAST:  { dx: 1, dy: 0,  angle: 90, label: "Đông (90° →)" },
  SOUTH: { dx: 0, dy: 1,  angle: 180, label: "Nam (180° ↓)" },
  WEST:  { dx: -1, dy: 0, angle: 270, label: "Tây (270° ←)" }
};

// Complete VEXcode GO Standard Block Library (Exact match to codego.vex.com screenshot)
const VEXCODE_STANDARD_CATALOG = {
  motion: {
    title: "Motion",
    sections: [
      {
        subtitle: "Motion - Actions",
        blocks: [
          {
            block_id: "std_spin_fwd",
            block_type: "SPIN_MOTOR",
            category: "motion",
            motor: "Motor1",
            dir: "forward",
            label: "spin",
            default_param: "forward",
            param_options: ["forward", "reverse"],
            unit: "",
            unlock_question: {
              prompt: "Khối lệnh 'spin Motor1 forward' giúp động cơ Motor1 hoạt động như thế nào?",
              options: [
                "Quay động cơ Motor1 liên tục theo chiều tiến cho đến khi gặp lệnh dừng",
                "Chỉ quay đúng 1 vòng rồi tự dừng",
                "Đổi màu đèn LED"
              ],
              correct_index: 0,
              hint: "Khối lệnh spin không có chữ 'for ... degrees' sẽ làm động cơ quay liên tục!"
            }
          },
          {
            block_id: "std_spin_for_deg",
            block_type: "DRIVE_FORWARD",
            category: "motion",
            motor: "Motor1",
            dir: "forward",
            label: "spin Motor1 forward for",
            default_param: 90,
            param_options: [90, 180, 360, 720],
            unit: "degrees",
            unlock_question: {
              prompt: "Trong khối lệnh 'spin Motor1 forward for 90 degrees', con số 90 degrees có ý nghĩa gì?",
              options: [
                "Trục động cơ Motor1 quay đúng một góc 90 độ (1/4 vòng) rồi tự động dừng lại",
                "Động cơ quay trong 90 giây",
                "Động cơ chạy với tốc độ 90%"
              ],
              correct_index: 0,
              hint: "1 vòng tròn là 360 degrees, nên 90 degrees là 1/4 vòng quay!"
            }
          },
          {
            block_id: "std_spin_to_pos",
            block_type: "SPIN_TO_POS",
            category: "motion",
            motor: "Motor1",
            label: "spin Motor1 to position",
            default_param: 90,
            param_options: [0, 45, 90, 180],
            unit: "degrees",
            unlock_question: {
              prompt: "Khối lệnh 'spin Motor1 to position 90 degrees' thường dùng cho cơ cấu nào trên VEX GO?",
              options: [
                "Xoay Cánh tay Robot (Robot Arm) hoặc khớp quay đến đúng vị trí góc 90 độ cố định",
                "Bật nam châm điện",
                "Kiểm tra màu sắc"
              ],
              correct_index: 0,
              hint: "To position giúp đưa khớp cánh tay robot về đúng góc tọa độ mong muốn!"
            }
          },
          {
            block_id: "std_stop_motor",
            block_type: "STOP_MOTOR",
            category: "motion",
            motor: "Motor1",
            label: "stop",
            default_param: "Motor1",
            param_options: ["Motor1", "All Motors"],
            unit: "",
            unlock_question: {
              prompt: "Khối lệnh 'stop Motor1' có tác dụng gì?",
              options: [
                "Ngắt lực quay và phanh động cơ Motor1 dừng lại ngay lập tức",
                "Làm động cơ quay nhanh gấp đôi",
                "Tắt nguồn bộ não Brain"
              ],
              correct_index: 0,
              hint: "Stop nghĩa là dừng động cơ lại!"
            }
          }
        ]
      },
      {
        subtitle: "Motion - Settings",
        blocks: [
          {
            block_id: "std_set_pos",
            block_type: "SET_MOTOR_POS",
            category: "motion",
            label: "set Motor1 position to",
            default_param: 0,
            param_options: [0, 90, 180],
            unit: "degrees",
            unlock_question: {
              prompt: "Khối lệnh 'set Motor1 position to 0 degrees' dùng để làm gì?",
              options: [
                "Đặt lại mốc đo góc (Reset encoder) của động cơ về 0 độ tại vị trí hiện tại",
                "Làm động cơ dừng hẳn",
                "Giảm tốc độ về 0%"
              ],
              correct_index: 0,
              hint: "Giống như bấm nút Reset đồng hồ đo góc về vạch 0!"
            }
          },
          {
            block_id: "std_set_vel",
            block_type: "SET_VELOCITY",
            category: "motion",
            label: "set Motor1 velocity to",
            default_param: 50,
            param_options: [25, 50, 75, 100],
            unit: "%",
            unlock_question: {
              prompt: "Khối lệnh 'set Motor1 velocity to 50 %' cài đặt thông số nào cho động cơ?",
              options: [
                "Cài đặt tốc độ quay của động cơ ở mức 50% (tốc độ trung bình)",
                "Cho động cơ quay 50 vòng",
                "Cho động cơ nghỉ 50 giây"
              ],
              correct_index: 0,
              hint: "Velocity là vận tốc/tốc độ quay (tính từ 1% đến 100%)."
            }
          },
          {
            block_id: "std_set_stopping",
            block_type: "SET_STOPPING",
            category: "motion",
            label: "set Motor1 stopping to",
            default_param: "brake",
            param_options: ["brake", "coast", "hold"],
            unit: "",
            unlock_question: {
              prompt: "Trong 3 chế độ phanh (brake, coast, hold), chế độ 'brake' hoặc 'hold' giúp ích gì cho robot?",
              options: [
                "Giúp bánh xe hoặc cánh tay robot phanh cứng ngay khi đủ quãng đường, không bị trôi theo quán tính",
                "Làm xe trôi tự do",
                "Tăng tốc độ tối đa"
              ],
              correct_index: 0,
              hint: "Brake = Phanh ngay; Hold = Giữ chặt vị trí; Coast = Trôi tự do."
            }
          },
          {
            block_id: "std_set_torque",
            block_type: "SET_MAX_TORQUE",
            category: "motion",
            label: "set Motor1 max torque to",
            default_param: 50,
            param_options: [50, 75, 100],
            unit: "%",
            unlock_question: {
              prompt: "Thông số 'max torque' (Mô-men xoắn cực đại) quyết định điều gì của động cơ?",
              options: [
                "Độ khỏe (lực kéo/lực nâng) của động cơ khi leo dốc hoặc nâng vật nặng",
                "Màu sắc của đèn LED",
                "Khoảng cách cảm biến mắt"
              ],
              correct_index: 0,
              hint: "Torque là lực kéo khỏe hay nhẹ của động cơ!"
            }
          },
          {
            block_id: "std_set_timeout",
            block_type: "SET_TIMEOUT",
            category: "motion",
            label: "set Motor1 timeout to",
            default_param: 1,
            param_options: [1, 2, 3, 5],
            unit: "seconds",
            unlock_question: {
              prompt: "Khối lệnh 'set Motor1 timeout to 1 seconds' bảo vệ robot như thế nào khi bị kẹt vật cản?",
              options: [
                "Nếu động cơ bị kẹt không quay đủ góc sau 1 giây, nó sẽ tự ngắt để qua lệnh tiếp theo và tránh cháy mô-tơ",
                "Làm robot chờ 1 giây trước khi chạy",
                "Tắt Bluetooth sau 1 giây"
              ],
              correct_index: 0,
              hint: "Timeout là thời gian tối đa cho phép động cơ cố gắng hoàn thành lệnh!"
            }
          }
        ]
      }
    ]
  }
};

const appState = {
  courses: [],
  currentCourseId: "VEX_GO_LVL1",
  currentSessionNumber: 5,
  activeMainTab: "code",      // "code" | "drive" | "hardware" | "quiz" | "report" | "builder"
  activeCategory: "motion",   // "motion" | "drivetrain" | "inertial" | "eye" | "magnet" | "console" | "logic" | "switch"
  currentLevelIndex: 0,
  showPlaygroundDock: true,
  showGridCoords: true,
  canvasZoom: 1,

  // Active Modals
  bluetoothModalOpen: false,
  devicesModalOpen: false,
  codeViewerModalOpen: false,

  // Student Profile & Roster
  roster: [],
  activeStudent: null,

  // Analytics for Parent/QC Report
  analytics: {
    hardwareAnswers: {},
    unlockedBlocks: {},
    totalUnlockQuestions: 6,
    firstTryUnlocks: 0,
    totalUnlockAttempts: 0,
    levelsCompleted: {},
    logicCheckCount: 0,
    robotRunCount: 0,
    quizAnswers: {}
  },

  // Workspace Stack under `when started`
  programStack: [],
  undoStack: [],
  redoStack: [],
  logicCheckPassed: false,
  ghostPathCells: [],
  activeHighlightIndex: -1,
  highlightMode: null,
  isSimRunning: false,
  simSpeedMs: 460,
  feedbackMessage: "Sẵn sàng. Hãy chọn khối lệnh bên trái, trả lời câu hỏi Khóa Tư Duy để ghép vào 'when started'!",
  feedbackType: "info",

  // 2.5D Robot Telemetry
  robot: {
    x: 0,
    y: 5,
    dir: "NORTH",
    angle: 0,
    distanceMm: 0,
    ledColor: "off",
    magnetState: "off",
    carryingItem: null,
    droppedItemsAtTarget: [],
    eyeBeamActive: false,
    visitedCells: []
  },

  // Block-Unlocking Popup State
  unlockModal: {
    open: false,
    blockDef: null,
    selectedOption: null,
    isCorrect: null,
    showHint: false,
    attemptsForThisBlock: 0
  },

  // Lesson Builder State
  builder: {
    activeBrush: "rock",
    draftLevel: null
  }
};

// ============================================================================
// INITIALIZATION
// ============================================================================
function initApp() {
  appState.courses = window.CourseStorage.loadCourses();
  appState.roster = window.CourseStorage.loadRoster();
  appState.activeStudent = appState.roster[0];

  // Subscribe to Web Bluetooth state updates
  if (window.vexBluetooth) {
    window.vexBluetooth.onChange(() => {
      renderTopHeader();
      renderBottomStatusBar();
      if (appState.bluetoothModalOpen) {
        renderBluetoothModal();
      }
    });
  }

  loadSession(appState.currentCourseId, appState.currentSessionNumber);
}

function getCurrentCourse() {
  return appState.courses.find(c => c.course_id === appState.currentCourseId) || appState.courses[0];
}

function getCurrentSession() {
  const course = getCurrentCourse();
  return course.sessions.find(s => s.session_number === Number(appState.currentSessionNumber)) || course.sessions[0];
}

function getCurrentLevel() {
  const session = getCurrentSession();
  return session.levels[appState.currentLevelIndex] || session.levels[0];
}

function loadSession(courseId, sessionNumber) {
  appState.currentCourseId = courseId;
  const course = getCurrentCourse();
  const foundSession = course.sessions.find(s => s.session_number === Number(sessionNumber)) || course.sessions[0];
  appState.currentSessionNumber = foundSession.session_number;
  appState.currentLevelIndex = 0;

  let totalBlocks = 0;
  foundSession.levels.forEach(lvl => {
    totalBlocks += (lvl.available_blocks || []).length;
  });

  appState.analytics = {
    hardwareAnswers: {},
    unlockedBlocks: {},
    totalUnlockQuestions: Math.max(totalBlocks, 4),
    firstTryUnlocks: 0,
    totalUnlockAttempts: 0,
    levelsCompleted: {},
    logicCheckCount: 0,
    robotRunCount: 0,
    quizAnswers: {}
  };

  loadLevel(0);
  renderAll();
}

function loadLevel(levelIndex) {
  const session = getCurrentSession();
  appState.currentLevelIndex = Math.max(0, Math.min(levelIndex, session.levels.length - 1));
  appState.programStack = [];
  appState.logicCheckPassed = false;
  appState.ghostPathCells = [];
  appState.activeHighlightIndex = -1;
  appState.highlightMode = null;
  appState.isSimRunning = false;
  resetRobotToStart();
  renderAll();
}

function resetRobotToStart() {
  const level = getCurrentLevel();
  const start = level.start_pos || { x: 0, y: 5, dir: "NORTH" };
  const dirInfo = DIR_DELTAS[start.dir] || DIR_DELTAS.NORTH;

  appState.robot = {
    x: start.x,
    y: start.y,
    dir: start.dir,
    angle: dirInfo.angle,
    distanceMm: 0,
    ledColor: "off",
    magnetState: "off",
    carryingItem: null,
    droppedItemsAtTarget: [],
    eyeBeamActive: false,
    visitedCells: [{ x: start.x, y: start.y }]
  };
  appState.activeHighlightIndex = -1;
  appState.highlightMode = null;
  appState.isSimRunning = false;
}

// ============================================================================
// RENDER ORCHESTRATOR
// ============================================================================
function renderAll() {
  renderTopHeader();
  renderSubToolbar();
  renderMainBody();
  renderBottomStatusBar();
  renderUnlockModal();
  renderBluetoothModal();
  renderDevicesModal();
}

// ----------------------------------------------------------------------------
// 1. TOP ROYAL BLUE HEADER BAR (`codego.vex.com` exact match)
// ----------------------------------------------------------------------------
function renderTopHeader() {
  const headerEl = document.getElementById("vex-top-header");
  if (!headerEl) return;

  const course = getCurrentCourse();
  const session = getCurrentSession();
  const ble = window.vexBluetooth;
  const isBleConnected = ble && ble.isConnected();
  const isBleScanning = ble && ble.status === "scanning";

  let brainBtnClass = "vex-header-icon-btn";
  if (isBleConnected) brainBtnClass += " brain-btn-connected";
  else if (isBleScanning) brainBtnClass += " brain-btn-scanning";

  const courseOptionsHTML = appState.courses.map(c =>
    c.sessions.map(s => {
      const val = `${c.course_id}::${s.session_number}`;
      const isSelected = c.course_id === course.course_id && s.session_number === session.session_number;
      return `<option value="${val}" ${isSelected ? 'selected' : ''}>[${c.course_id.replace('VEX_GO_', '')}] ${s.title}</option>`;
    }).join("")
  ).join("");

  headerEl.innerHTML = `
    <!-- LEFT: GO Logo, Globe, File, Tools, Tutorials, Builds -->
    <div class="vex-header-left">
      <div class="vex-go-logo-box" onclick="switchMainTab('code')" title="VEXcode GO - MindX Thuận An">GO</div>

      <button class="vex-header-menu-btn" onclick="cycleStudentProfile()" title="Đổi Học viên đang thực hành">
        🌐 <span>${appState.activeStudent ? appState.activeStudent.name : 'Học viên'} (${appState.activeStudent ? appState.activeStudent.class_code : 'TA05'}) ▾</span>
      </button>
      <button class="vex-header-menu-btn" onclick="switchMainTab('builder')" title="Mở Trình soạn bài JSON & Sa bàn cho Giáo viên">
        File
      </button>
      <button class="vex-header-menu-btn" onclick="toggleDevicesModal()" title="Cấu hình Cổng Smart Ports & Thiết bị">
        Tools
      </button>

      <div class="vex-divider-v"></div>

      <button class="vex-header-icon-btn" onclick="switchMainTab('hardware')" title="Chặng 1: Nhận diện Linh kiện & Lắp ráp">
        <svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
        <span>TUTORIALS</span>
      </button>

      <button class="vex-header-icon-btn" onclick="togglePlaygroundDock()" title="Bật/Tắt Sa bàn Mô phỏng 2.5D">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg>
        <span>BUILDS</span>
      </button>
    </div>

    <!-- CENTER: UNDO, REDO, PROJECT / SESSION SELECTOR -->
    <div class="vex-header-center">
      <button class="vex-header-icon-btn" onclick="undoWorkspaceAction()" title="Hoàn tác (Undo)">
        <svg viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>
        <span>UNDO</span>
      </button>
      <button class="vex-header-icon-btn" onclick="redoWorkspaceAction()" title="Làm lại (Redo)">
        <svg viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>
        <span>REDO</span>
      </button>

      <div class="vex-project-pill">
        <span>⬢</span>
        <select class="vex-course-select-top" onchange="onTopCourseSessionChange(this.value)">
          ${courseOptionsHTML}
        </select>
      </div>
      <span class="vex-save-status">Auto-Saved</span>
    </div>

    <!-- RIGHT: BRAIN (BLUETOOTH), START, STEP, STOP, SHARE, FEEDBACK -->
    <div class="vex-header-right">
      <button class="${brainBtnClass}" onclick="openBluetoothModal()" title="Kết nối Bluetooth VEX GO Brain">
        <svg viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/></svg>
        <span>${isBleConnected ? 'BRAIN ✓' : 'BRAIN ▾'}</span>
      </button>

      <div class="vex-divider-v"></div>

      <button class="vex-header-icon-btn start-btn-highlight" onclick="runRobotSimulation()" ${appState.isSimRunning ? 'disabled' : ''} title="Chạy chương trình trên Robot Bluetooth & Sa bàn">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        <span>START</span>
      </button>

      <button class="vex-header-icon-btn step-btn-highlight" onclick="runStepByStepLogicCheck()" ${appState.isSimRunning ? 'disabled' : ''} title="Kiểm tra Logic từng bước (Highlight & Vẽ đường nhẩm)">
        <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
        <span>STEP</span>
      </button>

      <button class="vex-header-icon-btn" onclick="stopSimulationNow()" title="Dừng Robot">
        <svg viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>
        <span>STOP</span>
      </button>

      <div class="vex-divider-v"></div>

      <button class="vex-header-icon-btn" onclick="switchMainTab('report')" title="Xuất Báo cáo Phụ huynh & QC gửi Zalo">
        <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
        <span>SHARE</span>
      </button>

      <button class="vex-header-icon-btn" onclick="switchMainTab('quiz')" title="Chặng 3: Làm Trắc nghiệm cuối buổi">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        <span>QUIZ</span>
      </button>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 2. SUB-TOOLBAR (`Code 🔊` | `Drive 🎮` + Right White Square Buttons)
// ----------------------------------------------------------------------------
function renderSubToolbar() {
  const subEl = document.getElementById("vex-sub-toolbar");
  if (!subEl) return;

  const unlockedCount = Object.keys(appState.analytics.unlockedBlocks).length;
  const totalBlocks = appState.analytics.totalUnlockQuestions;
  const solvedLvls = Object.keys(appState.analytics.levelsCompleted).length;
  const totalLvls = getCurrentSession().levels.length;

  subEl.innerHTML = `
    <div class="vex-mode-tabs">
      <button class="vex-mode-tab ${appState.activeMainTab === 'code' ? 'active' : ''}"
              onclick="switchMainTab('code')">
        <span>🧱</span>
        <span>Code</span>
        <span style="font-size:12px;">🔊</span>
      </button>
      <button class="vex-mode-tab ${appState.activeMainTab === 'drive' ? 'active' : ''}"
              onclick="switchMainTab('drive')">
        <span>🎮</span>
        <span>Drive</span>
      </button>
      <button class="vex-mode-tab ${appState.activeMainTab === 'hardware' ? 'active' : ''}"
              onclick="switchMainTab('hardware')">
        <span>🔧</span>
        <span>1. Linh kiện</span>
      </button>
      <button class="vex-mode-tab ${appState.activeMainTab === 'quiz' ? 'active' : ''}"
              onclick="switchMainTab('quiz')">
        <span>📝</span>
        <span>3. Trắc nghiệm</span>
      </button>
      <button class="vex-mode-tab ${appState.activeMainTab === 'report' ? 'active' : ''}"
              onclick="switchMainTab('report')">
        <span>🏆</span>
        <span>Báo cáo PH/QC (${unlockedCount}/${totalBlocks} lệnh • ${solvedLvls}/${totalLvls} màn)</span>
      </button>
    </div>

    <div class="vex-sub-tools-right">
      <button class="vex-tool-square-btn ${appState.showPlaygroundDock ? 'active' : ''}"
              onclick="togglePlaygroundDock()"
              title="Đóng/Mở Sa bàn Nhiệm vụ 2.5D bên phải">
        🗺️
      </button>
      <button class="vex-tool-square-btn"
              onclick="openBluetoothModal()"
              title="Kết nối Bluetooth VEX GO Brain & Xem gói tin BLE">
        &lt;&gt;
      </button>
      <button class="vex-tool-square-btn"
              onclick="toggleDevicesModal()"
              title="Cấu hình Thiết bị & Cổng Smart Ports (Motor1, Drivetrain, Eye, Magnet)">
        🔌
      </button>
      <button class="vex-tool-square-btn"
              onclick="toggleSound()"
              title="Bật/Tắt Âm thanh">
        ${window.soundFX && window.soundFX.enabled ? '🔊' : '🔇'}
      </button>
      <button class="vex-tool-square-btn"
              onclick="switchMainTab('builder')"
              title="Giáo viên: Thiết kế Sa bàn & Nạp JSON">
        ?
      </button>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 3. MAIN BODY ROUTER (Code Workspace vs Drive Gamepad vs Quiz vs Report)
// ----------------------------------------------------------------------------
function renderMainBody() {
  const mainEl = document.getElementById("vex-main-body");
  if (!mainEl) return;

  if (appState.activeMainTab === "code") {
    mainEl.innerHTML = renderVexCodeWorkspaceHTML();
  } else if (appState.activeMainTab === "drive") {
    mainEl.innerHTML = renderDriveModeHTML();
  } else if (appState.activeMainTab === "hardware") {
    mainEl.innerHTML = renderHardwareStageHTML();
  } else if (appState.activeMainTab === "quiz") {
    mainEl.innerHTML = renderQuizStageHTML();
  } else if (appState.activeMainTab === "report") {
    mainEl.innerHTML = renderReportStageHTML();
  } else if (appState.activeMainTab === "builder") {
    mainEl.innerHTML = renderBuilderStageHTML();
  }
}

// ============================================================================
// AUTHENTIC VEXCODE GO WORKSPACE (Category Rail + Flyout + White Canvas + 2.5D Dock)
// ============================================================================
function renderVexCodeWorkspaceHTML() {
  const categories = [
    { id: "motion",     label: "Motion",     color: "#85a5ff" },
    { id: "drivetrain", label: "Drivetrain", color: "#4c97ff" },
    { id: "inertial",   label: "Inertial",   color: "#5bc0be" },
    { id: "eye",        label: "Eye",        color: "#40bf9a" },
    { id: "magnet",     label: "Magnet",     color: "#6b73ff" },
    { id: "console",    label: "Console",    color: "#8c82fc" },
    { id: "logic",      label: "Logic",      color: "#f5a623" },
    { id: "switch",     label: "Switch",     color: "#52c498" }
  ];

  const railHTML = categories.map(cat => `
    <button class="vex-cat-item ${appState.activeCategory === cat.id ? 'active' : ''}"
            onclick="selectCategory('${cat.id}')">
      <span class="vex-cat-circle" style="background:${cat.color};"></span>
      <span>${cat.label}</span>
    </button>
  `).join("");

  const flyoutHTML = renderFlyoutBlocksHTML();
  const canvasStackHTML = renderCanvasProgramStackHTML();
  const playgroundDockHTML = renderPlaygroundDockHTML();

  return `
    <!-- 3A. Left Category Rail -->
    <aside class="vex-category-rail">
      ${railHTML}
      <div style="margin-top:auto; padding-top:10px;">
        <button class="vex-tool-square-btn" onclick="togglePlaygroundDock()" title="Mở Sa bàn 2.5D">
          🗺️
        </button>
      </div>
    </aside>

    <!-- 3B. Flyout Block Drawer -->
    <section class="vex-block-flyout">
      ${flyoutHTML}
    </section>

    <!-- 3C. Main White Blockly/Scratch Canvas -->
    <section class="vex-canvas-area">
      <!-- Top-Right Gray Gauge Watermark Icon (Exact screenshot replica) -->
      <div class="canvas-gauge-watermark" onclick="openBluetoothModal()" title="Mở Bảng Telemetry & Kết nối Bluetooth">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12 4C6.48 4 2 8.48 2 14c0 2.76 1.12 5.26 2.93 7.07l1.41-1.41C4.89 18.22 4 16.21 4 14c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.21-.89 4.22-2.34 5.66l1.41 1.41C20.88 19.26 22 16.76 22 14c0-5.52-4.48-10-10-10zm1 10.59V8h-2v6.59l-2.29 2.29 1.41 1.41L12 16.41l1.88 1.88 1.41-1.41L13 14.59z"/>
        </svg>
      </div>

      <!-- Yellow 'when started' Hat Block + Snapped Program Stack -->
      <div style="transform: scale(${appState.canvasZoom}); transform-origin: top left;">
        <div class="vex-hat-when-started">
          when started
        </div>
        <div class="canvas-program-stack">
          ${canvasStackHTML}
        </div>
      </div>

      <!-- Bottom-Right Zoom Controls (+, -, =) -->
      <div class="canvas-zoom-controls">
        <button class="zoom-circle-btn" onclick="adjustCanvasZoom(0.1)" title="Phóng to">+</button>
        <button class="zoom-circle-btn" onclick="adjustCanvasZoom(-0.1)" title="Thu nhỏ">−</button>
        <button class="zoom-circle-btn" onclick="resetCanvasZoom()" title="Kích thước chuẩn">=</button>
      </div>
    </section>

    <!-- 3D. Dockable 2.5D Sa bàn Nhiệm vụ Playground -->
    ${playgroundDockHTML}
  `;
}

function renderFlyoutBlocksHTML() {
  const level = getCurrentLevel();
  const missionBlocks = level.available_blocks || [];

  // Build Mission Blocks section at the top of the drawer so kids can always see the current level's required blocks, PLUS the full Motion/Category blocks from codego.vex.com!
  const missionBlocksHTML = missionBlocks.map(b => renderSingleFlyoutBlockHTML(b, true)).join("");

  if (appState.activeCategory === "motion") {
    const motionCat = VEXCODE_STANDARD_CATALOG.motion;
    const sectionsHTML = motionCat.sections.map(sec => `
      <div class="flyout-sub-title">${sec.subtitle}</div>
      ${sec.blocks.map(b => renderSingleFlyoutBlockHTML(b, false)).join("")}
    `).join("");

    return `
      <div class="flyout-cat-title">Motion</div>
      ${sectionsHTML}
      <div class="flyout-sub-title" style="margin-top:10px; color:#0072ce; font-weight:800;">
        🎯 Khối lệnh Nhiệm vụ (${level.level_name})
      </div>
      ${missionBlocksHTML}
    `;
  }

  // Other categories filter or display mission + category blocks
  return `
    <div class="flyout-cat-title" style="text-transform:capitalize;">${appState.activeCategory}</div>
    <div class="flyout-sub-title" style="color:#0072ce; font-weight:800;">
      🎯 Khối lệnh Nhiệm vụ (${level.level_name})
    </div>
    ${missionBlocksHTML}
    <div class="flyout-sub-title" style="margin-top:8px;">Motion - Actions & Settings</div>
    ${VEXCODE_STANDARD_CATALOG.motion.sections[0].blocks.map(b => renderSingleFlyoutBlockHTML(b, false)).join("")}
  `;
}

function renderSingleFlyoutBlockHTML(block, isMissionBlock) {
  const isUnlocked = !!appState.analytics.unlockedBlocks[block.block_id]?.unlocked;
  const blockColorClass = getScratchColorClass(block);

  // Format exact Scratch-style inner pills matching the screenshot
  let innerContentHTML = "";
  if (block.block_id === "std_spin_fwd") {
    innerContentHTML = `
      <span>spin</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span class="block-rect-select">${block.default_param} ▾</span>
    `;
  } else if (block.block_id === "std_spin_for_deg") {
    innerContentHTML = `
      <span>spin</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span class="block-rect-select">forward ▾</span>
      <span>for</span>
      <span class="block-oval-input">${block.default_param}</span>
      <span class="block-rect-select">degrees ▾</span>
      <span>▶</span>
    `;
  } else if (block.block_id === "std_spin_to_pos") {
    innerContentHTML = `
      <span>spin</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span>to position</span>
      <span class="block-oval-input">${block.default_param}</span>
      <span class="block-rect-select">degrees ▾</span>
      <span>▶</span>
    `;
  } else if (block.block_id === "std_stop_motor") {
    innerContentHTML = `
      <span>stop</span>
      <span class="block-rect-select">Motor1 ▾</span>
    `;
  } else if (block.block_id === "std_set_pos") {
    innerContentHTML = `
      <span>set</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span>position to</span>
      <span class="block-oval-input">${block.default_param}</span>
      <span class="block-rect-select">degrees ▾</span>
    `;
  } else if (block.block_id === "std_set_vel") {
    innerContentHTML = `
      <span>set</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span>velocity to</span>
      <span class="block-oval-input">${block.default_param}</span>
      <span>%</span>
    `;
  } else if (block.block_id === "std_set_stopping") {
    innerContentHTML = `
      <span>set</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span>stopping to</span>
      <span class="block-rect-select">brake ▾</span>
    `;
  } else if (block.block_id === "std_set_torque") {
    innerContentHTML = `
      <span>set</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span>max torque to</span>
      <span class="block-oval-input">${block.default_param}</span>
      <span>%</span>
    `;
  } else if (block.block_id === "std_set_timeout") {
    innerContentHTML = `
      <span>set</span>
      <span class="block-rect-select">Motor1 ▾</span>
      <span>timeout to</span>
      <span class="block-oval-input">${block.default_param}</span>
      <span>seconds</span>
    `;
  } else {
    // Mission Blocks (Drive forward, Turn right/left, Magnet, Eye Sensor, LED)
    innerContentHTML = `
      <span>${block.label}</span>
      <span class="block-oval-input">${block.default_param}</span>
      ${block.unit ? `<span class="block-rect-select">${block.unit} ▾</span>` : ''}
    `;
  }

  return `
    <div class="scratch-block ${blockColorClass}"
         onclick="onTapFlyoutBlock('${block.block_id}')"
         title="Chạm để trả lời câu hỏi Khóa Tư Duy & ghép vào chương trình">
      ${innerContentHTML}
      <span class="flyout-lock-pill ${isUnlocked ? 'unlocked' : ''}">
        ${isUnlocked ? '✓' : '🔒 Hỏi'}
      </span>
    </div>
  `;
}

function getScratchColorClass(block) {
  const cat = block.category || "motion";
  if (cat === "motion") return "b-motion";
  if (cat === "drive" || cat === "turn") return "b-drivetrain";
  if (cat === "sensor" || cat === "eye") return "b-eye";
  if (cat === "magnet") return "b-magnet";
  if (cat === "led") return "b-console";
  if (cat === "control") return "b-logic";
  return "b-motion";
}

function findBlockDefinitionById(blockId) {
  const level = getCurrentLevel();
  const fromMission = (level.available_blocks || []).find(b => b.block_id === blockId);
  if (fromMission) return fromMission;

  for (const sec of VEXCODE_STANDARD_CATALOG.motion.sections) {
    const found = sec.blocks.find(b => b.block_id === blockId);
    if (found) return found;
  }
  return null;
}

function renderCanvasProgramStackHTML() {
  if (appState.programStack.length === 0) {
    return `
      <div style="margin-top:12px; padding:12px 16px; border:2px dashed #cbd5e1; border-radius:10px; color:#64748b; font-size:12.5px; max-width:360px;">
        👈 Chạm vào một khối lệnh ở cột <strong>Motion / Nhiệm vụ</strong> bên trái. Hệ thống sẽ hỏi câu hỏi tư duy trước khi cho phép ghép khối lệnh vào dưới <strong>when started</strong>!
      </div>
    `;
  }

  return appState.programStack.map((item, idx) => {
    const colorClass = getScratchColorClass(item);
    let stepClass = "";
    if (appState.activeHighlightIndex === idx) {
      stepClass = appState.highlightMode === "trace" ? "active-step-trace" : "active-step-run";
    }

    const optionsHTML = (item.param_options || [item.param]).map(opt => `
      <option value="${opt}" ${String(opt) === String(item.param) ? 'selected' : ''}>${opt}</option>
    `).join("");

    return `
      <div class="scratch-block ${colorClass} ${stepClass}">
        <span style="background:rgba(0,0,0,0.2); padding:1px 5px; border-radius:4px; font-size:10.5px;">#${idx + 1}</span>
        <span>${item.label}</span>
        <select class="block-oval-select"
                onchange="updateStackBlockParam(${idx}, this.value)"
                onclick="event.stopPropagation()">
          ${optionsHTML}
        </select>
        ${item.unit ? `<span class="block-rect-select">${item.unit}</span>` : ''}
        <div class="block-stack-actions">
          <button class="stack-mini-btn" onclick="moveStackBlock(${idx}, -1)" title="Lên">▲</button>
          <button class="stack-mini-btn" onclick="moveStackBlock(${idx}, 1)" title="Xuống">▼</button>
          <button class="stack-mini-btn" onclick="removeStackBlock(${idx})" title="Xóa">✕</button>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================================================
// 2.5D SA BÀN NHIỆM VỤ PLAYGROUND DOCK (Right Panel)
// ============================================================================
function renderPlaygroundDockHTML() {
  if (!appState.showPlaygroundDock) {
    return "";
  }
  const session = getCurrentSession();
  const level = getCurrentLevel();
  const [cols, rows] = level.grid_size || [6, 6];

  const levelPillsHTML = session.levels.map((lvl, idx) => {
    const isSolved = !!appState.analytics.levelsCompleted[lvl.level_id];
    const isActive = idx === appState.currentLevelIndex;
    return `
      <button class="level-pill-btn ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}"
              onclick="selectLevel(${idx})">
        ${isSolved ? '★ ' : ''}Màn ${idx + 1}
      </button>
    `;
  }).join("");

  const gridCellsHTML = renderGridCellsHTML(level, cols, rows);
  const robotSpriteHTML = renderRobotSpriteHTML();
  const dirLabel = (DIR_DELTAS[appState.robot.dir] || DIR_DELTAS.NORTH).label;

  return `
    <aside class="playground-dock-panel">
      <div class="playground-top-bar">
        <div style="display:flex; gap:5px; align-items:center;">
          ${levelPillsHTML}
        </div>
        <div style="display:flex; gap:5px;">
          <button class="level-pill-btn" onclick="resetLabBoard()" title="Đặt lại vị trí Robot">↺ Reset</button>
          <button class="level-pill-btn" onclick="togglePlaygroundDock()" title="Thu gọn Sa bàn">✕</button>
        </div>
      </div>

      <div class="playground-mission-banner">
        <span>🎯 <strong>${level.level_name}:</strong> ${level.mission_hint || ''}</span>
      </div>

      <div class="playground-arena-box">
        <div class="grid-board-frame theme-${session.theme || 'mars'}">
          <div class="vex-grid"
               style="grid-template-columns: repeat(${cols}, 54px); grid-template-rows: repeat(${rows}, 54px);">
            ${gridCellsHTML}
            ${robotSpriteHTML}
          </div>
        </div>
      </div>

      <div class="playground-telemetry-bar">
        <span>📍 Ô: <strong style="color:#38bdf8;">(${appState.robot.x}, ${appState.robot.y})</strong></span>
        <span>🧭 Hướng: <strong style="color:#38bdf8;">${dirLabel}</strong></span>
        <span>📏 Quãng đường: <strong style="color:#38bdf8;">${appState.robot.distanceMm} mm</strong></span>
        <span>1 Ô = 200mm</span>
      </div>

      <div class="playground-action-footer">
        <button class="vex-btn amber" style="flex:1;" onclick="runStepByStepLogicCheck()" ${appState.isSimRunning ? 'disabled' : ''}>
          ⏭ 1. Kiểm tra Logic (STEP)
        </button>
        <button class="vex-btn emerald" style="flex:1;" onclick="runRobotSimulation()" ${appState.isSimRunning ? 'disabled' : ''}>
          ▶ 2. Chạy Robot (START)
        </button>
      </div>
    </aside>
  `;
}

function renderGridCellsHTML(level, cols, rows) {
  let html = "";
  const start = level.start_pos || { x: 0, y: 5 };
  const targets = level.targets || [];
  const obstacles = level.obstacles || [];
  const collectibles = level.collectibles || [];
  const sensorTiles = level.sensor_tiles || [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const isStart = start.x === x && start.y === y;
      const target = targets.find(t => t.x === x && t.y === y);
      const obstacle = obstacles.find(o => o.x === x && o.y === y);
      const collectible = collectibles.find(c => c.x === x && c.y === y);
      const sensorTile = sensorTiles.find(st => st.x === x && st.y === y);
      const ghostStep = appState.ghostPathCells.find(g => g.x === x && g.y === y);
      const isVisited = appState.robot.visitedCells.some(v => v.x === x && v.y === y);

      const isPickedUp = collectible && (
        appState.robot.carryingItem === collectible.id ||
        appState.robot.droppedItemsAtTarget.includes(collectible.id)
      );

      let cellClasses = ["grid-cell"];
      if (sensorTile) cellClasses.push(`tile-${sensorTile.color}`);
      if (ghostStep) cellClasses.push("ghost-trace");
      if (isVisited && !isStart && !target) cellClasses.push("visited-trail");

      let entitySVG = "";
      if (isStart) {
        entitySVG += `<div style="font-size:9px;font-weight:900;color:#38bdf8;border:1.5px dashed #38bdf8;padding:4px;border-radius:5px;">START</div>`;
      }
      if (obstacle) {
        entitySVG += `
          <svg viewBox="0 0 48 48" width="38" height="38" style="z-index:2;">
            <polygon points="10,38 6,24 16,10 34,12 42,26 36,38" fill="#78350f" stroke="#fb923c" stroke-width="2"/>
            <polygon points="16,10 26,18 18,32 10,38 6,24" fill="#9a3412"/>
          </svg>
        `;
      }
      if (collectible && !isPickedUp) {
        entitySVG += `
          <svg viewBox="0 0 48 48" width="34" height="34" style="z-index:3;">
            <circle cx="24" cy="24" r="14" fill="#4f46e5" stroke="#a5b4fc" stroke-width="3"/>
            <circle cx="24" cy="24" r="6" fill="#38bdf8"/>
          </svg>
        `;
      }
      if (target) {
        entitySVG += `
          <svg viewBox="0 0 48 48" width="40" height="40" style="z-index:3;">
            <circle cx="24" cy="36" r="13" fill="rgba(16,185,129,0.28)" stroke="#10b981" stroke-width="2"/>
            <line x1="20" y1="36" x2="20" y2="8" stroke="#f8fafc" stroke-width="3"/>
            <polygon points="20,8 40,15 20,23" fill="#10b981" stroke="#a7f3d0" stroke-width="1.5"/>
          </svg>
        `;
      }
      if (ghostStep) {
        entitySVG += `<div class="ghost-step-badge">${ghostStep.step}</div>`;
      }

      html += `
        <div class="${cellClasses.join(' ')}">
          <span class="cell-coord">(${x},${y})</span>
          <span class="cell-mm-label">200</span>
          ${entitySVG}
        </div>
      `;
    }
  }
  return html;
}

function renderRobotSpriteHTML() {
  // Cell size 54px + 4px gap = 58px pitch, 6px padding
  const cellPitch = 58;
  const pad = 6;
  const leftPx = pad + appState.robot.x * cellPitch + 3;
  const topPx  = pad + appState.robot.y * cellPitch + 3;

  const ledFill = appState.robot.ledColor === "green"
    ? "#22c55e"
    : appState.robot.ledColor === "red"
      ? "#ef4444"
      : appState.robot.ledColor === "blue"
        ? "#3b82f6"
        : "#475569";

  const carryingDiscSVG = appState.robot.carryingItem
    ? `<circle cx="30" cy="30" r="8" fill="#6366f1" stroke="#38bdf8" stroke-width="2.5"/>`
    : "";

  return `
    <div class="robot-sprite-layer"
         style="width:48px; height:48px; left:${leftPx}px; top:${topPx}px; transform: rotate(${appState.robot.angle}deg);">
      <div style="width:48px; height:48px; position:relative;">
        <div class="sensor-beam-cone ${appState.robot.eyeBeamActive ? 'active' : ''}"></div>
        <svg viewBox="0 0 60 60" width="48" height="48">
          <rect x="4" y="10" width="9" height="17" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
          <rect x="4" y="33" width="9" height="17" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
          <rect x="47" y="10" width="9" height="17" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
          <rect x="47" y="33" width="9" height="17" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
          <rect x="12" y="10" width="36" height="40" rx="8" fill="#ea580c" stroke="#fed7aa" stroke-width="2"/>
          <rect x="17" y="18" width="26" height="24" rx="5" fill="#0072ce" stroke="#e0f2fe" stroke-width="1.5"/>
          <rect x="21" y="6" width="18" height="7" rx="3.5" fill="${ledFill}" stroke="#fff" stroke-width="1.5"/>
          <polygon points="30,13 25,20 35,20" fill="#38bdf8"/>
          <circle cx="30" cy="31" r="7" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2"/>
          ${carryingDiscSVG}
        </svg>
      </div>
    </div>
  `;
}

// ============================================================================
// BOTTOM STATUS BAR (`▶ Errors ⚠️ 0 ❌ 0` + Live Bluetooth & Feedback)
// ============================================================================
function renderBottomStatusBar() {
  const barEl = document.getElementById("vex-bottom-error-bar");
  if (!barEl) return;

  const ble = window.vexBluetooth;
  const bleText = ble && ble.isConnected()
    ? `🟢 Bluetooth: ${ble.deviceName} (${ble.status === 'connected' ? 'BLE GATT Thực tế' : 'Brain Mô phỏng'})`
    : `⚪ Bluetooth: Chưa kết nối (Bấm BRAIN ở góc phải trên để kết nối)`;

  barEl.innerHTML = `
    <div style="display:flex; align-items:center; gap:14px;">
      <span>▶ Errors ⚠️ 0 ❌ 0</span>
      <span style="color:#334155; font-weight:600;">| ${appState.feedbackMessage}</span>
    </div>
    <div style="display:flex; align-items:center; gap:12px;">
      <span style="cursor:pointer;" onclick="openBluetoothModal()">${bleText}</span>
    </div>
  `;
}

// ============================================================================
// DRIVE TAB (`Drive 🎮` - Interactive Bluetooth & 2.5D Gamepad Control)
// ============================================================================
function renderDriveModeHTML() {
  const ble = window.vexBluetooth;
  const isConnected = ble && ble.isConnected();

  return `
    <div style="flex:1; display:grid; grid-template-columns:1fr 455px; background:#f8fafc; overflow:hidden;">
      <div style="padding:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:18px;">
        <div style="text-align:center;">
          <h2 style="font-size:22px; font-weight:900; color:#0072ce;">🎮 VEXcode GO Drive Mode (Điều khiển Trực tiếp qua Bluetooth)</h2>
          <p style="font-size:13.5px; color:#475569; margin-top:4px;">
            Trạng thái Brain: <strong>${isConnected ? `Đã kết nối (${ble.deviceName})` : 'Chưa kết nối Bluetooth Brain (Đang điều khiển Robot trên Sa bàn 2.5D)'}</strong>
          </p>
        </div>

        <!-- Touch D-Pad Controller for iPad -->
        <div style="display:grid; grid-template-columns:repeat(3, 86px); grid-template-rows:repeat(3, 74px); gap:10px;">
          <div></div>
          <button class="vex-btn primary" style="font-size:22px;" onclick="manualDriveStep('FORWARD')">▲ Tiến</button>
          <div></div>
          <button class="vex-btn primary" style="font-size:18px;" onclick="manualDriveStep('LEFT')">↺ Trái 90°</button>
          <button class="vex-btn rose" style="font-size:16px;" onclick="manualDriveStep('STOP')">■ STOP</button>
          <button class="vex-btn primary" style="font-size:18px;" onclick="manualDriveStep('RIGHT')">↻ Phải 90°</button>
          <div></div>
          <button class="vex-btn primary" style="font-size:22px;" onclick="manualDriveStep('REVERSE')">▼ Lùi</button>
          <div></div>
        </div>

        <!-- Actuator Quick Buttons (Magnet & LED) -->
        <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">
          <button class="vex-btn emerald" onclick="manualActuator('MAGNET_BOOST')">🧲 Nam châm: HÚT (Boost)</button>
          <button class="vex-btn amber" onclick="manualActuator('MAGNET_DROP')">🧲 Nam châm: THẢ (Drop)</button>
          <button class="vex-btn primary" onclick="manualActuator('LED_GREEN')">💡 Đèn LED: Xanh lá</button>
          <button class="vex-btn rose" onclick="manualActuator('LED_RED')">💡 Đèn LED: Đỏ</button>
        </div>
      </div>

      ${renderPlaygroundDockHTML()}
    </div>
  `;
}

async function manualDriveStep(action) {
  const level = getCurrentLevel();
  const [cols, rows] = level.grid_size || [6, 6];
  const obstacles = level.obstacles || [];

  if (action === "FORWARD" || action === "REVERSE") {
    const sign = action === "REVERSE" ? -1 : 1;
    const d = DIR_DELTAS[appState.robot.dir];
    const nx = appState.robot.x + d.dx * sign;
    const ny = appState.robot.y + d.dy * sign;
    await window.vexBluetooth.sendCommandPacket(action === "FORWARD" ? "DRIVE_FORWARD" : "DRIVE_REVERSE", { value: 200 });

    if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && !obstacles.some(o => o.x === nx && o.y === ny)) {
      appState.robot.x = nx;
      appState.robot.y = ny;
      appState.robot.distanceMm += 200;
      window.soundFX.playRobotMove();
    } else {
      window.soundFX.playCrash();
    }
  } else if (action === "RIGHT") {
    const curIdx = DIR_ORDER.indexOf(appState.robot.dir);
    appState.robot.dir = DIR_ORDER[(curIdx + 1) % 4];
    appState.robot.angle += 90;
    await window.vexBluetooth.sendCommandPacket("TURN_RIGHT", { value: 90 });
    window.soundFX.playRobotTurn();
  } else if (action === "LEFT") {
    const curIdx = DIR_ORDER.indexOf(appState.robot.dir);
    appState.robot.dir = DIR_ORDER[(curIdx + 3) % 4];
    appState.robot.angle -= 90;
    await window.vexBluetooth.sendCommandPacket("TURN_LEFT", { value: 90 });
    window.soundFX.playRobotTurn();
  } else if (action === "STOP") {
    await window.vexBluetooth.sendCommandPacket("STOP_MOTOR", { motor: "All" });
    window.soundFX.playTap();
  }
  renderAll();
}

async function manualActuator(cmd) {
  const level = getCurrentLevel();
  const collectibles = level.collectibles || [];
  if (cmd === "MAGNET_BOOST") {
    appState.robot.magnetState = "boost";
    const found = collectibles.find(c => c.x === appState.robot.x && c.y === appState.robot.y);
    if (found) appState.robot.carryingItem = found.id;
    await window.vexBluetooth.sendCommandPacket("ENERGIZE_MAGNET", { value: "boost" });
    window.soundFX.playMagnet(true);
  } else if (cmd === "MAGNET_DROP") {
    appState.robot.magnetState = "drop";
    if (appState.robot.carryingItem) {
      appState.robot.droppedItemsAtTarget.push(appState.robot.carryingItem);
      appState.robot.carryingItem = null;
    }
    await window.vexBluetooth.sendCommandPacket("ENERGIZE_MAGNET", { value: "drop" });
    window.soundFX.playMagnet(false);
  } else if (cmd === "LED_GREEN") {
    appState.robot.ledColor = "green";
    await window.vexBluetooth.sendCommandPacket("SET_LED", { value: "green" });
    window.soundFX.playSensorBeep();
  } else if (cmd === "LED_RED") {
    appState.robot.ledColor = "red";
    await window.vexBluetooth.sendCommandPacket("SET_LED", { value: "red" });
    window.soundFX.playSensorBeep();
  }
  renderAll();
}

// ============================================================================
// BLUETOOTH BRAIN CONNECTION MODAL (Web Bluetooth BLE + GATT Console)
// ============================================================================
function openBluetoothModal() {
  window.soundFX.playTap();
  appState.bluetoothModalOpen = true;
  renderBluetoothModal();
}

function closeBluetoothModal() {
  appState.bluetoothModalOpen = false;
  renderBluetoothModal();
}

function renderBluetoothModal() {
  const root = document.getElementById("bluetooth-modal-root");
  if (!root) return;
  if (!appState.bluetoothModalOpen) {
    root.innerHTML = "";
    return;
  }

  const ble = window.vexBluetooth;
  const isConnected = ble.isConnected();
  const webBleSupported = ble.isWebBluetoothSupported();

  const packetRows = ble.packetHistory.length === 0
    ? `<div>[Chưa có gói tin BLE nào. Hãy kết nối Brain hoặc bấm gửi lệnh Test bên dưới]</div>`
    : ble.packetHistory.map(p => `
        <div style="margin-bottom:4px;">
          <span style="color:#94a3b8;">[${p.time}]</span>
          <strong style="color:${p.direction === 'TX' ? '#34d399' : p.direction === 'RX' ? '#fbbf24' : '#38bdf8'};">[${p.direction}]</strong>
          <span>${p.label}</span>
          <span style="color:#a855f7;">(${p.hex})</span>
        </div>
      `).join("");

  root.innerHTML = `
    <div class="modal-backdrop" onclick="closeBluetoothModal()">
      <div class="vex-modal-card" onclick="event.stopPropagation()">
        <div class="vex-modal-header">
          <span>📡 Kết nối Bluetooth VEX GO Brain (Web Bluetooth BLE GATT)</span>
          <button class="vex-btn" style="min-height:30px; padding:0 10px;" onclick="closeBluetoothModal()">✕</button>
        </div>

        <div class="vex-modal-body">
          <!-- Connection Status Banner -->
          <div style="padding:12px 14px; border-radius:10px; background:${isConnected ? '#dcfce7' : '#f1f5f9'}; border:1.5px solid ${isConnected ? '#16a34a' : '#cbd5e1'}; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-size:12px; font-weight:800; color:${isConnected ? '#15803d' : '#64748b'}; text-transform:uppercase;">
                Trạng thái Kết nối VEX GO Brain
              </div>
              <div style="font-size:16px; font-weight:900; color:#0f172a; margin-top:2px;">
                ${isConnected ? `🟢 Đã kết nối: ${ble.deviceName}` : '⚪ Chưa kết nối thiết bị'}
              </div>
              <div style="font-size:12px; color:#475569; margin-top:2px;">
                ${isConnected ? `Firmware: ${ble.firmwareVersion} • Pin: ${ble.batteryLevel}% 🔋` : `Trình duyệt hỗ trợ Web Bluetooth API: ${webBleSupported ? 'CÓ ✓ (Sẵn sàng quét BLE)' : 'KHÔNG (Hãy dùng Chrome/Edge hoặc chế độ Brain Mô phỏng)'}`}
              </div>
            </div>
            ${isConnected ? `
              <button class="vex-btn rose" onclick="window.vexBluetooth.disconnect()">Ngắt kết nối</button>
            ` : ''}
          </div>

          <!-- 2 Connection Methods: Real BLE vs Virtual Hardware Simulator -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
            <button class="vex-btn primary" style="min-height:50px; flex-direction:column; gap:2px;"
                    onclick="triggerRealBluetoothScan(true)">
              <span>🔍 Quét VEX GO Brain Thực Tế</span>
              <span style="font-size:10.5px; opacity:0.85;">(Web Bluetooth BLE - Lọc tên VEX/GO)</span>
            </button>

            <button class="vex-btn primary" style="min-height:50px; flex-direction:column; gap:2px; background:#0284c7;"
                    onclick="triggerRealBluetoothScan(false)">
              <span>📡 Quét Tất Cả Thiết Bị BLE</span>
              <span style="font-size:10.5px; opacity:0.85;">(Web Bluetooth - Mọi thiết bị quanh đây)</span>
            </button>
          </div>

          <div style="margin-bottom:14px;">
            <button class="vex-btn emerald" style="width:100%; min-height:44px;"
                    onclick="window.vexBluetooth.connectSimulatedBrain('VEX-GO-BRAIN-TA05')">
              🤖 Bật Kết nối Brain Mô phỏng Phần cứng (Dùng khi dạy học chưa bật Robot thật)
            </button>
          </div>

          <!-- Test Command Buttons -->
          <div style="font-size:12.5px; font-weight:800; color:#334155; margin-bottom:6px;">
            ⚡ Gửi lệnh Kiểm tra Phần cứng (BLE GATT Command Test):
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
            <button class="vex-btn" onclick="window.vexBluetooth.sendCommandPacket('PING_BRAIN', { value: 1 })">
              🔔 Ping Brain (Nháy LED)
            </button>
            <button class="vex-btn" onclick="window.vexBluetooth.sendCommandPacket('SPIN_FOR', { motor: 'Motor1', dir: 'forward', value: 90, unit: 'degrees' })">
              ⚙️ Quay thử Motor1 90°
            </button>
            <button class="vex-btn" onclick="window.vexBluetooth.sendCommandPacket('ENERGIZE_MAGNET', { value: 'boost' })">
              🧲 Test Nam châm (Boost)
            </button>
            <button class="vex-btn" onclick="window.vexBluetooth.sendCommandPacket('SET_LED', { value: 'green' })">
              💡 Bật LED Xanh lá
            </button>
          </div>

          <!-- Live BLE Hex Packet Log -->
          <div style="font-size:12.5px; font-weight:800; color:#334155;">
            📟 Nhật ký truyền nhận gói tin Bluetooth (BLE GATT Packet Inspector):
          </div>
          <div class="ble-packet-log">
            ${packetRows}
          </div>
        </div>
      </div>
    </div>
  `;
}

async function triggerRealBluetoothScan(filterVexOnly) {
  try {
    await window.vexBluetooth.connectRealBluetooth(filterVexOnly);
  } catch (err) {
    // Error is already logged in BLE console inside bluetooth.js
    renderBluetoothModal();
  }
}

// ============================================================================
// DEVICES & SMART PORTS MODAL (`🔌` Button)
// ============================================================================
function toggleDevicesModal() {
  window.soundFX.playTap();
  appState.devicesModalOpen = !appState.devicesModalOpen;
  renderDevicesModal();
}

function renderDevicesModal() {
  const root = document.getElementById("devices-modal-root");
  if (!root) return;
  if (!appState.devicesModalOpen) {
    root.innerHTML = "";
    return;
  }

  const ports = window.vexBluetooth.ports;
  const rowsHTML = ports.map(p => `
    <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 12px; border:1px solid #cbd5e1; border-radius:8px; margin-bottom:8px; background:#f8fafc;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="width:28px; height:28px; border-radius:6px; background:#0072ce; color:#fff; font-weight:900; display:inline-flex; align-items:center; justify-content:center; font-size:12px;">
          P${p.port}
        </span>
        <div>
          <div style="font-weight:800; font-size:13.5px;">${p.name}</div>
          <div style="font-size:11.5px; color:#64748b;">Loại: ${p.type}</div>
        </div>
      </div>
      <div style="text-align:right;">
        <span style="background:#dcfce7; color:#15803d; font-weight:800; font-size:11.5px; padding:3px 8px; border-radius:99px;">
          ● ${p.status}
        </span>
        <div style="font-size:12px; font-weight:700; color:#0072ce; margin-top:2px;">${p.value}</div>
      </div>
    </div>
  `).join("");

  root.innerHTML = `
    <div class="modal-backdrop" onclick="toggleDevicesModal()">
      <div class="vex-modal-card" onclick="event.stopPropagation()">
        <div class="vex-modal-header">
          <span>🔌 Cấu hình Thiết bị & Cổng Smart Ports (VEX GO Brain)</span>
          <button class="vex-btn" style="min-height:30px; padding:0 10px;" onclick="toggleDevicesModal()">✕</button>
        </div>
        <div class="vex-modal-body">
          <p style="font-size:13px; color:#475569; margin-bottom:12px;">
            Danh sách các động cơ và cảm biến VEX GO đang kết nối vào 6 cổng Smart Ports trên bộ não:
          </p>
          ${rowsHTML}
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// CƠ CHẾ "HỎI MỚI CHO GHÉP" (BLOCK-UNLOCKING POPUP ENGINE)
// ============================================================================
function onTapFlyoutBlock(blockId) {
  if (appState.isSimRunning) return;
  const blockDef = findBlockDefinitionById(blockId);
  if (!blockDef) return;

  window.soundFX.playPop();

  const alreadyUnlocked = appState.analytics.unlockedBlocks[blockId]?.unlocked;
  if (alreadyUnlocked || !blockDef.unlock_question) {
    appendBlockToProgramStack(blockDef);
    return;
  }

  appState.unlockModal = {
    open: true,
    blockDef: blockDef,
    selectedOption: null,
    isCorrect: null,
    showHint: false,
    attemptsForThisBlock: 0
  };
  renderUnlockModal();
}

function renderUnlockModal() {
  const modalRoot = document.getElementById("unlock-modal-root");
  if (!modalRoot) return;

  if (!appState.unlockModal.open || !appState.unlockModal.blockDef) {
    modalRoot.innerHTML = "";
    return;
  }

  const block = appState.unlockModal.blockDef;
  const q = block.unlock_question;
  const colorClass = getScratchColorClass(block);

  const optionsHTML = q.options.map((optText, idx) => {
    let cls = "unlock-option-btn";
    if (appState.unlockModal.selectedOption === idx) {
      cls += appState.unlockModal.isCorrect ? " correct" : " wrong";
    }
    const letter = String.fromCharCode(65 + idx);
    return `
      <button class="${cls}" onclick="submitUnlockAnswer(${idx})">
        <span class="opt-letter">${letter}</span>
        <span>${optText}</span>
      </button>
    `;
  }).join("");

  const hintHTML = appState.unlockModal.showHint ? `
    <div style="padding:10px 14px; border-radius:10px; background:#fef3c7; border:1.5px solid #f59e0b; color:#92400e; font-size:13px; font-weight:700; margin-top:10px;">
      💡 <strong>Gợi ý tư duy:</strong> ${q.hint || "Con hãy đếm số ô trên sa bàn (mỗi ô = 200mm) và xem hướng mũi xe robot nhé!"}
    </div>
  ` : "";

  modalRoot.innerHTML = `
    <div class="modal-backdrop" onclick="closeUnlockModal()">
      <div class="vex-modal-card" onclick="event.stopPropagation()">
        <div class="vex-modal-header">
          <span>🔒 Khóa Tư Duy VEXcode GO • Trả lời đúng để ghép khối lệnh</span>
          <button class="vex-btn" style="min-height:30px; padding:0 10px;" onclick="closeUnlockModal()">✕</button>
        </div>

        <div class="vex-modal-body">
          <div style="margin-bottom:14px; display:flex; align-items:center; gap:10px;">
            <span style="font-size:13px; font-weight:700; color:#475569;">Khối lệnh đang chọn:</span>
            <div class="scratch-block ${colorClass}" style="margin:0;">
              <span>${block.label}</span>
              <span class="block-oval-input">${block.default_param}</span>
              ${block.unit ? `<span class="block-rect-select">${block.unit}</span>` : ''}
            </div>
          </div>

          <div style="font-size:16px; font-weight:800; color:#0f172a; margin-bottom:14px; line-height:1.4;">
            ❓ ${q.prompt}
          </div>

          <div>
            ${optionsHTML}
          </div>

          ${hintHTML}
        </div>
      </div>
    </div>
  `;
}

function submitUnlockAnswer(optionIndex) {
  const modal = appState.unlockModal;
  if (!modal.open || !modal.blockDef) return;

  const block = modal.blockDef;
  const q = block.unlock_question;
  modal.selectedOption = optionIndex;
  modal.attemptsForThisBlock += 1;
  appState.analytics.totalUnlockAttempts += 1;

  if (optionIndex === q.correct_index) {
    modal.isCorrect = true;
    modal.showHint = false;
    window.soundFX.playUnlockSuccess();

    if (!appState.analytics.unlockedBlocks[block.block_id]) {
      appState.analytics.unlockedBlocks[block.block_id] = {
        unlocked: true,
        attempts: modal.attemptsForThisBlock,
        block_label: block.label
      };
      if (modal.attemptsForThisBlock === 1) {
        appState.analytics.firstTryUnlocks += 1;
      }
    }

    renderUnlockModal();

    setTimeout(() => {
      appState.unlockModal.open = false;
      appendBlockToProgramStack(block);
      appState.feedbackMessage = `🔓 Đã mở khóa & ghép thành công khối lệnh "${block.label} ${block.default_param} ${block.unit || ''}" vào when started!`;
      renderAll();
    }, 450);
  } else {
    modal.isCorrect = false;
    modal.showHint = true;
    window.soundFX.playWrongAnswer();
    renderUnlockModal();
  }
}

function closeUnlockModal() {
  appState.unlockModal.open = false;
  renderUnlockModal();
}

function saveUndoSnapshot() {
  appState.undoStack.push(JSON.parse(JSON.stringify(appState.programStack)));
  if (appState.undoStack.length > 20) appState.undoStack.shift();
  appState.redoStack = [];
}

function undoWorkspaceAction() {
  if (appState.undoStack.length === 0) return;
  window.soundFX.playTap();
  appState.redoStack.push(JSON.parse(JSON.stringify(appState.programStack)));
  appState.programStack = appState.undoStack.pop();
  renderAll();
}

function redoWorkspaceAction() {
  if (appState.redoStack.length === 0) return;
  window.soundFX.playTap();
  appState.undoStack.push(JSON.parse(JSON.stringify(appState.programStack)));
  appState.programStack = appState.redoStack.pop();
  renderAll();
}

function appendBlockToProgramStack(blockDef) {
  saveUndoSnapshot();
  appState.programStack.push({
    uid: "stk_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
    block_id: blockDef.block_id,
    block_type: blockDef.block_type,
    category: blockDef.category || "motion",
    label: blockDef.label,
    unit: blockDef.unit || "",
    param: blockDef.default_param,
    param_options: blockDef.param_options || [blockDef.default_param]
  });
  appState.logicCheckPassed = false;
  appState.ghostPathCells = [];
  renderAll();
}

function updateStackBlockParam(idx, newVal) {
  if (appState.isSimRunning) return;
  saveUndoSnapshot();
  const item = appState.programStack[idx];
  if (!item) return;
  window.soundFX.playTap();
  const numVal = Number(newVal);
  item.param = isNaN(numVal) ? newVal : numVal;
  appState.logicCheckPassed = false;
  appState.ghostPathCells = [];
  renderAll();
}

function moveStackBlock(idx, delta) {
  if (appState.isSimRunning) return;
  const targetIdx = idx + delta;
  if (targetIdx < 0 || targetIdx >= appState.programStack.length) return;
  saveUndoSnapshot();
  window.soundFX.playTap();
  const temp = appState.programStack[idx];
  appState.programStack[idx] = appState.programStack[targetIdx];
  appState.programStack[targetIdx] = temp;
  renderAll();
}

function removeStackBlock(idx) {
  if (appState.isSimRunning) return;
  saveUndoSnapshot();
  window.soundFX.playTap();
  appState.programStack.splice(idx, 1);
  renderAll();
}

// ============================================================================
// STEP (⏭ KIỂM TRA LOGIC) & START (▶ CHẠY ROBOT BLUETOOTH + SA BÀN 2.5D)
// ============================================================================
async function runStepByStepLogicCheck() {
  if (appState.isSimRunning) return;
  if (appState.programStack.length === 0) {
    window.soundFX.playWrongAnswer();
    appState.feedbackMessage = "⚠️ Chưa có khối lệnh nào bên dưới 'when started'! Hãy chọn khối lệnh ở cột bên trái trước nhé.";
    renderAll();
    return;
  }

  appState.showPlaygroundDock = true;
  appState.isSimRunning = true;
  appState.highlightMode = "trace";
  appState.ghostPathCells = [];
  appState.analytics.logicCheckCount += 1;
  resetRobotToStart();

  const level = getCurrentLevel();
  const [cols, rows] = level.grid_size || [6, 6];
  let simX = level.start_pos.x;
  let simY = level.start_pos.y;
  let simDir = level.start_pos.dir;

  appState.feedbackMessage = "⏭ Đang chạy STEP (Kiểm tra Logic từng dòng lệnh)... Hãy nhìn số bước dự đoán màu vàng trên Sa bàn!";
  renderAll();

  for (let i = 0; i < appState.programStack.length; i++) {
    if (!appState.isSimRunning) break;
    appState.activeHighlightIndex = i;
    window.soundFX.playTraceStep(i);

    const block = appState.programStack[i];
    if (block.block_type === "DRIVE_FORWARD" || block.block_type === "DRIVE_REVERSE" || block.block_type === "SPIN_MOTOR") {
      const rawParam = Number(block.param) || 200;
      const steps = block.unit === "degrees"
        ? Math.max(1, Math.round(rawParam / 90))
        : Math.max(1, Math.round(rawParam / 200));
      const sign = block.block_type === "DRIVE_REVERSE" ? -1 : 1;
      const d = DIR_DELTAS[simDir];
      for (let s = 0; s < steps; s++) {
        const nx = simX + d.dx * sign;
        const ny = simY + d.dy * sign;
        if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
          simX = nx;
          simY = ny;
        }
      }
      appState.ghostPathCells.push({ x: simX, y: simY, step: i + 1 });
    } else if (block.block_type === "TURN_RIGHT") {
      const turns = Math.round(Number(block.param) / 90);
      const curIdx = DIR_ORDER.indexOf(simDir);
      simDir = DIR_ORDER[(curIdx + turns) % 4];
      appState.ghostPathCells.push({ x: simX, y: simY, step: i + 1 });
    } else if (block.block_type === "TURN_LEFT") {
      const turns = Math.round(Number(block.param) / 90);
      const curIdx = DIR_ORDER.indexOf(simDir);
      simDir = DIR_ORDER[(curIdx - turns + 8) % 4];
      appState.ghostPathCells.push({ x: simX, y: simY, step: i + 1 });
    } else {
      appState.ghostPathCells.push({ x: simX, y: simY, step: i + 1 });
    }

    renderAll();
    await sleep(460);
  }

  appState.activeHighlightIndex = -1;
  appState.highlightMode = null;
  appState.isSimRunning = false;
  appState.logicCheckPassed = true;
  appState.feedbackMessage = `✅ Đã Kiểm tra Logic xong ${appState.programStack.length} khối lệnh (Dự kiến dừng tại ô ${simX},${simY}). Bấm START (▶) để chạy Robot!`;
  renderAll();
}

async function runRobotSimulation() {
  if (appState.isSimRunning) return;
  if (appState.programStack.length === 0) {
    window.soundFX.playWrongAnswer();
    appState.feedbackMessage = "⚠️ Chưa có khối lệnh nào dưới 'when started'! Hãy ghép khối lệnh trước khi bấm START.";
    renderAll();
    return;
  }

  appState.showPlaygroundDock = true;
  appState.isSimRunning = true;
  appState.highlightMode = "run";
  appState.ghostPathCells = [];
  appState.analytics.robotRunCount += 1;
  resetRobotToStart();
  appState.isSimRunning = true;

  const level = getCurrentLevel();
  const [cols, rows] = level.grid_size || [6, 6];
  const obstacles = level.obstacles || [];
  const collectibles = level.collectibles || [];
  const targets = level.targets || [];

  appState.feedbackMessage = "▶ Đang thực thi chương trình & truyền gói tin điều khiển qua Bluetooth tới VEX GO Brain...";
  renderAll();
  await sleep(250);

  let crashedReason = null;

  for (let i = 0; i < appState.programStack.length; i++) {
    if (!appState.isSimRunning) break;
    appState.activeHighlightIndex = i;
    const block = appState.programStack[i];
    renderAll();

    // Transmit real BLE packet via Web Bluetooth Manager
    await window.vexBluetooth.sendCommandPacket(block.block_type, {
      motor: "Motor1",
      value: block.param,
      unit: block.unit
    });

    if (block.block_type === "DRIVE_FORWARD" || block.block_type === "DRIVE_REVERSE" || block.block_type === "SPIN_MOTOR") {
      const rawParam = Number(block.param) || 200;
      const steps = block.unit === "degrees"
        ? Math.max(1, Math.round(rawParam / 90))
        : Math.max(1, Math.round(rawParam / 200));
      const sign = block.block_type === "DRIVE_REVERSE" ? -1 : 1;
      const d = DIR_DELTAS[appState.robot.dir];

      for (let s = 0; s < steps; s++) {
        if (!appState.isSimRunning) break;
        const nx = appState.robot.x + d.dx * sign;
        const ny = appState.robot.y + d.dy * sign;

        if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) {
          crashedReason = `💥 Robot chạm mép sa bàn ở khối lệnh #${i + 1}! Hãy chỉnh lại số mm/degrees.`;
          break;
        }
        const hitRock = obstacles.find(o => o.x === nx && o.y === ny);
        if (hitRock) {
          appState.robot.x = nx;
          appState.robot.y = ny;
          renderAll();
          crashedReason = `💥 Robot va vào Vật cản tại ô (${nx}, ${ny}) ở khối lệnh #${i + 1}!`;
          break;
        }

        appState.robot.x = nx;
        appState.robot.y = ny;
        appState.robot.distanceMm += 200;
        appState.robot.visitedCells.push({ x: nx, y: ny });
        window.soundFX.playRobotMove();
        renderAll();
        await sleep(appState.simSpeedMs);
      }
      if (crashedReason) break;

    } else if (block.block_type === "TURN_RIGHT") {
      const turns = Math.round(Number(block.param) / 90);
      const curIdx = DIR_ORDER.indexOf(appState.robot.dir);
      appState.robot.dir = DIR_ORDER[(curIdx + turns) % 4];
      appState.robot.angle += Number(block.param);
      window.soundFX.playRobotTurn();
      renderAll();
      await sleep(appState.simSpeedMs);

    } else if (block.block_type === "TURN_LEFT") {
      const turns = Math.round(Number(block.param) / 90);
      const curIdx = DIR_ORDER.indexOf(appState.robot.dir);
      appState.robot.dir = DIR_ORDER[(curIdx - turns + 8) % 4];
      appState.robot.angle -= Number(block.param);
      window.soundFX.playRobotTurn();
      renderAll();
      await sleep(appState.simSpeedMs);

    } else if (block.block_type === "SET_LED") {
      appState.robot.ledColor = String(block.param);
      window.soundFX.playSensorBeep();
      renderAll();
      await sleep(380);

    } else if (block.block_type === "ENERGIZE_MAGNET") {
      const mode = String(block.param).toLowerCase();
      appState.robot.magnetState = mode;
      if (mode === "boost") {
        window.soundFX.playMagnet(true);
        const foundItem = collectibles.find(c => c.x === appState.robot.x && c.y === appState.robot.y);
        if (foundItem) appState.robot.carryingItem = foundItem.id;
      } else if (mode === "drop") {
        window.soundFX.playMagnet(false);
        if (appState.robot.carryingItem) {
          appState.robot.droppedItemsAtTarget.push(appState.robot.carryingItem);
          appState.robot.carryingItem = null;
        }
      }
      renderAll();
      await sleep(420);

    } else if (block.block_type === "WAIT_UNTIL_EYE") {
      appState.robot.eyeBeamActive = true;
      window.soundFX.playSensorBeep();
      renderAll();
      await sleep(520);
      appState.robot.eyeBeamActive = false;
      renderAll();

    } else {
      window.soundFX.playTap();
      await sleep(320);
    }
  }

  appState.activeHighlightIndex = -1;
  appState.highlightMode = null;
  appState.isSimRunning = false;

  if (crashedReason) {
    window.soundFX.playCrash();
    appState.feedbackMessage = crashedReason;
    renderAll();
    return;
  }

  const reachedFlag = targets.some(t => t.x === appState.robot.x && t.y === appState.robot.y);
  const needsCollectibles = collectibles.length > 0;
  const collectedAll = !needsCollectibles ||
    appState.robot.carryingItem !== null ||
    appState.robot.droppedItemsAtTarget.length >= collectibles.length;

  if (reachedFlag && collectedAll) {
    window.soundFX.playVictory();
    appState.analytics.levelsCompleted[level.level_id] = {
      completed: true,
      logicChecked: appState.logicCheckPassed
    };
    saveCurrentStudentProgressReport();
    appState.feedbackMessage = `🎉 HOÀN THÀNH XUẤT SẮC "${level.level_name}"! Con có thể chuyển sang Màn tiếp theo hoặc làm Trắc nghiệm.`;
  } else {
    window.soundFX.playWrongAnswer();
    const targetPos = targets[0] ? `(${targets[0].x}, ${targets[0].y})` : "đích";
    appState.feedbackMessage = `🤔 Robot dừng tại ô (${appState.robot.x}, ${appState.robot.y}), chưa tới cờ đích ${targetPos}. Hãy kiểm tra lại thông số khối lệnh nhé!`;
  }
  renderAll();
}

function stopSimulationNow() {
  appState.isSimRunning = false;
  appState.activeHighlightIndex = -1;
  appState.highlightMode = null;
  window.vexBluetooth.sendCommandPacket("STOP_MOTOR", { motor: "All" });
  appState.feedbackMessage = "■ Đã dừng chương trình (STOP).";
  renderAll();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================================================
// NAVIGATION & UI CONTROLS
// ============================================================================
function switchMainTab(tabName) {
  window.soundFX.playTap();
  if (tabName === "builder" && !appState.builder.draftLevel) {
    appState.builder.draftLevel = JSON.parse(JSON.stringify(getCurrentLevel()));
  }
  appState.activeMainTab = tabName;
  renderAll();
}

function selectCategory(catId) {
  window.soundFX.playTap();
  appState.activeCategory = catId;
  renderAll();
}

function togglePlaygroundDock() {
  window.soundFX.playTap();
  appState.showPlaygroundDock = !appState.showPlaygroundDock;
  renderAll();
}

function adjustCanvasZoom(delta) {
  window.soundFX.playTap();
  appState.canvasZoom = Math.max(0.75, Math.min(1.35, Number((appState.canvasZoom + delta).toFixed(2))));
  renderMainBody();
}

function resetCanvasZoom() {
  window.soundFX.playTap();
  appState.canvasZoom = 1;
  renderMainBody();
}

function onTopCourseSessionChange(compositeVal) {
  const [courseId, sessionNum] = compositeVal.split("::");
  window.soundFX.playTap();
  loadSession(courseId, Number(sessionNum));
}

function selectLevel(idx) {
  if (appState.isSimRunning) return;
  window.soundFX.playTap();
  loadLevel(idx);
}

function resetLabBoard() {
  if (appState.isSimRunning) return;
  window.soundFX.playTap();
  appState.ghostPathCells = [];
  resetRobotToStart();
  renderAll();
}

function cycleStudentProfile() {
  window.soundFX.playTap();
  const idx = appState.roster.findIndex(s => s.id === appState.activeStudent.id);
  const nextIdx = (idx + 1) % appState.roster.length;
  appState.activeStudent = appState.roster[nextIdx];
  renderAll();
}

function toggleSound() {
  window.soundFX.toggle();
  renderSubToolbar();
}

// ============================================================================
// CHẶNG 1 (LINH KIỆN), CHẶNG 3 (TRẮC NGHIỆM), BÁO CÁO PH/QC & SOẠN BÀI JSON
// ============================================================================
function renderHardwareStageHTML() {
  const session = getCurrentSession();
  const checks = session.hardware_check || [];

  const cardsHTML = checks.map((item, qIdx) => {
    const answeredIdx = appState.analytics.hardwareAnswers[qIdx];
    const isAnswered = answeredIdx !== undefined;
    const svgGraphic = window.VEXGO_HARDWARE_SVGS[item.part_key] || window.VEXGO_HARDWARE_SVGS.brain;

    const optionsHTML = item.options.map((optText, optIdx) => {
      let cls = "unlock-option-btn";
      if (isAnswered) {
        if (optIdx === item.correct_index) cls += " correct";
        else if (optIdx === answeredIdx) cls += " wrong";
      }
      const letter = String.fromCharCode(65 + optIdx);
      return `
        <button class="${cls}" onclick="answerHardwareCheck(${qIdx}, ${optIdx})">
          <span class="opt-letter">${letter}</span>
          <span>${optText}</span>
        </button>
      `;
    }).join("");

    return `
      <div style="background:#fff; border:1.5px solid #cbd5e1; border-radius:14px; padding:18px; display:flex; gap:18px; align-items:flex-start; margin-bottom:14px;">
        <div style="width:96px; height:96px; border-radius:12px; background:#0f172a; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          ${svgGraphic}
        </div>
        <div style="flex:1;">
          <div style="font-size:12px; font-weight:800; color:#0072ce; text-transform:uppercase;">Linh kiện VEX GO #${qIdx + 1}</div>
          <div style="font-size:16px; font-weight:800; margin:4px 0 12px 0;">${item.question}</div>
          ${optionsHTML}
          ${isAnswered ? `<div style="padding:10px; background:#f0fdf4; border:1px solid #16a34a; border-radius:8px; font-size:13px; font-weight:700; color:#15803d;">💡 ${item.explanation}</div>` : ''}
        </div>
      </div>
    `;
  }).join("");

  return `
    <div style="flex:1; overflow-y:auto; padding:24px; background:#f8fafc;">
      <div style="max-width:860px; margin:0 auto;">
        <div style="background:#0072ce; color:#fff; padding:18px 22px; border-radius:14px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h2 style="font-size:19px; font-weight:900;">🔧 Chặng 1: Nhận diện Linh kiện & Lắp ráp (${session.title})</h2>
            <p style="font-size:13px; opacity:0.9;">Kiểm tra nhanh kiến thức phần cứng trước khi lập trình VEXcode GO</p>
          </div>
          <button class="vex-btn emerald" onclick="switchMainTab('code')">Sang Lập trình Code ➔</button>
        </div>
        ${cardsHTML}
      </div>
    </div>
  `;
}

function answerHardwareCheck(qIdx, optIdx) {
  const session = getCurrentSession();
  const item = session.hardware_check[qIdx];
  if (!item) return;
  appState.analytics.hardwareAnswers[qIdx] = optIdx;
  if (optIdx === item.correct_index) window.soundFX.playUnlockSuccess();
  else window.soundFX.playWrongAnswer();
  renderAll();
}

function renderQuizStageHTML() {
  const session = getCurrentSession();
  const questions = session.post_quiz || [];

  const cardsHTML = questions.map((q, qIdx) => {
    const selected = appState.analytics.quizAnswers[qIdx];
    const isAnswered = selected !== undefined;

    const optsHTML = q.options.map((optText, oIdx) => {
      let cls = "unlock-option-btn";
      if (isAnswered) {
        if (oIdx === q.correct_index) cls += " correct";
        else if (oIdx === selected) cls += " wrong";
      }
      const letter = String.fromCharCode(65 + oIdx);
      return `
        <button class="${cls}" onclick="answerPostQuiz(${qIdx}, ${oIdx})">
          <span class="opt-letter">${letter}</span>
          <span>${optText}</span>
        </button>
      `;
    }).join("");

    return `
      <div style="background:#fff; border:1.5px solid #cbd5e1; border-radius:14px; padding:18px; margin-bottom:14px;">
        <div style="font-size:12px; font-weight:800; color:#0072ce;">CÂU HỎI CỦNG CỐ #${qIdx + 1}/${questions.length}</div>
        <div style="font-size:16px; font-weight:800; margin:6px 0 12px 0;">${q.question}</div>
        ${optsHTML}
        ${isAnswered ? `<div style="padding:10px; background:#f0fdf4; border:1px solid #16a34a; border-radius:8px; font-size:13px; font-weight:700; color:#15803d;">✅ ${q.explanation || ''}</div>` : ''}
      </div>
    `;
  }).join("");

  return `
    <div style="flex:1; overflow-y:auto; padding:24px; background:#f8fafc;">
      <div style="max-width:860px; margin:0 auto;">
        <div style="background:#0072ce; color:#fff; padding:18px 22px; border-radius:14px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h2 style="font-size:19px; font-weight:900;">📝 Chặng 3: Trắc nghiệm Củng cố Tư duy (${session.title})</h2>
            <p style="font-size:13px; opacity:0.9;">Hoàn thành trắc nghiệm để tổng hợp vào Phiếu Báo cáo gửi Phụ huynh & QC</p>
          </div>
          <button class="vex-btn emerald" onclick="switchMainTab('report')">Xem Báo cáo PH/QC ➔</button>
        </div>
        ${cardsHTML}
      </div>
    </div>
  `;
}

function answerPostQuiz(qIdx, optIdx) {
  const session = getCurrentSession();
  const q = session.post_quiz[qIdx];
  if (!q) return;
  appState.analytics.quizAnswers[qIdx] = optIdx;
  if (optIdx === q.correct_index) window.soundFX.playUnlockSuccess();
  else window.soundFX.playWrongAnswer();
  saveCurrentStudentProgressReport();
  renderAll();
}

function computeReportMetrics() {
  const course = getCurrentCourse();
  const session = getCurrentSession();
  const student = appState.activeStudent;

  const unlockedCount = Object.keys(appState.analytics.unlockedBlocks).length;
  const totalBlocks = Math.max(1, appState.analytics.totalUnlockQuestions);
  const solvedLvls = Object.keys(appState.analytics.levelsCompleted).length;
  const totalLvls = session.levels.length;

  const quizQuestions = session.post_quiz || [];
  let quizCorrect = 0;
  quizQuestions.forEach((q, idx) => {
    if (appState.analytics.quizAnswers[idx] === q.correct_index) quizCorrect++;
  });

  const hwQuestions = session.hardware_check || [];
  let hwCorrect = 0;
  hwQuestions.forEach((q, idx) => {
    if (appState.analytics.hardwareAnswers[idx] === q.correct_index) hwCorrect++;
  });

  const unlockedNames = Object.values(appState.analytics.unlockedBlocks)
    .map(b => b.block_label)
    .filter(Boolean);
  const uniqueBlockLabels = [...new Set(unlockedNames)];

  return {
    student,
    course,
    session,
    unlockedCount,
    totalBlocks,
    solvedLvls,
    totalLvls,
    quizCorrect,
    quizTotal: quizQuestions.length,
    hwCorrect,
    hwTotal: hwQuestions.length,
    logicCheckCount: appState.analytics.logicCheckCount,
    uniqueBlockLabels
  };
}

function generateZaloParentMessage(m) {
  const blockListStr = m.uniqueBlockLabels.length > 0
    ? m.uniqueBlockLabels.join(", ")
    : "spin Motor1, Drive forward (200mm/ô), Turn right/left 90°, Eye Sensor & LED Bumper";

  return `🌟 [MINDX THUẬN AN - BÁO CÁO TƯ DUY LẬP TRÌNH VEXCODE GO] 🌟
👨‍🎓 Học viên: ${m.student.name} (${m.student.class_code})
📘 Khóa học: ${m.course.course_name}
🚀 Bài học: ${m.session.title}

✅ 1. Tư duy hiểu bản chất câu lệnh (Block-Unlocking):
• Đã hiểu ý nghĩa & thông số ${m.unlockedCount}/${m.totalBlocks} khối lệnh VEXcode GO trước khi lập trình (${blockListStr}).
• Con không kéo thả cảm tính mà biết tính quãng đường theo ô lưới (1 ô = 200mm) và góc quay.

✅ 2. Thực hành Sa bàn Nhiệm vụ 2.5D & Kết nối Robot:
• Hoàn thành: ${m.solvedLvls}/${m.totalLvls} cấp độ sa bàn (Cơ bản ➔ Vận dụng ➔ Thử thách).
• Có sử dụng bước STEP "Kiểm tra Logic" (${m.logicCheckCount} lần) để nhẩm từng dòng lệnh trước khi bấm START chạy Robot.

✅ 3. Nhận diện Linh kiện & Trắc nghiệm cuối buổi:
• Nhận diện phần cứng VEX GO: ${m.hwCorrect}/${m.hwTotal} câu.
• Điểm Trắc nghiệm củng cố: ${m.quizCorrect}/${m.quizTotal} câu.`;
}

function saveCurrentStudentProgressReport() {
  const m = computeReportMetrics();
  window.CourseStorage.saveReport({
    student_id: m.student.id,
    student_name: m.student.name,
    class_code: m.student.class_code,
    course_id: m.course.course_id,
    session_number: m.session.session_number,
    session_title: m.session.title,
    unlocked_str: `${m.unlockedCount}/${m.totalBlocks}`,
    levels_str: `${m.solvedLvls}/${m.totalLvls}`,
    quiz_str: `${m.quizCorrect}/${m.quizTotal}`,
    timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
  });
}

function renderReportStageHTML() {
  const m = computeReportMetrics();
  const zaloText = generateZaloParentMessage(m);

  return `
    <div style="flex:1; overflow-y:auto; padding:24px; background:#f8fafc;">
      <div style="max-width:880px; margin:0 auto; background:#fff; border:2px solid #0072ce; border-radius:16px; padding:22px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; border-bottom:1px solid #cbd5e1; padding-bottom:14px;">
          <div>
            <span style="background:#e11d48; color:#fff; font-size:11px; font-weight:800; padding:3px 9px; border-radius:99px;">MINDX THUẬN AN • BÁO CÁO PHỤ HUYNH & QC</span>
            <h2 style="font-size:21px; font-weight:900; margin-top:6px;">🏆 Phiếu Tổng Kết Buổi Học: ${m.student.name} (${m.student.class_code})</h2>
            <p style="font-size:13px; color:#64748b;">${m.course.course_name} • ${m.session.title}</p>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="vex-btn amber" onclick="fillDemoFullScore()">⚡ Điền mẫu Hoàn thành 100% (Demo QC)</button>
            <button class="vex-btn emerald" onclick="copyZaloReport()">📋 Sao chép gửi Zalo Phụ huynh</button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin:16px 0;">
          <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:11px; font-weight:800; color:#15803d;">HIỂU BẢN CHẤT KHỐI LỆNH</div>
            <div style="font-size:24px; font-weight:900; color:#16a34a; margin:4px 0;">${m.unlockedCount}/${m.totalBlocks}</div>
            <div style="font-size:11px; color:#15803d;">Trả lời đúng trước khi ghép</div>
          </div>
          <div style="background:#f0f9ff; border:1px solid #7dd3fc; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:11px; font-weight:800; color:#0369a1;">HOÀN THÀNH SA BÀN 2.5D</div>
            <div style="font-size:24px; font-weight:900; color:#0284c7; margin:4px 0;">${m.solvedLvls}/${m.totalLvls}</div>
            <div style="font-size:11px; color:#0369a1;">Cơ bản ➔ Vận dụng ➔ Thử thách</div>
          </div>
          <div style="background:#fffbeb; border:1px solid #fde047; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:11px; font-weight:800; color:#b45309;">KIỂM TRA LOGIC (STEP)</div>
            <div style="font-size:24px; font-weight:900; color:#d97706; margin:4px 0;">${m.logicCheckCount} lần</div>
            <div style="font-size:11px; color:#b45309;">Nhẩm đường trước khi chạy</div>
          </div>
          <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:12px; padding:12px; text-align:center;">
            <div style="font-size:11px; font-weight:800; color:#15803d;">ĐIỂM TRẮC NGHIỆM & LINH KIỆN</div>
            <div style="font-size:24px; font-weight:900; color:#16a34a; margin:4px 0;">${m.quizCorrect + m.hwCorrect}/${m.quizTotal + m.hwTotal}</div>
            <div style="font-size:11px; color:#15803d;">Nắm vững phần cứng & code</div>
          </div>
        </div>

        <div id="copy-status-msg" style="font-size:13px; font-weight:800; color:#16a34a; margin-bottom:6px;"></div>
        <pre style="background:#0f172a; color:#f8fafc; padding:16px; border-radius:12px; font-family:inherit; font-size:13px; line-height:1.55; white-space:pre-wrap;">${zaloText}</pre>
      </div>
    </div>
  `;
}

function fillDemoFullScore() {
  window.soundFX.playVictory();
  const session = getCurrentSession();
  (session.hardware_check || []).forEach((q, idx) => {
    appState.analytics.hardwareAnswers[idx] = q.correct_index;
  });
  session.levels.forEach(lvl => {
    appState.analytics.levelsCompleted[lvl.level_id] = { completed: true, logicChecked: true };
    (lvl.available_blocks || []).forEach(b => {
      appState.analytics.unlockedBlocks[b.block_id] = {
        unlocked: true,
        attempts: 1,
        block_label: b.label
      };
    });
  });
  (session.post_quiz || []).forEach((q, idx) => {
    appState.analytics.quizAnswers[idx] = q.correct_index;
  });
  appState.analytics.logicCheckCount = Math.max(3, appState.analytics.logicCheckCount);
  saveCurrentStudentProgressReport();
  renderAll();
}

function copyZaloReport() {
  window.soundFX.playUnlockSuccess();
  const m = computeReportMetrics();
  const text = generateZaloParentMessage(m);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
  }
  const msgEl = document.getElementById("copy-status-msg");
  if (msgEl) msgEl.textContent = "✅ Đã sao chép nhận xét vào Clipboard! Bạn có thể dán ngay vào nhóm Zalo Phụ huynh.";
}

function renderBuilderStageHTML() {
  const session = getCurrentSession();
  const sessionJSON = JSON.stringify(session, null, 2);

  return `
    <div style="flex:1; overflow-y:auto; padding:20px; background:#f8fafc;">
      <div style="max-width:960px; margin:0 auto; background:#fff; border:1.5px solid #cbd5e1; border-radius:14px; padding:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div>
            <h2 style="font-size:18px; font-weight:900; color:#0072ce;">🛠️ Trình Soạn Bài Học Data-Driven JSON (Dùng xuyên suốt các khóa VEX GO)</h2>
            <p style="font-size:12.5px; color:#64748b;">Chỉnh sửa trực tiếp cấu hình sa bàn, câu hỏi mở khóa lệnh (unlock_question) và trắc nghiệm của buổi học:</p>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="vex-btn primary" onclick="saveCustomJSONToSession()">💾 Lưu & Áp dụng JSON</button>
            <button class="vex-btn" onclick="switchMainTab('code')">Quay lại VEXcode GO</button>
          </div>
        </div>
        <div id="builder-status-msg" style="font-size:13px; font-weight:800; color:#16a34a; margin-bottom:8px;"></div>
        <textarea id="builder-json-textarea" style="width:100%; height:440px; background:#0f172a; color:#38bdf8; font-family:Consolas, monospace; font-size:12px; padding:14px; border-radius:10px; border:1px solid #334155;">${sessionJSON}</textarea>
      </div>
    </div>
  `;
}

function saveCustomJSONToSession() {
  const textarea = document.getElementById("builder-json-textarea");
  const statusEl = document.getElementById("builder-status-msg");
  if (!textarea) return;
  try {
    const parsed = JSON.parse(textarea.value);
    const course = getCurrentCourse();
    const sIdx = course.sessions.findIndex(s => s.session_number === appState.currentSessionNumber);
    if (sIdx >= 0) course.sessions[sIdx] = parsed;
    else course.sessions.push(parsed);
    window.CourseStorage.saveCourses(appState.courses);
    window.soundFX.playUnlockSuccess();
    if (statusEl) statusEl.textContent = "✅ Đã lưu cấu hình JSON buổi học thành công!";
  } catch (err) {
    window.soundFX.playWrongAnswer();
    if (statusEl) statusEl.textContent = "❌ Lỗi JSON: " + err.message;
  }
}

window.addEventListener("DOMContentLoaded", initApp);
