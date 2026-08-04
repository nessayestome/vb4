const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');
const LEGACY_DATA = path.join(__dirname, 'data.js');

// Parse JSON bodies (limit raised for base64 cover images)
app.use(express.json({ limit: '50mb' }));

// ============================================================
// Data helpers
// ============================================================

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { books: [], media: [], notes: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// Extract data from legacy data.js format
function migrateFromLegacy() {
  try {
    const raw = fs.readFileSync(LEGACY_DATA, 'utf-8');
    const booksMatch = raw.match(/const\s+BOOKS\s*=\s*(\[[\s\S]*?\]);/);
    const mediaMatch = raw.match(/const\s+MEDIA\s*=\s*(\[[\s\S]*?\]);/);
    const notesMatch = raw.match(/const\s+NOTES\s*=\s*(\[[\s\S]*?\]);/);
    const books = booksMatch ? JSON.parse(booksMatch[1]) : [];
    const media = mediaMatch ? JSON.parse(mediaMatch[1]) : [];
    const notes = notesMatch ? JSON.parse(notesMatch[1]) : [];
    return { books, media, notes };
  } catch {
    return { books: [], media: [], notes: [] };
  }
}

// Init data.json
function initData() {
  if (!fs.existsSync(DATA_FILE)) {
    let data;
    if (fs.existsSync(LEGACY_DATA)) {
      data = migrateFromLegacy();
      console.log('Migrated data from data.js');
    } else {
      data = { books: [], media: [], notes: [] };
    }
    writeData(data);
  }
}

// ============================================================
// Static files
// ============================================================

app.use(express.static(path.join(__dirname, 'docs')));

// ============================================================
// API — get all data
// ============================================================

app.get('/api/data', (_req, res) => {
  res.json(readData());
});

// ============================================================
// API — books
// ============================================================

app.post('/api/books', (req, res) => {
  const data = readData();
  const book = req.body;
  book.id = book.id || ('b' + Date.now());
  book.type = 'book';
  book.dateAdded = book.dateAdded || new Date().toISOString().split('T')[0];
  data.books.unshift(book);
  writeData(data);
  res.json({ ok: true, id: book.id });
});

app.put('/api/books/:id', (req, res) => {
  const data = readData();
  const idx = data.books.findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  data.books[idx] = { ...data.books[idx], ...req.body, id: req.params.id, type: 'book' };
  writeData(data);
  res.json({ ok: true });
});

app.delete('/api/books/:id', (req, res) => {
  const data = readData();
  const idx = data.books.findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  data.books.splice(idx, 1);
  writeData(data);
  res.json({ ok: true });
});

// ============================================================
// API — media
// ============================================================

app.post('/api/media', (req, res) => {
  const data = readData();
  const item = req.body;
  item.id = item.id || ('m' + Date.now());
  item.dateAdded = item.dateAdded || new Date().toISOString().split('T')[0];
  data.media.unshift(item);
  writeData(data);
  res.json({ ok: true, id: item.id });
});

app.put('/api/media/:id', (req, res) => {
  const data = readData();
  const idx = data.media.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  data.media[idx] = { ...data.media[idx], ...req.body, id: req.params.id };
  writeData(data);
  res.json({ ok: true });
});

app.delete('/api/media/:id', (req, res) => {
  const data = readData();
  const idx = data.media.findIndex(m => m.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  data.media.splice(idx, 1);
  writeData(data);
  res.json({ ok: true });
});

// ============================================================
// API — notes
// ============================================================

app.post('/api/notes', (req, res) => {
  const data = readData();
  const note = req.body;
  note.id = note.id || ('n' + Date.now());
  note.color = note.color !== undefined ? note.color : Math.floor(Math.random() * 6);
  note.rotation = note.rotation !== undefined ? note.rotation : (Math.random() * 6 - 3);
  data.notes.unshift(note);
  writeData(data);
  res.json({ ok: true, id: note.id });
});

app.put('/api/notes/:id', (req, res) => {
  const data = readData();
  const idx = data.notes.findIndex(n => n.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  data.notes[idx] = { ...data.notes[idx], ...req.body, id: req.params.id };
  writeData(data);
  res.json({ ok: true });
});

app.delete('/api/notes/:id', (req, res) => {
  const data = readData();
  const idx = data.notes.findIndex(n => n.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  data.notes.splice(idx, 1);
  writeData(data);
  res.json({ ok: true });
});

// ============================================================
// API — full state sync (matches old localStorage pattern)
// ============================================================

app.post('/api/data', (req, res) => {
  const { books, media, notes } = req.body;
  writeData({
    books: Array.isArray(books) ? books : [],
    media: Array.isArray(media) ? media : [],
    notes: Array.isArray(notes) ? notes : [],
  });
  res.json({ ok: true });
});

// ============================================================
// API — export (download data.json)
// ============================================================

app.get('/api/export', (_req, res) => {
  res.download(DATA_FILE, 'data.json');
});

// ============================================================
// Start
// ============================================================

initData();
app.listen(PORT, () => {
  console.log(`VB4 server running at http://localhost:${PORT}`);
});
