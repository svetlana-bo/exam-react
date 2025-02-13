
export default function RecipeForm({ currentRecipe, handleChange, handleSubmit, isEditing }) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-name">
                <label>Name:</label>
                <input
                    type="text"
                    name="title"
                    value={currentRecipe.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="input-instructions">
                <label>Ingredients and directions:</label>
                <textarea
                    name="content"
                    value={currentRecipe.content}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className='button'>{isEditing ? 'Update' : 'Create'} Recipe</button>
        </form>
    );
}
