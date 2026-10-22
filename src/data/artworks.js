/**
 * Artwork data — single source of truth.
 * 4 Selected Works with Cloudinary optimized URLs.
 */
export const artworks = [
  {
    id:          'core-values-1',
    title:       'Core Values',
    image:       'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_900/v1792620371/IMG_1115.JPG.jpg',
    viewerImage: 'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_2000/v1792620371/IMG_1115.JPG.jpg',
    alt:         'Core Values – Graphite portrait by Iyanuoluwapo Akoteyon',
    size:        'large',   // controls grid spanning: large (col 1, row 1 / 3)
    featured:    true,
    showInfo:    true,
    objectPosition: 'center 30%',
  },
  {
    id:          'core-values-2',
    title:       'Core Values',
    image:       'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_900/v1792620366/IMG_1111.JPG.jpg',
    viewerImage: 'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_2000/v1792620366/IMG_1111.JPG.jpg',
    alt:         'Core Values – Detailed pencil drawing by Iyanuoluwapo Akoteyon',
    size:        'small',   // controls grid spanning: small (col 2, auto row)
    featured:    true,
    showInfo:    true,
    objectPosition: 'center 20%',
  },
  {
    id:          'core-values-3',
    title:       'Core Values',
    image:       'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_900/v1792620368/IMG_1119.JPG.jpg',
    viewerImage: 'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_2000/v1792620368/IMG_1119.JPG.jpg',
    alt:         'Core Values – Expressive pencil portrait by Iyanuoluwapo Akoteyon',
    size:        'small',   // controls grid spanning: small (col 2, auto row)
    featured:    true,
    showInfo:    true,
    objectPosition: 'center center',
  },
  {
    id:          'core-values-4',
    title:       '',        // Card 4 has no title, no caption and no brown underline
    image:       'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_900/v1792620370/IMG_0994.jpg',
    viewerImage: 'https://res.cloudinary.com/dru2blbte/image/upload/f_auto,q_auto,w_2000/v1792620370/IMG_0994.jpg',
    alt:         'Artwork by Iyanuoluwapo Akoteyon',
    size:        'medium',  // controls grid spanning: medium (col 3, row 1 / 3)
    featured:    true,
    showInfo:    false,
    objectPosition: 'center center',
  },
];
