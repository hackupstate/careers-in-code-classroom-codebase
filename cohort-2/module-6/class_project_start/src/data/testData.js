/**
 * This data represents the type/shape of the database
 * objects accessed through the API on the backend. This
 * data should only be used for testing.
 */

const mediaImage = (num) => ({
  src: `https://picsum.photos/seed/${
    num || Math.floor(Math.random() * 1000)
  }/300`,
  alt: "product image",
})
const media = (a, b, c, d) => [
  mediaImage(a),
  mediaImage(b),
  mediaImage(c),
  mediaImage(d),
]
const description =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris nec placerat ultrices. Mauris rhoncus eleifend odio quis pharetra. Mauris pharetra metus vel felis vestibulum blandit. Mauris sit amet turpis erat.</p><p>Integer magna justo, fringilla non pulvinar non, euismod non erat. Nam sit amet ligula sit amet lorem pharetra tempus. Duis id commodo lectus. Nulla et dolor dapibus tortor.</p><p>Ut a orci sodales, faucibus purus malesuada, ullamcorper augue. Maecenas condimentum purus pretium libero finibus porttitor.</p>"

const media0 = media(3, 61, 200, 166)
const media1 = media(9, 22, 47, 50)
const media2 = media(16, 103, 173, 130)
const media3 = media(14, 63, 155, 260)
const media4 = media(27, 71, 81, 42)
const media5 = media(33, 70, 88, 183)
const media6 = media(32, 41, 55, 90)
const media7 = media(48, 58, 64, 76)
const media8 = media(102, 116, 127, 276)
const media9 = media(171, 232, 294, 202)
const media10 = media(199, 188, 144, 145)
const media11 = media(179, 148, 223, 236)

export const testData = [
  {
    id: "waterfall-retreat",
    name: "Waterfall Retreat",
    description: "Enjoy a retreat full of waterfalls. " + description,
    price: 1400,
    thumbnail: media0[0],
    media: media0,
    attributes: ["backpacking"],
    rating: 5,
  },
  {
    id: "urban-excursion",
    name: "Urban Excursion",
    description: "Travel through the city center. " + description,
    price: 900,
    thumbnail: media1[0],
    media: media1,
    attributes: ["tour"],
    rating: 4,
  },
  {
    id: "transported-away",
    name: "Transported Away",
    description:
      "Travel across the country by trains, planes, and automobiles. " +
      description,
    price: 600,
    thumbnail: media2[0],
    media: media2,
    attributes: ["tour"],
    rating: 5,
  },
  {
    id: "wooded-relaxation",
    name: "Wooded Relaxation",
    description: "Relax in the forest. " + description,
    price: 750,
    thumbnail: media3[0],
    media: media3,
    attributes: ["backpacking"],
    rating: 3,
  },
  {
    id: "serenity-shores",
    name: "Serenity Shores",
    description: "Beaches, water, and plenty of sunshine. " + description,
    price: 1100,
    thumbnail: media4[0],
    media: media4,
    attributes: ["backpacking"],
    rating: 1,
  },
  {
    id: "cliffside-overlook",
    name: "Cliffside Overlook",
    description:
      "Enjoy scenic views of the vistas and forests below. " + description,
    price: 850,
    thumbnail: media5[0],
    media: media5,
    attributes: ["backpacking"],
    rating: 4,
  },
  {
    id: "architectural-enthusiast",
    name: "Architectural Enthusiast",
    description:
      "Take a tour of exciting architectural wonders. " + description,
    price: 1550,
    thumbnail: media6[0],
    media: media6,
    attributes: ["tour"],
    rating: 4,
  },
  {
    id: "mountain-meditations",
    name: "Mountain Meditations",
    description: "Hike through the mountains and forests. " + description,
    price: 950,
    thumbnail: media7[0],
    media: media7,
    attributes: ["backpacking"],
    rating: 4,
  },
  {
    id: "cafe-hoppers",
    name: "Cafe Hoppers",
    description: "Enjoy coffee and tea from all over. " + description,
    price: 650,
    thumbnail: media8[0],
    media: media8,
    attributes: ["tour"],
    rating: 1,
  },
  {
    id: "hotel-hopscotch",
    name: "Hotel Hopscotch",
    description:
      "Stay the night in luxurious hotels while you travel. " + description,
    price: 2300,
    thumbnail: media9[0],
    media: media9,
    attributes: ["tour"],
    rating: 5,
  },
  {
    id: "drift-away",
    name: "Drift Away",
    description: "Drift away over the waters of the world. " + description,
    price: 1600,
    thumbnail: media10[0],
    media: media10,
    attributes: ["backpacking"],
    rating: 3,
  },
  {
    id: "Trailblazer",
    name: "Trailblazer",
    description:
      "Hike through various wonderlands of scenic beauty. " + description,
    price: 900,
    thumbnail: media11[0],
    media: media11,
    attributes: ["backpacking"],
    rating: 4,
  },
]

export default testData
