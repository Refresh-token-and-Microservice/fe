import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { UserProvider } from './contexts/UserProvider';
import { CalendarProvider } from './contexts/CalendarProvider';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <CalendarProvider>
                    <RouterProvider router={router} />
                </CalendarProvider>
            </UserProvider>
        </QueryClientProvider>
    </StrictMode>,
);
