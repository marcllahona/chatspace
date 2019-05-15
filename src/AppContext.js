import React, { useState } from 'react';

const AppContext = React.createContext({});

const AppProvider = (props) => {
    let API_URL = process.env.REACT_APP_API_URL;
    if (navigator.userAgent === 'ReactSnap') {
        API_URL = process.env.REACT_APP_API_URL_PRERENDER;
    }

    const [state, setState] = useState({url: API_URL});
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
