import React, {useState, useEf} from 'react'
// import data from '../data'
import { Link } from 'react-router-dom'

function HomeScreen(){
  const [data, setData] = useState({ hits: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);
      return<ul className="products">
            {
              data.products.map((product =>
                <li key={product._id}>
                  <div className="product">
                  <Link to={'/product/' + product._id}> 
                       <img className="product-image" src={product.image} alt="product" /> 
                    </Link>
                    <div className="product-name">
                      <Link to={'/product/' + product._id}> {product.name} </Link>
                    </div>
                    <div className="product-rating">{product.rating} Stars ({product.numReview})</div>
                  </div>
                </li>))
            }
          </ul>
}
export default HomeScreen;