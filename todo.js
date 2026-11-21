'use strict';

function normalizeTask(text) {
  if (typeof text !== 'string') return null;
  const trimmed = text.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function addTask(tasks, text, id) {
  const clean = normalizeTask(text);
  if (clean === null) return tasks;
  return [...tasks, { id, text: clean, done: false }];
}

function toggleTask(tasks, id) {
  return tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task));
}

function removeTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

const todoApi = { normalizeTask, addTask, toggleTask, removeTask };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = todoApi;
} else {
  window.Todo = todoApi;
}
