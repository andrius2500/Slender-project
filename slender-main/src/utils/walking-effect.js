import walkingSound from "../Assets/sound_effects/walking_sound.mp3";

const walkingAudio = new Audio(walkingSound);
export default function walkingEffect() {
  walkingAudio.play();
}
