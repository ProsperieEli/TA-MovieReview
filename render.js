export function renderMovies(movie) {
    const div = document.createElement('div')

    const a = document.createElement('a')
    a.href = `../movie/${movie.id}`;

    const h1 = document.createElement('h1')
    h1.textContent = <b>{movie.name}</b>;

    const h3 = document.createElement('h3');
    h3.textContent = movie.release_date;

    const p = document.createElement('p');
    p.textContent = movie.summary;

    const img = document.createElement('img');
    img = movie.poster;

    div.append(h1, h3, p, img);
    a.append(img)

    return div;
}