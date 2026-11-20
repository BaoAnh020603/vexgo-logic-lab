// ============================================================================
// VEX GO LOGIC LAB - WEB AUDIO SYNTHESIZER (No external MP3 files required)
// Optimized for iPad Safari & Chrome Touch feedback
// ============================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) this.playTap();
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.12, delay = 0, gainVal = 0.12) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Ignore audio context restriction errors before user gesture
    }
  }

  playTap() {
    this.playTone(520, 'sine', 0.06, 0, 0.08);
  }

  playPop() {
    this.playTone(380, 'triangle', 0.07, 0, 0.1);
    this.playTone(640, 'sine', 0.09, 0.04, 0.1);
  }

  playUnlockSuccess() {
    // Crisp block-snap + chime
    this.playTone(523.25, 'triangle', 0.12, 0, 0.14);    // C5
    this.playTone(659.25, 'triangle', 0.12, 0.08, 0.14); // E5
    this.playTone(783.99, 'triangle', 0.15, 0.16, 0.15); // G5
    this.playTone(1046.5, 'sine', 0.28, 0.24, 0.16);     // C6
  }

  playWrongAnswer() {
    this.playTone(240, 'sawtooth', 0.16, 0, 0.1);
    this.playTone(185, 'sawtooth', 0.24, 0.12, 0.1);
  }

  playTraceStep(stepIndex = 0) {
    const baseFreq = 440 + (stepIndex % 8) * 45;
    this.playTone(baseFreq, 'sine', 0.09, 0, 0.09);
  }

  playRobotMove() {
    this.playTone(210, 'triangle', 0.14, 0, 0.08);
    this.playTone(260, 'sine', 0.14, 0.06, 0.08);
  }

  playRobotTurn() {
    this.playTone(320, 'triangle', 0.12, 0, 0.09);
    this.playTone(420, 'triangle', 0.12, 0.07, 0.09);
  }

  playMagnet(isBoost = true) {
    if (isBoost) {
      this.playTone(300, 'sine', 0.12, 0, 0.12);
      this.playTone(600, 'sine', 0.18, 0.08, 0.14);
      this.playTone(900, 'triangle', 0.2, 0.16, 0.12);
    } else {
      this.playTone(700, 'sine', 0.12, 0, 0.12);
      this.playTone(350, 'sine', 0.2, 0.08, 0.12);
    }
  }

  playSensorBeep() {
    this.playTone(880, 'sine', 0.08, 0, 0.11);
    this.playTone(1174.66, 'sine', 0.12, 0.09, 0.11);
  }

  playVictory() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];
    const times = [0, 0.1, 0.2, 0.3, 0.45, 0.58];
    const durs  = [0.1, 0.1, 0.1, 0.18, 0.12, 0.4];
    notes.forEach((n, idx) => {
      this.playTone(n, 'triangle', durs[idx], times[idx], 0.16);
    });
  }

  playCrash() {
    this.playTone(160, 'sawtooth', 0.2, 0, 0.13);
    this.playTone(120, 'sawtooth', 0.3, 0.12, 0.13);
  }
}

window.soundFX = new SoundEngine();
