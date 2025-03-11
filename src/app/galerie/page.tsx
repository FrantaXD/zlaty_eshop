import DisplayGallery from '../../utils/DisplayGallery';
import GalleryProps from '../../utils/interfaces/IFetchGallery'
import axios from 'axios';

async function fetchImages(): Promise<GalleryProps | null> { //získání obráků z API
    const url = 'https://api-gold-e-shop-seven.vercel.app/api/products';
    var incomingData:GalleryProps;
    try {
        incomingData= await axios.get(url).then((response) => (response.data)).catch((error) => console.log(error));
        return incomingData;
    }
    catch (error) {
        console.log(error);
        return null;
    }   
}

export default async function Page() {
    const images = await fetchImages();
    if (images===null) {
        return <div>Failed to load images</div>;
    }
    return (
        <>
            {<DisplayGallery images={images} />}
        </>
    );
}