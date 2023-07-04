const items = [
    { id: 1
    , name: 'name 1'
    , description: 'Item 1'
    , stock: 20
    , price: 1
    , brand: 'brand 1'
    , model: 'model 1'
    , quanyity: 1
    , gender: 'gender'
    , image: 'https://cdn-icons-png.flaticon.com/512/1710/1710414.png'
    , categoryId: 1
    },
    { id: 2
    , name: 'name 2'
    , description: 'Item 2'
    , stock: 20
    , price: 2
    , brand: 'brand 2'
    , model: 'model 2'
    , quanyity: 2
    , gender: 'gender'
    , image: 'https://cdn-icons-png.flaticon.com/512/1710/1710414.png'
    , categoryId: 2
    },
    { id: 3
    , name: 'name 3'
    , description: 'Item 3'
    , stock: 20
    , price: 3
    , brand: 'brand 3'
    , model: 'model 3'
    , quanyity: 3
    , gender: 'gender'
    , image: 'https://cdn-icons-png.flaticon.com/512/1710/1710414.png'
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

