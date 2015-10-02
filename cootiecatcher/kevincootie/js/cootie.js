// This is a test run, so I've only set the Cootie Catcher down a single decision tree.
// Answer the prompts "Sun", "2", and "1", respectively, for an article of inane, astrological advice!
// Several questions and anecdotes for class:
// - I realize that the algorithim for a cootie catcher is a simple alternation between two sets of numbers.
// - So by grouping the even and odd numbers together in their own sets, I've accidentally provided my players with the illusion of choice.
// - How do I measure answers by a metric other than the exact answer? (e.g. if the answer is even, for example).

var Signs=["Sun","Moon","Stars","Sky"];
var evenNumbers=["2","4"];
var oddNumbers=["1","3"];
var unknownSign=["I'm not familiar with that sign, pal!"];
var FRUIT=["The proper way to live is naked, in the sun, eating nothing but coconuts."];


var signChoice=prompt("Choose a sign!", "Sun, Moon, Stars, or Sky");
   if( signChoice === "Sun")
    {
    	var evenNumberChoice=prompt("Choose an even number!", "2 or 4");
    		if(evenNumberChoice === "2")
    			{
    				var oddNumberChoice=prompt("Choose an odd number!", "1 or 3");
    					if(oddNumberChoice === "1")
    					{
    						alert(FRUIT)
    					}
    			}
    }
    else
    {
    	alert(unknownSign)
    }
