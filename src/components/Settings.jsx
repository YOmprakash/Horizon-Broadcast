
const Settings = ({ onLanguageChange }) => {
  const languages = ['English', 'French', 'German', 'Russian', 'Spanish', 'Chinese'];

  return (
    <div className="p-4">
      <label className="block text-gray-700">Select Language:</label>
      <select
        onChange={(e) => onLanguageChange(e.target.value)}
        className="mt-2 block w-full p-2 border rounded"
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Settings;
