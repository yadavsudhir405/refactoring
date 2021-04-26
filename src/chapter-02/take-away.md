### Bad Code Smells:

 1) #### Mysterious Name:
    * Never hesitate to rename variable, function and class name if you feel name
    is not intuitive enough.
    
    * When you can't think of good name for something, it's often sign of a deeper design malaise.
    Puzzling over a tricky name has often led us to significant simplification of code.
      
2) #### Duplicated Code:
    * If you see same code structure in different place then try to extract code snippet
    to a common function and call that function.
      
    * Extract function and pull up method techniques should be used to remove code duplication.
    
3) #### Long Function:
    * Long functions are always difficult to understand and hard to manage.So, always try
    to refactor long function.
      
    * `Extract Function` could be used to reduce function size but it may result extracted function with long parameter list. 
      However, long parameter list can be slimmed by `Introduce Parameter Object`. So if function body
      contains temp variables, try to replace temp variable with `Replace Temp with Query` first.
      
    * If you still have too many arguments and temp variables try to use `Replace function with command`.
     
    * A block of code with a comment that tells you what it is doing can be replaced by a method whose name is based on the comment. 
      Even a single line is worth extracting if it needs explanation.
      
    * Conditionals and loops also give signs for extractions. Use `Decompose Conditional`  to deal with conditional expressions
    
    * A big switch statement should have its legs turned into single function calls with `Extract Function`.
    
    * With loops, extract the loop and the code within the loop into its own method. If you find it hard to give an extracted loop a name, that may be because 
      it’s doing two different things—in which case don’t be afraid to use `Split Loop` to break out the separate tasks.
      
    4) ### Long Parameter List
      
      
    
      
      
