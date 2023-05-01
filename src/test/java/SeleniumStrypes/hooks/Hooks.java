package SeleniumStrypes.hooks;

import org.junit.After;
import org.junit.Before;

public class Hooks {
    @Before
    public void setUp() {
        System.out.println("I am the set up method");

    }

    @After
    public void tearDown() {
        System.out.println("I am the end");
    }
}
