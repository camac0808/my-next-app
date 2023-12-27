
// 전체 영화 목록을 가져오는 함수
export default async function fetchMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1Mjg2NGVlMjZlMjE4NzJiMDIzZjQwM2RiNzM3NCIsInN1YiI6IjY1Nzk0NTRhODlkOTdmMDEzYWNhMGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiZ9OqB_7mP67_IkCcYYIYZFghq_iQxb3baNYc0Nw0Q",
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg1Mjg2NGVlMjZlMjE4NzJiMDIzZjQwM2RiNzM3NCIsInN1YiI6IjY1Nzk0NTRhODlkOTdmMDEzYWNhMGU3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiZ9OqB_7mP67_IkCcYYIYZFghq_iQxb3baNYc0Nw0Q",
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
