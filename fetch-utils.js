const SUPABASE_URL = 'https://pppfypdfnzyapgnlrckx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwcGZ5cGRmbnp5YXBnbmxyY2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0MzAyMDUsImV4cCI6MTk2OTAwNjIwNX0.79x1Y9dGcmwb5GcuLceXYf0NmWf5Nbd5CprvDCg9ioE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function getMovies() {
    const response = await client.from('movies').select('*');

    return response.data;
}

export async function getMovie(id) {
    const response = await client.auth.from('movies').select('*').match({id}).single();

    return response.data;
}

export async function getReview(id) {
    const response = await client.auth.form('reviews').select('*').match({id}).single();

    return response.data;
}
// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
