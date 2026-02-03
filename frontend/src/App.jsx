import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskList from './components/TaskList';
import './index.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="app-wrapper">
                <TaskList />
            </div>
        </QueryClientProvider>
    );
}

export default App;
