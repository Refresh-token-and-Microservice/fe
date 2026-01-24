import type { ReactNode } from 'react';

const CenterLayout = ({ children }: { children: ReactNode }) => {
    return <div className="w-full min-h-screen flex items-center justify-center bg-neutral-40">{children}</div>;
};

export default CenterLayout;
