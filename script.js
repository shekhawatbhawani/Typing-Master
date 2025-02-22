const randomParagraphs = [
  "The morning sun cast a golden glow over the quiet village. Birds chirped merrily, and the breeze carried the scent of fresh dew. The villagers, rising early, began their daily chores with smiles. The children played near the riverbank, skipping stones and laughing. By noon, the market bustled with activity. Vendors called out their goods—fruits, vegetables, and handmade crafts. In the evening, the sky turned a brilliant orange, and families gathered around the fire, sharing stories. As night fell, the stars twinkled above, and the village lay still, peaceful in its slumber under the watchful eye of the moon.",

  "In the dense forest, the rustling of leaves filled the air. Squirrels darted between trees, gathering acorns for winter. The path through the woods was narrow but well-trodden, a sign that many had walked this way before. The sunlight barely pierced the thick canopy above, creating a cool, shaded atmosphere. Birds called to each other, their melodies blending into the hum of nature. A small stream trickled nearby, its clear water reflecting the green of the forest. As the day went on, the forest remained alive with activity, yet there was an undeniable calm that enveloped everything.",

  "The seaside town was alive with the sounds of crashing waves and the calls of seagulls. Fishermen mended their nets, preparing for the next day’s catch. Children ran along the beach, collecting seashells and building sandcastles. The salty air was refreshing, and the ocean stretched out endlessly before them. As the sun set, painting the sky in hues of pink and purple, the town grew quieter. The lighthouse on the cliff began its nightly watch, its light sweeping across the water. The sea, once loud and energetic, now whispered softly as night descended upon the tranquil shore.",

  "Autumn had arrived, and the world was a canvas of reds, oranges, and yellows. The leaves crunched underfoot as people walked through the park, enjoying the crisp air. Children jumped into piles of leaves, their laughter echoing through the trees. Squirrels scurried around, gathering the last of the season’s acorns. The smell of freshly baked apple pies wafted from nearby homes, a reminder that harvest time was near. As the sun set, the sky turned a deep amber, and a gentle breeze stirred the leaves, sending them dancing through the air. It was a perfect autumn day.",

  "The city was always bustling, no matter the time of day. Cars honked as they navigated the crowded streets, and people hurried along the sidewalks, each with their own destination. Street vendors sold hot coffee and pastries to passersby, the aroma filling the air. Skyscrapers towered above, their windows reflecting the sunlight. In the park, a few people sat on benches, taking a break from the busy day. The pigeons pecked at crumbs on the ground, oblivious to the chaos around them. As evening approached, the city lights began to flicker on, creating a dazzling display of neon and glow.",

  "In the heart of the desert, the sand stretched for miles in every direction. The sun blazed overhead, casting long shadows from the few rocks and shrubs that dotted the landscape. A caravan of camels made its way slowly across the dunes, their riders wrapped in cloth to protect themselves from the heat. The wind occasionally picked up, sending swirls of sand into the air. Despite the harsh conditions, the desert held a certain beauty. The vastness of the space, the silence, and the shimmering heat waves created a scene both desolate and awe-inspiring. It was a land of extremes.",

  "The mountains rose majestically in the distance, their peaks covered in snow. The air was cool and fresh, with the scent of pine trees all around. A narrow trail wound its way up the mountain, leading hikers through dense forests and rocky terrain. Along the way, the sound of rushing water from a nearby stream provided a peaceful backdrop. Birds soared overhead, and occasionally, a deer could be seen in the distance. As the hikers reached the summit, the view took their breath away. Below them, the valley stretched out, and beyond that, more mountains faded into the horizon.",

  "The small cottage sat at the edge of the woods, surrounded by wildflowers. Smoke curled from the chimney, and the smell of fresh bread wafted through the open window. Inside, a fire crackled in the hearth, casting a warm glow across the room. The old woman sat in her rocking chair, knitting quietly. A cat slept by her feet, content in the warmth of the fire. Outside, the sun began to set, and the sky turned a soft pink. The trees rustled in the evening breeze, and the first stars appeared in the sky. It was a peaceful, quiet evening.",

  "The ship sailed steadily across the open sea, its sails billowing in the wind. The crew moved about the deck, busy with their tasks, while the captain stood at the helm, his eyes fixed on the horizon. The water was calm, and the only sound was the creaking of the ship and the gentle splash of the waves against the hull. Seagulls followed the ship, occasionally diving to catch fish. As the sun began to set, the sky turned a deep orange, and the sea mirrored its color. The ship sailed on, into the night, with the stars as its guide.",

  "The garden was in full bloom, with flowers of every color swaying gently in the breeze. Bees buzzed from blossom to blossom, collecting nectar, while butterflies flitted about, their wings flashing in the sunlight. A small stone path wound through the garden, leading to a bench under a tall oak tree. The sound of a nearby fountain added to the peaceful atmosphere. Birds chirped in the trees, and the occasional rabbit could be seen hopping through the grass. It was a place of tranquility, where time seemed to slow down, and the beauty of nature could be fully appreciated.",

  "The bustling market was a feast for the senses. The smell of spices and fresh produce filled the air, while vendors called out their wares. People moved through the narrow aisles, examining colorful fabrics, intricate jewelry, and handmade pottery. Children ran between the stalls, laughing as they dodged through the crowds. Musicians played lively tunes, adding to the vibrant atmosphere. As the sun rose higher in the sky, the market became even busier. Despite the chaos, there was a sense of community, as people bartered and traded, sharing stories and laughter amidst the hustle and bustle of the day.",

  "The snowfall was light at first, tiny flakes drifting down from the gray sky. As the day went on, the snow began to fall more heavily, covering the ground in a thick, white blanket. The world seemed to slow down, muffled by the snow. Children bundled up in coats and scarves, ran outside to build snowmen and have snowball fights. The air was crisp, and their laughter echoed in the quiet streets. By evening, the snow had stopped, and the world was still and peaceful, the only sound the crunch of footsteps on the fresh snow.",

  "The jungle was alive with sound. Birds called from the treetops, and the distant roar of a waterfall could be heard through the thick foliage. The air was humid, and the smell of damp earth filled the senses. A narrow path wound through the jungle, barely visible among the dense undergrowth. Insects buzzed around, and the occasional rustle of leaves signaled the movement of animals. Despite the heat and the constant noise, there was a sense of adventure in the air. The jungle was full of secrets, waiting to be discovered by those brave enough to explore its depths.",

  "The old library was a treasure trove of knowledge. Dusty shelves stretched from floor to ceiling, filled with books of every kind. The smell of aged paper and leather filled the air, and the soft glow of lamps created a cozy atmosphere. A few people sat at the large wooden tables, lost in their books. The librarian moved quietly between the shelves, placing returned books back in their rightful places. It was a place of quiet study, where time seemed to stand still, and the outside world faded away. In the library, one could travel to any place or time.",

  "The storm rolled in quickly, dark clouds gathering on the horizon. The wind picked up, whipping through the trees, and the first drops of rain began to fall. Soon, the rain was pouring down, turning the streets into rivers. People hurried for shelter, their umbrellas turned inside out by the wind. Thunder rumbled in the distance, and lightning flashed across the sky. Despite the chaos, there was a certain beauty to the storm. The air was electric, and the world felt alive with energy. As quickly as it had come, the storm passed, leaving the air fresh and cool.",

  "The carnival was in full swing, with rides and games everywhere you looked. The smell of popcorn and cotton candy filled the air, and the sound of laughter and excitement echoed through the grounds. Children ran from ride to ride, their faces lit up with joy. The Ferris wheel turned slowly, offering a view of the entire carnival. As the sun set, the lights of the rides and booths created a dazzling display of color. The carnival was a place of fun and excitement, where the worries of the world seemed to disappear, at least for a little while.",

  "The river flowed gently through the valley, its waters clear and cool. The sound of the water moving over the rocks was soothing, and the air was fresh with the scent of pine trees. A small wooden bridge crossed the river, leading to a path that wound through the forest. Birds chirped in the trees, and the occasional fish could be seen swimming in the shallow water. It was a peaceful place, far from the noise and bustle of the city. Here, in the heart of nature, one could find a moment of calm and clarity, away from the distractions of everyday life.",

  "The lighthouse stood tall on the cliff, its light sweeping across the dark ocean. The sound of the waves crashing against the rocks below was constant, a reminder of the power of the sea. The lighthouse keeper, an old man with a weathered face, tended to the light, ensuring it burned brightly through the night. He had lived in the lighthouse for years, watching over the ships that passed by. The isolation didn’t bother him; he found peace in the solitude. The lighthouse was his home, and the sea was his constant companion, wild and untamed.",

  "The meadow was a sea of wildflowers, their colors vibrant under the midday sun. Bees buzzed from flower to flower, collecting nectar, while butterflies danced on the gentle breeze. A small stream meandered through the meadow, its water sparkling in the sunlight. The air was filled with the sweet scent of flowers and the sound of birds singing in the trees that bordered the meadow. It was a peaceful place, untouched by the hustle and bustle of the outside world. In the meadow, time seemed to slow down, and the simple beauty of nature took center stage.",

  "The old farmhouse had stood on the hill for generations. Its white paint was peeling, and the roof sagged in places, but it had a certain charm. The fields around it were golden with wheat, swaying gently in the breeze. The farmer, a man with hands worn from years of work, tended to his crops with care. Inside, the smell of homemade bread filled the kitchen, and the sound of the radio played softly in the background. The farmhouse was more than just a building; it was a home, full of memories and stories passed down through the years.",
];

let time = document.getElementById("timer");
let textArea = document.querySelector("#textArea");
let para = document.getElementById("para");
let submit = document.getElementById("submit");
let wordRange = document.getElementById("wordRange");

let modalTotalWords = document.getElementById("modalTotalWords");
let modalCorrectWords = document.getElementById("modalCorrectWords");
let modalIncorrectWords = document.getElementById("modalIncorrectWords");
let resultModal = document.getElementById("resultModal");
let closeModal = document.getElementById("closeModal");

let arr = randomParagraphs[0].split(" ");
let timeStart = false;
let timer = null;

wordRange.addEventListener("input", (e) => {
  let length = parseInt(e.target.value);
  setParagraph(length);
});

function setParagraph(length) {
  let newPara =
    randomParagraphs[Math.floor(Math.random() * randomParagraphs.length)];
  arr = newPara.split(" ").slice(0, length);
  para.textContent = arr.join(" ");

  textArea.value = "";
  textArea.readOnly = false;
  clearInterval(timer);
  time.textContent = 60;
  timeStart = false;
}
setParagraph(20);

textArea.addEventListener("input", () => {
  if (!timeStart) {
    timeStart = true;
    timer = setInterval(() => {
      if (time.textContent > 0) {
        time.textContent = parseInt(time.textContent) - 1;
      } else {
        textArea.readOnly = true;
        clearInterval(timer);
      }
    }, 1000);
  }
});

submit.addEventListener("click", () => {
  let userInput = textArea.value.trim().split(" ");
  let correct = 0;
  let incorrect = 0;

  userInput.forEach((word, i) => {
    if (word === arr[i]) {
      correct++;
    } else {
      incorrect++;
    }
  });

  modalTotalWords.textContent = userInput.length;
  modalCorrectWords.textContent = correct;
  modalIncorrectWords.textContent = incorrect;
  resultModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  resultModal.classList.add("hidden");
});
