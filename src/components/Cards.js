import { Card, Col, Image, Container} from "react-bootstrap"
export const Cards = ()=>{
    const peliculas =[{
        titulo: "Pocoyo",
        descripcion: "Pocoyo es una pelicula para niños que trata de las aventuras de un personaje llamado Pocoyo",
        portada: "https://th.bing.com/th/id/OIP.hEoERfCcJSOOk9vGQ5NV0QHaHa?rs=1&pid=ImgDetMain"
    },
    {
        titulo: "Spiderman",
        descripcion: "Spiderman es una pelicula que cuenta la historia de un superheroe llamado Peter Parker",
        portada: "https://th.bing.com/th/id/OIP.BFRyXEHSZNe8mP8NGllmJgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        titulo: "Batman",
        descripcion: "Batman es un superheroe que lucha contra los villanos de ciudad gotica",
        portada: "https://th.bing.com/th/id/OIP.a8FGxOjDkajfYkYo-Ak3sQHaHa?rs=1&pid=ImgDetMain"
    },
    {
        titulo: "Deadpool",
        descripcion: "Deadpool es un antiheroe que simplemente lucha contra el mundo para beneficio propio",
        portada: "https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2024/07/Hyz2rzqiOR.jpeg?impolicy=Resize&width=900"
    },
    {
        titulo: "Scream IV",
        descripcion: "Scream es un pelicula de terror y comedia que habla acerca de sucesos paranormales",
        portada: "https://www.revistaestilo.net/binrepository/900x900/0c0/0d0/none/179468266/DNFR/foto4-las-peli-culas-ma-s-esperadas_3775954_20230220152116.jpg"
    },
    {
        titulo: "Avengers",
        descripcion: "Avengers es un grupo se superheroes creado para defender al planeta tierra de los villanos",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYed2mbYwOBzOGADEfMuFWss0WSeAiMWATrg&s"
    },
    {
        titulo: "Guason",
        descripcion: "La pelicula de guason retrata la vida de una persona con un trastorno que termina siendo un asesino",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZh3H-1PJD1YbnzH_a2A6xeOFCWzf_vu-pw&s"
    },
    {
        titulo: "Demon slayer",
        descripcion: "Demon slayer retrata la vida de Tanjiro Kamado y de como se convierte en un asesiino de demonios para derrotar a Musan Kitbutsuji",
        portada: "https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg"
    },
    {
        titulo: "Interestelar",
        descripcion: "Interestelar nos cuenta el como es la vida cuando el planeta tierra esta a punto se ser inhabitable",
        portada: "https://m.media-amazon.com/images/I/71qzTzxzoCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        titulo: "Viernes 13",
        descripcion: "Viernes 13 es una pelicula de terror en el que unos jovenes huyen de Jason",
        portada: "https://musicart.xboxlive.com/7/dd095200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
    },
    {
        titulo: "Venom",
        descripcion: "Venom cuenta el como es la fusion de un simbionte con un humano",
        portada: "https://www.sonypictures.com.mx/sites/mexico/files/2021-12/venom-keyart-1400X2100.jpg"
    },
    {
        titulo: "Avatar",
        descripcion: "Avatar nos cuenta como es la vida de un humano siendo un avatar conviviendo con su tribu",
        portada: "https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg"
    },
    {
        titulo: "Rapidos y furiosos",
        descripcion: "Rapidos y furiosos retratan la vide de Dominic Toreto",
        portada: "https://musicart.xboxlive.com/7/ad2f6600-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
    },
    {
        titulo: "Garra",
        descripcion: "Garra cuenta el como un joven de españa logra su sueño de ser basquetbolista",
        portada: "https://www.aceprensa.com/wp-content/uploads/2022/06/garra-691x1024.jpg"
    },
    {
        titulo: "Star wars",
        descripcion: "Star wars nos cuenta como es la guerra en el espacio en la lucha contra la primera orden",
        portada: "https://play-lh.googleusercontent.com/kaGrEO-c5xXvZlk45lYcU8oQ8ODFcqPXumYLnYAHxJJr96qTVyLHFb41QZbEz-_GLg"
    },
    {
        titulo: "Harry Potter",
        descripcion: "Harry potter nos cuenta como es la vida en la universidad de Howarts",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2EKft1l0JaN7kGTgWPfLJNn2y569_jni2Q&s"
    },
    {
        titulo: "Pixeles",
        descripcion: "Pixeles cuenta la historio de como seria si los alienigenas nos atacaran el forma de videojuegos",
        portada: "https://play-lh.googleusercontent.com/priMsIloHRuAVUJXfP_aptcRkblBarDNZ1rhvi0hy9Fdf2kefA0XQzZ1byMbtutFoA8"
    },
    {
        titulo: "La purga",
        descripcion: "La purga nos cuenta el como seria si se permitiera hacer cualquier delito por un solo dia al año",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-PPhSvL1N18q7saYHZEC67I-Y7hTTa3pXHg&s"
    },
    {
        titulo: "Piratas del caribe",
        descripcion: "Piratas del caribe retrata la vida de Jack Sparrow",
        portada: "https://play-lh.googleusercontent.com/bQ3zYjBdjLWJRs_X199de4M3OMfADaIst9oTy_nNfOsRMLYwnaceARX4ydvF-JtPF3HDgg"
    },
    {
        titulo: "Lego movie",
        descripcion: "Lego movie literalmente es un pelicula de legos",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SIMLmkxH7XpWrH9YL1iOh9qxGwOmoa4K6w&s"
    },
    {
        titulo: "Gol",
        descripcion: "Gol cuenta la historia de como una persona comun y corriente se convierte en futbolista",
        portada: "https://m.media-amazon.com/images/S/pv-target-images/015a176994a8eeec63650cbb9ec3c918e9a49b1804f863ae27b2f31a11d4cc99.jpg"
    },
    {
        titulo: "Metegol",
        descripcion: "Metegol noc cuenta como unas pequeñas piezas de futbolito cobran vida para jugar futbol",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJ1SJotZlF-Hzq3zDfvAgJ3gpavlJud_rJQ&s"
    },
    {
        titulo: "Narnia",
        descripcion: "Narnia es una pelicula de ciencia ficcion",
        portada: "https://pics.filmaffinity.com/Las_craonicas_de_Narnia_El_leaon_la_bruja_y_el_armario-555349345-large.jpg"
    },
    {
        titulo: "Shrek",
        descripcion: "Shrek cuenta la historia de un ogro que no es muy agradable",
        portada: "https://play-lh.googleusercontent.com/6eRpIKSEHPNny49xvp28qdODpI2F3rH7vvUjk7xoqHm54JHEwITQtv3rwuLkk838GkZPYjyUOONb8cEM5bM=w240-h480-rw"
    },
    {
        titulo: "Garfield",
        descripcion: "Garfield es un gato que siempre es muy flojo",
        portada: "https://m.media-amazon.com/images/S/pv-target-images/fcac78764df800e4cdcf3a4e163d09a2a801066847bfa5be52963a6557b0e289.jpg"
    },
    {
        titulo: "Wonka",
        descripcion: "Wonka es un chocolatero que hace los mejores chocolates de la ciudad",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIrKeDNXHwTk0NH7z7ig3DSsNS4deI9N_NA&s"
    },
    {
        titulo: "Godzilla",
        descripcion: "Godzzilla es la bestia mas poderosa del mundo entero pero solo esta protejiendo a la tierra de amenazas",
        portada: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd_x_6x_ti7nEvxzIyYhIRh9Or-098gDDIw&s"
    },
    {
        titulo: "King Kong",
        descripcion: "King Kong es el gorila mas grande del planeta tierra",
        portada: "https://m.media-amazon.com/images/I/61c1iPHBd3L._AC_UF894,1000_QL80_.jpg"
    },
    {
        titulo: "Planeta de los simios",
        descripcion: "El planeta de los simios nos cuenta como los simios toman el control de los humanos",
        portada: "https://images.justwatch.com/poster/125452651/s718/el-origen-del-planeta-de-los-simios.jpg"
    }
    ,{
        titulo: "Ted",
        descripcion: "Ted es un oso de peluche que cobro vida y ahora vive con su dueño",
        portada: "https://m.media-amazon.com/images/I/61vWBCTqUrL._AC_UF894,1000_QL80_.jpg"
    }
    ]
    return(
        <Container style={{ width: '35rem', left:'4%', border: '3px solid black'}}>
        
            {
                peliculas.map((mov)=>(
                    <Card className="mb-3" style={{border: '3px solid black'}}>
                        <Col xs={6} md={4}>
                        <Image src={mov.portada} roundedCircle style={{width:'32rem', height:'32rem'}}/>
                        </Col>
                        <Card.Title>{mov.titulo}</Card.Title>
                        <Card.Text>{mov.descripcion}</Card.Text>
</Card>
))
}
</Container>
    )
}