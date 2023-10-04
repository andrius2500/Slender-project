import stairwayWalkingSound from "../Assets/sound_effects/stairway_walking_sound.mp3";

const stairwayWalkingAudio = new Audio(stairwayWalkingSound);
export default function stairwayWalkingEffect() {
  stairwayWalkingAudio.play();
}
