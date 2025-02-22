const funFacts = [
    {
        "fact": "Honey Never Spoils",
        "description": "Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible."
    },
    {
        "fact": "Bananas are Berries",
        "description": "Botanically speaking, bananas are classified as berries, while strawberries are not!"
    },
    {
        "fact": "Octopuses Have Three Hearts",
        "description": "Two pump blood to the gills, while the third pumps it to the rest of the body."
    },
    {
        "fact": "Wombat Poop is Cube-Shaped",
        "description": "This unique shape prevents the poop from rolling away, marking their territory effectively."
    },
    {
        "fact": "A Day on Venus",
        "description": "A single day on Venus (the time it takes to rotate once on its axis) is longer than a year on Venus (the time it takes to orbit the Sun)."
    }
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const selectedFact = funFacts[randomIndex];
    document.getElementById('fact').innerText = selectedFact.fact + ": " + selectedFact.description;
}
