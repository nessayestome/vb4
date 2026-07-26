const BOOKS = [
  {
    id: 'b1', type: 'book',
    title: 'Three-Body Problem', author: 'Cixin Liu',
    coverLabel: 'TB', rating: 5,
    shortReview: 'A cosmic sociology that makes your spine tingle. The Dark Forest theory is unforgettable.',
    tags: ['Sci-Fi', 'Chinese Lit', 'Hugo'],
    reflection: 'Completely overwhelmed on first read. The scale of the universe Liu constructs is staggering. The line "Give civilization time, not give time civilization" stayed with me for weeks.',
    excerpt: 'Give civilization time, rather than give time civilization.',
    dateAdded: '2024-03-15'
  },
  {
    id: 'b2', type: 'book',
    title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez',
    coverLabel: 'OH', rating: 4.5,
    shortReview: 'The pinnacle of magical realism. The Buendia family destiny spirals through seven generations.',
    tags: ['Latin American', 'Classic', 'Magic Realism'],
    reflection: 'When the last Aureliano deciphers the parchment, the full weight of destiny hits all at once. Marquez\'s narrative density is breathtaking.',
    excerpt: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendia was to remember that distant afternoon when his father took him to discover ice.',
    dateAdded: '2024-02-28'
  },
  {
    id: 'b3', type: 'book',
    title: '1984', author: 'George Orwell',
    coverLabel: '84', rating: 4,
    shortReview: 'The definitive dystopia. Winston\'s rebellion and final surrender are devastating.',
    tags: ['Dystopian', 'Classic', 'Political'],
    reflection: 'Orwell isn\'t writing science fiction — he\'s writing reality. The most unsettling part is realizing how close this world already is.',
    excerpt: 'Who controls the past controls the future. Who controls the present controls the past.',
    dateAdded: '2024-01-20'
  },
  {
    id: 'b4', type: 'book',
    title: 'Norwegian Wood', author: 'Haruki Murakami',
    coverLabel: 'NW', rating: 4.5,
    shortReview: 'Youth, death, and love rendered with Murakami\'s strange, crystalline clarity.',
    tags: ['Japanese Lit', 'Coming-of-Age', 'Romance'],
    reflection: 'Murakami captures loneliness like no one else. Naoko and Midori feel like two different life paths, and Watanabe\'s hesitation between them might be every young person\'s story.',
    excerpt: 'Death exists not as the opposite of life, but as a part of life.',
    dateAdded: '2024-01-08'
  },
  {
    id: 'b5', type: 'book',
    title: 'The Little Prince', author: 'Antoine de Saint-Exupery',
    coverLabel: 'LP', rating: 5,
    shortReview: 'All grown-ups were once children, though few remember it.',
    tags: ['Fable', 'French Lit', 'Philosophy'],
    reflection: 'I reread this every few years and find something new each time. As a child it was a fairy tale; as an adult it\'s a mirror held up to the soul.',
    excerpt: 'It is only with the heart that one can see rightly. What is essential is invisible to the eye.',
    dateAdded: '2023-12-22'
  },
  {
    id: 'b6', type: 'book',
    title: 'The Stranger', author: 'Albert Camus',
    coverLabel: 'TS', rating: 4,
    shortReview: 'Meursault\'s indifference is the most honest response to an absurd world.',
    tags: ['Existentialism', 'French Lit', 'Philosophy'],
    reflection: 'Camus writes with restraint but devastating force. Meursault is condemned not for killing a man, but for not crying at his mother\'s funeral.',
    excerpt: 'Mother died today. Or maybe yesterday — I don\'t know.',
    dateAdded: '2023-11-15'
  }
];

const MEDIA = [
  {
    id: 'm1', type: 'movie',
    title: 'The Shawshank Redemption', director: 'Frank Darabont',
    coverLabel: 'SR', rating: 5,
    shortReview: 'Hope is a good thing — maybe the best of things. And no good thing ever dies.',
    tags: ['Drama', 'Classic', 'Hope'],
    reflection: 'Every rewatch, Andy\'s persistence moves me. Twenty years to carve through what Red thought would take six hundred. Not luck — purpose, planning, patience.',
    highlightScene: 'Andy emerging from the sewer pipe, arms spread in the rain — the ultimate image of freedom.',
    dateAdded: '2024-03-10'
  },
  {
    id: 'm2', type: 'movie',
    title: 'Spirited Away', director: 'Hayao Miyazaki',
    coverLabel: 'SA', rating: 5,
    shortReview: 'Miyazaki conjures a complete spirit world where every creature has flesh and blood.',
    tags: ['Animation', 'Japanese', 'Fantasy'],
    reflection: 'No-Face\'s loneliness, Haku\'s forgotten name, Yubaba\'s greed — every character reflects real humanity. Miyazaki\'s brilliance: there are no villains, only lost souls.',
    highlightScene: 'Chihiro and No-Face on the sea train, endless water stretching beyond the window — life is a one-way journey.',
    dateAdded: '2024-02-14'
  },
  {
    id: 'm3', type: 'tv',
    title: 'Game of Thrones', director: 'HBO',
    coverLabel: 'GT', rating: 4.5,
    shortReview: 'Seasons 1-4 are masterful. The moment you think Ned is the hero, his head rolls.',
    tags: ['Fantasy', 'Epic', 'HBO'],
    reflection: 'GoT taught me one lesson: never get attached to any character. Martin kills protagonists faster than most authors kill extras.',
    highlightScene: 'The Red Wedding. No warning, no escape — Robb and Catelyn slaughtered mid-feast. A seismic shift in television storytelling.',
    dateAdded: '2024-01-30'
  },
  {
    id: 'm4', type: 'movie',
    title: 'Inception', director: 'Christopher Nolan',
    coverLabel: 'IN', rating: 4.5,
    shortReview: 'Nolan\'s cerebral ambition and technical execution align perfectly across nested dreamscapes.',
    tags: ['Sci-Fi', 'Thriller', 'Mind-Bending'],
    reflection: 'I spent days wondering if the top stops spinning. But that\'s not the point — Cobb chooses not to look. Choosing to believe this is reality is the happy ending.',
    highlightScene: 'Cobb finding aged Saito in limbo — "Have you come to kill me?" The weight of decades compressed into moments.',
    dateAdded: '2024-01-12'
  },
  {
    id: 'm5', type: 'tv',
    title: 'Ming Dynasty 1566', director: 'Zhang Li',
    coverLabel: 'MD', rating: 5,
    shortReview: 'The pinnacle of Chinese historical drama. Every line of dialogue rewards close reading.',
    tags: ['Historical', 'Chinese Drama', 'Political'],
    reflection: 'Hai Rui\'s impeachment memorial episode I\'ve watched three times. The Jiajing Emperor hasn\'t held court in thirty years, yet controls everything. This isn\'t palace intrigue — it\'s political philosophy on screen.',
    highlightScene: 'The night before submitting his memorial, Hai Rui burns incense, bathes, and writes "The Empire\'s First Matter" — knowing it means certain death. True courage.',
    dateAdded: '2023-12-05'
  },
  {
    id: 'm6', type: 'movie',
    title: 'Yi Yi', director: 'Edward Yang',
    coverLabel: 'YY', rating: 5,
    shortReview: 'Yang tells a family\'s entire life in three hours — quiet, devastating, luminous.',
    tags: ['Art House', 'Family', 'Taiwanese'],
    reflection: 'Yang-Yang\'s final words to his grandmother made me weep. "I feel like I\'ve gotten old too." A seven-year-old speaking the truth everyone else avoids.',
    highlightScene: 'Yang-Yang photographs people\'s backs — "Because you can\'t see it yourself, so I\'ll show you." A child\'s perspective is always the purest philosophy.',
    dateAdded: '2023-11-20'
  }
];

const NOTES = [
  { id:'n1', content:'Finished The Three-Body Problem trilogy today. Everyone condemns Cheng Xin\'s choice, but I understand her. Not everyone has the courage to push the button — that\'s the human dilemma Liu wanted to explore.', color:0, rotation:-2 },
  { id:'n2', content:'Rewatching Spirited Away, I realize I understood nothing as a child. No-Face isn\'t a villain — he\'s just lonely. His whispered "I\'m so lonely" might be the saddest line in the whole film.', color:1, rotation:3 },
  { id:'n3', content:'"The creation of something new is not accomplished by the intellect but by the play instinct acting from inner necessity. The creative mind plays with the objects it loves." — Carl Jung', color:2, rotation:-1 },
  { id:'n4', content:'Why do we cry over fictional stories but walk past real suffering unmoved? Perhaps fiction gives us a safe distance to actually feel.', color:3, rotation:4 },
  { id:'n5', content:'The reason behind this archive: I don\'t want the books I\'ve read and films I\'ve watched to simply vanish from memory. Every reading, every viewing is a journey of the soul worth preserving.', color:4, rotation:-3 },
  { id:'n6', content:'"You had a pride that was wounded but not defeated. Perhaps that is what transformed your prettiness into beauty." — Mary Renault, The Persian Boy', color:5, rotation:2 },
  { id:'n7', content:'A line from Ming Dynasty 1566 I keep revisiting: "The civil officials wear birds embroidered on their robes, the military officials wear beasts. Dressed in these skins, which of us is not a beast in human clothing?" Absolutely devastating.', color:0, rotation:-4 },
  { id:'n8', content:'"Freedom would lie not in choosing between black and white, but in the ability to reject such prescribed choices." — Theodor Adorno', color:2, rotation:1 },
  { id:'n9', content:'Saw a girl reading One Hundred Years of Solitude on the subway today. In an era of short videos and scrolling, someone still chooses Marquez. Literature isn\'t dying.', color:1, rotation:-2 },
  { id:'n10', content:'After Yi Yi, I keep thinking: do we all live on the side of ourselves we can\'t see? Others can see the back of our heads, but we never can. This is Edward Yang\'s "other half."', color:5, rotation:3 },
  { id:'n11', content:'On repeat: Ryuichi Sakamoto — Merry Christmas Mr. Lawrence. The melancholy isn\'t in the melody; it lives in the silence between the chords.', color:3, rotation:-1 },
  { id:'n12', content:'"The worst thing in the world is to be complete and perfect. Look at the moon — once it is full, it begins to wane. The fruit on the tree — once it ripens completely, it falls." — Mo Yan, Sandalwood Death', color:4, rotation:2 }
];
