import React from "react";

/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */
interface WaveBorderProps {
    lowerColor: string,
    upperColor: string,
    classes?: object,
    animationNegativeDelay: number,
    className?: string
};

const WaveBorder: React.FC<WaveBorderProps> = (props) => {
    const id = String(Math.random());
    const {
        className,
        lowerColor,
        upperColor,
        classes,
        animationNegativeDelay,
        ...rest
    } = props;
    return (
        <div className={className} style={{ background: upperColor }} {...rest}>
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id={id}
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use className="useClass" href={`#${id}`} x="4" y="0" fill={lowerColor} />
                </g>
            </svg>
            <style jsx>{`
              .waves {
      width: "100%";
      margin-bottom: -7;
      height: "7vw";
      min-height: "7vw";
  }

  @keyframes moveForever {
       from {
                    transform: translate3d(-90px, 0, 0)
      }
      to {
                    transform: translate3d(85px, 0, 0)
      }
  }

  .useClass {
      animation: moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite;
      animationDelay: ${props.animationNegativeDelay};
  }
  `
            }
            </style>
        </div>
    );
}


export default WaveBorder;
