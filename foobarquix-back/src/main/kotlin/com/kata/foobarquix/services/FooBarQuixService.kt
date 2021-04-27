package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {
    val replaceMap = mapOf('3' to "Foo", '5' to "Bar", '7' to "Quix").withDefault { "" }


    fun convertNumber(inputNumber: Int): String {
        if (inputNumber == 1) return "1"
        val result = appendIfDivisible(inputNumber) + replaceOccurence(inputNumber.toString());
        return if (result != "") result else inputNumber.toString();
    }

    fun replaceOccurence(numberAsString: String): String {
        val result = StringBuilder()
        for (i in 0..numberAsString.length - 1) {
            result.append(replaceMap.getValue(numberAsString[i]));
        }
        return result.toString();

    }

    fun appendIfDivisible(inputNumber: Int): String {
        val result = StringBuilder()
        if (inputNumber % 3 == 0) result.append(replaceMap.getValue('3'));
        if (inputNumber % 5 == 0) result.append(replaceMap.getValue('5'));
        return result.toString();
    }
}