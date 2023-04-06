BEGIN;

DROP TABLE IF EXISTS note, tags cascade;
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE note (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    body text NOT NULL,
    tag_id INTEGER REFERENCES tags(id)
);

INSERT INTO tags (name) VALUES
    ('Work'),
    ('sport'),
    ('health');

INSERT INTO  note (title, body, tag_id) VALUES 
    ('note1', 'This is the note content for note1', 1),
    ('note2', 'This is the note content for note1', 2),
    ('note3', 'This is the note content for note1', 3);

 
COMMIT;