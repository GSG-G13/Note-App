BEGIN;

DROP TABLE IF EXISTS note cascade;

CREATE TABLE note (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    body text NOT NULL
);

INSERT INTO  note (title, body) VALUES 
    ('title', 'this is the body for the note'),
    ('title1', 'this is the body for the note1');


COMMIT;