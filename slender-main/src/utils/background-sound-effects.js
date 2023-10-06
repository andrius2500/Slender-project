import forestSound from "../Assets/sound_effects/forrest_sound.mp3";
import caveSound from "../Assets/sound_effects/cave_sound_effect.mp3";
import houseSound from "../Assets/sound_effects/house_sound_effect.mp3";

const forrestAudio = new Audio(forestSound);
export const playForrestAudio = () => {
  forrestAudio.play();
};
export const stopForrestAudio = () => {
  forrestAudio.pause();
};

const caveAudio = new Audio(caveSound);
export const playCaveAudio = () => {
  caveAudio.play();
};
export const stopCaveAudio = () => {
  caveAudio.pause();
};

const insideHouseAudio = new Audio(houseSound);
export const playInsideHouseAudio = () => {
  insideHouseAudio.play();
};
export const stopInsideHouseAudio = () => {
  insideHouseAudio.pause();
};
