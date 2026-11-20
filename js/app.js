// ============================================================================
// MINDX VEX GO - HỆ THỐNG TRẮC NGHIỆM LUÂN PHIÊN THEO NHÓM (CHỐNG 1 BẠN LÀM 1 BẠN NHÌN)
// 5 Học viên / Chia 2-3 bạn 1 nhóm • Bắt buộc trao iPad đổi lượt sau mỗi câu
// ============================================================================

const quizState = {
  courses: [],
  groups: [],
  currentCourseId: "ROB_PREA",
  currentSessionNumber: 1,       // Mặc định: [PREA] Buổi 1: Cuộc Dạo Chơi Ở Thảo Cầm Viên
  currentGroupId: "GRP_1",       // Mặc định: Nhóm 1 (2 bạn)
  activeView: "quiz",            // "quiz" | "summary" | "editor"

  currentQuestionIndex: 0,
  // Map of questionIndex -> { memberId, memberName, selectedOption, isCorrect }
  answersByQuestion: {},

  // Mandatory Pass-the-iPad Lock Gate between questions
  handoffGate: {
    open: false,
    fromMember: null,
    toMember: null,
    nextQuestionIndex: 0
  },

  // Edit Group Member Names Modal
  editGroupModalOpen: false
};

function initQuizApp() {
  quizState.courses = window.QuizStorage.loadCourses();
  quizState.groups = window.QuizStorage.loadGroups();
  resetSessionProgress();
  renderApp();
}

function getCurrentCourse() {
  return quizState.courses.find(c => c.course_id === quizState.currentCourseId) || quizState.courses[0];
}

function getCurrentSession() {
  const course = getCurrentCourse();
  return course.sessions.find(s => s.session_number === Number(quizState.currentSessionNumber)) || course.sessions[0];
}

function getCurrentGroup() {
  return quizState.groups.find(g => g.group_id === quizState.currentGroupId) || quizState.groups[0];
}

// Strict Turn-Rotation Formula: Question N always belongs to member (N % group.members.length)
function getMemberForQuestion(qIdx) {
  const group = getCurrentGroup();
  const members = group.members || [];
  return members[qIdx % members.length] || members[0];
}

function getWaitingTeammatesForQuestion(qIdx) {
  const group = getCurrentGroup();
  const active = getMemberForQuestion(qIdx);
  return (group.members || []).filter(m => m.id !== active.id);
}

function getMemberStats(memberId) {
  const session = getCurrentSession();
  const totalQ = (session.questions || []).length;
  let assigned = 0;
  let answered = 0;
  let correct = 0;

  for (let i = 0; i < totalQ; i++) {
    const owner = getMemberForQuestion(i);
    if (owner.id === memberId) {
      assigned++;
      const ans = quizState.answersByQuestion[i];
      if (ans) {
        answered++;
        if (ans.isCorrect) correct++;
      }
    }
  }
  return { assigned, answered, correct };
}

function resetSessionProgress() {
  quizState.currentQuestionIndex = 0;
  quizState.answersByQuestion = {};
  quizState.handoffGate.open = false;
  quizState.activeView = "quiz";
}

// ============================================================================
// MASTER RENDER
// ============================================================================
function renderApp() {
  renderTopBar();
  renderGroupTurnRibbon();
  renderMainViewport();
  renderHandoffGateModal();
  renderEditGroupModal();
}

// ----------------------------------------------------------------------------
// 1. TOP BAR (Chọn Khóa PREA / PREB / PREI & Buổi học)
// ----------------------------------------------------------------------------
function renderTopBar() {
  const bar = document.getElementById("top-vex-bar");
  if (!bar) return;

  const currentCourse = getCurrentCourse();
  const currentSession = getCurrentSession();

  const optionsHTML = quizState.courses.map(course =>
    course.sessions.map(sec => {
      const val = `${course.course_id}::${sec.session_number}`;
      const selected = course.course_id === currentCourse.course_id && sec.session_number === currentSession.session_number;
      const shortCourse = course.course_id.replace("ROB_", "");
      return `<option value="${val}" ${selected ? 'selected' : ''}>[${shortCourse}] ${sec.title}</option>`;
    }).join("")
  ).join("");

  bar.innerHTML = `
    <div class="top-left-cluster">
      <div class="go-logo-badge">GO</div>
      <div style="display:flex; flex-direction:column;">
        <span style="font-size:11px; font-weight:800; opacity:0.85; letter-spacing:0.3px;">MINDX THUẬN AN • TRẮC NGHIỆM LUÂN PHIÊN NHÓM</span>
        <div class="session-picker-pill">
          <span>📘</span>
          <select class="session-select" onchange="onSelectCourseSession(this.value)">
            ${optionsHTML}
          </select>
        </div>
      </div>
    </div>

    <div class="top-right-cluster">
      <button class="nav-pill-btn ${quizState.activeView === 'quiz' ? 'active' : ''}"
              onclick="switchView('quiz')">
        🎯 Làm Trắc Nghiệm Nhóm
      </button>
      <button class="nav-pill-btn ${quizState.activeView === 'summary' ? 'active' : ''}"
              onclick="switchView('summary')">
        🏆 Bảng Điểm Cá Nhân & Báo Cáo PH/QC
      </button>
      <button class="nav-pill-btn ${quizState.activeView === 'editor' ? 'active' : ''}"
              onclick="switchView('editor')">
        👩‍🏫 Soạn Câu Hỏi
      </button>
      <button class="nav-pill-btn" onclick="toggleSoundFX()" title="Bật/Tắt Âm thanh">
        ${window.soundFX && window.soundFX.enabled ? '🔊' : '🔇'}
      </button>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 2. GROUP TURN TRACKER RIBBON (Chia nhóm 5 bạn: Nhóm 2 bạn / Nhóm 3 bạn)
// ----------------------------------------------------------------------------
function renderGroupTurnRibbon() {
  const ribbon = document.getElementById("group-turn-ribbon");
  if (!ribbon) return;

  const currentGroup = getCurrentGroup();
  const activeMember = getMemberForQuestion(quizState.currentQuestionIndex);

  const groupBtnsHTML = quizState.groups.map(grp => `
    <button class="group-chip-btn ${grp.group_id === currentGroup.group_id ? 'active' : ''}"
            onclick="selectGroup('${grp.group_id}')">
      <span>👥</span>
      <span>${grp.group_name}</span>
    </button>
  `).join("");

  const membersBarHTML = currentGroup.members.map(m => {
    const isTurn = quizState.activeView === "quiz" && m.id === activeMember.id;
    const st = getMemberStats(m.id);
    return `
      <div class="member-turn-pill ${isTurn ? 'is-current-turn' : ''}"
           style="--member-color: ${m.color};">
        <div class="member-avatar-circle" style="background:${m.color};">${m.avatar}</div>
        <div class="member-turn-info">
          <span class="member-turn-name">${m.name}</span>
          <span class="member-turn-stats">Đã làm: ${st.answered}/${st.assigned} câu • Đúng: ${st.correct}</span>
        </div>
        ${isTurn ? `<span class="turn-active-tag" style="background:${m.color};">Đang tới lượt</span>` : ''}
      </div>
    `;
  }).join(`<span style="font-size:18px; color:#94a3b8; font-weight:900;">⇄</span>`);

  ribbon.innerHTML = `
    <div class="group-selector-box">
      ${groupBtnsHTML}
      <button class="group-chip-btn" onclick="openEditGroupModal()" title="Sửa tên học viên trong nhóm">
        ✏️ Đổi tên bạn
      </button>
    </div>

    <div class="members-turn-bar">
      ${membersBarHTML}
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 3. MAIN VIEWPORT ROUTER
// ----------------------------------------------------------------------------
function renderMainViewport() {
  const vp = document.getElementById("quiz-main-viewport");
  if (!vp) return;

  if (quizState.activeView === "quiz") {
    vp.innerHTML = renderTurnBasedQuizHTML();
  } else if (quizState.activeView === "summary") {
    vp.innerHTML = renderGroupSummaryReportHTML();
  } else if (quizState.activeView === "editor") {
    vp.innerHTML = renderQuestionEditorHTML();
  }
}

// ============================================================================
// VIEW 1: TURN-BASED COLLABORATIVE QUIZ (1 BẠN XONG 1 CÂU BẮT BUỘC ĐỔI LƯỢT)
// ============================================================================
function renderTurnBasedQuizHTML() {
  const session = getCurrentSession();
  const questions = session.questions || [];
  const qIdx = quizState.currentQuestionIndex;
  const q = questions[qIdx];

  if (!q) {
    return `<div style="padding:40px; text-align:center;">Buổi học này chưa có câu hỏi.</div>`;
  }

  const activeMember = getMemberForQuestion(qIdx);
  const waitingMembers = getWaitingTeammatesForQuestion(qIdx);
  const waitingNames = waitingMembers.map(m => m.name).join(" & ");
  const existingAnswer = quizState.answersByQuestion[qIdx];
  const isAnswered = !!existingAnswer;

  // Question Step Dots showing which teammate owns each question
  const dotsHTML = questions.map((item, idx) => {
    const owner = getMemberForQuestion(idx);
    const ans = quizState.answersByQuestion[idx];
    let cls = "q-dot";
    if (idx === qIdx) cls += " current";
    if (ans) cls += ans.isCorrect ? " correct" : " wrong";
    return `
      <div class="${cls}" title="Câu ${idx + 1}: Lượt của ${owner.name}">
        <span>C${idx + 1}</span>
        <span style="width:8px;height:8px;border-radius:50%;background:${owner.color};display:inline-block;"></span>
      </div>
    `;
  }).join("");

  // Visual Preview (VEXcode GO block or 2.5D VEX GO hardware part)
  const visualHTML = window.VEXGO_VISUAL_SVGS[q.visual_key] || window.VEXGO_VISUAL_SVGS.zoo_theme;

  // 4 Options
  const optionsHTML = q.options.map((optText, optIdx) => {
    let cls = "quiz-option-touch-btn";
    if (isAnswered) {
      if (optIdx === q.correct_index) cls += " correct";
      else if (optIdx === existingAnswer.selectedOption) cls += " wrong";
    }
    const letter = String.fromCharCode(65 + optIdx);
    return `
      <button class="${cls}"
              onclick="submitQuestionAnswer(${optIdx})"
              ${isAnswered ? 'disabled' : ''}>
        <span class="option-letter-box">${letter}</span>
        <span>${optText}</span>
      </button>
    `;
  }).join("");

  // Post-Answer Feedback & Mandatory Turn Handoff Button
  let feedbackHTML = "";
  if (isAnswered) {
    const hasNext = qIdx + 1 < questions.length;
    const nextMember = hasNext ? getMemberForQuestion(qIdx + 1) : null;

    feedbackHTML = `
      <div class="answer-feedback-box ${existingAnswer.isCorrect ? 'ok' : 'err'}">
        <div style="flex:1;">
          <div style="font-size:15px; font-weight:900; margin-bottom:4px;">
            ${existingAnswer.isCorrect
              ? `🎉 Tuyệt vời! ${activeMember.name} đã trả lời CHÍNH XÁC!`
              : `💡 Chưa chính xác rồi ${activeMember.name} ơi! Hãy xem giải thích nhé:`}
          </div>
          <div style="font-size:13.5px; font-weight:600; line-height:1.4;">
            ${q.explanation || ''}
          </div>
        </div>

        ${hasNext ? `
          <button class="action-btn emerald" style="min-height:54px; font-size:15px; padding:0 20px; background:${nextMember.color};"
                  onclick="triggerTurnHandoffGate()">
            🔄 Đổi lượt sang ${nextMember.name} (Câu ${qIdx + 2}) ➔
          </button>
        ` : `
          <button class="action-btn emerald" style="min-height:54px; font-size:15px; padding:0 20px;"
                  onclick="switchView('summary')">
            🏆 Xem Tổng Kết Điểm Cả Nhóm ➔
          </button>
        `}
      </div>
    `;
  }

  return `
    <div class="quiz-card-wrapper">
      <!-- Progress Bar across all questions -->
      <div class="question-progress-dots">
        ${dotsHTML}
      </div>

      <!-- HUGE ACTIVE PLAYER BANNER (Chống 1 bạn làm 1 bạn nhìn) -->
      <div class="active-turn-callout" style="background: linear-gradient(135deg, ${activeMember.color}, #0f172a);">
        <div class="callout-left">
          <div class="callout-big-avatar">${activeMember.avatar}</div>
          <div>
            <div style="font-size:11.5px; font-weight:800; text-transform:uppercase; opacity:0.9;">
              CÂU HỎI SỐ ${qIdx + 1} / ${questions.length} • LƯỢT THAO TÁC TRÊN iPAD
            </div>
            <div style="font-size:21px; font-weight:900; margin-top:2px;">
              🎯 Lượt của: ${activeMember.name}
            </div>
          </div>
        </div>
        <div class="callout-rule-badge">
          <div>👀 <strong>${waitingNames}</strong> cùng thảo luận miệng</div>
          <div style="color:#fde047; margin-top:2px;">✋ Nhưng để tự tay <strong>${activeMember.name}</strong> chạm chọn đáp án!</div>
        </div>
      </div>

      <!-- Question Content Card -->
      <div class="question-stage-box">
        <div class="question-top-row">
          <div class="visual-preview-box">
            ${visualHTML}
          </div>
          <div>
            <span class="question-topic-tag">📌 ${q.topic || session.title}</span>
            <div class="question-prompt-text">
              ${q.question}
            </div>
          </div>
        </div>

        <div class="options-grid-2x2">
          ${optionsHTML}
        </div>

        ${feedbackHTML}
      </div>
    </div>
  `;
}

function submitQuestionAnswer(optionIdx) {
  const session = getCurrentSession();
  const qIdx = quizState.currentQuestionIndex;
  const q = session.questions[qIdx];
  if (!q || quizState.answersByQuestion[qIdx]) return;

  const activeMember = getMemberForQuestion(qIdx);
  const isCorrect = optionIdx === q.correct_index;

  if (isCorrect) {
    if (window.soundFX) window.soundFX.playUnlockSuccess();
  } else {
    if (window.soundFX) window.soundFX.playWrongAnswer();
  }

  quizState.answersByQuestion[qIdx] = {
    memberId: activeMember.id,
    memberName: activeMember.name,
    selectedOption: optionIdx,
    isCorrect: isCorrect
  };

  renderApp();
}

// ============================================================================
// MANDATORY "PASS THE IPAD TO TEAMMATE" LOCK GATE
// Bắt buộc bạn tiếp theo trong nhóm xác nhận nhận iPad mới mở câu mới
// ============================================================================
function triggerTurnHandoffGate() {
  const session = getCurrentSession();
  const nextIdx = quizState.currentQuestionIndex + 1;
  if (nextIdx >= session.questions.length) {
    switchView("summary");
    return;
  }

  if (window.soundFX) window.soundFX.playPop();

  const fromMember = getMemberForQuestion(quizState.currentQuestionIndex);
  const toMember = getMemberForQuestion(nextIdx);

  quizState.handoffGate = {
    open: true,
    fromMember,
    toMember,
    nextQuestionIndex: nextIdx
  };
  renderHandoffGateModal();
}

function renderHandoffGateModal() {
  const root = document.getElementById("handoff-modal-root");
  if (!root) return;

  if (!quizState.handoffGate.open) {
    root.innerHTML = "";
    return;
  }

  const { fromMember, toMember, nextQuestionIndex } = quizState.handoffGate;

  root.innerHTML = `
    <div class="handoff-backdrop">
      <div class="handoff-gate-card" style="--next-color: ${toMember.color};">
        <div style="display:inline-block; padding:5px 14px; border-radius:99px; background:#fef3c7; color:#b45309; font-size:12.5px; font-weight:900; text-transform:uppercase;">
          🛑 QUY TẮC LÀM VIỆC NHÓM • KHÔNG ĐỂ 1 BẠN LÀM 1 BẠN NHÌN
        </div>

        <h2 style="font-size:24px; font-weight:900; color:#0f172a; margin-top:12px;">
          🔄 Đổi Lượt! Hãy Trao iPad Cho Bạn Cùng Nhóm
        </h2>

        <p style="font-size:14.5px; color:#475569; margin-top:6px; font-weight:600;">
          <strong>${fromMember.name}</strong> vừa hoàn thành xong Câu số ${nextQuestionIndex}.<br/>
          Bây giờ hãy chuyển chiếc iPad này sang trước mặt <strong>${toMember.name}</strong>!
        </p>

        <div class="handoff-flow-row">
          <div class="handoff-student-box done-turn">
            <div style="font-size:11px; font-weight:800; color:#64748b;">VỪA LÀM XONG CÂU ${nextQuestionIndex}</div>
            <div style="font-size:16px; font-weight:900; margin-top:4px; color:${fromMember.color};">
              ✓ ${fromMember.name}
            </div>
          </div>

          <div style="font-size:28px;">📱➔</div>

          <div class="handoff-student-box next-turn" style="--next-color: ${toMember.color};">
            <div style="font-size:11px; font-weight:900; color:${toMember.color};">NGƯỜI LÀM CÂU ${nextQuestionIndex + 1}</div>
            <div style="font-size:17px; font-weight:900; margin-top:4px; color:#0f172a;">
              🎯 ${toMember.name}
            </div>
          </div>
        </div>

        <button class="btn-confirm-handoff"
                style="--next-color: ${toMember.color};"
                onclick="confirmTeammateReceivedIpad()">
          <span>✋</span>
          <span>Con là ${toMember.name} — Chạm vào đây để mở Câu số ${nextQuestionIndex + 1}</span>
        </button>
      </div>
    </div>
  `;
}

function confirmTeammateReceivedIpad() {
  if (window.soundFX) window.soundFX.playVictory();
  quizState.currentQuestionIndex = quizState.handoffGate.nextQuestionIndex;
  quizState.handoffGate.open = false;
  renderApp();
}

// ============================================================================
// VIEW 2: GROUP & INDIVIDUAL SUMMARY REPORT (BẢNG ĐIỂM TỪNG BẠN & BÁO CÁO ZALO PH/QC)
// ============================================================================
function renderGroupSummaryReportHTML() {
  const course = getCurrentCourse();
  const session = getCurrentSession();
  const group = getCurrentGroup();
  const totalQ = (session.questions || []).length;
  const totalAnswered = Object.keys(quizState.answersByQuestion).length;

  let groupCorrect = 0;
  Object.values(quizState.answersByQuestion).forEach(a => {
    if (a.isCorrect) groupCorrect++;
  });

  const memberCardsHTML = group.members.map(m => {
    const st = getMemberStats(m.id);
    const pct = st.assigned > 0 ? Math.round((st.correct / st.assigned) * 100) : 0;
    return `
      <div style="background:#f8fafc; border:2px solid ${m.color}; border-radius:16px; padding:16px; text-align:center;">
        <div style="width:44px; height:44px; border-radius:50%; background:${m.color}; color:#fff; font-weight:900; font-size:18px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px auto;">
          ${m.avatar}
        </div>
        <div style="font-size:16px; font-weight:900; color:#0f172a;">${m.name}</div>
        <div style="font-size:12px; font-weight:700; color:#64748b; margin-top:2px;">
          Số lượt tự làm: <strong>${st.answered}/${st.assigned} câu</strong> (Luân phiên 100%)
        </div>
        <div style="font-size:26px; font-weight:900; color:${m.color}; margin:8px 0 4px 0;">
          ${st.correct}/${st.assigned} câu đúng (${pct}%)
        </div>
      </div>
    `;
  }).join("");

  const zaloReportText = generateZaloGroupReportText(course, session, group, totalQ, groupCorrect);

  return `
    <div class="quiz-card-wrapper">
      <div class="question-stage-box">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; border-bottom:1.5px solid #e2e8f0; padding-bottom:14px;">
          <div>
            <span style="background:#e11d48; color:#fff; font-size:11px; font-weight:800; padding:3px 10px; border-radius:99px;">
              MINDX THUẬN AN • BÁO CÁO TRẮC NGHIỆM LUÂN PHIÊN NHÓM
            </span>
            <h2 style="font-size:21px; font-weight:900; margin-top:6px;">
              🏆 Kết Quả Nhóm: ${group.group_name} (${session.title})
            </h2>
            <p style="font-size:13px; color:#64748b;">
              Đã hoàn thành ${totalAnswered}/${totalQ} câu • Điểm chung cả nhóm: <strong>${groupCorrect}/${totalQ} câu đúng</strong>
            </p>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="action-btn amber" onclick="fillDemoGroupScore()">
              ⚡ Điền mẫu Hoàn thành 100% (Demo QC)
            </button>
            <button class="action-btn emerald" onclick="copyZaloGroupReport()">
              📋 Sao chép Báo cáo gửi Zalo PH
            </button>
            <button class="action-btn outline" onclick="restartCurrentQuiz()">
              ↺ Làm lại từ Câu 1
            </button>
          </div>
        </div>

        <!-- Individual Member Score Breakdown -->
        <div style="margin-top:16px;">
          <div style="font-size:13.5px; font-weight:900; color:#0f172a; margin-bottom:10px;">
            📊 Điểm Cá Nhân & Số Lượt Thao Tác Của Từng Bạn Trong Nhóm (Đảm bảo 100% không có bạn nào chỉ ngồi nhìn):
          </div>
          <div style="display:grid; grid-template-columns:repeat(${group.members.length}, 1fr); gap:14px;">
            ${memberCardsHTML}
          </div>
        </div>

        <!-- Zalo Copyable Report -->
        <div style="margin-top:18px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:13px; font-weight:800; color:#0072ce;">
              📱 Nội dung Nhận xét tự động trích xuất theo từng Học viên trong nhóm (Dán vào Zalo PH / LMS MindX):
            </span>
            <span id="copy-toast-msg" style="font-size:12.5px; font-weight:900; color:#16a34a;"></span>
          </div>
          <pre style="background:#0f172a; color:#f8fafc; padding:16px; border-radius:14px; font-family:inherit; font-size:13px; line-height:1.55; white-space:pre-wrap;">${zaloReportText}</pre>
        </div>
      </div>
    </div>
  `;
}

function generateZaloGroupReportText(course, session, group, totalQ, groupCorrect) {
  const memberLines = group.members.map(m => {
    const st = getMemberStats(m.id);
    return `• Học viên ${m.name}: Tự tay hoàn thành ${st.answered}/${st.assigned} lượt câu hỏi của mình — Đạt ${st.correct}/${st.assigned} câu đúng.`;
  }).join("\n");

  return `🌟 [MINDX THUẬN AN - BÁO CÁO HỌC TẬP & TRẮC NGHIỆM VEX GO] 🌟
📘 Khóa học: ${course.course_name}
🚀 Bài học: ${session.title} (${session.subtitle || ''})
👥 Nhóm thực hành iPad: ${group.group_name}

✅ 1. Tinh thần làm việc nhóm & Luân phiên thao tác (100% tham gia):
• Hệ thống chia đều lượt câu hỏi luân phiên trên iPad, bắt buộc trao máy đổi lượt sau mỗi câu (không có tình trạng 1 bạn làm 1 bạn nhìn).
${memberLines}

✅ 2. Tổng kết kiến thức Buổi học:
• Điểm phối hợp toàn nhóm: ${groupCorrect}/${totalQ} câu chính xác.
• Các con nắm vững tên gọi linh kiện VEX GO (Brain, Smart Motor, Pin Tool, Beam/Pin) và ý nghĩa các khối lệnh Motion trên VEXcode GO (when started, spin Motor1 forward, spin for 90 degrees, stop Motor1, set velocity).`;
}

function fillDemoGroupScore() {
  if (window.soundFX) window.soundFX.playVictory();
  const session = getCurrentSession();
  (session.questions || []).forEach((q, idx) => {
    const owner = getMemberForQuestion(idx);
    quizState.answersByQuestion[idx] = {
      memberId: owner.id,
      memberName: owner.name,
      selectedOption: q.correct_index,
      isCorrect: true
    };
  });
  renderApp();
}

function copyZaloGroupReport() {
  if (window.soundFX) window.soundFX.playUnlockSuccess();
  const course = getCurrentCourse();
  const session = getCurrentSession();
  const group = getCurrentGroup();
  const totalQ = (session.questions || []).length;
  let groupCorrect = 0;
  Object.values(quizState.answersByQuestion).forEach(a => {
    if (a.isCorrect) groupCorrect++;
  });
  const text = generateZaloGroupReportText(course, session, group, totalQ, groupCorrect);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
  }
  const el = document.getElementById("copy-toast-msg");
  if (el) el.textContent = "✅ Đã sao chép vào Clipboard! Bạn có thể dán ngay vào nhóm Zalo Phụ huynh.";
}

function restartCurrentQuiz() {
  if (window.soundFX) window.soundFX.playTap();
  resetSessionProgress();
  renderApp();
}

// ============================================================================
// EDIT GROUP MEMBER NAMES MODAL (Sửa tên 5 bạn học viên trong lớp dễ dàng)
// ============================================================================
function openEditGroupModal() {
  if (window.soundFX) window.soundFX.playTap();
  quizState.editGroupModalOpen = true;
  renderEditGroupModal();
}

function closeEditGroupModal() {
  quizState.editGroupModalOpen = false;
  renderEditGroupModal();
}

function renderEditGroupModal() {
  const root = document.getElementById("edit-group-modal-root");
  if (!root) return;
  if (!quizState.editGroupModalOpen) {
    root.innerHTML = "";
    return;
  }

  const group = getCurrentGroup();
  const inputsHTML = group.members.map((m, idx) => `
    <div style="margin-bottom:12px; text-align:left;">
      <label style="font-size:12.5px; font-weight:800; color:#475569; display:block; margin-bottom:4px;">
        Thành viên lượt #${idx + 1} trong ${group.group_name}:
      </label>
      <input type="text" id="member-name-input-${idx}" value="${m.name}"
             style="width:100%; height:44px; padding:0 12px; border-radius:10px; border:1.5px solid #cbd5e1; font-size:14.5px; font-weight:800;" />
    </div>
  `).join("");

  root.innerHTML = `
    <div class="handoff-backdrop" onclick="closeEditGroupModal()">
      <div class="handoff-gate-card" style="max-width:480px; --next-color:#0072ce;" onclick="event.stopPropagation()">
        <h3 style="font-size:20px; font-weight:900; margin-bottom:6px;">
          ✏️ Đặt Tên Học Viên Cho ${group.group_name}
        </h3>
        <p style="font-size:13px; color:#64748b; margin-bottom:16px;">
          Hệ thống sẽ tự động chia câu hỏi luân phiên theo đúng tên các bạn dưới đây:
        </p>
        ${inputsHTML}
        <div style="display:flex; gap:10px; justify-content:flex-end; margin-top:16px;">
          <button class="action-btn outline" onclick="closeEditGroupModal()">Hủy</button>
          <button class="action-btn emerald" onclick="saveGroupMemberNames()">💾 Lưu Tên Nhóm</button>
        </div>
      </div>
    </div>
  `;
}

function saveGroupMemberNames() {
  const group = getCurrentGroup();
  group.members.forEach((m, idx) => {
    const inp = document.getElementById(`member-name-input-${idx}`);
    if (inp && inp.value.trim()) {
      m.name = inp.value.trim();
    }
  });
  window.QuizStorage.saveGroups(quizState.groups);
  quizState.editGroupModalOpen = false;
  if (window.soundFX) window.soundFX.playUnlockSuccess();
  renderApp();
}

// ============================================================================
// VIEW 3: TEACHER QUESTION EDITOR (SOẠN CÂU HỎI JSON CHO CÁC BUỔI TIẾP THEO)
// ============================================================================
function renderQuestionEditorHTML() {
  const session = getCurrentSession();
  const jsonText = JSON.stringify(session, null, 2);

  return `
    <div class="quiz-card-wrapper">
      <div class="question-stage-box">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div>
            <h2 style="font-size:19px; font-weight:900; color:#0072ce;">
              👩‍🏫 Trình Soạn Ngân Hàng Câu Hỏi (${session.title})
            </h2>
            <p style="font-size:13px; color:#64748b;">
              Chỉnh sửa hoặc thêm câu hỏi trắc nghiệm mới cho buổi học theo chuẩn JSON:
            </p>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="action-btn emerald" onclick="saveEditedSessionJSON()">💾 Lưu Câu Hỏi Buổi Này</button>
            <button class="action-btn outline" onclick="resetDefaultQuizBank()">↺ Khôi phục Mặc định</button>
          </div>
        </div>
        <div id="editor-save-msg" style="font-size:13px; font-weight:800; color:#16a34a; margin-bottom:8px;"></div>
        <textarea id="session-json-editor"
                  style="width:100%; height:430px; background:#0f172a; color:#38bdf8; font-family:Consolas, monospace; font-size:12.5px; padding:14px; border-radius:12px; border:1px solid #334155;">${jsonText}</textarea>
      </div>
    </div>
  `;
}

function saveEditedSessionJSON() {
  const ta = document.getElementById("session-json-editor");
  const msg = document.getElementById("editor-save-msg");
  if (!ta) return;
  try {
    const parsed = JSON.parse(ta.value);
    const course = getCurrentCourse();
    const idx = course.sessions.findIndex(s => s.session_number === Number(quizState.currentSessionNumber));
    if (idx >= 0) course.sessions[idx] = parsed;
    else course.sessions.push(parsed);
    window.QuizStorage.saveCourses(quizState.courses);
    if (window.soundFX) window.soundFX.playUnlockSuccess();
    if (msg) msg.textContent = "✅ Đã lưu ngân hàng câu hỏi thành công!";
  } catch (e) {
    if (window.soundFX) window.soundFX.playWrongAnswer();
    if (msg) msg.textContent = "❌ Lỗi JSON: " + e.message;
  }
}

function resetDefaultQuizBank() {
  window.QuizStorage.resetAll();
  quizState.courses = window.QuizStorage.loadCourses();
  quizState.groups = window.QuizStorage.loadGroups();
  resetSessionProgress();
  renderApp();
}

// ============================================================================
// NAVIGATION HANDLERS
// ============================================================================
function onSelectCourseSession(val) {
  const [courseId, sessionNum] = val.split("::");
  if (window.soundFX) window.soundFX.playTap();
  quizState.currentCourseId = courseId;
  quizState.currentSessionNumber = Number(sessionNum);
  resetSessionProgress();
  renderApp();
}

function selectGroup(groupId) {
  if (window.soundFX) window.soundFX.playTap();
  quizState.currentGroupId = groupId;
  resetSessionProgress();
  renderApp();
}

function switchView(viewName) {
  if (window.soundFX) window.soundFX.playTap();
  quizState.activeView = viewName;
  renderApp();
}

function toggleSoundFX() {
  if (window.soundFX) window.soundFX.toggle();
  renderTopBar();
}

window.addEventListener("DOMContentLoaded", initQuizApp);
