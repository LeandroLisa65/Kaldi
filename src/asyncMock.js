const items = [
    { id: 1
    , name: 'name 1'
    , description: 'Item 1'
    , stock: 1, price: 1
    , brand: 'brand 1'
    , model: 'model 1'
    , quanyity: 1
    , gender: 'gender'
    , image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Homepage.svg/320px-Google_Homepage.svg.png'
    , categoryId: 1
    },
    { id: 2
    , name: 'name 2'
    , description: 'Item 2'
    , stock: 2
    , price: 2
    , brand: 'brand 2'
    , model: 'model 2'
    , quanyity: 2
    , gender: 'gender'
    , image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Homepage.svg/320px-Google_Homepage.svg.png'
    , categoryId: 2
    },
    { id: 3
    , name: 'name 3'
    , description: 'Item 3'
    , stock: 3
    , price: 3
    , brand: 'brand 3'
    , model: 'model 3'
    , quanyity: 3
    , gender: 'gender'
    , image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_Homepage.svg/320px-Google_Homepage.svg.png'
    , categoryId: 3
    }
]

const categories = [
    { 
    id: 1
    , categoryDescription: 'categoria1'
    , description: 'Categoria 1'
    },
    { 
    id: 2
    , categoryDescription: 'categoria2'
    , description: 'Categoria 2'
    },
    { 
    id: 3
    , categoryDescription: 'categoria3'
    , description: 'Categoria 3'
    }
]

const details = [
    { 
    id: 1
    , text: 'Detail 1'
    },
    { 
    id: 2, text: 'Detail 2'
    },
    { 
    id: 3
    , text: 'Detail 3'
    }
]

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(items)
        }, 1000)
    })
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(categories)
        }, 1000)
    })
}

export const getDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(details)
        }, 1000)
    })
}
