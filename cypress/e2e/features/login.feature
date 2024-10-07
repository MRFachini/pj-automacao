Feature: Login

Funcionalidade para realizar variados logins no sistema PHPTravels

Scenario Outline: "<cenario>"
Given  access home page application
When  insert the email "<email>" and my password "<password>"
And click in enter button 
Then  have my access "<message>"

Examples:

| cenario           | email                 | password | message                    |
| SuccessfulAccess | user@phptravels.com   | demouser | You had successful access  |