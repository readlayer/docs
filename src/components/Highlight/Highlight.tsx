import React from "react";

const Highlight = ({children, color='#ff94dc'}) => (
    <span style={{
                    backgroundColor: color,
                    borderRadius: '2px',
                }}>
        {children}
    </span>
);

export default Highlight;