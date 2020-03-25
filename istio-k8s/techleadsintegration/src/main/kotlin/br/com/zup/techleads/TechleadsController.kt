package br.com.zup.techleads

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RestController
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

@RestController
class TechleadsController {

    @GetMapping("/")
    fun integrationHelloWorld(@RequestHeader(value = "x-debug", required = false) debugHeader: String?): String {
        val client = HttpClient.newHttpClient()
        val request = HttpRequest.newBuilder()
            .uri(URI.create("http://techleadsapi:8080"))
            .header("x-debug", debugHeader ?: "")
            .build()
        return client.send(request, HttpResponse.BodyHandlers.ofString()).body().toString()
    }

}