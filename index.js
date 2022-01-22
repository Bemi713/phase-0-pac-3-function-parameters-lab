function intro(name) {
    console.log('Hi, my name ${name} is English origin!');
}

function introductionWithLanguage(name, language) {
    console.log("Hi, my name is ${name} and ${language}.");
}

function sayHelloTo(firstName) {
    console.log('Hello, ${firstName}!');
}
function sayHelloTo(firstName = "User") {
    console.log('Hello, ${firstName}!');
}

