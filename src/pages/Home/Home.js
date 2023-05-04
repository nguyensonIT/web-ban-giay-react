import { data } from '../../data/data.js'
import './Home.scss'

import Product from '../../components/Product/Product.js'

const Home = () => {
    return (
        <div className="content">
            <div className='container'>
                {
                    data.map((item) => <Product item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}
export default Home