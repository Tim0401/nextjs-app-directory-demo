const FetchError: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-pink-100 border text-pink-700 px-4 py-3 rounded" role="alert">
        <h3 className="font-bold">Error while fetching data.</h3>
        <span className="block sm:inline">Something seriously bad happened.</span>
      </div>
    </div>
  )
}
export default FetchError;

