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
const SONG_LIBRARY_KEY = "drum-machine-custom-songs";
const PRESET_SONGS = [
  {
    id: "preset-classic-rock",
    name: "Classic Rock",
    bpm: 110,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false],
      hihat: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      tom: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      ride: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      floorTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      midTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      lowTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      shaker: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      tambourine: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      conga: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      cowbell: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      bongo: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      maraca: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      clave: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      sidestick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      snap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      subkick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      synthkick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      reversekick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash2: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
  },
  {
    id: "preset-house",
    name: "House Groove",
    bpm: 122,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      tom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      ride: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      floorTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      midTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      lowTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      shaker: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      tambourine: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      conga: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      cowbell: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      bongo: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      maraca: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      clave: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      sidestick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      snap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      subkick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      synthkick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      reversekick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash2: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
  },
  {
    id: "preset-future-funk",
    name: "Future Funk",
    bpm: 128,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, true, true, false, false, false, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, true, false, true, true, false, true, false, true, false, true, false],
      clap: [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
      tom: [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false],
      ride: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      floorTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      midTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      lowTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      shaker: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      tambourine: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      conga: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      cowbell: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      bongo: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      maraca: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      clave: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      sidestick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      snap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      subkick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      synthkick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      reversekick: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash2: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
  },
  {
    id: "preset-funk-break",
    name: "Funk Break",
    bpm: 112,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, true, true, false, false, false],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false],
      hihat: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      tom: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      ride: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      floorTom: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      shaker: [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
      tambourine: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
  },
  {
    id: "preset-indie-pulse",
    name: "Indie Pulse",
    bpm: 118,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, true, true, false, false, false],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false],
      hihat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false],
      ride: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
  },
  {
    id: "preset-latin-heat",
    name: "Latin Heat",
    bpm: 124,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, true, false, true, false, false, false, true, false, true, false, true, false, false, false],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, true, false, true, true, false, true, false, true, true, false, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      conga: [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false],
      bongo: [false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    },
  },
  {
    id: "preset-deep-house",
    name: "Deep House",
    bpm: 122,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      shaker: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      openhat: [false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false],
    },
  },
  {
    id: "preset-trap-bounce",
    name: "Trap Bounce",
    bpm: 140,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, true, true, false, false, false, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, false, true, true, true, false, true, false, true, false, true, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true],
    },
  },
  {
    id: "preset-stutter-pop",
    name: "Stutter Pop",
    bpm: 116,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, true, false, true, false, false, true, true, false, true, false, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false],
      hihat: [true, true, true, true, true, false, true, true, true, true, true, false, true, true, true, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false],
      ride: [false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false],
    },
  },
  {
    id: "preset-industrial-drive",
    name: "Industrial Drive",
    bpm: 132,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, true, true, false, false, false, true, false, true, false],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      floorTom: [false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false],
    },
  },
  {
    id: "preset-disco-flash",
    name: "Disco Flash",
    bpm: 118,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false],
      ride: [false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true],
      crash: [false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false],
    },
  },
  {
    id: "preset-dnb-skank",
    name: "DNB Skank",
    bpm: 174,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, true, true, false, false, false],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false],
      hihat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      tom: [false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, false],
      ride: [false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false],
    },
  },
  {
    id: "preset-broken-beat",
    name: "Broken Beat",
    bpm: 100,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, true, false, true, true, false, true, false, true, true, false, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      shaker: [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false],
    },
  },
  {
    id: "preset-night-drive",
    name: "Night Drive",
    bpm: 96,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false],
      hihat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      ride: [false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, true],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false],
    },
  },
  {
    id: "preset-sunset-sway",
    name: "Sunset Sway",
    bpm: 106,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, false, true, false, false, false, true, false, true, false, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, true, true, true, true, false, true, true, true, true, true, false, true, true, true, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      tambourine: [false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true],
    },
  },
  {
    id: "preset-mojo-rush",
    name: "Mojo Rush",
    bpm: 128,
    steps: 16,
    drumOrder: ["kick", "snare", "hihat", "clap", "tom", "ride", "crash", "openhat", "rim", "floorTom", "midTom", "lowTom", "shaker", "tambourine", "conga", "cowbell", "bongo", "maraca", "clave", "sidestick", "snap", "subkick", "synthkick", "reversekick", "crash2"],
    hiddenDrums: [],
    sequence: {
      kick: [true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true],
      snare: [false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      hihat: [true, false, true, false, true, false, true, true, true, false, true, false, true, false, true, true],
      clap: [false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
      tom: [false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false],
    },
  },
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
const songSelect = document.getElementById("song-select");
const songNameInput = document.getElementById("song-name");
const saveSongButton = document.getElementById("save-song-button");
const copyLinkButton = document.getElementById("copy-link-button");
const deleteSongButton = document.getElementById("delete-song-button");

function cloneSequence(source = sequence) {
  return Object.fromEntries(
    DRUM_NAMES.map((drum) => [drum, [...(source[drum] || Array(STEP_COUNT).fill(false))]])
  );
}

function buildSongFromCurrentState(name, id = null) {
  return {
    id: id || `custom-${Date.now()}`,
    name,
    bpm,
    steps: STEP_COUNT,
    hiddenDrums: [...hiddenDrums],
    drumOrder: [...drumOrder],
    sequence: cloneSequence(),
  };
}

function getCustomSongs() {
  try {
    const stored = JSON.parse(localStorage.getItem(SONG_LIBRARY_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    return [];
  }
}

function saveCustomSongs(songs) {
  localStorage.setItem(SONG_LIBRARY_KEY, JSON.stringify(songs));
}

function getLibrarySongs() {
  return [...PRESET_SONGS, ...getCustomSongs()];
}

function isBasicPreset(song) {
  const basicDrums = new Set(["kick", "snare", "hihat", "clap", "tom"]);

  return Object.entries(song.sequence || {}).every(([drum, steps]) => {
    if (!Array.isArray(steps)) {
      return true;
    }

    if (!basicDrums.has(drum)) {
      return steps.every((step) => !step);
    }

    return true;
  });
}

function isCustomSongSelected() {
  const selectedId = songSelect.value;
  return Boolean(selectedId && getCustomSongs().some((song) => song.id === selectedId));
}

function refreshSongActionState() {
  deleteSongButton.hidden = !isCustomSongSelected();
}

function resetPresetSelection() {
  const selectedId = songSelect.value;
  if (!selectedId || selectedId.startsWith("custom-")) {
    return;
  }

  songSelect.value = "";
  songNameInput.value = "";
  renderSongLibrary();
  refreshSongActionState();
}

function renderSongLibrary() {
  const selectedId = songSelect.value || "";
  const presetSongs = PRESET_SONGS;
  const customSongs = getCustomSongs();
  const basicPresetSongs = presetSongs.filter((song) => isBasicPreset(song));
  const advancedPresetSongs = presetSongs.filter((song) => !isBasicPreset(song));

  songSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Choose a song";
  songSelect.appendChild(defaultOption);

  const basicPresetGroup = document.createElement("optgroup");
  basicPresetGroup.label = "Basic Presets";

  basicPresetSongs.forEach((song) => {
    const option = document.createElement("option");
    option.value = song.id;
    option.textContent = song.name;
    basicPresetGroup.appendChild(option);
  });

  songSelect.appendChild(basicPresetGroup);

  const advancedPresetGroup = document.createElement("optgroup");
  advancedPresetGroup.label = "Advanced Presets";

  advancedPresetSongs.forEach((song) => {
    const option = document.createElement("option");
    option.value = song.id;
    option.textContent = song.name;
    advancedPresetGroup.appendChild(option);
  });

  songSelect.appendChild(advancedPresetGroup);

  const customGroup = document.createElement("optgroup");
  customGroup.label = "My Songs";

  customSongs.forEach((song) => {
    const option = document.createElement("option");
    option.value = song.id;
    option.textContent = song.name;
    customGroup.appendChild(option);
  });

  songSelect.appendChild(customGroup);

  if (selectedId && [...presetSongs, ...customSongs].some((song) => song.id === selectedId)) {
    songSelect.value = selectedId;
  } else {
    songSelect.value = "";
  }

  refreshSongActionState();
}

function loadSongIntoMachine(song) {
  if (!song) {
    return;
  }

  const nextLength = Number(song.steps) || STEP_COUNT;
  resizeSequence(nextLength);

  for (const drum of DRUM_NAMES) {
    const stored = Array.isArray(song.sequence?.[drum]) ? song.sequence[drum] : Array(STEP_COUNT).fill(false);
    const normalized = Array(STEP_COUNT).fill(false);

    for (let i = 0; i < Math.min(stored.length, STEP_COUNT); i += 1) {
      normalized[i] = Boolean(stored[i]);
    }

    sequence[drum] = normalized;
  }

  const nextDrumOrder = Array.isArray(song.drumOrder) && song.drumOrder.length ? song.drumOrder : [...DRUM_NAMES];
  drumOrder.length = 0;
  nextDrumOrder.forEach((drum) => {
    if (DRUM_NAMES.includes(drum)) {
      drumOrder.push(drum);
    }
  });

  hiddenDrums.clear();
  (song.hiddenDrums || []).forEach((drum) => {
    if (DRUM_NAMES.includes(drum)) {
      hiddenDrums.add(drum);
    }
  });

  bpm = Number(song.bpm) || bpm;
  tempoInput.value = String(bpm);
  updateTempoLabel();
  selectedStep = 0;
  currentStep = 0;
  songNameInput.value = song.name || "";
  render();
}

function saveCurrentSong() {
  const name = songNameInput.value.trim() || "My Song";
  const selectedId = songSelect.value;
  const customSongs = getCustomSongs();

  if (selectedId && selectedId.startsWith("custom-")) {
    const targetIndex = customSongs.findIndex((song) => song.id === selectedId);
    const updatedSong = buildSongFromCurrentState(name, selectedId);

    if (targetIndex >= 0) {
      customSongs[targetIndex] = updatedSong;
    } else {
      customSongs.push(updatedSong);
    }

    saveCustomSongs(customSongs);
    renderSongLibrary();
    songSelect.value = selectedId;
    return;
  }

  const newSong = buildSongFromCurrentState(name, `custom-${Date.now()}`);
  customSongs.push(newSong);
  saveCustomSongs(customSongs);
  renderSongLibrary();
  songSelect.value = newSong.id;
}

function deleteCurrentSong() {
  const selectedId = songSelect.value;
  if (!selectedId) {
    return;
  }

  const customSongs = getCustomSongs();
  const nextSongs = customSongs.filter((song) => song.id !== selectedId);

  if (nextSongs.length === customSongs.length) {
    return;
  }

  saveCustomSongs(nextSongs);
  songSelect.value = "";
  songNameInput.value = "";
  renderSongLibrary();
}

function getUrlSafeBase64(value) {
  return btoa(unescape(encodeURIComponent(value)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromUrlSafeBase64(value) {
  const padded = value + "=".repeat((4 - (value.length % 4)) % 4);
  const base64 = padded.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(escape(atob(base64)));
}

function encodeBitPattern(bits) {
  const padded = Array.from({ length: Math.ceil(bits.length / 8) * 8 }, (_, index) => Boolean(bits[index]));
  const bytes = [];

  for (let i = 0; i < padded.length; i += 8) {
    let byte = 0;
    for (let bit = 0; bit < 8; bit += 1) {
      const bitIndex = i + bit;
      byte = (byte << 1) | Number(Boolean(padded[bitIndex]));
    }
    bytes.push(byte);
  }

  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function decodeBitPattern(value, steps) {
  if (!value) {
    return Array(steps).fill(false);
  }

  const padded = value + "=".repeat((4 - (value.length % 4)) % 4);
  const base64 = padded.replace(/-/g, "+").replace(/_/g, "/");
  const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
  const bits = [];

  bytes.forEach((byte) => {
    for (let bit = 7; bit >= 0; bit -= 1) {
      bits.push(Boolean((byte >> bit) & 1));
    }
  });

  return bits.slice(0, steps);
}

function encodeDrumBitmask(drums) {
  const bitmask = Array(DRUM_NAMES.length).fill(false);
  drums.forEach((drum) => {
    const index = DRUM_NAMES.indexOf(drum);
    if (index >= 0) {
      bitmask[index] = true;
    }
  });

  return encodeBitPattern(bitmask);
}

function decodeDrumBitmask(value) {
  const bits = decodeBitPattern(value, DRUM_NAMES.length);
  return DRUM_NAMES.filter((_, index) => bits[index]);
}

function encodeDrumOrder(order) {
  if (order.length === DRUM_NAMES.length && order.every((drum, index) => drum === DRUM_NAMES[index])) {
    return "";
  }

  const bytes = Uint8Array.from(order.map((drum) => DRUM_NAMES.indexOf(drum)).filter((index) => index >= 0));
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function decodeDrumOrder(value) {
  if (!value) {
    return [...DRUM_NAMES];
  }

  const padded = value + "=".repeat((4 - (value.length % 4)) % 4);
  const base64 = padded.replace(/-/g, "+").replace(/_/g, "/");
  const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
  const order = Array.from(bytes, (byte) => DRUM_NAMES[byte]).filter(Boolean);
  return order.length ? order : [...DRUM_NAMES];
}

function getCurrentSongLink() {
  const activeDrums = [...drumOrder].filter((drum) => sequence[drum].some(Boolean));
  const patternData = activeDrums
    .map((drum) => `${DRUM_NAMES.indexOf(drum)}:${encodeBitPattern(sequence[drum].slice(0, STEP_COUNT))}`)
    .join(".");

  const compactPayload = [
    "v2",
    getUrlSafeBase64(songNameInput.value.trim() || "My Song"),
    String(bpm),
    String(STEP_COUNT),
    encodeDrumBitmask(hiddenDrums),
    encodeDrumOrder(drumOrder),
    patternData,
  ].join(":");

  return `${window.location.href.split("#")[0]}#${compactPayload}`;
}

function loadSongFromUrl() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) {
    return;
  }

  try {
    if (hash.startsWith("v2:")) {
      const [version, encodedName, bpmValue, stepsValue, hiddenValue, orderValue, patternValue] = hash.split(":");
      if (version !== "v2") {
        throw new Error("Unsupported compact share format");
      }

      const name = fromUrlSafeBase64(encodedName || "");
      const nextSteps = Number(stepsValue) || STEP_COUNT;
      const order = decodeDrumOrder(orderValue || "");
      const hidden = decodeDrumBitmask(hiddenValue || "");
      const sequenceMap = Object.fromEntries(DRUM_NAMES.map((drum) => [drum, Array(nextSteps).fill(false)]));

      (patternValue || "")
        .split(".")
        .filter(Boolean)
        .forEach((entry) => {
          const [indexValue, patternBits] = entry.split(":");
          const drumIndex = Number(indexValue);
          const drumName = DRUM_NAMES[drumIndex];
          if (!drumName || !patternBits) {
            return;
          }
          sequenceMap[drumName] = decodeBitPattern(patternBits, nextSteps);
        });

      loadSongIntoMachine({
        name,
        bpm: Number(bpmValue) || bpm,
        steps: nextSteps,
        hiddenDrums: hidden,
        drumOrder: order,
        sequence: sequenceMap,
      });
      return;
    }

    if (hash.startsWith("v1:")) {
      const [version, encodedName, bpmValue, stepsValue, hiddenValue, orderValue, masksValue] = hash.split(":");
      if (version !== "v1") {
        throw new Error("Unsupported compact share format");
      }

      const name = fromUrlSafeBase64(encodedName || "");
      const nextSteps = Number(stepsValue) || STEP_COUNT;
      const order = (orderValue || DRUM_NAMES.join(",")).split(",").filter(Boolean);
      const hidden = (hiddenValue || "").split(",").filter(Boolean);
      const masks = (masksValue || "").split("|").filter(Boolean);
      const payload = {
        name,
        bpm: Number(bpmValue) || bpm,
        steps: nextSteps,
        hiddenDrums: hidden,
        drumOrder: order,
        sequence: Object.fromEntries(
          order.map((drum, index) => {
            const mask = masks[index] || "0".repeat(nextSteps);
            const values = Array.from(mask.slice(0, nextSteps)).map((bit) => bit === "1");
            return [drum, values];
          })
        ),
      };

      loadSongIntoMachine(payload);
      return;
    }

    const payload = JSON.parse(fromUrlSafeBase64(hash));
    loadSongIntoMachine(payload);
  } catch (error) {
    console.warn("Unable to load song from URL", error);
  }
}

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

  resetPresetSelection();
  render();
}

function refreshCellVisualState(cell, drum, step) {
  const isHidden = hiddenDrums.has(drum);
  cell.classList.toggle("active", !isHidden && sequence[drum][step]);
  cell.classList.toggle("current", !isHidden && isPlaying && currentStep === step);
}

function toggleStep(drum, step) {
  resetPresetSelection();

  const context = ensureAudioContext();
  const isOn = sequence[drum][step];

  if (context && !isOn) {
    triggerDrum(drum, context.currentTime + 0.01);
  }

  sequence[drum][step] = !sequence[drum][step];
  selectedStep = step;

  const targetCell = sequenceGrid.querySelector(`.step-cell[data-drum="${drum}"][data-step="${step}"]`);
  if (targetCell) {
    refreshCellVisualState(targetCell, drum, step);
    return;
  }

  render();
}

function triggerCellRightClick(drum, step) {
  resetPresetSelection();
  sequence[drum][step] = false;

  const targetCell = sequenceGrid.querySelector(`.step-cell[data-drum="${drum}"][data-step="${step}"]`);
  if (targetCell) {
    refreshCellVisualState(targetCell, drum, step);
    return;
  }

  render();
}

function updateCurrentStepHighlight() {
  const cells = sequenceGrid.querySelectorAll(".step-cell");

  cells.forEach((cell) => {
    const row = cell.closest(".sequence-row");
    const isHidden = row && row.classList.contains("is-hidden");
    const stepIndex = Number(cell.dataset.step || 0);
    cell.classList.toggle("current", isPlaying && !isHidden && currentStep === stepIndex);
  });
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
      cell.dataset.drum = drum;
      cell.dataset.step = String(step);
      cell.setAttribute("aria-label", `${DRUM_LABELS[drum]} step ${step + 1}`);
      cell.disabled = isHidden;
      refreshCellVisualState(cell, drum, step);

      if (!isHidden) {
        cell.addEventListener("click", () => {
          toggleStep(drum, step);
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
  updateCurrentStepHighlight();

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

function schedulePlaybackTick() {
  if (!isPlaying) {
    return;
  }

  window.clearTimeout(timerId);
  timerId = window.setTimeout(() => {
    if (isPlaying) {
      advanceStep();
    }
  }, 10);
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

songSelect.addEventListener("change", () => {
  const selectedId = songSelect.value;
  if (!selectedId) {
    songNameInput.value = "";
    refreshSongActionState();
    return;
  }

  const matchingSong = getLibrarySongs().find((song) => song.id === selectedId);
  if (matchingSong) {
    loadSongIntoMachine(matchingSong);
    songNameInput.value = matchingSong.name;
  }

  refreshSongActionState();
});

saveSongButton.addEventListener("click", () => {
  saveCurrentSong();
});

copyLinkButton.addEventListener("click", async () => {
  const shareUrl = getCurrentSongLink();

  try {
    await navigator.clipboard.writeText(shareUrl);
  } catch (error) {
    window.prompt("Copy this link:", shareUrl);
  }

  window.history.replaceState(null, "", `#${shareUrl.split("#")[1] || ""}`);
});

deleteSongButton.addEventListener("click", () => {
  deleteCurrentSong();
});

playButton.addEventListener("click", () => {
  if (isPlaying) {
    stopPlayback();
    return;
  }

  startPlayback();
});

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space") {
    return;
  }

  if (event.target && ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) {
    return;
  }

  event.preventDefault();

  if (isPlaying) {
    stopPlayback();
    return;
  }

  startPlayback();
});

tempoInput.addEventListener("input", (event) => {
  bpm = Number(event.target.value);
  updateTempoLabel();
  resetPresetSelection();

  if (isPlaying) {
    nextStepTime = 0;
    schedulePlaybackTick();
  }
});

trackLengthInput.addEventListener("input", (event) => {
  const nextLength = Number(event.target.value);
  resizeSequence(nextLength);
  resetPresetSelection();
  render();
});

songNameInput.addEventListener("input", () => {
  if (!songSelect.value || songSelect.value.startsWith("custom-")) {
    return;
  }

  songSelect.value = "";
  renderSongLibrary();
  refreshSongActionState();
});

updateTempoLabel();
updateTrackLengthLabel();
renderSongLibrary();
refreshSongActionState();
loadSongFromUrl();
render();
