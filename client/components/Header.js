import React from 'react';


export default ({cart}) => (
     <div className="header">
                <div className="header_content">
                    <img src="http://image.buscape.com/material/buscape.png" className="logo" />
                    <div>
                        {cart &&
                                  <div className="notification_wrapper">
                                            <div className="notification" >{cart.length}</div>
                                        </div>
                        }
                       
                        <img src="images/menu.png" className="menu" />
                    </div>
                    
                </div>
            </div>
) 



