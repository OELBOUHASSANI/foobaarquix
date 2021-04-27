import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestFactory;
import org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DynamicTest;
import com.kata.foobarquix.services.FooBarQuixService


class FooBarQuixApplicationTests {

    private val service = FooBarQuixService()

    @TestFactory
    fun tetConvert() = listOf(
            1 to "1",
            3 to "FooFoo",
            5 to "BarBar",
            7 to "Quix",
            9 to "Foo",
            51 to "FooBar",
            53 to "BarFoo",
            33 to "FooFooFoo",
            27 to "FooQuix",
            15 to "FooBarBar",
            11 to "11",
            16 to "16")
            .map { (input, expected) ->
                DynamicTest.dynamicTest("when I convert $input then I get $expected") {
                    assertEquals(expected, service.convertNumber(input))
                }
            }
}
