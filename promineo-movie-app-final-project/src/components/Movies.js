const movies = [
    {
      id: 0,
      title: 'Avengers: Endgame',
      year: 2019,
      genre: 'Action',
      boxOffice: 2797800564,
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_500x749.jpg?v=1573616089'
    },
    {
      id: 1,
      title: 'Joker',
      year: 2019,
      genre: 'Drama',
      boxOffice: 1074251311,
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/de75d69d8743b0f549a2d0a32ce70ade_500x749.jpg?v=1573572666'
    },
    {
      id: 2,
      title: 'Frozen II',
      year: 2019,
      genre: 'Comedy',
      boxOffice: 1450026933,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg'
    },
    {
      id: 3,
      title: 'The Lion King',
      year: 2019,
      genre: 'Drama',
      boxOffice: 1656943394,
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a294e449bfe3c3b67bd3550552068494_55f87c07-49d8-4219-9957-f178fc9d4d21_500x749.jpg?v=1573616087'
    },
    {
      id: 4,
      title: 'Spider-Man: Far from Home',
      year: 2019,
      genre: 'Action',
      boxOffice: 1131927996,
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/02dc63572a549d04e405681c4ed3718b_7e3b25a8-e2b1-4e45-947f-00d3b2f2d6a3_500x749.jpg?v=1573616050'
    },
    {
      id: 5,
      title: 'Toy Story 4',
      year: 2019,
      genre: 'Comedy',
      boxOffice: 1073394593,
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0590d974aece12efd7b5865c2e4544bc_0956f079-e82a-4623-9105-f1606be259fb_500x749.jpg?v=1573590145'
    },
    {
      id: 6,
      title: 'Captain Marvel',
      year: 2019,
      genre: 'Action',
      boxOffice: 1128274794,
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f02c4b3ba81e2c9041d3de125a38cf56_500x749.jpg?v=1573616058'
    },
    {
      id: 7,
      title: 'Aladdin',
      year: 2019,
      genre: 'Comedy',
      boxOffice: 1050950298,
      poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a7386e66f408708e230ac595a2706819_feb14404-3949-4d95-9a11-28af76cfb5fb_500x749.jpg?v=1675968630'
    },
    {
      id: 8,
      title: 'The Wandering Earth',
      year: 2019,
      genre: 'Action',
      boxOffice: 700981298,
      poster: 'https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/216729/thewanderingearth-posterart.jpg'
    },
    {
      id: 9,
      title: 'Hustlers',
      year: 2019,
      genre: 'Drama',
      boxOffice: 157606347,
      poster: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Hustlers_%28Official_Film_Poster%29.png'
    },
    {
      id: 10,
        title: 'Black Panther',
        year: 2018,
        genre: 'Action',
        boxOffice: 1346913161,
        poster: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg'
      },
      {
        id: 11,
        title: 'Incredibles 2',
        year: 2018,
        genre: 'Comedy',
        boxOffice: 1242805359,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_FMjpg_UX1000_.jpg'
      },
      {
        id: 12,
        title: 'Bohemian Rhapsody',
        year: 2018,
        genre: 'Drama',
        boxOffice: 903655259,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg'
      },
      {
        id: 13,
        title: 'Jurassic World: Fallen Kingdom',
        year: 2018,
        genre: 'Action',
        boxOffice: 1309484461,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_FMjpg_UX1000_.jpg'
      },
      {
        id: 14,
        title: 'Deadpool 2',
        year: 2018,
        genre: 'Comedy',
        boxOffice: 785046920,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDkzNmRhNTMtZDI4NC00Zjg1LTgxM2QtMjYxZDQ3OWJlMDRlXkEyXkFqcGdeQXVyNTU5MjkzMTU@._V1_FMjpg_UX1000_.jpg'
      },
      {
        id: 15,
        title: 'A Star is Born',
        year: 2018,
        genre: 'Drama',
        boxOffice: 436190868,
        poster: 'https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
      },
      {
        id: 16,
        title: 'Aquaman',
        year: 2018,
        genre: 'Action',
        boxOffice: 1148161807,
        poster: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg'
      },
      {
        id: 17,
        title: 'The Favourite',
        year: 2018,
        genre: 'Comedy',
        boxOffice: 95699870,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTg1NzQwMDQxNV5BMl5BanBnXkFtZTgwNDg2NDYyNjM@._V1_.jpg'
      },
      {
        id: 18,
        title: 'First Man',
        year: 2018,
        genre: 'Drama',
        boxOffice: 105059003,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg'
      },
      {
        id: 19,
        title: 'Spider-Man: Into the Spider-Verse',
        year: 2018,
        genre: 'Action',
        boxOffice: 375540831,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'
      },
      {
        id: 20,
        title: 'Get Out',
        year: 2017,
        genre: 'Thriller',
        boxOffice: 255408394,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg'
      },
      {
        id: 21,
        title: 'Crazy Rich Asians',
        year: 2018,
        genre: 'Romance',
        boxOffice: 238532921,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg'
      },
      {
        id: 22,
        title: 'Blade Runner 2049',
        year: 2017,
        genre: 'Science Fiction',
        boxOffice: 260501227,
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/07c231f2775f4ece93b1af53e5009298_5e9d1433-5ebd-4343-956c-5478acce8afa_500x749.jpg?v=1573618953'
      },
      {
        id: 23,
        title: 'A Quiet Place',
        year: 2018,
        genre: 'Thriller',
        boxOffice: 340939282,
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f7a4da2bb6656a274f337835bebe7357_467f2cee-9dbe-4c43-bcc8-7fc7d4c07d6b_500x749.jpg?v=1573653983'
      },
      {
        id: 24,
        title: 'To All the Boys I\'ve Loved Before',
        year: 2018,
        genre: 'Romance',
        boxOffice: 0.031,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjM1NjM4NTA1NV5BMl5BanBnXkFtZTgwNTI5MDMxNjM@._V1_.jpg'
      },
      {
        id: 25,
        title: 'Ready Player One',
        year: 2018,
        genre: 'Science Fiction',
        boxOffice: 582890172,
        poster: 'https://m.media-amazon.com/images/I/71NaQGqIhAL.jpg'
      },
      {
        id: 26,
        title: 'Split',
        year: 2017,
        genre: 'Thriller',
        boxOffice: 278964806,
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/501b296f42c399fe90f5ba4b5b2379c4_b4d02cdb-53a1-47fc-bad9-8d4675686673_500x749.jpg?v=1573594949'
      },
      {
        id: 27,
        title: 'The Shape of Water',
        year: 2017,
        genre: 'Romance',
        boxOffice: 195243464,
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/3ee28f0781132b5e19ddd28628f29289_07932f11-5f00-43c5-a807-e6ff5f3a9654_500x749.jpg?v=1573587231'
      },
      {
        id: 28,
        title: 'Ad Astra',
        year: 2019,
        genre: 'Science Fiction',
        boxOffice: 133501987,
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/27736ddf68283ef77c00ad4686acb304_500x749.jpg?v=1573572644'
      },
      {
        id: 29,
        title: 'Us',
        year: 2019,
        genre: 'Thriller',
        boxOffice: 255102263,
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/aad1f770612625b6f5ec5b7031a77d37_a32e3064-8042-477c-a177-022160b01a47_500x749.jpg?v=1573591328'
      }
  ];
  
  export default movies;