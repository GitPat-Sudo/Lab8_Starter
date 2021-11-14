# Lab 8 - Starter
1) I would fit my automated tests within a github action that runs whenever code is pushed. I think this is 
   better than 3) because testing everything at the end will be very messy and it hard to fix errors because
   the components might be dependent on one another. I don't think you should run all the automated tests 
   manually on your local computer because they are automated. Also, people might forget to run the tests 
   before they push so you should run within a github action. 
2) No, End to End testing is the last test before deployment. The functions are already tested before having 
   user testing, which is end to end testing. Function are like the controls in a video game, they should already
   work before having play testers play the game looking for glitches. 

3) No, I would not use a unit test to test the message feature of a messaging application. That's basically the whole
   app, is the messaging feature. There are too many moving parts to test, read, send, recieve, etc.. Unit tests aren't
   built to hand big features like that. 

4). Yes, I would write a unit test to test the max message length of a message because that is on a small scale. It is 
    easy to test and will execute quickly whether it can detect if a message if over length 80. Very encapsulated. 

    