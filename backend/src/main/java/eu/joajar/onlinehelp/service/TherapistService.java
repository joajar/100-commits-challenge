package eu.joajar.onlinehelp.service;

import eu.joajar.onlinehelp.domain.Therapist;
import eu.joajar.onlinehelp.repository.TherapistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TherapistService {

    private final TherapistRepository therapistRepository;

    public List<Therapist> getTherapists() {
        return therapistRepository.findAll();
    }
}
