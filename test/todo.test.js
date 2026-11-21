const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  normalizeTask,
  addTask,
  toggleTask,
  removeTask,
  nextIdFor,
  serialize,
  deserialize,
} = require('../todo.js');

test('AC1: adds a non-empty task and trims it', () => {
  const result = addTask([], '  buy milk  ', 1);
  assert.deepEqual(result, [{ id: 1, text: 'buy milk', done: false }]);
});

test('AC1: keeps order when adding several tasks', () => {
  let tasks = addTask([], 'a', 1);
  tasks = addTask(tasks, 'b', 2);
  assert.deepEqual(tasks.map((task) => task.text), ['a', 'b']);
});

test('AC2: rejects an empty string', () => {
  const tasks = [];
  assert.equal(addTask(tasks, '', 1), tasks);
});

test('AC2: rejects a whitespace-only string', () => {
  const tasks = [];
  assert.equal(addTask(tasks, '   \t ', 1), tasks);
});

test('AC2: rejects non-string input', () => {
  assert.equal(normalizeTask(null), null);
  assert.equal(normalizeTask(undefined), null);
});

test('AC3: toggle marks a task done and then unmarks it', () => {
  let tasks = addTask([], 'a', 1);
  tasks = toggleTask(tasks, 1);
  assert.equal(tasks[0].done, true);
  tasks = toggleTask(tasks, 1);
  assert.equal(tasks[0].done, false);
});

test('AC3: toggle affects only the target task', () => {
  let tasks = addTask(addTask([], 'a', 1), 'b', 2);
  tasks = toggleTask(tasks, 2);
  assert.deepEqual(tasks.map((task) => task.done), [false, true]);
});

test('AC4: remove deletes only the target task', () => {
  const tasks = addTask(addTask([], 'a', 1), 'b', 2);
  assert.deepEqual(removeTask(tasks, 1).map((task) => task.text), ['b']);
});

test('AC4: removing an unknown id leaves the tasks unchanged', () => {
  const tasks = addTask([], 'a', 1);
  assert.equal(removeTask(tasks, 99).length, 1);
});

test('addTask does not mutate the input array', () => {
  const tasks = [];
  addTask(tasks, 'a', 1);
  assert.equal(tasks.length, 0);
});

test('AC5: XSS-like text remains a plain string in task data', () => {
  const payload = '<img src=x onerror=alert(1)>';
  assert.equal(addTask([], payload, 1)[0].text, payload);
});

test('AC5 static check: UI code avoids HTML-injecting APIs', () => {
  const source = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
  assert.doesNotMatch(source, /innerHTML|outerHTML|insertAdjacentHTML|document\.write/);
});

test('AC6: serialize/deserialize round-trips tasks', () => {
  const tasks = addTask(addTask([], 'a', 1), 'b', 2);
  assert.deepEqual(deserialize(serialize(tasks)), tasks);
});

test('AC6: deserialize returns [] for corrupt or null data', () => {
  assert.deepEqual(deserialize('{bad json'), []);
  assert.deepEqual(deserialize(null), []);
  assert.deepEqual(deserialize('{"a":1}'), []);
});

test('AC6: deserialize drops malformed items', () => {
  assert.equal(deserialize('[{"id":1,"text":"ok","done":false},{"id":"x"}]').length, 1);
});

test('R8: nextIdFor never reuses an existing id', () => {
  assert.equal(nextIdFor([]), 1);
  assert.equal(nextIdFor([{ id: 5, text: 'a', done: false }]), 6);
});
