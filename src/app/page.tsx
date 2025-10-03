import Link from "next/link";

const mockUrls = [
  "https://dummyimage.com/600x400/ff0000/ffffff.jpg&text=Image+1",
  "https://dummyimage.com/600x400/00ff00/ffffff.jpg&text=Image+2",
  "https://dummyimage.com/600x400/0000ff/ffffff.jpg&text=Image+3"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
