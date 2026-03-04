## Reflection

1. How did you handle state updates when the text changed?
  
  I created a state variable that captured the text every time the text area received a new character. To do this I used the a dom event onchange to capture the changes in the text area. A somewhat tricky part I ran into was a word being miscounted after pressing space. I'd come to realize that a null value was being passed into my words array. To solve the issue I made sure to check if the length of the word was eqaul to zero to subtract from the word count.

2. What considerations did you make when calculating reading time?

3. How did you ensure the UI remained responsive during rapid text input?

4. What challenges did you face when implementing the statistics calculations?

