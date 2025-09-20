import Image from "next/image";
import DImage from "../../../assets/cld-sample-4.jpeg";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Gallery",
    description: "This is Gallery"
}
const GalleryPage = () => {
    return (
        <div>
            <h1 className="text-center mt-4">Using normal image tag</h1>
            <img src="https://res.cloudinary.com/dtb6o7zzr/image/upload/cld-sample-4" alt="" width={500} height={500} className="mx-auto my-4"/>

            <h1 className="text-center mt-4">Using next js Image tag</h1>
            <Image src="https://res.cloudinary.com/dtb6o7zzr/image/upload/cld-sample-4" alt="" width={500} height={500} className="mx-auto my-4"/>

            <h1 className="text-center mt-4 ">Using image from src/assets folder</h1>
            <Image src={DImage} alt="" width={500} height={500} className="mx-auto my-4" />

            <h1 className="text-center mt-4 ">Using image from public folder</h1>
            <Image src="/cld-sample-4.jpeg" alt="" width={500} height={500} className="mx-auto my-4" />
        </div>
    );
};

export default GalleryPage;