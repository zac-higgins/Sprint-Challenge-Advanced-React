//There's no reason light mode needs to be the default 😉
//we're going to have an option to change from dark to light, rather than the other way around. #darklyfe
import { useState } from 'react';

const useLigthMode = () => {
    const [lightMode, setLightMode] = useState('');

    if (lightMode) {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }

    return [lightMode, setLightMode];
};

export default useLigthMode;