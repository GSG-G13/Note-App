BEGIN;

DROP TABLE IF EXISTS note cascade;

CREATE TABLE note (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    body text NOT NULL
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE note_tags (
    id SERIAL PRIMARY KEY,
    note_id INTEGER REFERENCES note(id),
    tag_id INTEGER REFERENCES tags(id)
);


INSERT INTO  note (title, body) VALUES 
    ('title', 'this is the body for the note'),
    ('title1', 'this is the body for the note1');

INSERT INTO tags (name) VALUES
    ('Work'),
    ('sport'),
    ('health');
 
COMMIT;