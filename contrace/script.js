var list = document.getElementById("list");
var cons = [
    {
        name: "Big Dipper/Ursa Major",
        meaning: "The Big Bear"
    },
    {
        name: "Orion",
        meaning: "The Hunter"
    },
    {
        name: "Little Dipper/Ursa Minor",
        meaning: "The Little Bear"
    },
    {
        name: "Scorpius",
        meaning: "The Scorpion"
    },
    {
        name: "Taurus",
        meaning: "The Bull"
    },
    {
        name: "Cancer",
        meaning: "The Crab"
    },
    {
        name: "Leo",
        meaning: "The Lion"
    },
        {
        name: "Leo Minor",
        meaning: "The Little Lion"
    },
    {
        name: "Aquarius",
        meaning: "The Water Bearer"
    },
    {
        name: "Aries",
        meaning: "The Ram"
    },
    {
        name: "Sagittarius",
        meaning: "The Archer"
    },
    {
        name: "Sagita",
        meaning: "The Arrow"
    },
    {
        name: "Capricorn/Capricornus",
        meaning: "The Sea Goat"
    },
    {
        name: "Libra",
        meaning: "The Scale/The Balance"
    },
    {
        name: "Virgo",
        meaning: "Virgin",
    },
    {
        name: "Gemini",
        meaning: "The Twins"
    },
    {
        name: "Andromeda",
        meaning: "The Daugter of Cepheus"
    },
    {
        name: "Cepheus",
        meaning: "King of Ethiopia/Andromeda's Father"
    },
     {
        name: "Cassiopeia",
        meaning: "Queen of Ethiopia/Andromeda's Mother"
    },
    {
        name: "Antlia",
        meaning: "The Air Pump"
    },
    {
        name: "Apus",
        meaning: "The Bird of Paradise"
    },
    {
        name: "Aquila",
        meaning: "The Eagle"
    },
    {
        name: "Ara",
        meaning: "The Altar"
    },
    {
        name: "Auriga",
        meaning: "The Charioteer"
    },
    {
        name: "Bootes",
        meaning: "The Herdsman"
    },
    {
        name: "Caelum",
        meaning: "The Chisel"
    },
    {
        name: "Camelopardis",
        meaning: "The Giraffe"
    },
    {
        name: "Canes Venatici",
        meaning: "The Hunting Dogs"
    },
    {
        name: "Canis Major",
        meaning: "The Big Dog"
    },
    {
        name: "Canis Minor",
        meaning: "The Little Dog"
    },
    {
        name: "Centaurus",
        meaning: "The Centaur"
    },
    {
        name: "Cetus",
        meaning: "The Whale"
    },
    {
        name: "Chamaeleon",
        meaning: "The Chameleon"
    },
    {
        name: "Circinus",
        meaning: "The Compass"
    },
        {
        name: "Puppis",
        meaning: "The Ship's Stern/The Poop Deck(LOL)"
    },
    {
        name: "Pyxis",
        meaning: "The Ship's Compass(Another Compass, seriously, what is with the repeats?)"
    },
    {
        name: "Carina",
        meaning: "The Ship's Keel"
    },
        {
        name: "Vela",
        meaning: "The Ship's Sails(They just love ships, don't they? Sigh.)"
    },
    {
        name: "Coma Berenices",
        meaning: "Berenices's Hair"
    },
    {
        name: "Corona Australis",
        meaning: "The Southern Crown"
    },
    {
        name: "Corona Borealis",
        meaning: "The Northern Crown"
    },
    {
        name: "Corvus",
        meaning: "The Crow"
    },
    {
        name: "Columba",
        meaning: "The Dove"
    },
     {
        name: "Cygnus",
        meaning: "The Swan(Birds!)"
    },
    {
        name: "Grus",
        meaning: "The Crane(More birds!)"
    },
        {
        name: "Tuscana",
        meaning: "The Toucan(But wait, there's more!)"
    },
    {
        name: "Crater",
        meaning: "The Cup"
    },
    {
        name: "Crux",
        meaning: "The Cross"
    },
    {
        name: "Delphinus",
        meaning: "The Dolphin/The Porpoise"
    },
    {
        name: "Dorado",
        meaning: "The Swordfish"
    },
        {
        name: "Volans",
        meaning: "The Flying Fish(More fish!)"
    },
    {
        name: "Pisces",
        meaning: "The Two Fishes"
    },
    {
        name: "Piscis Austrinus",
        meaning: "The Southern Fish(With the repeats! This fish isn't part of Pisces though, it doesn't have a Piscis Borealis partner either.)"
    },
    {
        name: "Draco",
        meaning: "The Dragon"
    },
    {
        name: "Equuleus",
        meaning: "The Little Horse"
    },
    {
        name: "Eridanus",
        meaning: "The River"
    },
    {
        name: "Fornax",
        meaning: "The Furnace"
    },

    {
        name: "Hercules/Heracles",
        meaning: "The Hero"
    },
        {
        name: "Perseus",
        meaning: "The Hero(Another one, they weren't friends by the way, but technically they were cousins, since their fathers were brothers. :)"
    },
    {
        name: "Horologium",
        meaning: "The Clock"
    },
    {
        name: "Hydra",
        meaning: "The Big Water Serpent"
    },
    {
        name: "Hydrus",
        meaning: "The Little Water Serpent(Repeats!)"
    },
    {
        name: "Indus",
        meaning: "The Native American"
    },
    {
        name: "Lacerta",
        meaning: "The Lizard"
    },
    {
        name: "Lepus",
        meaning: "The Hare"
    },
    {
        name: "Lupus",
        meaning: "The Wolf"
    },
    {
        name: "Lynx",
        meaning: "The Lynx(duh)"
    },
    {
        name: "Mensa",
        meaning: "The Table"
    },
    {
        name: "Microscopium",
        meaning: "The Microscope"
    },
    {
        name: "Monoceros",
        meaning: "The Unicorn"
    },
    {
        name: "Pegasus",
        meaning: "The Pegasus"
    },
    {
        name: "Musca",
        meaning: "The Fly"
    },
    {
        name: "Norma",
        meaning: "The Carpenter's Square"
    },
    {
        name: "Octans",
        meaning: "The Octant"
    },
    {
        name: "Ophiuchus",
        meaning: "The Serpent Bearer"
    },
    {
        name: "Serpens",
        meaning: "The Serpent"
    },
    {
        name: "Pavo",
        meaning: "The Peacock"
    },
    {
        name: "Phoenix",
        meaning: "The Phoenix(duh, again)"
    },
    {
        name: "Pictor",
        meaning: "The Easel"
    },
    {
        name: "Reticulum",
        meaning: "The Net/The Reticle"
    },
    {
        name: "Sculptor",
        meaning: "The Sculptor(I'll stop with the duh's.)"
    },
    {
        name: "Sextans",
        meaning: "The Sextant(Just like Octans!)"
    },
    {
        name: "Telescopium",
        meaning: "The Telescope(Reminds you of Microscopium, doesn't it?)"
    },
    {
        name: "Triangulum",
        meaning: "The Triangle(A bit like Reticulum.)"
    },
    {
        name: "Triangulum Australe",
        meaning: "The Southern Triangle(What'd I say about repeats? Smh)"
    },
    {
        name: "Vulpecula",
        meaning: "The Little Fox(Where's the big fox? Vulpecula's so lonely.)"
    },  
];
for(var i = 0; i < cons.length; i++){
    list.innerHTML += "<div class = 'con'><h1>"+cons[i].name+"</h1><p>"+cons[i].meaning+"</p></div>";
}