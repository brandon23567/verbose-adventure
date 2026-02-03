import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../api';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setTitle('');
            setDescription('');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        mutation.mutate({ title, description, is_completed: false });
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-field"
                required
            />
            <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input-field"
            />
            <button type="submit" disabled={mutation.isPending} className="submit-btn">
                {mutation.isPending ? 'Adding...' : 'Add Task'}
            </button>
        </form>
    );
};

export default TaskForm;
