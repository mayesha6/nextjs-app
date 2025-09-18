import Sidebar from '@/components/Sidebar';
import React from 'react';

const DashboardLayout = ({children}: {children:React.ReactNode}) => {
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='w-full'>{children}</div>
        </div>
    );
};

export default DashboardLayout;