"use client"
import Counter from "@/components/Counter";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter()
  const handleNavigation = () => {
    router.push("/dashboard")
  }
  return (
    <div>
      <h1 className="text-5xl text-center text-bold py-4">This is home page.</h1>
      <Counter/>
      <button onClick={handleNavigation} className="bg-blue-600 text-white font-semibold mx-auto p-3 rounded-lg block my-5">Dashboard</button>
    </div>
  );
};

export default HomePage;