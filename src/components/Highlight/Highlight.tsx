import React from "react";

const Highlight = ({children, color='#fffe7e'}) => (
    <span style={{
                    backgroundColor: color,
                    borderRadius: '2px',
                }}>
        {children}
    </span>
);

export default Highlight;