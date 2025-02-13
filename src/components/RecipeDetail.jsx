import { CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

export default function RecipeDetail({open, onClose, recipe}) {
    if (!recipe) return null;

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