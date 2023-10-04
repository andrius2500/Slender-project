import caveWalkingSound from "../Assets/sound_effects/cave_walking_sound.mp3";

const caveWalkingAudio = new Audio(caveWalkingSound);
export default function caveWalkingEffect() {
  caveWalkingAudio.play();
}
