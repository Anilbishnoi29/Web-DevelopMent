// callback function

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user register successfully")
            resolve();
        }, 3000)
    });
}

function email() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email verification completed");
            resolve();
        }, 2000)
    })
}

function password() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("password setting done");
            resolve();
        }, 1500)
    })
}

function log() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login successfully");
            resolve();
        }, 3000)
    })
}

function dataDisplay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data data displayed.");
        }, 500)
    })
}

// then()
// register().then(email).then(password).then(log).then(dataDisplay).catch(e => {
//     console.log(`Error: ${e}`);
// });

// await
async function authentication() {
    await register();
    await email();
    await password();
    await log();
    await dataDisplay();
}
authentication();