import forestWalkingSound from "../Assets/sound_effects/forest_walking_sound.mp3";

const forestWalkingAudio = new Audio(forestWalkingSound);
export default function forestWalkingEffect() {
  forestWalkingAudio.play();
}
