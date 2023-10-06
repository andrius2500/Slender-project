import stairwayWalkingSound from "../Assets/sound_effects/stairway_walking_sound.mp3";
import hallwayWalkingSound from "../Assets/sound_effects/hallway_walking_sound.mp3";
import forestWalkingSound from "../Assets/sound_effects/forest_walking_sound.mp3";
import caveWalkingSound from "../Assets/sound_effects/cave_walking_sound.mp3";

const stairwayWalkingAudio = new Audio(stairwayWalkingSound);
export const stairwayWalkingEffect = () => {
  stairwayWalkingAudio.play();
};

const hallwayWalkingAudio = new Audio(hallwayWalkingSound);
export const hallwayWalkingEffect = () => {
  hallwayWalkingAudio.play();
};

const forestWalkingAudio = new Audio(forestWalkingSound);
export const forestWalkingEffect = () => {
  forestWalkingAudio.play();
};

const caveWalkingAudio = new Audio(caveWalkingSound);
export const caveWalkingEffect = () => {
  caveWalkingAudio.play();
};
