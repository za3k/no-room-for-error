for (var i=0; i<challenges.length; i++) {
    challenges[i].i = i
    challenges[i].attempts = 0
    challenges[i].done = false
}
let challenge

function s(x) {
    var out = x
    try {
        if (x instanceof Error) {
            out = x.toString()
        } else {
            console.log(x)
            console.log(JSON.stringify(x))
            out = JSON.stringify(x)
        }
    } catch (e) {}
    return out
}

function fail(input, expected_output, output) {
    const msg = `Failed on input: ${s(input)}<p>Expected output: ${s(expected_output)}<p>Actual output: ${s(output)}<p><p>`
    $(".output").html(msg)
}

function setScore(c) {
    if (challenge.i >= challenges.length-1) return

    var t = `${c.title}`

    if (c.done && c.attempts <= 1) t += `: OK`
    else if (c.attempts > 0) t += `: ${c.attempts} attempt(s)`
    if (!c.done && c.attempts > 0) t += " (incomplete)"

    score = $(".score").eq(c.i)
        .text(t)
        .toggleClass("perfect", c.attempts == 0 || (c.done && c.attempts == 1))
        .toggleClass("complete", !!c.done)
}

function run() {
    if (!challenge) return

    if (!challenge.done) challenge.attempts = challenge.attempts + 1
    const correct = _run($(".code").val(), challenge.test_cases)
    
    if (correct) challenge.done = true
    setScore(challenge)
    if (correct) next()
}
function _run(code, test_cases) {
    $(".output").text("")
    for (var [input, expected_output] of test_cases) {
        try {
            const f = text2func(code) // This could also throw an error!
            const output = f(...input)
            if (!_.isEqual(expected_output, output)) {
                fail(input, expected_output, output)
                return false
            }
        } catch (e) {
            fail(input, expected_output, e)
            return false
        }
    }
    // This means if there are no test cases, TECHNICALLY you can submit syntax errors
    return true
}
function text2func(text) {
    return eval("(" + text + ")")
}

function next() {
    if (!challenge) return
    load(challenges[challenge.i+1])
}

function load(c) {
    challenge = c
    const finale = challenge.i == challenges.length-1

    $(".title").text(challenge.title)
    $(".intro").html(challenge.intro)
    $(".task").html(challenge.task)
    $(".code").val(challenge.code ? challenge.code.toString() : "")

    if (finale) $(".run, .skip").hide()
    if (finale) $(".code, .output, .task").html("").hide()
    if (!finale) setScore(c)
}

function addEmptyScore(c) {
    $(".scores").append(
        $(`<div class="score"></div>`)
    )
}

$(".run").on("click", run)
$(".skip").on("click", next)
for (var c of challenges) addEmptyScore(c)
load(challenges[0])
