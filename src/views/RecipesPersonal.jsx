import { useEffect, useState } from "react";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";

export default function RecipesPersonal() {
    const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')) || []);
    const [currentRecipe, setCurrentRecipe] = useState({ title: '', content: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);


    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentRecipe({ ...currentRecipe, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            const updatedRecipes = recipes.map((recipe, index) =>
                index === editIndex ? currentRecipe : recipe
            );
            setRecipes(updatedRecipes);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setRecipes([...recipes, currentRecipe]);
        }
        setCurrentRecipe({ title: '', content: '' });
    }

    function handleDelete(index) {
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
    }

    function handleEdit(index) {
        setCurrentRecipe(recipes[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    return (
        <>
        <div className="main-box">
            <h2>Your recipe</h2>
            <RecipeForm
                currentRecipe={currentRecipe}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isEditing={isEditing}
            />
          </div>  
          <div>
            <h2 className="your-recipes-header">Your recipe collection</h2>
            <RecipeList
                recipes={recipes}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
        </>
    );
}
