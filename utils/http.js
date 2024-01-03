const API_KEY = process.env.REACT_APP_API_KEY;

// now playing movie 목록을 가져오는 함수
export async function fetchNowPlayingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
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

// popular movie 목록을 가져오는 함수
export default async function fetchPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  // async 함수를 사용하여 데이터를 가져옴
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}

// 영화 상세 정보를 가져오는 함수
export async function fetchMovieDetail(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}
