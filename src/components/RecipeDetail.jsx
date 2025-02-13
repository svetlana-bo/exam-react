import { CardMedia, Dialog, DialogActions, DialogContent } from "@mui/material";

//The function opens the overlay with the recipe details 
export default function RecipeDetail({open, onClose, recipe}) {
    if (!recipe) return null;

    const colorRed ="#dd4b2a";

    return (
        <Dialog 
          open={open} 
          onClose={onClose} 
          fullWidth
          maxWidth="xs"
          sx={{
            "& .MuiDialog-paper": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        
          },
          }}
          >
            <h2>{recipe.name}</h2>
        <DialogContent>
        <CardMedia
          component="img"
          height="200"
          image={recipe.image}
          alt={recipe.name}
          sx={{ borderRadius: 1, mb: 2 }}
        />
        <p>
          <span style={{ color: colorRed }}>Time to make: </span>{recipe.timeToMake}
        </p>
        <p>
          <span style={{ color: colorRed }}>Servings: </span>{recipe.servings}</p>
        
        <h3>
          Ingredients
        </h3>
        <ul className="ingredient-list">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          )
        )}
        </ul>
        <h3>
          How to make
        </h3>
        <p>
          {recipe.cookingDirections}
        </p>
      </DialogContent>
      <DialogActions>
        <p onClick={onClose} className="button">
          Close
        </p>
      </DialogActions>

        </Dialog>
    )
}