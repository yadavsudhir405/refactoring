1) When you have to add a feature to a program but the code is not structured in a convenient way,
first refactor the program to make it easy to add the feature, then add the feature.

2) Before you start refactoring, make sure you have a solid suite of tests. These tests must be self-checking.

3) Refactoring changes the programs in small steps, so if you make a mistake, it is easy to find where the bug is.

4) After extracting to function, look for any quick and easy things that can be done to exracted function.
For example: rename some variables that makes them clear. For example variale that is getting returned
from function can be named as result so that I always know its role.
   
5) When programming, follow the camping rule: Always leave the code base healthier than when you found it.

6) The true test of good code is how easy it is to change it.
   
**Used refactoring techniques:**

1) Extract Function
2) Inline Variable
3) Move function
4) Replace conditional with polymorphism

