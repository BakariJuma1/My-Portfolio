export function playMessageSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    const tone = (freq, start, duration, volume = 0.12) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.start(start);
      osc.stop(start + duration);
    };

    tone(587.33, ctx.currentTime, 0.12);
    tone(880, ctx.currentTime + 0.09, 0.18);
  } catch {
    // Audio not supported — silent fail
  }
}
