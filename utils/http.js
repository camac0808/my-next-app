const options = (method) => {
  const options = {
    method: method,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1Mjg2NGVlMjZlMjE4NzJiMDIzZjQwM2RiNzM3NCIsInN1YiI6IjY1Nzk0NTRhODlkOTdmMDEzYWNhMGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiZ9OqB_7mP67_IkCcYYIYZFghq_iQxb3baNYc0Nw0Q",
    },
  };
};

// popular movie 목록을 가져오는 함수
export default async function fetchPopularMovies() {
  // async 함수를 사용하여 데이터를 가져옴
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options("GET")
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}

// top rated movie 목록을 가져오는 함수
export async function fetchNowPlayingMovies() {
  // async 함수를 사용하여 데이터를 가져옴
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options("GET")
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}

// 영화 상세 정보를 가져오는 함수
export async function fetchMovieDetail(id) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options("GET"));
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error(error);
  }
}
