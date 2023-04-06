package de.nordlb.backendkotlin

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

class MessageRessource {
    @RestController
    class MessageResource {
        @GetMapping("/api/is-alive")
        fun index(): String = "yes, Im alive"
    }

}