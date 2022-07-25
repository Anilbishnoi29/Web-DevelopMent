// callback function

function register(cb) {
    setTimeout(() => {
        console.log("user register successfully")
        cb();
    }, 3000)
}

function email(cb) {
    setTimeout(() => {
        console.log("email verification completed");
        cb();
    }, 2000)
}

function password(cb) {
    setTimeout(() => {
        console.log("password setting done");
        cb();
    }, 1500)
}

function log(cb) {
    setTimeout(() => {
        console.log("login successfully");
        cb();
    }, 3000)
}

function dataDisplay() {
    setTimeout(() => {
        console.log("data data displayed.");
    }, 500)
}

register(() => {
    email(() => {
        password(() => {
            log(() => {
                dataDisplay();
            });
        });
    });
})

// function register(cb) {
//     setTimeout(() => {
//         console.log("user register successfully")
//         cb();
//     }, 3000)
// }

// function email() {
//     setTimeout(() => {
//         console.log("email verification completed");
//     }, 2000)
// }

// function password() {
//     setTimeout(() => {
//         console.log("password setting done");
//     }, 1500)
// }

// function log() {
//     setTimeout(() => {
//         console.log("login successfully");
//     }, 1500)
// }

// function dataDisplay() {
//     setTimeout(() => {
//         console.log("data data displayed.");
//     }, 500)
// }

// register(() => {
//     email();
//     password();
//     log();
//     dataDisplay();
// })