import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "Mosaken",
      artist: "Masoud Sadeghloo",
      cover:
        "https://golsarmusic.ir/wp-content/uploads/2021/03/Masoud-Sadeghloo-%E2%80%93-Mosaken-1-400x400.jpg",
      id: uuidv4(),
      like: true,
      color: ["#5B349E", "#F6A5DA"],
      audio:
        "https://dl.golsarmusic.ir/GolsarMusic-Root/99/12%20Esfand/20/Masoud-Sadeghloo-Mosaken-128.mp3",
    },
    {
      name: "Manzoome Cheshmat",
      artist: "Ramin Bibak",
      cover:
        "https://www.faratext.com/wp-content/uploads/2021/03/Ramin-Bibak-Manzoomeye-Cheshmat-300x300.jpg",
      id: uuidv4(),
      like: false,
      color: ["#A32426", "#E8E362"],
      audio:
        "https://dl.nex1music.ir/1399/12/24/Ramin Bibak - Manzoomeye Cheshmat.mp3",
    },
    {
      name: "Faze Asal",
      artist: "Pouya Bayati",
      cover:
        "https://nex1music.ir/upload/2020-05-24/pouya-bayati-faaze-asal-2020-05-24-22-51-26.jpg",
      id: uuidv4(),
      like: false,
      color: ["#223D69", "#1E8292"],
      audio:
        "https://dl.nicmusic.net/nicmusic/023/062/Pouya%20Bayati%20-%20Faaze%20Asal.mp3",
    },
    {
      name: "Na Nagoo Na",
      artist: "Emo Band",
      cover:
        "https://www.jenabmusic.com/wp-content/uploads/2021/05/Emo-Band-Na-Nagoo-Na-490x490.jpg",
      id: uuidv4(),
      like: false,
      color: ["#02CDD4", "#76EA34"],
      audio:
        "http://dl.tabamusic.com/Music/1400/02/Emo Band - Na Nagoo Na (128).mp3",
    },
    {
      name: "To",
      artist: "Mehraj",
      cover: "https://sultanmusic.ir/wp-content/uploads/2021/02/Mehraj-To.jpg",
      id: uuidv4(),
      like: false,
      color: ["#BE111B", "#FDB80C"],
      audio: "https://dls.music-fa.com/tagdl/99/Mehraj%20-%20To%20(320).mp3",
    },
    {
      name: "Etefaghan",
      artist: "Mohammad Lotfi",
      cover:
        "http://tabamusic.com/wp-content/uploads/2020/06/Mohammad-Lotfi-Etefaghan.jpg",
      id: uuidv4(),
      like: false,
      color: ["#9F4B03", "#FAD15E"],
      audio:
        "http://dl.tabamusic.com/Music/1400/01/Mohammad Lotfi - Etefaghan (128).mp3",
    },
    {
      name: "Mehre Madari",
      artist: "Pouya Bayati",
      cover:
        "http://tabamusic.com/wp-content/uploads/2021/01/Pouya-Bayati-Mehre-Madari.jpg",
      id: uuidv4(),
      like: false,
      color: ["#3169aa", "#59C2D3"],
      audio:
        "https://dl.nicmusic.net/nicmusic/025/021/Pouya%20Bayati%20-%20Mehre%20Madari%20%5B128%5D.mp3",
    },
  ];
};
// uuidv4()

export default chillHop;
