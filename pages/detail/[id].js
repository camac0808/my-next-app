import { useParams } from "next/navigation";
import { fetchMovieDetail } from "@/utils/http";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Detail() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetail(id),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);
  const posterPath = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  return (
    <>
      <h1>Movie Detail</h1>
      <div>
        <Image src={posterPath} alt={data.title} title={data.title} width={200} height={200} />
        <h2>{data.title}</h2>
        <p>{data.overview}</p>
      </div>
    </>
  );
}
