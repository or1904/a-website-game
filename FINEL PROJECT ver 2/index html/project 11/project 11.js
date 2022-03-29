function next()
{
    var picture = document.getElementById("pic");
    var fullPicImage = document.getElementById("pic").src;
    var picImage = fullPicImage.substring(fullPicImage.lastIndexOf('pictures'),(fullPicImage.lastIndexOf('png')+3));
    var text = document.getElementById("text");
    var bark = new Audio("barking.mp3");
    switch (picImage)
    {
        case "pictures/dog.png":
            picture.src = "pictures/sleeping%20dog.png";
            text.innerHTML = '"Zzz..."'
        break;
        case "pictures/sleeping%20dog.png":
            picture.src = "pictures/troll%20dog.png";
            text.innerHTML = '"Cool bark"';
            bark.play();
        break;
        case "pictures/troll%20dog.png":
            picture.src = "pictures/real%20dog.jpg";
            text.innerHTML = '"Real bark"';
            bark.play();
        break;
        default:
            picture.src = "pictures/dog.png";
            text.innerHTML = '"Best game ever"';
            bark.play();
    }
    var bark = new Audio("barking.mp3");
}