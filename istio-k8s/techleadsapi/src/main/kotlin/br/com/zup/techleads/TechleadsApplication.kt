package br.com.zup.techleads

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TechleadsApplication

fun main(args: Array<String>) {
	runApplication<TechleadsApplication>(*args)
}
