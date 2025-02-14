import AppleCrisp from "../assets/apple-crisp.webp"
import Carbonara from "../assets/carbonara.webp"
import Hummus from "../assets/hummus.webp"
import LentilSoup from "../assets/lentil-soup.webp"
import Mousse from "../assets/mousse.webp"
import Pancakes from "../assets/pancakes.webp"
import Peppers from "../assets/peppers.webp"
import Risotto from "../assets/risotto.webp"
import SweetPotato from "../assets/sweet-potato.webp"
import Salad from "../assets/salad.webp"
import { useState } from "react"
import RecipeDetail from "../components/RecipeDetail"

export default function RecipesDishDelights() {

    const [selectedRecipe, setSelectedRecipe] = useState('');
    const [open, setOpen] = useState(false)

    const handleOpen = (recipe) => {
        setSelectedRecipe(recipe);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedLandmark(null)
    };

    //defining the recipe data
    const recipes = [
        { 
          "recipeId" : "1",
          "name": "Fresh Chickpea Salad",
          "image": Salad,
          "category": "Salad",
          "isVegan": true,
          "servings": "2",
          "timeToMake": "10 minutes",
          "ingredients": [
            "1 can chickpeas, drained and rinsed",
            "1 cucumber, diced",
            "1 bell pepper, chopped",
            "1/4 red onion, finely chopped",
            "1/4 cup fresh parsley, chopped",
            "Juice of 1 lemon",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
          ],
          "cookingDirections": "In a large bowl, combine all ingredients. Toss well and serve chilled."
        },
        { 
          "recipeId" : "2",
          "name": "Mushroom Risotto",
          "image": Risotto,
          "category": "Main",
          "isVegan": false,
          "servings": "4",
          "timeToMake": "40 minutes",
          "ingredients": [
            "1 cup Arborio rice",
            "4 cups vegetable broth",
            "1/2 cup white wine",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 cup mushrooms, sliced",
            "1/4 cup Parmesan cheese",
            "2 tbsp butter",
            "Salt and pepper to taste"
          ],
          "cookingDirections": "Sauté onions and garlic in butter, add mushrooms, then rice. Deglaze with wine, gradually add broth, and stir until creamy. Finish with Parmesan."
        },
        {
          "recipeId" : "3",
          "name": "Vegan Chocolate Mousse",
          "image": Mousse,
          "category": "Dessert",
          "isVegan": true,
          "servings": "2",
          "timeToMake": "15 minutes",
          "ingredients": [
            "2 ripe avocados",
            "1/4 cup cocoa powder",
            "1/4 cup maple syrup",
            "1 tsp vanilla extract",
            "Pinch of salt",
            "1/4 cup almond milk"
          ],
          "cookingDirections": "Blend all ingredients until smooth. Chill before serving."
        },
        {
          "recipeId" : "4",
          "name": "Spaghetti Carbonara",
          "image": Carbonara,
          "category": "Main",
          "isVegan": false,
          "servings": "2",
          "timeToMake": "20 minutes",
          "ingredients": [
            "200g spaghetti",
            "100g pancetta, diced",
            "2 eggs",
            "1/2 cup grated Parmesan cheese",
            "1 clove garlic",
            "Salt and pepper to taste"
          ],
          "cookingDirections": "Cook spaghetti. Sauté pancetta with garlic, remove garlic, mix hot pasta with eggs, Parmesan, and pancetta. Serve immediately."
        },
        {
          "recipeId" : "5",
          "name": "Lentil Soup with Celery",
          "image": LentilSoup,
          "category": "Soup",
          "isVegan": true,
          "servings": "4",
          "timeToMake": "30 minutes",
          "ingredients": [
            "1 cup lentils",
            "1 carrot, diced",
            "1 celery stalk, chopped",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "4 cups vegetable broth",
            "1 tsp cumin",
            "Salt and pepper to taste"
          ],
          "cookingDirections": "Sauté vegetables, add lentils and broth, bring to a boil, then simmer for 30 minutes."
        },
        {
          "recipeId" : "6",
          "name": "Banana Pancakes",
          "image": Pancakes,
          "category": "Breakfast",
          "isVegan": false,
          "servings": "2",
          "timeToMake": "20 minutes",
          "ingredients": [
            "2 bananas, mashed",
            "2 eggs",
            "1/2 cup flour",
            "1/2 tsp baking powder",
            "1/2 cup milk",
            "1 tsp vanilla extract",
            "Butter for frying"
          ],
          "cookingDirections": "Mix all ingredients, cook small pancakes in butter over medium heat until golden."
        },
        {
          "recipeId" : "7",
          "name": "Stuffed Bell Peppers",
          "image": Peppers,
          "category": "Main",
          "isVegan": true,
          "servings": "4",
          "timeToMake": "35 minutes",
          "ingredients": [
            "4 bell peppers",
            "1 cup cooked quinoa",
            "1/2 cup black beans",
            "1/2 cup corn",
            "1/4 cup diced tomatoes",
            "1 tsp cumin",
            "Salt and pepper to taste"
          ],
          "cookingDirections": "Stuff peppers with mixed ingredients, bake at 180°C for 25 minutes."
        },
        {
          "recipeId" : "8",
          "name": "Apple Cinnamon Crisp",
          "image" : AppleCrisp,
          "category": "Dessert",
          "isVegan": false,
          "servings": "4",
          "timeToMake": "40 minutes",
          "ingredients": [
            "4 apples, sliced",
            "1/2 cup oats",
            "1/4 cup flour",
            "1/4 cup brown sugar",
            "1/4 cup butter, melted",
            "1 tsp cinnamon"
          ],
          "cookingDirections": "Mix apples with cinnamon, top with oat mixture, bake at 180°C for 30 minutes."
        },
        {
          "recipeId" : "9",
          "name": "Classic Hummus",
          "image": Hummus,
          "category": "Appetizer",
          "isVegan": true,
          "servings": "6",
          "timeToMake": "10 minutes",
          "ingredients": [
            "1 can chickpeas, drained",
            "2 tbsp tahini",
            "1 clove garlic",
            "Juice of 1 lemon",
            "2 tbsp olive oil",
            "Salt to taste"
          ],
          "cookingDirections": "Blend all ingredients until smooth. Serve with pita or vegetables."
        },
        {
            "recipeId" : "10",
            "name": "Sweet Potato & Quinoa Bowl",
            "image": SweetPotato,
            "category": "Main",
            "isVegan": true,
            "servings": "2",
            "timeToMake": "30 minutes",
            "ingredients": [
              "1 large sweet potato, diced",
              "1 cup cooked quinoa",
              "1/2 cup black beans",
              "1/2 avocado, sliced",
              "1 handful baby spinach",
              "1 tbsp olive oil",
              "1 tsp cumin",
              "1/2 tsp smoked paprika",
              "Salt and pepper to taste",
              "Juice of 1/2 lime"
            ],
            cookingDirections: "Toss sweet potatoes with olive oil, cumin, smoked paprika, salt, and pepper. Roast at 200°C for 25 minutes. Assemble the bowl with quinoa, black beans, avocado, spinach, and roasted sweet potatoes. Drizzle with lime juice and serve."
          }
    ];

    const [searchItem, setSearchItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all')
    
    const filteredRecipes = recipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchItem.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })

    return (
        <>
        <div className="main-box">
        <h1> Recipe Library</h1>
        <div className="customization-box">
        <div className="search-div">
        Search by the recipe name:
        <input type="text" 
                id="search" 
                value={searchItem} 
                onChange={(e) =>
                    setSearchItem(e.target.value)} 
                placeholder="Search for the recipe"
                />
        </div>
        <div className="filter-div">
          Filter by category:
          <select id="category" value={selectedCategory} onChange={(e) =>
                setSelectedCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="Main">Main</option>
                <option value="Salad">Salad</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Dessert">Dessert</option>
                <option value="Soup">Soup</option>
                <option value="Appetizer">Appetizer</option>
          </select>  
        </div>
        </div>
        </div>

        <div className="recipe-card-wrapper">
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="recipe-card" onClick={() =>handleOpen(recipe)}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} height={300}/>
            <p> {recipe.category}{recipe.isVegan ? ", Vegan" : ""}</p>
          </div>
        ))}
        </div>

        <RecipeDetail open={open} onClose={handleClose} recipe={selectedRecipe} />
        </>
    )
}