const bookCollection = [
    {
        author: "Agatha Christie",
        genre: "thriller",
        title: "And-Then-There-Were-None",
        synopsis: "First, there were ten - a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion. When they realize that murders are occurring as described in the rhyme, terror mounts. One by one they fall prey. Before the weekend is out, there will be none. Who has choreographed this dastardly scheme? And who will be left to tell the tale? Only the dead are above suspicion.",  
        cover: "./Collection-project/And-Then-There-Were-None.jpg",  
    },
    {
        author:"Robin Hobb",
        genre:"fantasy",
        title:"Ship of Magic",
        synopsis:"Wizardwood, a sentient wood."+
        "The most precious commodity in the world."+
        "Like many other legendary wares, it comes only from the Rain River Wilds."+
        
        "But how can one trade with the Rain Wilders, when only a liveship fashioned from wizardwood can negotiate the perilous waters of the Rain River? Rare and valuable a liveship will quicken only when three members, from successive generations, have died on board. The liveship Vivacia is about to undergo her quickening as Althea Vestrit's father is carried on deck in his death-throes. Althea waits for the ship that she loves more than anything else in the world to awaken. Only to discover that the Vivacia has been signed away in her father’s will to her brutal brother-in-law, Kyle Haven..."+
        
        "Others plot to win or steal a liveship. The Paragon, known by many as the Pariah, went mad, turned turtle, and drowned his crew. Now he lies blind, lonely, and broken on a deserted beach. But greedy men have designs to restore him, to sail the waters of the Rain Wild River once more.",
        cover:"./Collection-project/photos-book-covers/Ship-of-Magic.jpg",
    },
    {
        author:"Ricardo Semler",
        genre:"Memoir",
        title:"Maverick!",
        synopsis:"Semler turned his family's business, the aging Semco corporation of Brazil, into the most revolutionary business success story of our time. By eliminating uneeded layers of management and allowing employees unprecedented democracy in the workplace, he created a company that challenged the old ways and blazed a path to success in an uncertain economy.",
        cover:"./Collection-project/photos book covers/Maverick!.jpg",
    },
    {
        author:"Gail Carriger",
        genre:"Steampunk",
        title:"Etiquette & Espionage",
        synopsis:"It's one thing to learn to curtsy properly. It's quite another to learn to curtsy and throw a knife at the same time. Welcome to Finishing School."+

        "Fourteen-year-old Sophronia is a great trial to her poor mother. Sophronia is more interested in dismantling clocks and climbing trees than proper manners and the family can only hope that company never sees her atrocious curtsy. Mrs. Temminnick is desperate for her daughter to become a proper lady. So she enrolls Sophronia in Mademoiselle Geraldine's Finishing Academy for Young Ladies of Quality."+
        
        "But Sophronia soon realizes the school is not quite what her mother might have hoped. At Mademoiselle Geraldine's, young ladies learn to finish…everything. Certainly, they learn the fine arts of dance, dress, and etiquette, but the also learn to deal out death, diversion, and espionage in the politest possible ways, of course. Sophronia and her friends are in for a rousing first year's education.",
        cover:"./Collection-project/photos book covers/Etiquette-and-Espionage.jpg",
    },
    {
        author:"Stephenie Meyer",
        genre:"Science Fiction",
        title:"The Host",
        synopsis:"Our world has been invaded by an unseen enemy. Humans become hosts for these invaders, their minds taken over while their bodies remain intact and continue their lives apparently unchanged. Most of humanity has succumbed."+

        "When Melanie, one of the few remaining “wild” humans is captured, she is certain it is her end. Wanderer, the invading “soul” who has been given Melanie's body, was warned about the challenges of living inside a human: the overwhelming emotions, the glut of senses, the too vivid memories. But there was one difficulty Wanderer didn't expect: the former tenant of her body refusing to relinquish possession of her mind."+
        "Wanderer probes Melanie's thoughts, hoping to discover the whereabouts of the remaining human resistance. Instead, Melanie fills Wanderer's mind with visions of the man Melanie loves—Jared, a human who still lives in hiding. Unable to separate herself from her body's desires, Wanderer begins to yearn for a man she has been tasked with exposing. When outside forces make Wanderer and Melanie unwilling allies, they set off on a dangerous and uncertain search for the man they both love.",
        cover:"./Collection-project/photos book covers/the-host.jpg",
    },
    {
        author:"Antoine De Saint Exupéry",
        genre:"Tale",
        title:"The Little Prince",
        synopsis:"A pilot crashes in the Sahara Desert and encounters a strange young boy who calls himself the Little Prince. The Little Prince has traveled there from his home on a lonely, distant asteroid with a single rose. The story that follows is a beautiful and at times heartbreaking meditation on human nature.",
        cover:"./Collection-project/photos book covers/The-Little-Prince.jpg",
    },
];
console.log(bookCollection);

const newMain = document.createElement("main");
newMain.className = "mainPart";
const newSection = document.createElement("section");
newSection.className = "card";
const newImage = document.createElement("img");
newImage.className = "photo";
const newDiv = document.createElement("div");
newDiv.className = "info";
const newPtitle = document.createElement("p");
newPtitle.className = "title";
const newPauthor = document.createElement("p");
newPauthor.className = "author";
const newPgenre = document.createElement("p");
newPgenre.className = "genre";
const newPsynopsis = document.createElement("p");
newPsynopsis.className = "synopsis";
console.log(newMain)
console.log(newSection)
console.log(newImage)
console.log(newDiv)
console.log(newPtitle, newPauthor, newPgenre, newPsynopsis)


