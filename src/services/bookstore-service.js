
export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'You Dont know JS',
            author: 'J.J.Abrams',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41MZdroe73L._SX331_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'React + Redux - Профессиональная разработка',
            author: 'A.O. Laptyrev',
            price: 40,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'
        }
    ]
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 1000)
        })
    }
}