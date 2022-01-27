export default function PreviousSearches(){
    const searches = [
        "chicken",
        "beef",
        "pork",
        'tuna',
        "bacon",
        "breakfast",
        "soup",
        'hamburger',
        'pasta',
        'casserole',
        "tomato",
        "mushroom",
        "salad",
        'dessert',
      ];

    return (
        <div className="previous-searches section">
            <h2>Popular Searches</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
           
        </div>
    )
}