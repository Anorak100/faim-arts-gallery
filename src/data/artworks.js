/**
 * Artwork data — single source of truth.
 * Add or remove artwork objects here; components map over this array.
 */
export const artworks = [
  {
    id:      'young-mind',
    title:   'The Young Mind',
    medium:  'Graphite on paper',
    year:    '2024',
    image:   '/young-mind.jpg',
    alt:     'Hyperrealistic graphite portrait of a young man with an intense gaze',
    size:    'large',   // controls grid spanning: large | small | medium
    featured: true,
  },
  {
    id:      'elder',
    title:   'The Elder',
    medium:  'Graphite on paper',
    year:    '2023',
    image:   '/elder.jpg',
    alt:     'Graphite portrait of an elderly man in a flat cap, wisdom in his eyes',
    size:    'small',
    featured: true,
  },
  {
    id:      'her-world',
    title:   'In Her Own World',
    medium:  'Graphite on paper',
    year:    '2024',
    image:   '/her-world.jpg',
    alt:     'Graphite side-profile portrait of a young woman wearing a head wrap',
    size:    'small',
    featured: true,
  },
  {
    id:      'still-here',
    title:   'Still Here',
    medium:  'Graphite on paper',
    year:    '2024',
    image:   '/still-here.jpg',
    alt:     'Graphite portrait of a child with large expressive eyes',
    size:    'medium',
    featured: true,
  },
];
