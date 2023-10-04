import caveSound from "../Assets/sound_effects/cave_sound_effect.mp3";

const caveAudio = new Audio(caveSound);

export function playCaveAudio() {
  caveAudio.play();
}

export function stopCaveAudio() {
  caveAudio.pause();
}
