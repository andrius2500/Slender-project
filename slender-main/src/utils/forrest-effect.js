import forestSound from "../Assets/sound_effects/forrest_sound.mp3";

const forrestAudio = new Audio(forestSound);

export function playForrestAudio() {
  forrestAudio.play();
}

export function stopForrestAudio() {
  forrestAudio.pause();
}
