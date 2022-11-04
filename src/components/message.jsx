import React from 'react';
import {logDOM} from "@testing-library/react";

export const Message = ({text, header, children}) => {
    let renderChild = false;
    let childrenWithWrapperDiv = null;
    if (children) {
        renderChild = true;
        childrenWithWrapperDiv = React.Children.map(children, child => {
            return (<div className="message-body">{child}</div>);
        });

    }


    return <>
        <div className="text-center">
            {header && <h3 className="message-header">{header || ''}</h3>}
            {(text !== undefined)
                ? <div className="message-body">{text || ''}</div>
                : childrenWithWrapperDiv
            }
        </div>
    </>
}
