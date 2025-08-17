import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export const products = [
  {
    img: "https://i.pinimg.com/736x/87/25/f2/8725f2a455d3aa77aa7fd96a98e08ddf.jpg",
    title: "Tom Ford Noir",
    oldPrice: 320,
    newPrice: 290,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0388/7287/5140/files/bleu-de-chanel-edt-perfume-for-him-273623_480x480.jpg",
    title: "Chanel Allure Homme",
    oldPrice: 350,
    newPrice: 310,
  },
  {
    img: "https://i.pinimg.com/236x/78/8f/f3/788ff3f7cc42fce06b1810c7404bc50e.jpg",
    title: "Creed Aventus",
    oldPrice: 450,
    newPrice: 400,
  },
  {
    img: "https://i.pinimg.com/736x/70/44/75/70447539e0bd55d568259528bdc37dd0.jpg",
    title: "Yves Saint Laurent Black Opium",
    oldPrice: 350,
    newPrice: 310,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINPvHbkSVx1702dzkHgXwL-27U0nRwpKcXcTXYHMosCCNE_A8J2ELAovVTmYLRP-JwWM&usqp=CAU",
    title: "Givenchy Gentlemen Only",
    oldPrice: 270,
    newPrice: 230,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2Opo9oJMJoFOaxXHORwYFeYhRLGpFn9-JasAfcwdykQbs3CMwD1ntoWeTAlxo9srhig&usqp=CAU",
    title: "Dior Homme Intense",
    oldPrice: 380,
    newPrice: 340,
  },
  {
    img: "https://9f8e62d4.delivery.rocketcdn.me/wp-content/uploads/2023/05/Tobacco-Vanille-By-Tom-Ford-741x505.jpg",
    title: "Tom Ford Tobacco Vanille",
    oldPrice: 420,
    newPrice: 370,
  },
  {
    img: "https://static.wixstatic.com/media/e9092f_79195c5a12c14d98a296a506b9a4e165~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    title: "Chanel Coco Mademoiselle",
    oldPrice: 400,
    newPrice: 350,
  },
];

const Products = () => {
  return (
    <div className="container py-5">
      <h5 className="text-danger">Our Products</h5>
      <h2 className="mb-4">Explore Premium Perfumes</h2>
      <div className="row">
        {products.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Link to={`/product/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ProductCard
                id={index}
                img={item.img}
                title={item.title}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-danger btn-lg rounded-pill px-5">
          View All Perfumes
        </button>
      </div>
    </div>
  );
};

export default Products;
