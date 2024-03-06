--liquibase formatted sql
--changeset joajar:2

CREATE TABLE IF NOT EXISTS time_slots (
    id SERIAL PRIMARY KEY,
    beginning DATE NOT NULL,
    therapist_id INTEGER NOT NULL,
    CONSTRAINT fk_time_slots_therapists
        FOREIGN KEY (therapist_id)
        REFERENCES therapists (id)
);

CREATE TABLE IF NOT EXISTS reserved_slots (
    id SERIAL PRIMARY KEY,
    time_slot_id INTEGER NOT NULL,
    CONSTRAINT fk_reserved_slots_time_slots
        FOREIGN KEY (time_slot_id)
        REFERENCES time_slots (id)
);

CREATE TABLE IF NOT EXISTS paid_slots (
    id SERIAL PRIMARY KEY,
    reserved_slot_id INTEGER NOT NULL,
    CONSTRAINT fk_paid_slots_reserved_slots
        FOREIGN KEY (reserved_slot_id)
        REFERENCES reserved_slots (id)
);