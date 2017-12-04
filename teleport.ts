const magik = magikcraft.io;

function teleport(name = "defult.place") {
    const there = magik.memento.getItem(name);
    if (place) {
        magik.ianuae(place);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
