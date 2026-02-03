import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
    const { data: tasks, isLoading, isError } = useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
    });

    if (isLoading) return <div className="loading">Loading tasks...</div>;
    if (isError) return <div className="error">Error loading tasks.</div>;

    return (
        <div className="task-container">
            <h1 className="app-title">My Tasks</h1>
            <TaskForm />
            <div className="task-list">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
                {tasks.length === 0 && <p className="empty-state">No tasks yet. Add one above!</p>}
            </div>
        </div>
    );
};

export default TaskList;
