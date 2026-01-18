
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";
import southIndianImage from "../assets/south_indian.png";

const Home = () => {

    const categories = [
        {
            name: 'South Indian',
            image: southIndianImage,
            query: 'south indian'
        },
        {
            name: 'North Indian',
            image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
            query: 'north indian'
        },
        {
            name: 'Biryani',
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
            query: 'biryani'
        },
        {
            name: 'Vegetarian',
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
            query: 'vegetarian'
        }
    ];

    return (
        <>
            <Header title="Our Recipes" bgClass="bg-image">
                <Button
                    content="SEARCH RECIPES"
                    color="primary"
                    as={Link}
                    to="/recipes"
                    size="big"
                />
            </Header>

            <section className="category-section">
                <h2 className="section-title">Explore Indian Cuisines</h2>
                <div className="category-grid">
                    {categories.map((category) => (
                        <Link to={`/recipes?search=${category.query}`} key={category.name} className="category-card">
                            <img src={category.image} alt={category.name} />
                            <div className="category-overlay">
                                <span className="category-name">{category.name}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;