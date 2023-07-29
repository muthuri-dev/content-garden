export const dynamic = "force-dynamic";
import { db } from "@/app/db";
import { revalidatePath } from "next/cache";
import React from "react";

async function getData(movieId: string) {
  const data = await db.comment.findMany({
    where: { movieId: movieId },
    orderBy: { createdAt: "desc" },
  });
  return data;
}

async function postData(formData:FormData){
    "use server"
    const data = await db.comment.create({
        data:{
            message:formData.get('comment') as string,
            movieId:formData.get('id') as string
        }
    });
    revalidatePath('/movie/[movieId]');
}

export default async function Forms({ params }: TParams) {
  const data = await getData(params.movieId);
  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5 text-center">Your Opinion</h1>
      <div>
        <form action={postData}>
          <textarea
            name="comment"
            className="w-full border border-teal-500 rounded-lg p-2"
            placeholder="add your comment ..."
          ></textarea>
          <input type="hidden" name="id" value={params.movieId} />
          <button
            type="submit"
            className="bg-teal-500 px-4 py-2 rounded-lg text-white"
          >
            Add Comment
          </button>
        </form>
        <div className="mt-5 flex flex-col gap-y-3">
            {data.map(post=>(
                <div key={post.id}>
                    <p>{post.message}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
