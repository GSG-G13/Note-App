BEGIN;

DROP TABLE IF EXISTS note, tags cascade;

CREATE TABLE note (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    body text NOT NULL
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    note_id INTEGER REFERENCES note(id)
);



INSERT INTO  note (title, body) VALUES 
    ('title', 'this is the body for the note'),
    ('title1', 'this is the body for the note1'),
    ('title3', 'this is the body for the note3');

INSERT INTO tags (name, note_id) VALUES
    ('Work', 1),
    ('sport',2),
    ('health',3);
 
COMMIT;