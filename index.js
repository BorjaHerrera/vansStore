const main = document.querySelector('main')

const menuButtons = [
  {
    tag: 'header',
    children: [
      {
        tag: 'div',
        className: 'promo-banner',
        children: [
          {
            tag: 'p',
            className: 'flex-container',
            text: 'Únete a Vans Family para disfrutar de un 10% de descuento en tu primera compra y de envíos gratis a los puntos de entrega.'
          }
        ]
      },
      {
        tag: 'nav',
        id: 'nav-menu',
        className: 'flex-container',
        children: [
          {
            tag: 'ul',
            className: 'flex-container',
            children: [
              {
                tag: 'li',
                children: [
                  {
                    tag: 'a',
                    href: '',
                    children: [
                      {
                        tag: 'img',
                        src: './assets/bandera esp.png',
                        alt: 'bandera española',
                        title: 'bandera de España para seleccionar idioma'
                      }
                    ]
                  }
                ]
              },
              {
                tag: 'li',
                children: [{ tag: 'a', href: '#', text: 'Favoritos' }]
              },
              {
                tag: 'li',
                children: [{ tag: 'a', href: '#', text: 'Seguir mi pedido' }]
              },
              { tag: 'li', children: [{ tag: 'a', href: '#', text: 'Ayuda' }] },
              {
                tag: 'li',
                children: [{ tag: 'a', href: '#', text: 'Vans Family' }]
              },
              {
                tag: 'li',
                children: [{ tag: 'a', href: '#', text: 'Tarjeta regalo' }]
              },
              {
                tag: 'li',
                children: [
                  { tag: 'a', href: '#', text: 'Encuentra una tienda' }
                ]
              },
              {
                tag: 'li',
                children: [{ tag: 'a', href: '#', text: 'Iniciar sesión' }]
              }
            ]
          }
        ]
      },
      {
        tag: 'nav',
        id: 'nav-products',
        className: 'flex-container',
        children: [
          {
            tag: 'div',
            className: 'menu-category',
            children: [
              {
                tag: 'ul',
                className: 'flex-container',
                children: [
                  {
                    tag: 'li',
                    children: [
                      {
                        tag: 'a',
                        href: '#',
                        children: [
                          {
                            tag: 'img',
                            src: './assets/vans-logo.png',
                            alt: 'logo vans',
                            title: 'logo vans de letras rectas en mayúsculas'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    tag: 'li',
                    children: [{ tag: 'a', href: '#', text: 'Mujer' }]
                  },
                  {
                    tag: 'li',
                    children: [{ tag: 'a', href: '#', text: 'Hombre' }]
                  },
                  {
                    tag: 'li',
                    children: [{ tag: 'a', href: '#', text: 'Niños' }]
                  },
                  {
                    tag: 'li',
                    children: [{ tag: 'a', href: '#', text: 'Novedades' }]
                  },
                  {
                    tag: 'li',
                    children: [{ tag: 'a', href: '#', text: 'Personalizar' }]
                  },
                  {
                    tag: 'li',
                    children: [{ tag: 'a', href: '#', text: 'Knu Skool' }]
                  },
                  {
                    tag: 'li',
                    children: [{ tag: 'a', href: '#', text: 'Action Sports' }]
                  },
                  { tag: 'li', children: [{ tag: 'button', text: 'Más' }] }
                ]
              }
            ]
          },
          {
            tag: 'div',
            className: 'menu-search',
            children: [
              {
                tag: 'ul',
                className: 'flex-container',
                children: [
                  {
                    tag: 'li',
                    children: [
                      {
                        tag: 'div',
                        className: 'search-container',
                        children: [
                          {
                            tag: 'input',
                            type: 'text',
                            name: 'search',
                            placeholder: 'Buscar'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    tag: 'li',
                    children: [
                      {
                        tag: 'a',
                        href: '#',
                        children: [
                          {
                            tag: 'img',
                            src: './assets/shopping-cart.png',
                            alt: 'carrito compra online',
                            title: 'imagen vectorial de un carrito',
                            className: 'cart'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        tag: 'nav',
        id: 'responsive',
        className: 'flex-container',
        children: [
          {
            tag: 'div',
            className: 'vans-logo',
            children: [
              {
                tag: 'ul',
                className: 'flex-container',
                children: [
                  {
                    tag: 'li',
                    children: [
                      {
                        tag: 'a',
                        href: '#',
                        children: [
                          {
                            tag: 'img',
                            src: './assets/vans-logo.png',
                            alt: 'logo vans'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            tag: 'div',
            className: 'elements',
            children: [
              {
                tag: 'ul',
                className: 'flex-container',
                children: [
                  {
                    tag: 'li',
                    children: [
                      {
                        tag: 'a',
                        href: '#',
                        children: [
                          {
                            tag: 'img',
                            src: './assets/lupa.png',
                            alt: 'lupa imagen vectorial',
                            title:
                              'imagen de una lupa para buscar productos en la web'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    tag: 'li',
                    children: [
                      {
                        tag: 'a',
                        href: '#',
                        children: [
                          {
                            tag: 'img',
                            src: './assets/shopping-cart.png',
                            alt: 'carrito de compra',
                            title: 'carrito de compra para añadir productos'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    tag: 'li',
                    children: [
                      {
                        tag: 'a',
                        href: '#',
                        children: [
                          {
                            tag: 'img',
                            src: './assets/menu.png',
                            alt: 'menu responsive',
                            title: 'menu responsivo conocido como hamburguesa'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

const printHeader = (menuButtons, parent) => {
  for (const button of menuButtons) {
    const element = document.createElement(button.tag)

    if (button.className) {
      element.className = button.className
    }
    if (button.id) {
      element.id = button.id
    }
    if (button.text) {
      element.textContent = button.text
    }
    if (button.href) {
      element.setAttribute('href', button.href)
    }
    if (button.src) {
      element.setAttribute('src', button.src)
    }
    if (button.alt) {
      element.setAttribute('alt', button.alt)
    }
    if (button.title) {
      element.setAttribute('title', button.title)
    }
    if (button.type) {
      element.setAttribute('type', button.type)
    }
    if (button.name) {
      element.setAttribute('name', button.name)
    }
    if (button.placeholder) {
      element.setAttribute('placeholder', button.placeholder)
    }
    if (button.children) {
      printHeader(button.children, element)
    }

    parent.appendChild(element)
  }
}

const parentElement = document.createElement('nav')
printHeader(menuButtons, parentElement)
document.body.appendChild(parentElement)

const footerElements = [
  {
    tag: 'footer',
    children: [
      {
        tag: 'form',
        action: '/action.php',
        method: 'post',
        name: 'register',
        children: [
          {
            tag: 'div',
            className: 'register column',
            children: [
              {
                tag: 'h4',
                text: '¡El que primero llega, se lo lleva!'
              },
              {
                tag: 'p',
                text: 'Suscríbete para enterarte antes que nadie de nuestras promociones exclusivas, últimos lanzamientos y colaboraciones únicas.'
              },
              {
                tag: 'div',
                className: 'send',
                children: [
                  {
                    tag: 'input',
                    className: 'newsletter',
                    type: 'email',
                    id: 'mail',
                    placeholder: 'Dirección de email',
                    required: true
                  },
                  {
                    tag: 'button',
                    text: '>'
                  }
                ]
              },
              {
                tag: 'div',
                className: 'conditions flex-container',
                children: [
                  {
                    tag: 'label',
                    htmlFor: 'terms',
                    text: 'Al suscribirme confirmo que he leído la política de privacidad de Vans y doy mi consentimiento para el tratamiento de mis datos personales con fines de marketing y determinación de perfiles.'
                  },
                  {
                    tag: 'input',
                    type: 'checkbox',
                    id: 'terms',
                    required: true
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

const printFooter = (footerSections, parent) => {
  for (const section of footerSections) {
    const element = document.createElement(section.tag)

    if (section.className) {
      element.className = section.className
    }
    if (section.id) {
      element.id = section.id
    }
    if (section.text) {
      element.textContent = section.text
    }

    if (section.children) {
      printFooter(section.children, element)
    }

    if (section.tag === 'input') {
      if (section.type) {
        element.setAttribute('type', section.type)
      }
      if (section.name) {
        element.setAttribute('name', section.name)
      }
      if (section.placeholder) {
        element.setAttribute('placeholder', section.placeholder)
      }
      if (section.required) {
        element.setAttribute('required', section.required)
      }
      if (section.id) {
        element.setAttribute('id', section.id)
      }
    }
    parent.appendChild(element)
  }
}

const parentFooterElement = document.createElement('footer')
printFooter(footerElements, parentFooterElement)
document.body.appendChild(parentFooterElement)

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
    if (filterModel === selectedModel) {
      selectedModel = null
    } else {
      selectedModel = filterModel
    }
  } else if (isColor) {
    if (selectedColor === filterColor) {
      selectedColor = null
    } else {
      selectedColor = filterColor
    }
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
