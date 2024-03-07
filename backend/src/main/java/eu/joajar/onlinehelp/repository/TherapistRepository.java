package eu.joajar.onlinehelp.repository;

import eu.joajar.onlinehelp.domain.Therapist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TherapistRepository extends JpaRepository<Therapist, Integer> {
}
