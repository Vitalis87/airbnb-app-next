export default function handler(req, res) {
  res.status(200).json([
    { img: "/outdoor_getaways.jpeg", title: "Outdoor getaways" },
    { img: "/unique_stays.jpeg", title: "Unique stays" },
    { img: "/entire_homes.jpeg", title: "Entire homes" },
    { img: "/pet_allowed.jpeg", title: "Pet allowed" },
  ]);
}
