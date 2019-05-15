let data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};


let container = document.getElementById('container');

function createTree(domElement, obj) {

    for (const key in obj) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.innerHTML = key;
        ul.appendChild(li);
        domElement.appendChild(ul);
        if (obj[key] !== undefined) {
            createTree(li, obj[key])
        }
    }
}

createTree(container, data);