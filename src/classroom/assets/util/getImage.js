import image1 from 'images/cat_cursor.png';
import image2 from 'images/jokebear_cursor.png';


const getImage = idx =>{

    switch(idx)
    {
        case 1:
            return image1;
        case 2:
            return image2;
    }
}

export default getImage;