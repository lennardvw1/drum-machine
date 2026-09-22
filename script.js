const DRUM_NAMES = [
  "kick",
  "snare",
  "hihat",
  "clap",
  "tom",
  "ride",
  "crash",
  "openhat",
  "rim",
  "floorTom",
  "midTom",
  "lowTom",
  "shaker",
  "tambourine",
  "conga",
  "cowbell",
  "bongo",
  "maraca",
  "clave",
  "sidestick",
  "snap",
  "subkick",
  "synthkick",
  "reversekick",
  "crash2",
];
const DRUM_LABELS = {
  kick: "Kick",
  snare: "Snare",
  hihat: "Hi-Hat",
  clap: "Clap",
  tom: "Tom",
  ride: "Ride",
  crash: "Crash",
  openhat: "Open Hat",
  rim: "Rim",
  floorTom: "Floor Tom",
  midTom: "Mid Tom",
  lowTom: "Low Tom",
  shaker: "Shaker",
  tambourine: "Tambourine",
  conga: "Conga",
  cowbell: "Cowbell",
  bongo: "Bongo",
  maraca: "Maraca",
  clave: "Clave",
  sidestick: "Side Stick",
  snap: "Snap",
  subkick: "Sub Kick",
  synthkick: "Synth Kick",
  reversekick: "Reverse Kick",
  crash2: "Crash 2",
};

let STEP_COUNT = 16;

const sequence = Object.fromEntries(
  DRUM_NAMES.map((drum) => [drum, Array(STEP_COUNT).fill(false)])
);

const drumOrder = [...DRUM_NAMES];
const hiddenDrums = new Set();
let selectedStep = 0;
let currentStep = 0;
let isPlaying = false;
let timerId = null;
let nextStepTime = 0;
let bpm = 110;
let audioContext = null;
let draggedDrum = null;

const playButton = document.getElementById("play-button");
const tempoInput = document.getElementById("tempo");
const tempoValue = document.getElementById("tempo-value");
const trackLengthInput = document.getElementById("track-length");
const trackLengthValue = document.getElementById("track-length-value");
const sequenceGrid = document.getElementById("sequence-grid");

function updateTempoLabel() {
  tempoValue.textContent = String(bpm);
}

function updateTrackLengthLabel() {
  trackLengthValue.textContent = String(STEP_COUNT);
}

function resizeSequence(newLength) {
  if (newLength === STEP_COUNT) {
    return;
  }

  STEP_COUNT = newLength;

  for (const drum of DRUM_NAMES) {
    const existing = sequence[drum];
    const resized = Array(STEP_COUNT).fill(false);

    for (let i = 0; i < Math.min(existing.length, STEP_COUNT); i += 1) {
      resized[i] = existing[i];
    }

    sequence[drum] = resized;
  }

  selectedStep = Math.min(selectedStep, STEP_COUNT - 1);
  currentStep = Math.min(currentStep, STEP_COUNT - 1);
  updateTrackLengthLabel();
}

function renderStepSelector() {
  return;
}

function reorderDrumRows(fromDrum, toDrum) {
  const fromIndex = drumOrder.indexOf(fromDrum);
  const toIndex = drumOrder.indexOf(toDrum);

  if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
    return;
  }

  const [movedDrum] = drumOrder.splice(fromIndex, 1);
  drumOrder.splice(toIndex, 0, movedDrum);
}

function getOrderedDrums() {
  return [...drumOrder].sort((a, b) => {
    const aHidden = Number(hiddenDrums.has(a));
    const bHidden = Number(hiddenDrums.has(b));
    return aHidden - bHidden;
  });
}

function toggleDrumVisibility(drum) {
  if (hiddenDrums.has(drum)) {
    hiddenDrums.delete(drum);
  } else {
    hiddenDrums.add(drum);
  }

  render();
}

function triggerCellRightClick(drum, step) {
  sequence[drum][step] = false;
  render();
}

function renderSequenceGrid() {
  sequenceGrid.innerHTML = "";
  document.documentElement.style.setProperty("--step-count", String(STEP_COUNT));

  for (const drum of getOrderedDrums()) {
    const row = document.createElement("div");
    const isHidden = hiddenDrums.has(drum);
    row.className = `sequence-row ${drum}-row`;
    row.draggable = true;
    row.style.setProperty("--step-count", String(STEP_COUNT));

    if (isHidden) {
      row.classList.add("is-hidden");
    }

    const label = document.createElement("div");
    label.className = "row-label";

    const rowName = document.createElement("span");
    rowName.className = "row-name";
    rowName.textContent = DRUM_LABELS[drum];
    label.appendChild(rowName);

    const eyeButton = document.createElement("button");
    eyeButton.type = "button";
    eyeButton.className = "row-toggle";
    eyeButton.textContent = isHidden ? "🙈" : "👁";
    eyeButton.setAttribute("aria-label", isHidden ? `Show ${DRUM_LABELS[drum]}` : `Hide ${DRUM_LABELS[drum]}`);
    eyeButton.title = isHidden ? `Show ${DRUM_LABELS[drum]}` : `Hide ${DRUM_LABELS[drum]}`;
    eyeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleDrumVisibility(drum);
    });
    label.appendChild(eyeButton);
    row.appendChild(label);

    row.addEventListener("dragstart", (event) => {
      if (isHidden) {
        event.preventDefault();
        return;
      }

      draggedDrum = drum;
      row.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", drum);
    });

    row.addEventListener("dragover", (event) => {
      if (isHidden) {
        return;
      }

      event.preventDefault();
      row.classList.add("drag-over");
      event.dataTransfer.dropEffect = "move";
    });

    row.addEventListener("dragleave", () => {
      row.classList.remove("drag-over");
    });

    row.addEventListener("drop", (event) => {
      if (isHidden) {
        return;
      }

      event.preventDefault();
      const droppedDrum = event.dataTransfer.getData("text/plain") || draggedDrum;
      row.classList.remove("drag-over");

      if (droppedDrum && droppedDrum !== drum) {
        reorderDrumRows(droppedDrum, drum);
        render();
      }

      draggedDrum = null;
      row.classList.remove("dragging");
    });

    row.addEventListener("dragend", () => {
      draggedDrum = null;
      row.classList.remove("dragging");
      row.classList.remove("drag-over");
    });

    for (let step = 0; step < STEP_COUNT; step += 1) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "step-cell";
      cell.setAttribute("aria-label", `${DRUM_LABELS[drum]} step ${step + 1}`);
      cell.disabled = isHidden;

      if (!isHidden && sequence[drum][step]) {
        cell.classList.add("active");
      }

      if (!isHidden && isPlaying && currentStep === step) {
        cell.classList.add("current");
      }

      if (!isHidden) {
        cell.addEventListener("click", () => {
          const context = ensureAudioContext();
          const isOn = sequence[drum][step];

          if (context && !isOn) {
            triggerDrum(drum, context.currentTime + 0.01);
          }

          sequence[drum][step] = !sequence[drum][step];
          selectedStep = step;
          render();
        });

        cell.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          triggerCellRightClick(drum, step);
        });
      }

      row.appendChild(cell);
    }

    sequenceGrid.appendChild(row);
  }
}

function render() {
  renderStepSelector();
  renderSequenceGrid();
}

function ensureAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function makeNoiseBuffer(context, duration = 0.2) {
  const length = context.sampleRate * duration;
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < length; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }

  return buffer;
}

function triggerKick(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(65, time);
  oscillator.frequency.exponentialRampToValueAtTime(32, time + 0.14);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.7, time + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.18);
}

function triggerRim(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(260, time);
  oscillator.frequency.exponentialRampToValueAtTime(180, time + 0.04);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.3, time + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.06);
}

function triggerFloorTom(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(90, time);
  oscillator.frequency.exponentialRampToValueAtTime(52, time + 0.22);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.52, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.22);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.24);
}

function triggerMidTom(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(130, time);
  oscillator.frequency.exponentialRampToValueAtTime(72, time + 0.2);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.48, time + 0.009);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.2);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.22);
}

function triggerLowTom(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(82, time);
  oscillator.frequency.exponentialRampToValueAtTime(44, time + 0.26);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.45, time + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.28);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.3);
}

function triggerShaker(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.09);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.2, time + 0.001);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);

  noise.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.1);
}

function triggerTambourine(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.13);
  filter.type = "highpass";
  filter.frequency.setValueAtTime(7000, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.3, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.1);
}

function triggerConga(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(150, time);
  oscillator.frequency.exponentialRampToValueAtTime(85, time + 0.16);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.38, time + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.18);
}

function triggerCowbell(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(550, time);
  oscillator.frequency.exponentialRampToValueAtTime(360, time + 0.1);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.18, time + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.1);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.12);
}

function triggerBongo(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(230, time);
  oscillator.frequency.exponentialRampToValueAtTime(150, time + 0.13);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.25, time + 0.007);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.14);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.16);
}

function triggerMaraca(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.07);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.18, time + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

  noise.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.09);
}

function triggerClave(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(900, time);
  oscillator.frequency.exponentialRampToValueAtTime(640, time + 0.03);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.24, time + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.03);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.04);
}

function triggerSideStick(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(300, time);
  oscillator.frequency.exponentialRampToValueAtTime(220, time + 0.03);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.18, time + 0.001);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.03);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.04);
}

function triggerSnap(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.07);
  filter.type = "highpass";
  filter.frequency.setValueAtTime(6000, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.32, time + 0.001);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.06);
}

function triggerSubKick(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(42, time);
  oscillator.frequency.exponentialRampToValueAtTime(28, time + 0.25);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.8, time + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.25);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.27);
}

function triggerSynthKick(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(60, time);
  oscillator.frequency.exponentialRampToValueAtTime(24, time + 0.18);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.7, time + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.19);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.2);
}

function triggerReverseKick(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(120, time + 0.06);
  oscillator.frequency.exponentialRampToValueAtTime(30, time + 0.2);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.55, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.2);
}

function triggerCrash2(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.6);
  filter.type = "highpass";
  filter.frequency.setValueAtTime(3500, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.7, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.36);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.38);
}

function triggerTom(time) {
  const context = audioContext;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(140, time);
  oscillator.frequency.exponentialRampToValueAtTime(80, time + 0.18);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.5, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(time);
  oscillator.stop(time + 0.2);
}

function triggerRide(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.15);
  filter.type = "highpass";
  filter.frequency.setValueAtTime(4500, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.24, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.09);
}

function triggerCrash(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.38);
  filter.type = "highpass";
  filter.frequency.setValueAtTime(4000, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.62, time + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.22);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.25);
}

function triggerOpenHat(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.2);
  filter.type = "highpass";
  filter.frequency.setValueAtTime(7000, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.38, time + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.15);
}

function triggerSnare(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const noiseFilter = context.createBiquadFilter();
  const noiseGain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.18);
  noiseFilter.type = "highpass";
  noiseFilter.frequency.setValueAtTime(1800, time);

  noiseGain.gain.setValueAtTime(0.0001, time);
  noiseGain.gain.exponentialRampToValueAtTime(0.65, time + 0.004);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.15);

  const tone = context.createOscillator();
  const toneGain = context.createGain();
  tone.type = "triangle";
  tone.frequency.setValueAtTime(210, time);
  tone.frequency.exponentialRampToValueAtTime(110, time + 0.1);
  toneGain.gain.setValueAtTime(0.0001, time);
  toneGain.gain.exponentialRampToValueAtTime(0.35, time + 0.003);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);

  tone.connect(toneGain);
  toneGain.connect(context.destination);
  tone.start(time);
  tone.stop(time + 0.12);
}

function triggerHiHat(time) {
  const context = audioContext;
  const noise = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  noise.buffer = makeNoiseBuffer(context, 0.12);
  filter.type = "highpass";
  filter.frequency.setValueAtTime(8000, time);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.45, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);

  noise.start(time);
  noise.stop(time + 0.06);
}

function triggerClap(time) {
  const context = audioContext;

  for (let i = 0; i < 3; i += 1) {
    const noise = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const offset = time + i * 0.02;

    noise.buffer = makeNoiseBuffer(context, 0.08);
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1800, offset);
    filter.Q.value = 0.6;

    gain.gain.setValueAtTime(0.0001, offset);
    gain.gain.exponentialRampToValueAtTime(0.4, offset + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, offset + 0.06);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);

    noise.start(offset);
    noise.stop(offset + 0.07);
  }
}

function triggerDrum(drum, time) {
  switch (drum) {
    case "kick":
      triggerKick(time);
      break;
    case "snare":
      triggerSnare(time);
      break;
    case "hihat":
      triggerHiHat(time);
      break;
    case "clap":
      triggerClap(time);
      break;
    case "tom":
      triggerTom(time);
      break;
    case "ride":
      triggerRide(time);
      break;
    case "crash":
      triggerCrash(time);
      break;
    case "openhat":
      triggerOpenHat(time);
      break;
    case "rim":
      triggerRim(time);
      break;
    case "floorTom":
      triggerFloorTom(time);
      break;
    case "midTom":
      triggerMidTom(time);
      break;
    case "lowTom":
      triggerLowTom(time);
      break;
    case "shaker":
      triggerShaker(time);
      break;
    case "tambourine":
      triggerTambourine(time);
      break;
    case "conga":
      triggerConga(time);
      break;
    case "cowbell":
      triggerCowbell(time);
      break;
    case "bongo":
      triggerBongo(time);
      break;
    case "maraca":
      triggerMaraca(time);
      break;
    case "clave":
      triggerClave(time);
      break;
    case "sidestick":
      triggerSideStick(time);
      break;
    case "snap":
      triggerSnap(time);
      break;
    case "subkick":
      triggerSubKick(time);
      break;
    case "synthkick":
      triggerSynthKick(time);
      break;
    case "reversekick":
      triggerReverseKick(time);
      break;
    case "crash2":
      triggerCrash2(time);
      break;
    default:
      break;
  }
}

function advanceStep() {
  if (!isPlaying) {
    return;
  }

  const context = ensureAudioContext();
  const stepDurationSeconds = 60 / bpm / 4;
  const scheduledTime = nextStepTime || context.currentTime + 0.01;

  for (const drum of DRUM_NAMES) {
    if (hiddenDrums.has(drum)) {
      continue;
    }

    if (sequence[drum][currentStep]) {
      triggerDrum(drum, scheduledTime);
    }
  }

  selectedStep = currentStep;
  render();

  currentStep = (currentStep + 1) % STEP_COUNT;
  nextStepTime = scheduledTime + stepDurationSeconds;

  const delayMs = Math.max(10, (nextStepTime - context.currentTime) * 1000);
  timerId = window.setTimeout(advanceStep, delayMs);
}

function stopPlayback() {
  isPlaying = false;
  window.clearTimeout(timerId);
  timerId = null;
  nextStepTime = 0;
  playButton.textContent = "Play";
  render();
}

function startPlayback() {
  const context = ensureAudioContext();

  if (!context) {
    window.alert("Your browser does not support Web Audio.");
    return;
  }

  currentStep = 0;
  selectedStep = 0;
  isPlaying = true;
  nextStepTime = context.currentTime + 0.01;
  playButton.textContent = "Stop";
  render();
  advanceStep();
}

playButton.addEventListener("click", () => {
  if (isPlaying) {
    stopPlayback();
    return;
  }

  startPlayback();
});

tempoInput.addEventListener("input", (event) => {
  bpm = Number(event.target.value);
  updateTempoLabel();

  if (isPlaying) {
    stopPlayback();
    startPlayback();
  }
});

trackLengthInput.addEventListener("input", (event) => {
  const nextLength = Number(event.target.value);
  resizeSequence(nextLength);
  render();
});

updateTempoLabel();
updateTrackLengthLabel();
render();
