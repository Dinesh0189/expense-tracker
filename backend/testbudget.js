const apiUrl = "http://localhost:5000/api";

async function test() {
    try {
        // 1. Register a test user
        console.log("Registering user...");
        const regRes = await fetch(`${apiUrl}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Test User",
                email: `test${Date.now()}@test.com`,
                password: "password123"
            })
        });
        const regData = await regRes.json();
        if (!regRes.ok) {
            console.error("Register Error:", regData);
            return;
        }
        const token = regData.token;

        // 2. Make POST to /api/budget
        console.log("Creating budget...", token);
        const res = await fetch(`${apiUrl}/budget`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                totalBudget: 1000,
                categoryLimits: { Food: 50, Transport: 30 },
                month: new Date().getMonth(),
                year: new Date().getFullYear()
            })
        });

        const body = await res.json();
        console.log("Budget Response:", res.status, body);

    } catch (error) {
        console.error("Fetch Error:", error.message);
    }
}

test();
