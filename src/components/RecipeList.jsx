
export default function RecipeList({ recipes, handleEdit, handleDelete }) {
    return (
        <div className="recipe-card-wrapper">
            {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.content}</p>
                    <div>
                    <button onClick={() => handleEdit(index)} className="button-secondary">Edit</button>
                    <button onClick={() => handleDelete(index)} className="button-secondary">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}