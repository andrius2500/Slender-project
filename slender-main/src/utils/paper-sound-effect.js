import paperSound from "../Assets/sound_effects/paper-effect.mp3";

const paperEffect = new Audio(paperSound);
export const pickingPaperEffect = () => {
  paperEffect.play();
};
