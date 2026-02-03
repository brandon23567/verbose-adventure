import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTask, deleteTask } from '../api';

const TaskItem = ({ task }) => {
    const queryClient = useQueryClient();

    const updateMutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    const toggleComplete = () => {
        updateMutation.mutate({ id: task.id, is_completed: !task.is_completed });
    };

    return (
        <div className={`task-item ${task.is_completed ? 'completed' : ''}`}>
            <div className="task-content">
                <h3 className="task-title">{task.title}</h3>
                {task.description && <p className="task-desc">{task.description}</p>}
            </div>
            <div className="task-actions">
                <button onClick={toggleComplete} className="action-btn check-btn">
                    {task.is_completed ? 'Undo' : 'Complete'}
                </button>
                <button
                    onClick={() => deleteMutation.mutate(task.id)}
                    className="action-btn delete-btn"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
