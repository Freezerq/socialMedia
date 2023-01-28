import React from 'react';
import preloader from "../../../images/8.gif";

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{height: '500px', width: '500px'}} alt='Идёт загрузка'/>
        </div>
    );
};

export default Preloader;