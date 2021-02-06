const m = new Map();

// Create
m.set('a', 'aa');
m.set('b','bb');
// m.get('a');

// Delete
m.delete('b');
m.clear(); // delete all

// Update
m.set('a', 'aa');
m.set('a', 'aaaa');

// Read
const res = m.get('a');
