import { readable } from 'svelte/store'

export const categories = readable(['food', 'places'])

export const food = readable([
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    summary: 'Brown 400g of mince, add Bolognese sauce, bring to a simmer for 5-10 mins. Serve over spaghetti.',
    image: 'https://source.unsplash.com/21M2S-67gvE/304x224',
  },
  {
    id: 2,
    title: 'Egg Fried Rice',
    summary: 'Boil a bunch of rice, cook bacon & onions, scramble an egg into the pan, add sweetcorn and the rice.',
    image: 'https://source.unsplash.com/CvLZ6hbIemI/304x224',
  },
  {
    id: 3,
    title: 'Pancakes',
    summary:
      '200g Flour, 4 eggs, 600ml milk, whisked and griddled to perfection. Served with lemon and sugar or fruit.',
    image: 'https://source.unsplash.com/t6xh7hskUVA/304x224',
  },
])

export const places = readable([
  {
    id: 1,
    title: 'Itchen Valley',
    summary: 'Good space for games and kites, with nice walks and a couple parks.',
    image: 'https://www.eastleigh.gov.uk/media/4758/ivcp-dk-green-logo.png',
  },
  {
    id: 2,
    title: 'Royal Victoria',
    summary: 'The river, lots of open space and a play area.',
    image: 'https://www.hants.gov.uk/thingstodo/countryparks/-/media/D7B04852749F4B54A64447B80B3A97A7.ashx',
  },
  {
    id: 3,
    title: 'Forest of Bere',
    summary: 'Really long walks, lots of forest areas and some cool play areas.',
    image: 'https://source.unsplash.com/304x224/?forest',
  },
  {
    id: 4,
    title: 'Holly Hill',
    summary: 'Beautiful walks with some lakes through to hamble river.',
    image: 'https://www.fareham.gov.uk/images/leisure/HollyHill-1.jpg',
  },
  {
    id: 5,
    title: 'Blundel Lane',
    summary: 'Nice walk along the river, over a bridge with a cool tree and in to Hamble River Park.',
    image: 'https://source.unsplash.com/304x224/?river',
  },
  {
    id: 6,
    title: 'Hamble River Park',
    summary: 'Lovely wooded walk, the river and a crabbing jetty.',
    image: 'https://www.hants.gov.uk/-/media/Images/thingstodo/countryside/riverhamble/river-hamble-logo.png',
  },
])
