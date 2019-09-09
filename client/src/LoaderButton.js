import React from "react";
import { useSpring, animated } from "react-spring";
// import Loader from "./Loader";
import './loaderButton.css'

const LoaderButton = ({ isLoading, percent, children, ...props }) =>{
  console.log('precent', percent)
  /* showLoader is used to stay in the "isLoading state" a bit longer to avoid loading flashes
   if the loading state is too short. */
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    }

    // Show loader a bits longer to avoid loading flash
    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, showLoader]);

  // Hooks used to fade in/out the loader or the button contents
  const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 });
  const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1 });

  return (
    <button
      {...props}
      className="loader-button"
    >
      {showLoader ? (
        <animated.div style={fadeOutProps}>
          <Loader />
        </animated.div>
      ) : (
        <animated.div style={fadeInProps}>{children}</animated.div>
      )}
      <div className="loader-progress" style={{width: `${percent}%`}}></div>
    </button>
  );
}

export default LoaderButton

const Loader = () => <div className="loading-spinner" />