// import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';


// TODO: Описать логику импорта плагина
const DashboardApp = () => {
    const ref = useRef(null);
    useEffect(() => {
        // mount(ref.current);
    }, []);
    
    return <div ref={ref}/>;

};

export default DashboardApp;