for (let item of [1,2,3,4,5]) {
    itemBox(item)
}
function itemBox(item) {
    // Добавление элемента
    let cont = document.querySelector('.container')

    // Создание элементов
    let box = document.createElement('div')
    let top_box = document.createElement('div')
    let img = document.createElement('img')
    let bottom = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let price = document.createElement('div')
    let h31 = document.createElement('h3')
    let h32 = document.createElement('h3')
    let h33 = document.createElement('h3')
    let button = document.createElement('button')

    // Стилизация
    box.classList.add('item')
    top_box.classList.add('top')
    bottom.classList.add('bottom')
    button.classList.add('btn')
    p.classList.add('p1')

    img.src = "./images/81fPKd-2AYL 1.png"

    h3.innerHTML = "MEN’S CLOTHING (120)"
    p.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    price.classList.add('price')
    h31.innerHTML = '109 $'
    h32.innerHTML = '3,9'
    h33.innerHTML = '120'
    button.innerHTML = 'В избранное'

    // Аппенд
    cont.append(box)
    box.append(top_box, bottom)
    top_box.append(img)
    bottom.append(h3)
    bottom.append(p)
    bottom.append(price)
    price.append(h31)
    price.append(h32)
    price.append(h33)
    bottom.append(button)
}



