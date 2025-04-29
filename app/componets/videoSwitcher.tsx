"use client";

import { SetStateAction, useState } from "react";

export default function VideoSwitcher() {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/Rv0jgCoXmEc?si=ETsPzdeXGqd2ndbE");

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setVideoUrl(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
        <p className="text-white mb-1 text-xl">Select language option:</p>
      <select
        className="mb-4 p-2 border rounded bg-white text-violet-600"
        onChange={handleChange}
        value={videoUrl}
      >
        <option value="https://www.youtube.com/embed/Rv0jgCoXmEc?si=ETsPzdeXGqd2ndbE">Sinhala</option>
        <option value="https://www.youtube.com/embed/ZQyV_y5fvtY?si=9RIgSrsJY9T46ria">Tamil</option>
      </select>

      <div className="w-full max-w-2xl aspect-video">
        <iframe
          src={videoUrl}
          title="Selected Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-3xl"
        ></iframe>
      </div>
    </div>
  );
}
