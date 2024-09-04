const Settings = ({ language, onLanguageChange }) => {
  const languages = ['English', 'French', 'German', 'Russian', 'Spanish', 'Chinese'];

  return (
    <div className="max-w-md mx-auto mt-10 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="p-6 text-white bg-blue-500">
        <h2 className="mb-4 text-2xl font-semibold">Settings</h2>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-200">Select Language:</label>
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="block w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
