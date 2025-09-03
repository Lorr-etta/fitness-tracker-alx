
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      {/* Main Content */}
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-5xl font-bold text-green-400">
          Hello World
        </h1>
      </div>
    </div>
  );
}

export default App;