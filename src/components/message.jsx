import React from 'react';

export const Message = props => {
    let renderChild = false;
    if(prop.children){
        renderChild=true;
    }
    
    const renderMessage = ()=> (<>
         <h3 className="message-header">{props.text || ''}</h3>
        <div class="message-body">{props.message || ''}</div>
        </>)
    
    return  <>
        <div className="text-center">
    {(renderChild)
        ? {props.children}
        : renderMessage()
    }
            </div>
    </>
}
