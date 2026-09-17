import React from "react";
import {useState , useEffect} from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import DeclarationCheck from "../components/DeclarationCheck";
import ImagesUsed from "../components/ImagesUsed";
import ProductSummary from "../components/ProductSummary";
import ResultActions from "../components/ResultActions";
import NavbarTop from "../components/NavbarTop";
import LoadingScreen from "../components/LoadingScreen";


const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const image = location.state?.image;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }


    if (!image) {
        return (

            <div className="flex min-h-dvh items-center justify-center">
                <div className="text-center">


                    <p className="text-gray-500">
                        No inspection image found.
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="mt-4 rounded-full bg-primary px-6 py-3 font-semibold"
                    >
                        Go Home
                    </button>

                </div>
            </div>
        );
    }


    return (
        <div className="min-h-dvh bg-gray-50">

            <NavbarTop/>

            <main className="pb-2">

                <ProductSummary image={image} />

                <DeclarationCheck />

                <ImagesUsed image={image} />

            </main>



            <ResultActions
                onDone={() => navigate("/")}
            />

        </div>
    );
};

export default ResultPage;