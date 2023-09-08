import MultipleAnswers from './MultipleAnswers';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl mb-4 font-semibold">Exam</h1>
        <MultipleAnswers />
      </div>
    </div>
  );
};

export default App;
