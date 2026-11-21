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

function nextIdFor(tasks) {
  const maxId = tasks.reduce((max, task) => {
    if (Number.isSafeInteger(task?.id) && task.id > max) return task.id;
    return max;
  }, 0);
  return maxId + 1;
}

function serialize(tasks) {
  return JSON.stringify(tasks);
}

function deserialize(raw) {
  if (typeof raw !== 'string') return [];
  try {
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data
      .filter(
        (task) =>
          task &&
          Number.isSafeInteger(task.id) &&
          task.id > 0 &&
          typeof task.text === 'string' &&
          task.text.trim().length > 0 &&
          typeof task.done === 'boolean'
      )
      .map(({ id, text, done }) => ({ id, text, done }));
  } catch (e) {
    return [];
  }
}

const todoApi = { normalizeTask, addTask, toggleTask, removeTask, nextIdFor, serialize, deserialize };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = todoApi;
} else {
  window.Todo = todoApi;
}
