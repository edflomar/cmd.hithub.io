const seccionImagenes = document.getElementById("imagenes");
const arregloImagenes = [
    "dog.jpg", "cat.jpg", "cup.jpg", "table.jpg", "box.jpg",
    "fridge.jpg", "skillet.jpg", "napkin.jpg", "hat.jpg", "ball.jpg",
    "tree.jpg", "stair.jpg", "chair.jpg", "door.jpg", "pencil.jpg",
    "book.jpg", "headset.jpg", "plate.jpg", "spoon.jpg", "telephone.jpg",
];
const palabra=[
    "DOG", "CAT", "CUP", "TABLE", "BOX",
    "FRIDGE", "SKILLET", "NAPKIN", "HAT", "BALL",
    "TREE", "STAIR", "CHAIR", "DOOR", "PENCIL",
    "BOOK", "HEADSET", "PLATE", "SPOON", "TELEPHONE",
];

const descripcion=[
    "The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.",
    "A small animal with fur, four legs, a tail, and claws, usually kept as a pet or for catching mice",
    "A small, round container, often with a handle, used for drinking tea, coffee, etc.",
    "A flat surface, usually supported by four legs, used for putting things on",
    "A container made of wood, thick card, metal, etc. with a flat stiff base and sides and often a lid (= cover), used especially for holding solid things",
    "A piece of electrical equipment in which food is kept cold so that it stays fresh",
    "A large shallow pan with a long handle, used for frying food in",
    "A piece of cloth or paper used at meals for protecting your clothes and cleaning your lips and fingers",
    "A piece of clothing made to fit the head, often with a brim (= a flat edge that sticks out), usually worn out of doors",
    "A round object used for throwing, hitting or kicking in games and sports",
    "A tall plant that can live a long time. Trees have a thick central wooden trunk from which branches grow, usually with leaves on them",
    "A set of steps built between two floors inside a building",
    "A piece of furniture for one person to sit on, with a back, a seat and four legs",
    "A piece of wood, glass, etc. that is opened and closed so that people can get in and out of a room, building, car, etc.; a similar thing in a cupboard",
    "A narrow piece of wood, or a metal or plastic case, containing a black or coloured substance, used for drawing or writing",
    "A set of printed pages that are fastened inside a cover so that you can turn them and read them",
    "A pair of headphones, especially one with a microphone attached to it",
    "A flat, usually round, dish that you put food on",
    "A tool that has a handle with a shallow bowl at the end, used for mixing, serving and eating food",
    "A system for talking to somebody else over long distances, using wires or radio; a machine used for this",
]

const BR=[
    "/dɒɡ/", "/kaet/", "/kʌp/", "/ˈteɪbl/", "/bɒks/",
    "/frɪdʒ/", "/ˈskɪlɪt/", "/ˈnæpkɪn/", "/hæt/", "/bɔːl/",
    "/triː/", "/steə(r)/", "/tʃeə(r)/", "/dɔː(r)/", "/ˈpensl/",
    "/bʊk/", "/ˈhedset/", "/pleɪt/", "/spuːn/", "/ˈtelɪfəʊn/",
]

const AM=[
     "/dɑːɡ/", "/kaet/", "/kʌp/", "/ˈteɪbl/", "/bɑːks/",
     "/frɪdʒ/", "/ˈskɪlɪt/", "/ˈnæpkɪn/", "/hæt/", "/bɔːl/",
     "/triː/", "/ster/", "/tʃer/", "/dɔːr/", "/ˈpensl/",
     "/bʊk/", "/ˈhedset/", "/pleɪt/", "/spuːn/", "/ˈtelɪfəʊn/",
]

let id=0;
arregloImagenes.forEach(function (imagen) {
    let img = document.createElement('img');
    img.id = `img${id}`;
    img.src = `img/${imagen}`;
    img.style.width = "200px";
    img.style.height = "100px";
    seccionImagenes.appendChild(img);
    img.addEventListener("click", function (e) {
        e.preventDefault();
        const imagenGrande = document.getElementById("imagen_grande");
        imagenGrande.src=`img/${imagen}`;
        const indice=arregloImagenes.indexOf(`${imagen}`);
        const lblSalida=document.getElementById("salida");
        lblSalida.innerHTML=`
            <h2>${palabra[indice]}</h2>
            <p>${descripcion[indice]}</p>
            <div id="americano">AM: ${AM[indice]}</div>
            <div id="britanico">BR: ${BR[indice]}</div>
        `;
    });
    id++;
});