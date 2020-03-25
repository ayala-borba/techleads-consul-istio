package br.com.zup.techleads

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TechLeadsController {

    @GetMapping("/")
    fun helloWorld(): String {
        return "Returning hello world from version 1"
    }

}