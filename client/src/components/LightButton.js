import React from 'react';
import useLigthMode from '../hooks/useLightMode';

const LightButton = () => {
    const [lightMode, setLightMode] = useLigthMode();
    const toggleMode = e => {
      setLightMode(!lightMode);
    };

    return (
        <div className="lightModeToggle">
          <button onClick={toggleMode}>Toggle Light/Dark Mode</button>
        </div>
    )

}

export default LightButton;