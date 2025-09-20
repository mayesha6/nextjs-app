"use client"

const Error = ({error, reset}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
    console.log(error.message)
    return (
        <div>
            <h1 className="text-5xl text-center text-red-600 py-5">Something went wrong...</h1>
            <h2 className="text-2xl text-center text-red-600 py-5">{error.message}</h2>
            <div className="w-full text-center">
                <button onClick={()=>reset()} className="bg-red-500 text-white rounded-xl p-3 hover:bg-red-800 duration-300 transition-all">
                Try Again
            </button>
            </div>
        </div>
    );
};

export default Error;