# Basic Testing

## In 30 Seconds

A test is a small, repeatable check of an expected program behavior. In Python's standard `unittest` framework, a test case usually places an assertion in a method on a `unittest.TestCase` subclass. Give the code controlled inputs, state the expected result, and let the assertion report whether actual and expected agree. Useful basic tests are specific and deterministic: the same controlled setup should lead to the same expected outcome.

## Why This Matters

Tests make a program's expected behavior visible and checkable. In a course, they turn a vague claim such as “my function works” into cases another person can run. In practice, a small test can catch a changed result close to the code that produced it. Tests also improve design: a focused function with a clear input and expected output is easier to check than a large script whose behavior depends on many hidden conditions.

## Learning Objectives

- Define a test case, assertion, expected result, and actual result.
- Explain how `unittest.TestCase` and an assertion express a basic Python test.
- Apply arrange-act-assert to a deterministic function.
- Distinguish a deterministic test from one that depends on uncontrolled state.
- Evaluate whether a test checks one stated behavior.

## The College Version

### A test makes one expectation executable

Software testing compares observed program behavior with an expectation. A basic test is not proof that every possible use of a program is correct; it is evidence about one stated case. For `add`, a precise expectation is that inputs `2` and `3` produce `5`. The test runs the code, obtains the actual result, and uses an assertion to compare it with the expected result. If they differ, the test fails and identifies a violated expectation. If they agree, that particular check passes.

Python includes the `unittest` unit-testing framework in its standard library. A common form is a class that inherits from `unittest.TestCase`, with test methods whose names begin with `test`. Assertion helpers express different expectations: `assertEqual(actual, expected)` checks equality; `assertTrue(condition)` checks a condition; and `assertRaises` checks an expected exception. Choose an assertion that states behavior clearly. This lesson uses value comparisons; exception design and debugging workflow are separate topics.

A test case is the individual unit of testing. A suite is a collection of cases, so they are not interchangeable. `TestCase` is also the Python class supplying assertion methods to a user-defined test class. Context makes the overlapping vocabulary clear: a test class inherits from `unittest.TestCase`, and each test method states one case.

### Arrange, act, assert keeps the check legible

Arrange, act, assert is a compact way to organize a test. Arrange establishes only data or objects needed for the case. Act performs the operation being checked. Assert compares the observed result with the expectation. These are roles, not Python keywords. In a very small test, separate variables are optional, but the logical order should remain visible.

To test `add(2, 3)`, arrange known integers, act by calling `add`, and assert that the result is `5`. A test that silently performs several unrelated actions has a weak signal: a failing result does not reveal which behavior was intended. Prefer a focused name such as `test_adds_two_positive_integers`; it states one case rather than claiming addition works universally. A second test can name another behavior, such as adding zero.

A fixture is preparation for one or more tests. For small arithmetic, local values are enough. When multiple tests need shared setup, `unittest` provides `setUp`, which runs before each test method. Setup should make a test clearer, not conceal what it needs. The practical rule is to establish the minimum controlled state needed to understand the expected outcome.

### Determinism and the limit of a pass

A deterministic test produces the same result with the same controlled conditions. Testing `add(2, 3)` is deterministic because it does not depend on a clock, network service, pre-existing file, or unseeded random value. That stability matters: a failure should point to changed behavior instead of an accidental environmental difference. Later test design can replace time, random values, databases, or web services with controlled inputs; a test that passes only sometimes is not trustworthy evidence.

A passing test means only that the program matched that test's expectation for that case. It does not cover every input, boundary, error, or interaction. The expectation can be wrong too, so tests deserve review. Add cases because they distinguish meaningful behavior, not merely to raise a number. Keep testing separate from debugging: a failure reports a mismatch, while debugging investigates why. Keep this standard-library `unittest` lesson separate from a deep pytest discussion as well.

## Key Vocabulary

- **test case:** An individual check of specified behavior under stated conditions.
- **assertion:** A statement checking whether an observed value or condition matches an expectation.
- **expected result:** The outcome a test says should occur.
- **actual result:** The outcome produced when code runs.
- **TestCase:** The `unittest` class providing assertion methods for test classes.
- **fixture:** Preparation needed to run one or more tests.
- **deterministic:** Producing the same outcome for the same controlled conditions.

## Eli-10

A test is like checking one answer on a worksheet with an answer key. Pick a small question with a known answer, let the program answer it, and compare the program's answer with the key. A pass means they matched for that question; it does not mean every possible question was answered correctly. Keeping the question controlled makes the check fair and repeatable.

## Eli's Analogy

Arrange-act-assert is like setting up a balance scale: place known items on the scale, let it settle, then check whether it shows the expected balance.

The analogy is limited: program tests can inspect values, conditions, and expected errors, not only a physical balance.

## Worked Example

```python
import unittest

def add(left, right):
    return left + right

class AddTests(unittest.TestCase):
    def test_adds_positive_integers(self):
        actual = add(2, 3)
        self.assertEqual(actual, 5)

    def test_zero_is_an_identity(self):
        self.assertEqual(add(0, 7), 7)

if __name__ == "__main__":
    unittest.main()
```

The first method arranges known inputs, acts by calling `add`, and asserts expected result `5`. The second checks another stated behavior. Both are deterministic. If `add` changed to subtract, the first assertion would fail. Passing both supports only these two cases.

## Common Mistakes

- **Treating one pass as proof of all correctness.** State the precise case and add distinct cases for other behaviors.
- **Depending on uncontrolled time, network, or random state.** Control those dependencies or use fixed inputs.
- **Combining unrelated behavior in one test.** Give each focused behavior its own test.
- **Using `assertTrue` for every comparison.** Prefer a specific assertion such as `assertEqual` when it shows expected and actual values.

## Compare / Contrast

- **Test case vs. test suite:** a case is one check; a suite is a collection of checks.
- **Passing test vs. proof:** a pass supports its stated case, not untested behavior.
- **Deterministic vs. environment-dependent:** deterministic checks have stable outcomes with controlled conditions.

## Key Takeaway

Write a basic test as a specific, controlled expectation: arrange needed state, act on the code, and assert the expected result. A pass is evidence for that case, and determinism makes it repeatable.

## Practice Question Bank

1. In Python's `unittest` framework, what is a test case? **Answer: an individual check of a specified behavior.**
2. Which assertion best states that `add(2, 3)` should produce `5`? **Answer: `self.assertEqual(add(2, 3), 5)`.**
3. Which sequence best describes arrange-act-assert? **Answer: choose known inputs, call `add`, compare its result with `5`.**
4. Why is `add(2, 3)` generally deterministic? **Answer: it does not depend on uncontrolled time, network, or random state.**
5. What does one passing test justify? **Answer: the tested case matched its stated expectation.**

## Sources

- Python Software Foundation, [unittest — Unit testing framework](https://docs.python.org/3/library/unittest.html)
- Python Software Foundation, [unittest basic example](https://docs.python.org/3/library/unittest.html#basic-example)

## Related Topics

- Functions
- Return Values
- Debugging
- Exceptions
- Object-Oriented Programming

## Editorial Metadata

Original EliExplains synthesis. Sources were used as reference-only documentation; no source prose was adapted. Reviewed 2026-08-19. Status: READY_TO_PUBLISH, not public.
