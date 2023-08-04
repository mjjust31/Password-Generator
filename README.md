# Password Generator Starter Code



User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


Pseudo-Code

1. Ask the user for to enter a number between 8 and 128 characters (will be using length property)
2. Stop the user from continuing if they do not enter the number. 
3. As if they will include lowercase, uuppercase, numberic and/or special characters. (make an array of each type of these options).
    a. An array of lowercase
    b. An array of uppercase
    c. An array of numberic. 
    d. An array of special characters. 
    e. A variable array with user picks .
4. Stop the user from continuing if they do not select at least one type of character sets.
5. Once the user chooses want they want to include: combine the user's selections by combining them into the user picked set. 
6. The user picked character set will need to then include the user's length of password
7. The user picked character set will need to be random. (use a method to randomize the userpicked character set within an array)
    a. This random should be looped.
8. The password that should then be returned and generated on the page.

1. The while Loop https://www.w3schools.com/js/js_loop_while.asp
