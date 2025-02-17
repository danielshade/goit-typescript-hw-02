import s from "./SearchBar.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarProps } from "../../types/SearchBar.types";
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query.trim());
    setQuery("");
  };

  return (
    <header className={s.searchBar}>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <div className={s.inputWrapper}>
          <button type="submit" className={s.button}>
            <HiOutlineSearch size={20} />
          </button>
          <input
            type="text"
            className={s.input}
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;