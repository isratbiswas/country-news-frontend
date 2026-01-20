type FilterBarProps = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setSource: React.Dispatch<React.SetStateAction<string>>;
};

const FilterBar: React.FC<FilterBarProps> = ({
  setCountry,
  setCategory,
  setLanguage,
  setSource,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-2 md:grid-cols-6 gap-3">
      {/* Country filter */}
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="us">USA</option>
        <option value="uk">UK</option>
      </select>
      {/* category filter */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Category</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </select>
      {/* language  */}
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Language</option>
        <option value="en">English</option>
        <option value="bn">Bangla</option>
      </select>
      {/* source */}
      <input
        onChange={(e) => setSource(e.target.value)}
        placeholder="Source"
        className="border p-2 rounded"
      />
    </div>
  );
};

export default FilterBar;
