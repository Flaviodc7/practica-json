const object = `[
    {"Artista": "Charly Garcia", "cancion": "Demoliendo Hoteles", "vistas": 9000000},
    {"Artista": "Luis Alberto Spinetta", "cancion": "Cantata de Puentes Amarillos", "vistas": 100000},
    {"Artista": "Divididos", "cancion": "Ala Delta", "vistas": 800000},
    {"Artista": "Serú Giran", "cancion": "Viernes 3AM", "vistas": 842000},
    {"Artista": "Sui Generis", "cancion": "Confesiones de Invierno", "vistas": 920000},
    {"Artista": "Daft Punk", "cancion": "Giorgio by Moroder", "vistas": 10500203},
    {"Artista": "Depeche Mode", "cancion": "A Question of Lust", "vistas": 58005600},
    {"Artista": "WindowPane", "cancion": "Opeth", "vistas": 801560}
]`

function orderbyViews_And_Slice(arr_object, items_per_page, current_page){
    const initial = (current_page - 1) * items_per_page;
    const final = ((current_page - 1) * items_per_page) + items_per_page
    const json = JSON.parse(arr_object).sort((a, b) => b.vistas - a.vistas)
    return json.slice(initial, final)
}

const final_json = orderbyViews_And_Slice(object, 4, 2)
console.log(final_json)