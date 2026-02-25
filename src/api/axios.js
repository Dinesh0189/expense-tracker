import axios from 'axios';

// Since this is a Vite project, we use import.meta.env instead of process.env
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL,
    // withCredentials is NOT set to true here because the app uses
    // local storage for JWT tokens (Bearer auth) rather than HTTP-only cookies.
    // Setting it to true would require specific CORS setup on the backend and 
    // isn't necessary for your current token architecture!
});

export default api;
