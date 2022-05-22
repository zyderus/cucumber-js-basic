Feature: Greeting

  Scenario: Say hello
    When a greeter says hello
    Then I should hear 'hello'