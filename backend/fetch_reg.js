const fs = require('fs');

async function test() {
    try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'User2', email: `test${Date.now()}@test.com`, password: 'password123' })
        });
        const body = await res.text();
        fs.writeFileSync('out.txt', `Status: ${res.status}\nBody: ${body}`);
    } catch (err) {
        fs.writeFileSync('out.txt', `Error: ${err.message}`);
    }
}

test();
