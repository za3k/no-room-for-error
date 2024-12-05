window.challenges = [
    {
        title: 'The Cubicle',
        intro: 'You grit your teeth, working up the nerve to step inside the cubicle in front of you. The rest of the office has been telling you to back off, that the new kid doesn\'t need to show everybody up. Their eyes dart fearfully toward his open cubicle door when you breeze through your tasks and ask for a <i>real</i> challenge.  <p> You step in, and the smell hits you--old coffee and something burnt. The desk is a mess: monitors stacked, cables everywhere, papers crumpled into chaotic piles. He’s sitting there, eyes fixed on the screen, typing without looking up. The leather jacket draped over his chair says it all—this guy’s been around, and he’s not here for small talk.  <p> Alright, new kid, listen up. I\'ve seen \'em all come and go—bright-eyed newbies like you, full of swagger, thinking they\'ve got it all figured out. But let me tell you something... real code doesn\'t come easy. You think you\'re the hotshot?  Well, I\'ve got something for you -- more like walking a tightrope than a stroll in the park. You think you\'re ready? Then prove it. Solve these challenges in <b>one try</b>--if you can\'t, don\'t bother coming back. I\'m not here to hold your hand. So get to it. Let\'s see if you can keep up with the pros."',
        task: 'Return the string "Hello, world!" <p> [Hint: the code already works.]',
        code: function f() {
    return "Hello, world!"
},

        test_cases: [
            [[], "Hello, world!"],
        ]
    },
    {
        title: 'Human Error',
        intro: 'He slides a crumpled printout across the desk toward you, the ink slightly smudged. “Fix it,” he says, barely looking up. "<b>One try.</b> Don’t waste my time."',
        task: 'Find and fix the error(s) in the given code. <p> Your score on each challenge is the number of times you click "RUN" before succeeding. Any score other than a perfect 1, your mentor will consider failure.<p>Note: only one function is allowed at the top level for all challenges<p>Additional note: \'use strict\' is not enabled for any challenge, so don\'t worry about that',
        code: function binary_search(arr, x) {
    // Returns the index of x in arr, or -1 if not found

    function helper(arr, x, start, end) { 
        // Base Condition
        if (start > end) return false;

        // Find the middle index
        let mid = Math.floor((start + end) / 2);

        // Compare mid with given key x
        if (arr[mid] === x) return true;

        // If element at mid is greater than x,
        // search in the left half of mid
        if (arr[mid] > x)
            return helper(arr, x, start, mid);
        else

            // If element at mid is smaller than x,
            // search in the right half of mid
            return helper(arr, x, mid, end);
    }
    return search(arr, x, 0, arr.length)
},
        test_cases: [
            [[[1, 2, 3], 1], 0],
            [[[1, 2, 3], 2], 1],
            [[[1, 2, 3], 3], 2],
            [[[1, 2, 3], 4], -1],
            [[[], 3], -1],
        ],
    },
    {
        title: 'The Edge Case',
        intro: 'He glances at the fixed function and snorts. "Beginner\'s luck," he mutters, sliding the next paper across the desk. “This one’s tougher. Start from scratch. <b>One shot.</b> Prove it wasn’t a fluke.',
        task: 'Return the numbers from 1 to n (inclusive), as an array.',
        code: function iota(n) {
    
},
        test_cases: [
            [[1], [1]],
            [[3], [1, 2, 3]],
            [[20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]],
        ],
    },
    {
        title: 'Out of Bounds',
        intro: '"He grabs the next sheet, folds it with a sharp snap, and flicks it across the cluttered desk. It slides awkwardly, catching on a pile of crumpled papers before coming to a stop. “Catch.” <p> You know you have <b>one try</b>',
        task: "Return the number of unique characters in the UTF-8 string.",
        code: function countchars(string) {
    
},
        test_cases: [
            [[""], 0],
            [["abcd"], 4],
            [["aaaa"], 4],
            [["aAÄ"], 3],
            [["𩸽"], 1], 
        ]
    },
    {
        title: 'Fault Tolerance',
        intro: 'He stares at the completed sheet for a moment, then sets it aside with a shrug. “Alright, so you’re not hopeless,” he says, though his tone stays flat. Another paper lands on the desk.<p>“Let’s see if you can keep it up. <b>One mistake, and it’s over.</b>"',
        task: '(page 1/2) In finance, we care only about Javascript Number Notation. It\'s just like JSON, except that only numbers, or arrays and objects of numbers, are allowed. For example: { 1: [2, 3, [4, 5], {6: 7}], 8: 8 } is a valid number-JSON. Given a number-JSON as an object, calculate the sum of all numbers <p> <p> (page 2/2) uniquely.',
        code: function finance_sum(jsnn) {
    
},
        test_cases: [
            [[ 100 ], 100],
            [[ [1, 2, 3] ], 6],
            [[ {1: 2} ], 3],
            [[ {2: 2} ], 2],
            [[ [2, 2] ], 2],
            [[ { 1: [2, 3, [4, 5], {6: 7}], 8: 9 } ], 45],
            [[ { 1: [2, 3, [400, 5], {6: 7}], 400: 9 } ], 433],
        ],
    },
    {
        title: 'Stack Overflow',
        intro: 'He glances at the sheet, and flips it over. <p> "Two sides, new --", he starts, then stops with a sigh, seeing the completed back. For your trouble anticipating his little trick, he hands over a faded post-it covered in tiny, cribbed writing and multiple coffee rings. "<b>You know the rules from here out. One try.</b>"',
        task: "You will be given an array of numbers. Return true if the digit 7 appears in the array, false otherwise.",
        code: function f(arr) {
    
},
        test_cases: [
            [[ [1, 2, 3] ], false],
            [[ [1, 2, 3, 4, 5, 6, 7] ], true],
            [[ [8, 6, 33, 100] ], false],
            [[ [2, 55, 60, 97, 86] ], true],
            [[ [-77] ], true],
        ],
    },
    {
        title: 'System Crash',
        intro: 'He glances up for the first time in a while, eyes narrowing as he picks up a chipped mug from the corner of the desk, swirling the last dregs of cold coffee around before setting it back down with a faint clink. He then grabs a crumpled page in the middle of a stack of old manuals and slaps it onto the desk.<p>“This one’s different,” he mutters, tapping his pen against the desk. “You\'ll need at actual brain to solve it." He smirks and leans back in his chair. "No pressure."<p>The task on the page is oddly simple—but it\'s worded like someone tried to explain a 5-minute job in a 20-minute email, with unnecessary jargon and at least three different font sizes.',
        task: "Arguments are regular expressions as strings. Try matching every regular expression against every other. Matches do not have to be exact, but only count one match per direction per pair. Return true if the total number of matches is a palindrome.",
        code: function vip_customer_rush_job_1993() {
    
},
        test_cases: [
            [["a"], true],
            [["a", "b", "c"], true],
            [["a", "b", "a"], true],
            [["a", "a", "a"], true],
            [["a", "aa", "aaa"], true],
            [["a", "aa", "aaa", "aaaa", "aaaaa"], false],
            [["a", "b", "c", "d", "e"], true],
            [[], true],
        ],
    },
    {
        title: 'Off by One',
        intro: 'You find him by the server rack, eyes still glued to his phone.  <p> "Here’s the deal," he mutters without looking up. "You’re writing a API call. Only problem is, I’ve got a half-baked spec sheet. You’ll have to figure out what’s missing, and get it right in <b>one shot.</b>" <p> He hands you a beat-up notebook with the incomplete specs scribbled on it. "Don’t screw it up, or you’re cleaning out the server room for the rest of the week."',
        task: 'Is n a prime number? Return true or false. <p> Hint: expect extremely devious inputs <p> Note: if you make an infinite loop, the page will just freeze. sorry.',
        code: function is_prime(n) {
    
},
        test_cases: [
            [[2], true],
            [[3], true],
            [[4], false],
            [[5], true],
            [[6], false],
            [[23], true],
            [[51], false],
            [[49], false],
            [[1], false],
            [[0], false],
            [[-7], false],
            [[-4], false],
            [[{"nice": "try"}], false],
            [[3.4], false],
            [[(1/0)], false], // Infinity
            [[(0/0)], false], // NaN
            [[undefined], false],
            [[null], false],
            [[[2]], false],
            [["2"], false],
            [[false], false],
            [[true], false],
        ],
    },
    {
        title: 'Segmentation Fault',
        intro: 'You find him leaning against the wall, spinning a USB stick between his fingers like it’s a ninja star.  <p> “Here’s your next task,” he says, flicking the stick onto the counter. The label reads: “Totally Important Files. Do not lose.” <p> He taps the laptop and looks at you. “Files are a mess. Don’t ask me how. Clean it up—make it usable. No one should have to dig for what they need.” <p> He narrows his eyes. “One shot. Screw this up, and you’ll be reorganizing my coffee cup collection by level of stain.”',
        task: 'Reverse the words in the sentence, keeping all punctuation, spacing, and capitalization. For example: <p> We bought apples, peaches, and bananas. <p> would become <p> Bananas and peaches, apples, bought we. <p> Hint: At least one common case is not in the example. <p> Hint 2: All test cases are ASCII-only.',
        code: function reverse(sentence_string) {
    
},
        test_cases: [
            [["dogs are better than cats"], "cats than better are dogs"],
            [["No, cats are better than dogs."], "Dogs, than better are cats no."],
            [["We bought apples, peaches, and bananas."], "Bananas and peaches, apples, bought we."],
            [["Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"], "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"],
            [["I LOVE SHOUTING"], "SHOUTING LOVE I"],
        ],
    },
    {
        title: 'Broken Logic',
        intro: 'You find him rummaging through a cabinet full of dusty cables, tapping his foot impatiently.  <p> "You\'re moving up," he mutters, tossing a ratty clipboard at you. The task is scrawled in sharp, urgent handwriting, but it’s vague enough to leave you scrambling.  <p> "Fix this. It’s gotta run on the old test system—the one no one’s bothered to touch in years. Whoever wrote this code clearly didn’t think anyone would need it again. Now it’s blocking production. If you don’t get it working, I’ll be running a different kind of test—on you. And if you finish early, find me a USB-C to Ethernet adapter. These drawers are worthless."',
        task: 'Reduce the given (positive) fraction to its simplest form. Input and output will be strings. <p> Example: "8/6" reduces to "4/3" <p> Example: "12/4" reduces to "3"',
        code: function simplify(fraction_string) {
    
},
        test_cases: [
            [["1/2"], "1/2"],
            [["2/4"], "1/2"],
            [["14/51"], "14/51"],
            [["2"], "2"],
            [["8/4"], "2"],
            [["8/6"], "4/3"],
            [["8/6"], "4/3"],
            [["1000100001/2000000010"], "333366667/666666670"],
        ]
    },
    {
        title: 'Infinite Loop',
        intro: 'You find him in the middle of a warehouse, surrounded by giant, blinking servers and an entire team of engineers frantically running cables between enormous, old-fashioned rotary phones.  <p> “Alright,” he says, slapping a blueprint onto the table. “This is your final challenge. You’ve survived the chaos so far, but this? This matters. We need you to program a quantum algorithm for optimizing this phone system. We’re talking about 12 billion possible connection routes, each requiring real-time processing of voice data through a mechanical switchboard. It’s like trying to run a VAX cluster on an abacus.” <p> He glares at you. “Why? Simple. The customer support team’s been flooded with calls that keep getting routed to the wrong place. Some are sent to the CEO’s inbox—and he’s not happy. Others end up in an endless loop with an angry fax machine. Fix this, and you’ll stop us from having to explain to accounting why we’ve got 14,000 unopened ‘urgent’ messages from customers.” <p> He leans in. “If you succeed, I’ll make sure you get the rarest, most valuable prize I have: I’ll give you the rarest, most valuable prize I have: an actual working coffee machine, just for you. You’ll never have to drink that half-empty mug from 2 PM ever again. Seriously. This is your chance to enter the realm of the caffeinated elite."',
        task: 'Given a fraction, return the fixed and repeating part of its infinite decimal expansion. The fraction will be between 0 and 1. <p> Example 1: 1/6 = 0.166666..., so f("1/6") => ["0.1", "6"] <p> Example 2: f("3/4") => ["0.75", "0"] <p> Example 3: f("1/13") => ["0.", "076923"] <p> Note: You are encouraged to search online to learn how to solve the problem, as long as you don\'t read or copy code.',
        code: function vinculum(fraction_string) {
    
},
        test_cases: [
            [["1/6"], ["0.1", "6"]],
            [["3/4"], ["0.75", "0"]],
            [["1/13"], ["0.", "076923"]],
            [["1/3"], ["0.", "3"]],
            [["6/7"], ["0.", "857142"]],
            [["1/155"], ["0.0", "064516129032258"]],
            [["100/168"], ["0.5", "952380"]],
            [["100/157"], ["0.", "636942675159235668789808917197452229299363057324840764331210191082802547770700"]],
        ]
    },
    {
        title: 'Finale',
        intro: 'You crushed it. Every challenge. First try. He stares at you for a moment, then leans back, a grin tugging at the corner of his mouth. <p> “Well, damn. You actually did it. Thought you’d be scrambling for excuses by now, but here you are, still standing.” He slides a box across the desk. “Here’s your prize. It’s not much, but it’s yours.” <p> He leans forward with a smirk. “Anyway, congratulations. You’re officially the first person I haven’t wanted to push off this chair... or into a wall.” <p> You walk out, respect in hand—and a box that definitely isn’t full of misfiled paperwork.',
        task: '',
    }
]
