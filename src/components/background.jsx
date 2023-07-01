import "./Background.css";

function Waves() {
  return (
    <div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(25,101,223,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(25,101,223,0.5)"
          />

          <use
            className="wave-crest"
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(25,101,223,0.5)"
          />

          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(25,101,223,0.3)"
          />

          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill="rgba(25,101,223,1)"
          />
          <use
            className="front-wave"
            xlinkHref="#gentle-wave"
            x="48"
            y="16"
            fill="rgba(25,101,223,1)"
          />
          <use
            className="front-wave"
            xlinkHref="#gentle-wave"
            x="100"
            y="16"
            fill="rgba(25,101,223,1)"
          />
        </g>
      </svg>
    </div>
  );
}

function ThousandSunny() {
  return (
    <div className="thousand-sunny-container">
      <div className="thousand-sunny__anim-x">
        <div className="thousand-sunny__anim-y">
          <img
            className="thousand-sunny-img"
            src="./One-Piece-Photos/Thousand_Sunny_Digitally_Colored_Manga_trimmed.png"
          />
        </div>
      </div>
    </div>
  );
}

export { Waves, ThousandSunny };
