package eu.joajar.onlinehelp.controller;

import eu.joajar.onlinehelp.domain.Therapist;
import eu.joajar.onlinehelp.service.TherapistService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class TherapistController {

    private final TherapistService therapistService;

    @GetMapping("/therapists")
    public List<Therapist> getTherapists() {
        return therapistService.getTherapists();
    }
}
