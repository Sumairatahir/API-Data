interface Bookdata {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }
  
  const Serverside = async () => {
    
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const parsedResponse: Bookdata[] = await response.json();
    console.log(parsedResponse);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 bg-gray-200 min-h-screen">
        {parsedResponse.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-5 border border-gray-500 rounded-lg p-4 shadow-lg bg-white"
          >
            <p className="text-black font-bold text-3xl">Name: {data.name}</p>
            <p className="text-green-600 text-2xl">Type: {data.type}</p>
            <p className="text-blue-900 text-lg">
              Available: {data.available ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Serverside;
  