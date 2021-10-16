import { useState } from "react";
import Image from "next/image";

const Index = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getInfo = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    // check if url is a valid youtube or instagram post url
    if (
      !url.match(/(http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/g) &&
      !url.match(/(http(s)?:\/\/)?(www\.)?(instagram\.com|instagram\.com)\/.+/g)
    ) {
      setError("Please enter a valid youtube or instagram url");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/download?url=${url}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setData(null);
      setError(error);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <header className="p-4 w-full tracking-tight text-lg flex items-center justify-around">
        <p className="font-bold">All in one downloader 🔥</p>
        <a href="/" className="underline">
          GitHub
        </a>
      </header>
      <hr className="w-full mb-3" />
      <h1 className="p-4 text-2xl tracking-tight text-center font-bold lg:text-4xl">
        Download <span className="text-red-500">YouTube</span> &{" "}
        <span className="text-pink-600">Instagram</span> posts at one place
      </h1>
      <main className="px-4 w-full">
        <input
          placeholder="Paste URL"
          onChange={(e) => setUrl(e.target.value)}
          className="p-3 border focus:border-indigo-600 focus:ring focus:outline-none border-gray-500 tracking-tight rounded w-full md:w-3/4 mx-auto block text-lg"
        />
        {error && <p className="text-red-600 text-center">{error}</p>}
        <button
          onClick={getInfo}
          className="px-4 py-3 bg-indigo-600 shadow-lg hover:bg-indigo-800 duration-500 rounded mx-auto block my-4 text-white"
        >
          {loading ? "Fetching..." : "Download 👇"}
        </button>
      </main>
      <section className="p-4 w-full">
        {data && (
          <div className="p-4 lg:w-1/2 mx-auto flex flex-col gap-2 border border-gray-300 rounded shadow">
            <p className="font-bold py-2">{data.title}</p>
            <div className="rounded">
              <Image
                src={data.thumbnail}
                width={300}
                height={150}
                layout="responsive"
                quality={100}
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-2 items-center">
              {data.formats.map((format) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 w-16 text-center bg-green-600 rounded text-white"
                  key={format.itag}
                  href={format.url}
                >
                  {format.qualityLabel}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
