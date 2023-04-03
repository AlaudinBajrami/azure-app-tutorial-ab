package de.nordlb.backend.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class RestEndpointsController {

    /**
     * Check whether the backend is alive.
     *
     * @return id of session. This should be maintained between requests from the same origin.
     */
    @GetMapping("/is-alive")
    public String livelinessProbe(HttpSession session) {
        return session.getId();
    }
}
