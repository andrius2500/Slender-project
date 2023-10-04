import hallwayWalkingSound from "../Assets/sound_effects/hallway_walking_sound.mp3";

const hallwayWalkingAudio = new Audio(hallwayWalkingSound);
export default function hallwayWalkingEffect() {
  hallwayWalkingAudio.play();
}
