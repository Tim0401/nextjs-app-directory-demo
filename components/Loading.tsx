const Loading: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-ping h-2 w-2 bg-pink-600 rounded-full"></div>
      <div className="animate-ping h-2 w-2 bg-pink-600 rounded-full mx-4"></div>
      <div className="animate-ping h-2 w-2 bg-pink-600 rounded-full"></div>
    </div>
  )
}

export default Loading;
