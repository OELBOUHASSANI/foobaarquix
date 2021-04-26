package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {
    val replaceMap = mapOf(3 to "Foo")

 
    fun convertNumber(inputNumber: Int): String {
        if(inputNumber == 1) return "1"
        return checkContain(inputNumber.toString()) + checkDivise(inputNumber);
       
    }
    
    fun checkContain(numberAsString: String) : String {
        if(numberAsString.contains("3")) return replaceMap.getValue(3);
        return "";

    }

    fun checkDivise(inputNumber: Int) : String{
        if(inputNumber%3 == 0) return replaceMap.getValue(3); 
        return "";
    }
}