/**
 * This data represents the type/shape of the database
 * objects accessed through the API on the backend. This
 * data should only be used for testing.
 */

const mediaImage = () => ({
  src: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/300`,
  alt: "product image",
})
const media = () => [mediaImage(), mediaImage(), mediaImage(), mediaImage()]
const description =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris nec placerat ultrices. Mauris rhoncus eleifend odio quis pharetra. Mauris pharetra metus vel felis vestibulum blandit. Mauris sit amet turpis erat.</p><p>Integer magna justo, fringilla non pulvinar non, euismod non erat. Nam sit amet ligula sit amet lorem pharetra tempus. Duis id commodo lectus. Nulla et dolor dapibus tortor.</p><p>Ut a orci sodales, faucibus purus malesuada, ullamcorper augue. Maecenas condimentum purus pretium libero finibus porttitor.</p>"

const media0 = media()
const media1 = media()
const media2 = media()
const media3 = media()
const media4 = media()
const media5 = media()
const media6 = media()
const media7 = media()
const media8 = media()
const media9 = media()
const media10 = media()
const media11 = media()

const testData = [
  {
    id: "hold-it-all-backpack",
    name: "Hold It All Backpack",
    description,
    price: 450,
    thumbnail: media0[0],
    media: media0,
    attributes: ["backpack"],
    rating: 5,
  },
  {
    id: "everyday-handbag",
    name: "Everyday Handbag",
    description,
    price: 250,
    thumbnail: media1[0],
    media: media1,
    attributes: ["bag"],
    rating: 4,
  },
  {
    id: "over-the-shoulder-catch",
    name: "Over the Shoulder Catch",
    description,
    price: 350,
    thumbnail: media2[0],
    media: media2,
    attributes: ["bag"],
    rating: 1,
  },
  {
    id: "clutching-at-fun",
    name: "Clutching at Fun",
    description,
    price: 150,
    thumbnail: media3[0],
    media: media3,
    attributes: ["bag"],
    rating: 3,
  },
  {
    id: "not-your-dads-fanny-pack",
    name: "Not Your Dad's Fanny Pack",
    description,
    price: 200,
    thumbnail: media4[0],
    media: media4,
    attributes: ["bag"],
    rating: 1,
  },
  {
    id: "sleek-lines-backpack",
    name: "Sleek Lines Backpack",
    description,
    price: 450,
    thumbnail: media5[0],
    media: media5,
    attributes: ["backpack"],
    rating: 4,
  },
  {
    id: "basic-bag",
    name: "Basic Bag",
    description,
    price: 350,
    thumbnail: media6[0],
    media: media6,
    attributes: ["bag"],
    rating: 4,
  },
  {
    id: "basic-bag-in-blush",
    name: "Basic Bag in Blush",
    description,
    price: 450,
    thumbnail: media7[0],
    media: media7,
    attributes: ["bag"],
    rating: 4,
  },
  {
    id: "your-new-go-to",
    name: "Your New Go To",
    description,
    price: 650,
    thumbnail: media8[0],
    media: media8,
    attributes: ["bag"],
    rating: 5,
  },
  {
    id: "moms-best-friend",
    name: "Mom's Best Friend",
    description,
    price: 250,
    thumbnail: media9[0],
    media: media9,
    attributes: ["bag"],
    rating: 5,
  },
  {
    id: "hold-everything-backpack",
    name: "Hold Everything Backpack",
    description,
    price: 450,
    thumbnail: media10[0],
    media: media10,
    attributes: ["backpack"],
    rating: 3,
  },
  {
    id: "everyday-backpack",
    name: "Everyday Backpack",
    description,
    price: 400,
    thumbnail: media11[0],
    media: media11,
    attributes: ["backpack"],
    rating: 4,
  },
]

module.exports = testData;
