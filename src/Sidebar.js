import React from 'react'

const Sidebar = () => {

    const Sidebar = {
        width: '80px',
        backgroundColor: 'rgba(32, 32, 35, 1)',
        height: '100%',
        borderRight: '1px solid rgba(189, 189, 192, 0.1)',
        transition: 'width 0.3s'
    }

    return(
        <aside className='Sidebar' style={Sidebar}>
            Sidebar
        </aside>
    );
}

export default Sidebar