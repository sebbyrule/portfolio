export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Automated Report Generator</h3>
          <p>Generates styled PDF reports with charts and watermarks using Python.</p>
          <a className="text-blue-600 hover:underline" href="https://github.com/yourusername/report-generator">
            View on GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}