const main = document.querySelector('main')

// Crear los elementos que se van a insertar después del main
const titleh2 = document.createElement('h2')
titleh2.textContent = 'Zapatillas Hombre'

const filtersAside = [
  {
    tag: 'aside',
    className: 'aside-container',
    children: [
      {
        tag: 'div',
        className: 'modelFilter',
        children: [
          {
            tag: 'div',
            className: 'tittle-filter',
            children: [
              { tag: 'h3', text: 'Modelos' },
              { tag: 'button', className: 'pull-down', text: '+' }
            ]
          },
          {
            tag: 'div',
            className: 'filters-container hidden aside-container',
            children: [
              { tag: 'button', text: 'Old Skool', className: 'oldskool' },
              { tag: 'button', text: 'Slip-On', className: 'slipon' },
              { tag: 'button', text: 'Authentic', className: 'authentic' },
              { tag: 'button', text: 'Sk8-Hi', className: 'sk8hi' },
              { tag: 'button', text: 'Ultrarange', className: 'ultrarange' },
              { tag: 'button', text: 'Knu Skool', className: 'knuskool' }
            ]
          }
        ]
      },
      {
        tag: 'div',
        className: 'colorFilter',
        children: [
          {
            tag: 'div',
            className: 'tittle-filter',
            children: [
              { tag: 'h3', text: 'Colores' },
              { tag: 'button', className: 'pull-down', text: '+' }
            ]
          },
          {
            tag: 'div',
            className: 'filters-container hidden aside-container',
            children: [
              { tag: 'button', text: 'Multicolor' },
              { tag: 'button', text: 'Verde' },
              { tag: 'button', text: 'Rojo' },
              { tag: 'button', text: 'Azul' }
            ]
          }
        ]
      },
      {
        tag: 'button',
        className: 'remove-filter aside-container',
        text: 'Eliminar filtros'
      }
    ]
  }
]

const sneakers = [
  {
    className: 'oldskool',
    image:
      'https://images.vans.com/is/image/VansEU/VN0A38G1R1Q-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Old Skool',
    color: 'Multicolor',
    price: 80.0,
    link: 'https://www.vans.es/shop/es/vans-es/coleccion-hombre/zapatillas-vans-yacht-club-old-skool-vn0a38g1r1q'
  },
  {
    className: 'oldskool',
    image:
      'https://images.vans.com/is/image/VansEU/VN0A38G15U7-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Old Skool',
    color: 'Rojo',
    price: 80.0,
    link: 'https://www.vans.es/shop/es/vans-es/coleccion-hombre/zapatillas-old-skool-vn0a38g15u7'
  },
  {
    className: 'slipon',
    image:
      'https://images.vans.com/is/image/VansEU/VN0A5FCAK10-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Slip-On',
    color: 'Rojo',
    price: 80.0,
    link: 'https://www.vans.es/shop/es/vans-es/mid-season-promo/zapatillas-skate-slip-on-vn0a5fcak10'
  },
  {
    className: 'slipon',
    image:
      'https://images.vans.com/is/image/VansEU/VN000EYENVY-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Slip-On',
    color: 'Azul',
    price: 70.0,
    link: 'https://www.vans.es/shop/es/vans-es/mid-season-promo/zapatillas-classic-slip-on-summer-linen-vn0009q7y6z'
  },
  {
    className: 'authentic',
    image:
      'https://images.vans.com/is/image/VansEU/VN0009PV9Q6-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Authentic',
    color: 'Verde',
    price: 80.0,
    link: 'https://www.vans.es/shop/es/vans-es/mid-season-promo/zapatillas-field-daze-authentic-vn0009pv9q6'
  },
  {
    className: 'authentic',
    image:
      'https://images.vans.com/is/image/VansEU/VN000EE3NVY-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Authentic',
    color: 'Azul',
    price: 80.0,
    link: 'https://www.vans.es/shop/es/vans-es/mid-season-promo/zapatillas-denim-authentic-threaded-vn000bw5y6z'
  },
  {
    className: 'sk8hi',
    image:
      'https://images.vans.com/is/image/VansEU/VN000CMXBMB-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Sk8-Hi',
    color: 'Multicolor',
    price: 115.0,
    link: 'https://www.vans.es/shop/es/vans-es/coleccion-hombre/zapatillas-sk8-hi-vn000cmxbmb'
  },
  {
    className: 'sk8hi',
    image:
      'https://images.vans.com/is/image/VansEU/VN000BW7CJL-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Sk8-Hi',
    color: 'Verde',
    price: 90.0,
    link: 'https://www.vans.es/shop/es/vans-es/coleccion-hombre/zapatillas-color-theory-sk8-hi-vn000bw7cjl'
  },
  {
    className: 'ultrarange',
    image:
      'https://images.vans.com/is/image/VansEU/VN000BCEBIG-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Ultrarange',
    color: 'Multicolor',
    price: 130.0,
    link: 'https://www.vans.es/shop/es/vans-es/zapatillas-ultrarange-neo-vr3-vn000bcebig'
  },
  {
    className: 'ultrarange',
    image:
      'https://images.vans.com/is/image/VansEU/VN000BCEBJA-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Ultrarange',
    color: 'Rojo',
    price: 130.0,
    link: 'x.com/HelenaVillarRT/status/1801340360976957600'
  },
  {
    className: 'knuskool',
    image:
      'https://images.vans.com/is/image/VansEU/VN0009QCY6Z-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Knu Skool',
    color: 'Azul',
    price: 90.0,
    link: 'https://www.vans.es/shop/es/vans-es/zapatillas-knu-skool-vn0009qcnwd'
  },
  {
    className: 'knuskool',
    image:
      'https://images.vans.com/is/image/VansEU/VN0009QCCIB-HERO?$PDP-MEDIA-SET-PREVIEW-RESOLUTION$',
    name: 'Zapatillas Knu Skool',
    color: 'Verde',
    price: 90.0,
    link: 'https://www.vans.es/shop/es/vans-es/zapatillas-knu-skool-vn0009qccib'
  }
]

const sneakerContainer = document.createElement('section')
sneakerContainer.id = 'sneaker-container'

const printSneakers = (sneakersToPrint) => {
  sneakerContainer.innerHTML = ''

  sneakersToPrint.forEach((sneaker) => {
    const sneakerArticle = document.createElement('article')
    sneakerArticle.className = 'sneaker-article column'
    sneakerArticle.dataset.filter = sneaker.className

    const sneakerLink = document.createElement('a')
    sneakerLink.href = sneaker.link
    sneakerLink.target = '_blank'

    const sneakerImg = document.createElement('img')
    sneakerImg.src = sneaker.image
    sneakerImg.alt = sneaker.name
    sneakerLink.appendChild(sneakerImg)

    const sneakerName = document.createElement('h3')
    sneakerName.textContent = sneaker.name
    sneakerLink.appendChild(sneakerName)

    sneakerArticle.appendChild(sneakerLink)

    const sneakerColor = document.createElement('p')
    sneakerColor.textContent = `Color: ${sneaker.color}`
    sneakerArticle.appendChild(sneakerColor)

    const sneakerPrice = document.createElement('p')
    sneakerPrice.textContent = `€${sneaker.price.toFixed(2)}`
    sneakerArticle.appendChild(sneakerPrice)

    sneakerContainer.appendChild(sneakerArticle)
  })
}

printSneakers(sneakers)

const printFilters = (filters, parent) => {
  for (const filter of filters) {
    const filterElement = document.createElement(filter.tag)

    if (filter.className) {
      filterElement.className = filter.className
    }

    if (filter.text) {
      filterElement.textContent = filter.text
    }

    if (filter.children) {
      printFilters(filter.children, filterElement)
    }
    parent.appendChild(filterElement)
  }
}

const aside = document.createElement('aside')
aside.id = 'aside'
printFilters(filtersAside, aside)

// Crear una contenedor para agrupar todo el contenido nuevo
const container = document.createElement('div')
container.appendChild(titleh2)
container.appendChild(sneakerContainer)
container.appendChild(aside)

// Insertar el contenedor después del main
main.parentNode.insertBefore(container, main.nextSibling)

const pullDownClick = (event) => {
  const button = event.target
  const filtersContainer = button.parentElement.nextElementSibling

  if (button.textContent === '+') {
    filtersContainer.classList.remove('hidden')
    button.textContent = '-'
  } else {
    filtersContainer.classList.add('hidden')
    button.textContent = '+'
  }
}

const filterDropDownEvent = () => {
  const pullDownButton = document.querySelectorAll('.pull-down')
  pullDownButton.forEach((button) => {
    button.addEventListener('click', pullDownClick)
  })
}
filterDropDownEvent()

let selectedModel = null
let selectedColor = null

const filterSelect = (event) => {
  const selectButton = event.target
  const filterModel = selectButton.className
  const filterColor = selectButton.textContent

  const isModel = sneakers.some((sneaker) => sneaker.className === filterModel)
  const isColor = sneakers.some((sneaker) => sneaker.color === filterColor)
  if (isModel) {
    selectedModel = filterModel === selectedModel ? null : filterModel
  } else if (isColor) {
    selectedColor = selectedColor === filterColor ? null : filterColor
  }
  const filteredSneakers = sneakers.filter((sneaker) => {
    const matchesModel = !selectedModel || sneaker.className === selectedModel
    const matchesColor = !selectedColor || sneaker.color === selectedColor
    return matchesModel && matchesColor
  })

  if (filteredSneakers.length === 0) {
    showRandomSneakers()
  } else {
    printSneakers(filteredSneakers)
  }
}

const resetFilters = () => {
  selectedModel = null
  selectedColor = null
  printSneakers(sneakers)
}

const addEventListenersSneakers = () => {
  const filterButtons = document.querySelectorAll('.filters-container button')
  filterButtons.forEach((button) => {
    button.addEventListener('click', filterSelect)
  })
}
addEventListenersSneakers()

const removeFiltersButton = document.querySelector('.remove-filter')
removeFiltersButton.addEventListener('click', resetFilters)

const getRandomSneakers = (max) => {
  return Math.floor(Math.random() * 6)
}

const showRandomSneakers = () => {
  const randomSneakers = []
  const numberOfSneakers = sneakers.length

  while (randomSneakers.length < 6) {
    const randomIndex = getRandomSneakers(numberOfSneakers)
    if (!randomSneakers.includes(randomIndex)) {
      randomSneakers.push(randomIndex)
    }
  }
  const randomSneakersText = document.createElement('p')
  randomSneakersText.textContent =
    '¡Ups! Parece que no tenemos lo que buscas, pero estos productos podrían ser justo lo que necesitas.'
  randomSneakersText.className = 'notfound-message'
  sneakerContainer.innerHTML = ''

  sneakerContainer.appendChild(randomSneakersText)

  for (const i of randomSneakers) {
    const sneaker = sneakers[i]
    const sneakerArticle = document.createElement('article')
    sneakerArticle.className = 'sneaker-article column'
    sneakerArticle.dataset.filter = sneaker.className

    const sneakerLink = document.createElement('a')
    sneakerLink.href = sneaker.link
    sneakerLink.target = '_blank'

    const sneakerImg = document.createElement('img')
    sneakerImg.src = sneaker.image
    sneakerImg.alt = sneaker.name
    sneakerLink.appendChild(sneakerImg)

    const sneakerName = document.createElement('h3')
    sneakerName.textContent = sneaker.name
    sneakerLink.appendChild(sneakerName)

    sneakerArticle.appendChild(sneakerLink)

    const sneakerColor = document.createElement('p')
    sneakerColor.textContent = `Color: ${sneaker.color}`
    sneakerArticle.appendChild(sneakerColor)

    const sneakerPrice = document.createElement('p')
    sneakerPrice.textContent = `€${sneaker.price.toFixed(2)}`
    sneakerArticle.appendChild(sneakerPrice)

    sneakerContainer.appendChild(sneakerArticle)
  }
}
