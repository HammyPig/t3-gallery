import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://dummyimage.com/600x400/ff0000/ffffff.jpg&text=Image+1",
  "https://dummyimage.com/600x400/00ff00/ffffff.jpg&text=Image+2",
  "https://dummyimage.com/600x400/0000ff/ffffff.jpg&text=Image+3"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
      </div>
    </main>
  );
}
