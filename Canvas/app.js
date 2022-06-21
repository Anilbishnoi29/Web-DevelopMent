const canvas = document.querySelector("#myCanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext("2d");

// create a player
class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}
// create a obj of player or create a player obj
const player = new Player((canvas.width / 2), (canvas.height), 30, 'blue');

// create all projectile
class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}
class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}
// add event for create new projectile

const projectile = [];
const enemy = [];

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    projectile.forEach((projectile) => {
        projectile.update();
    });
    enemy.forEach((enemy) => {
        enemy.update();
    })
}

window.addEventListener('click', (event) => {
    // angle
    const angleP = Math.atan2(event.clientY - canvas.height, event.clientX - canvas.width / 2);
    const velocityP = {
        x: Math.cos(angleP),
        y: Math.sin(angleP)
    }

    const velocityE = {
        x: Math.asin(Math.cos(angleP)),
        y: Math.acos(Math.sin(angleP)),
    }

    projectile.push(new Projectile((canvas.width / 2), (canvas.height), 5, 'red', velocityP))
    enemy.push(new Enemy((canvas.width / 2), 0, 5, 'blue', velocityE))
    console.log(velocityP.x, " = ", velocityE.x)
    console.log(velocityP.y, " = ", velocityE.y)
    animate();
})