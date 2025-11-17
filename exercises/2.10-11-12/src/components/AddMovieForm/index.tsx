import { useState } from "react";
import type { SyntheticEvent } from "react";
import type { Movie } from "../../types";
import "./AddMovieForm.css";

interface AddMovieFormProps {
  onMovieAdded: (movie: Movie) => void;
}

const AddMovieForm = ({ onMovieAdded }: AddMovieFormProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState<number | "">("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState<number | "">("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!title.trim() || !director.trim()) {
      alert("⚠️ Le titre et le réalisateur sont obligatoires !");
      return;
    }

    const parsedDuration = Number(duration);
    const parsedBudget = Number(budget);

    if (parsedDuration <= 0 || isNaN(parsedDuration)) {
      alert("⏱️ La durée doit être supérieure à 0 minutes !");
      return;
    }

    if (parsedBudget < 0 || isNaN(parsedBudget)) {
      alert("💰 Le budget ne peut pas être négatif !");
      return;
    }

    onMovieAdded({
      title,
      director,
      duration: parsedDuration,
      imageUrl,
      description,
      budget: parsedBudget,
    });

    // Réinitialisation du formulaire
    setTitle("");
    setDirector("");
    setDuration("");
    setImageUrl("");
    setDescription("");
    setBudget("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <h2>🎞️ Ajouter un film</h2>

      <div className="form-group">
        <label>Titre :</label>
        <input
          type="text"
          placeholder="Ex: Spider-Man: No Way Home"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Réalisateur :</label>
        <input
          type="text"
          placeholder="Ex: Sam Raimi"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Durée (minutes) :</label>
        <input
          type="number"
          min="1"
          placeholder="Ex: 120"
          value={duration}
          onChange={(e) => setDuration(e.target.value === "" ? "" : parseInt(e.target.value))}
          required
        />
      </div>

      <div className="form-group">
        <label>URL de l'image :</label>
        <input
          type="text"
          placeholder="https://..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {imageUrl && (
          <div className="preview">
            <img src={imageUrl} alt="Prévisualisation" />
          </div>
        )}
      </div>

      <div className="form-group">
        <label>Description :</label>
        <textarea
          placeholder="Brève description du film..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Budget (en millions $) :</label>
        <input
          type="number"
          min="0"
          placeholder="Ex: 150"
          value={budget}
          onChange={(e) => setBudget(e.target.value === "" ? "" : parseInt(e.target.value))}
        />
      </div>

      <button type="submit">🎬 Ajouter le film</button>
    </form>
  );
};

export default AddMovieForm;
