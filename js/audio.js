// Attack on Titan Web Audio Synthesizer: Ambient Drone & Tactical Sound Effects
class AOTSoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.ambientGain = null;
    this.ambientOsc1 = null;
    this.ambientOsc2 = null;
    this.droneRunning = false;
    this.japaneseVoice = null;
    this.initSpeechVoices();
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.ctx = new AudioContext();
    }
  }

  initSpeechVoices() {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Look for Japanese voices
        this.japaneseVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP') || v.name.toLowerCase().includes('japanese')) || null;
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  toggleSound() {
    this.init();
    if (!this.ctx) return false;
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.startAmbientDrone();
      this.playBladeSlice();
    } else {
      this.stopAmbientDrone();
    }
    return !this.isMuted;
  }

  startAmbientDrone() {
    if (this.droneRunning || this.isMuted || !this.ctx) return;
    try {
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);

      // Low ominous brass drone (D2 note ~ 73.4Hz)
      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sawtooth';
      this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime);

      // Sub-bass rumble
      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'sine';
      this.ambientOsc2.frequency.setValueAtTime(36.7, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, this.ctx.currentTime);

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
      this.droneRunning = true;
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  stopAmbientDrone() {
    if (!this.droneRunning || !this.ambientGain || !this.ctx) return;
    try {
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        if (this.ambientOsc1) this.ambientOsc1.stop();
        if (this.ambientOsc2) this.ambientOsc2.stop();
        this.droneRunning = false;
      }, 500);
    } catch (e) {
      this.droneRunning = false;
    }
  }

  // Blade unsheath metallic slash
  playBladeSlice() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(3200, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.18);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  // Titan Transformation Lightning Crackle / Thunder
  playTitanLightning() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
      const now = this.ctx.currentTime;
      
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(120, now + 0.35);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(now);

      const boom = this.ctx.createOscillator();
      const boomGain = this.ctx.createGain();
      boom.type = 'sine';
      boom.frequency.setValueAtTime(180, now);
      boom.frequency.exponentialRampToValueAtTime(30, now + 0.6);

      boomGain.gain.setValueAtTime(0.25, now);
      boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

      boom.connect(boomGain);
      boomGain.connect(this.ctx.destination);

      boom.start(now);
      boom.stop(now + 0.7);
    } catch (e) {}
  }

  // Public Disclosure Mid-Episode Eyecatcher Chime
  playPublicDisclosureEyecatcher() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
      const now = this.ctx.currentTime;
      const notes = [587.33, 698.46, 880.00, 1174.66];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);

        gain.gain.setValueAtTime(0.18, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 1.3);
      });
    } catch (e) {}
  }

  // Paths Cosmic Shimmer
  playPathsPulse() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.6);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.0);
    } catch (e) {}
  }

  // Heavy Battle Clash & Armor Spark
  playBattleClash() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(320, now);
      osc1.frequency.exponentialRampToValueAtTime(60, now + 0.3);
      osc2.frequency.setValueAtTime(880, now);
      osc2.frequency.exponentialRampToValueAtTime(180, now + 0.15);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } catch (e) {}
  }

  // Rumbling Deep Earthquake Sub-Bass
  playRumblingMarch() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(45, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 1.5);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(90, now);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 2.0);
    } catch (e) {}
  }

  // =========================================================================
  // ANIME BATTLE VOICE ENGINE (Web Speech API + Battle Horn Resonance)
  // =========================================================================
  playAnimeVoice(quoteObj, onComplete) {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    // 1. Play Epic Brass Battle Horn Fanfare in Background
    try {
      if (this.ctx) {
        const now = this.ctx.currentTime;
        const horn = this.ctx.createOscillator();
        const hornGain = this.ctx.createGain();
        horn.type = 'sawtooth';
        
        const base = quoteObj.id.includes('erwin') ? 220 : (quoteObj.id.includes('levi') ? 261.63 : 196);
        horn.frequency.setValueAtTime(base, now);
        horn.frequency.exponentialRampToValueAtTime(base * 1.5, now + 0.35);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);

        hornGain.gain.setValueAtTime(0.18, now);
        hornGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

        horn.connect(filter);
        filter.connect(hornGain);
        hornGain.connect(this.ctx.destination);

        horn.start(now);
        horn.stop(now + 1.7);
      }
    } catch (e) {}

    // 2. Play Anime Japanese Vocal Speech Line via Web Speech API
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any pending speech

      const textToSpeak = quoteObj.speechText || quoteObj.japanese;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      // Set Japanese locale
      utterance.lang = 'ja-JP';

      // Find best Japanese voice
      const voices = window.speechSynthesis.getVoices();
      const jaVoice = voices.find(v => v.lang.includes('ja') || v.lang.includes('JP') || v.name.toLowerCase().includes('japanese'));
      if (jaVoice) {
        utterance.voice = jaVoice;
      }

      // Customize cadence per character
      if (quoteObj.id.includes('erwin')) {
        utterance.rate = 1.05; // Commander urgent pacing
        utterance.pitch = 0.95; // Authoritative deep tone
        utterance.volume = 1.0;
      } else if (quoteObj.id.includes('levi')) {
        utterance.rate = 0.95; // Calm, menacing
        utterance.pitch = 0.85; // Low rasp
        utterance.volume = 1.0;
      } else if (quoteObj.id.includes('eren')) {
        utterance.rate = 1.15; // Intense shouting
        utterance.pitch = 1.05;
        utterance.volume = 1.0;
      } else if (quoteObj.id.includes('mikasa')) {
        utterance.rate = 1.0;
        utterance.pitch = 1.15;
        utterance.volume = 1.0;
      } else {
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
      }

      utterance.onend = () => {
        if (onComplete) onComplete();
      };
      utterance.onerror = () => {
        if (onComplete) onComplete();
      };

      window.speechSynthesis.speak(utterance);
    } else {
      if (onComplete) setTimeout(onComplete, 1200);
    }
  }
}

window.aotSound = new AOTSoundEngine();
