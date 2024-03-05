--liquibase formatted sql
--changeset joajar:1

CREATE TABLE IF NOT EXISTS therapists (
	id SERIAL PRIMARY KEY,
	name VARCHAR(31) NOT NULL,
	surname VARCHAR(63) NOT NULL
);

CREATE TABLE IF NOT EXISTS patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(31) NOT NULL,
    surname VARCHAR(63) NOT NULL,
    therapist_id INTEGER,
    CONSTRAINT fk_patients_therapists
        FOREIGN KEY (therapist_id)
        REFERENCES therapists (id)
);