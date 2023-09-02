
const realEstateData = [
    {
        id: 1,
        title: 'Luxury Apartment',
        image: 'apartment1.jpg',
        price: '$1,200,000',
        size: '150 sqm',
        location: 'Downtown, New York',
        description: 'Spacious luxury apartment with stunning views.',
    },
    {
        id: 2,
        title: 'Cozy House',
        image: 'house1.jpg',
        price: '$850,000',
        size: '220 sqm',
        location: 'Suburb, Los Angeles',
        description: 'Charming house with a beautiful garden.',
    },
    {
        id: 2,
        title: 'Cozy House',
        image: 'house1.jpg',
        price: '$850,000',
        size: '220 sqm',
        location: 'Suburb, Los Angeles',
        description: 'Charming house with a beautiful garden.',
    },
    {
        id: 2,
        title: 'Cozy House',
        image: 'house1.jpg',
        price: '$850,000',
        size: '220 sqm',
        location: 'Suburb, Los Angeles',
        description: 'Charming house with a beautiful garden.',
    },
    {
        id: 2,
        title: 'Cozy House',
        image: 'house1.jpg',
        price: '$850,000',
        size: '220 sqm',
        location: 'Suburb, Los Angeles',
        description: 'Charming house with a beautiful garden.',
    },
    {
        id: 2,
        title: 'Cozy House',
        image: 'house1.jpg',
        price: '$850,000',
        size: '220 sqm',
        location: 'Suburb, Los Angeles',
        description: 'Charming house with a beautiful garden.',
    },
    // Add more property data here
];

const RealEstateList = () => {
    return (
        <div className="real-estate-list">
            <h2>Check out our recently added properties:</h2>
            <div className="real-estate-cards">
                {realEstateData.map((property) => (
                    <div className="real-estate-card" key={property.id}>
                        <img src="https://www.keyrealestates.com/cms/wp-content/uploads/2018/10/luxury-houses-for-sale-in-marbella-spain-1024x576.jpg" alt={property.title} />
                        <div className="card-content">
                            <h3>{property.title}</h3>
                            <p><strong>Price:</strong> {property.price}</p>
                            <p><strong>Size:</strong> {property.size}</p>
                            <p><strong>Location:</strong> {property.location}</p>
                            <p>{property.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RealEstateList;