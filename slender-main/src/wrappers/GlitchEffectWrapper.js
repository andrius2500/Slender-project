import GlitchClip from "react-glitch-effect/core/GlitchClip";

const Glitch = (props) => {
  return (
    <GlitchClip>
      <div className="grain"></div>
      {props.children}
    </GlitchClip>
  );
};

export default Glitch;
