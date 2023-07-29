import Forms from "@/components/Forms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getMovie(movieId: string) {
  const url = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      accept: "application/json",
      Authorization: process.env.THEMOVIEDB_API as string,
    },
    next: { revalidate: 10 },
  });
  return url.json();
}

export default async function MovieId({ params }: TParams) {
  const data: IMovie = await getMovie(params.movieId);
  return (
    <div className="min-h-sceen  p-10">
      <div className="h-[40vh] relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt={"movie image"}
          className="object-cover w-full rounded-lg"
          fill
        />
      </div>
      <h1 className="text-2xl font-bold text-center">{data.title}</h1>
      <div className="flex gap-10 mt-10">
        <div className="w-1/2 font-medium">
          <h1>
            <span className="underline">Homepage:</span>
            <Link href={data.homepage} target="_blank">
              Link
            </Link>
          </h1>
          <h1>
            <span className="underline">Original Language :</span>
            {data.original_language}
          </h1>
          <p><span className="underline">Overview :</span>{data.overview}</p>
          <p><span className="underine">Release Date :</span>{data.release_date}</p>
        </div>
        <div className="w-1/2 font-medium bg-gray-100"><Forms params={params}/></div>
      </div>
    </div>
  );
}
