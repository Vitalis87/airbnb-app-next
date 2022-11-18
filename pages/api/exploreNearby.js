// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      img: "/london.jpeg",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "/manchester.jpeg",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "/liverpool.jpeg",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "/york.jpeg",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "/cardiff.jpeg",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "/birkenhead.jpeg",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "/newquay.jpeg",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "/hove.jpeg",
      location: "Hove",
      distance: "2-hour drive",
    },
  ])
}
