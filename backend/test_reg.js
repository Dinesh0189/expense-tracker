import axios from 'axios';

axios.post('http://localhost:5000/api/auth/register', {
    name: 'Test',
    email: 'testxyz@test.com',
    password: 'password123'
}).then(res => {
    console.log("Success:", res.data);
}).catch(err => {
    console.log("Error status:", err.response?.status);
    console.log("Error data:", err.response?.data);
    console.log("Error message:", err.message);
});
