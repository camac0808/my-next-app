const API_KEY = process.env.REACT_APP_API_KEY;

// now playing movie
export async function fetchNowPlayingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1Mjg2NGVlMjZlMjE4NzJiMDIzZjQwM2RiNzM3NCIsInN1YiI6IjY1Nzk0NTRhODlkOTdmMDEzYWNhMGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiZ9OqB_7mP67_IkCcYYIYZFghq_iQxb3baNYc0Nw0Q',
    },
  };
  // async 함수를 사용하여 데이터를 가져옴
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}

// popular movie
export default async function fetchPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1Mjg2NGVlMjZlMjE4NzJiMDIzZjQwM2RiNzM3NCIsInN1YiI6IjY1Nzk0NTRhODlkOTdmMDEzYWNhMGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiZ9OqB_7mP67_IkCcYYIYZFghq_iQxb3baNYc0Nw0Q',
    },
  };

  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}

// movie detail
export async function fetchMovieDetail(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1Mjg2NGVlMjZlMjE4NzJiMDIzZjQwM2RiNzM3NCIsInN1YiI6IjY1Nzk0NTRhODlkOTdmMDEzYWNhMGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiZ9OqB_7mP67_IkCcYYIYZFghq_iQxb3baNYc0Nw0Q',
    },
  };
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US'`, options);
    const jsonData = await response.json();
    console.log(id, jsonData)
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}
