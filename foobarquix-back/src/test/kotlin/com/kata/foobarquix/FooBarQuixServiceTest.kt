
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestFactory;
import org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DynamicTest;
import com.kata.foobarquix.services.FooBarQuixService



class FooBarQuixApplicationTests {

    private val service = FooBarQuixService()

    @TestFactory
    fun tetConvert() = listOf(
        1 to "1")
        .map { (input, expected) ->
            DynamicTest.dynamicTest("when I convert $input then I get $expected") {
                assertEquals(expected, service.convertNumber(input))
            }
        }


}
