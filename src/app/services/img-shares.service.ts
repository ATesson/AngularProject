import { Injectable } from '@angular/core'
import { ImgShare } from '../models/img-share.model';

@Injectable({
    providedIn: 'root'
})

export class ImgSharesService {
    imgShares: ImgShare[] = [
        {
            id: 1,
            title: 'Fennec',
            description: 'La meilleure voiture!',
            imageUrl: 'https://wallpaperaccess.com/full/5089204.png',
            createdDate: new Date(),
            likes: 200
        },{
            id: 2,
            title: 'Le Plus Beau Paysage',
            description: "Image d'une valée en Slovénie",
            imageUrl: 'http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage-1024x640.jpg',
            createdDate: new Date(),
            likes: 10,
            location: 'Slovénie'
        },{
            id: 3,
            title: 'Malinois',
            description: 'Les meilleurs chien : Les malinois!',
            imageUrl: 'https://cf.ltkcdn.net/dogs/images/orig/258720-1600x1030-belgian-malinois-temperament.jpg?is-pending-load=1',
            createdDate: new Date(),
            likes: 0
        }
    ];

    getAllImgShares(): ImgShare[] {
        return this.imgShares;
    }

    getImgShareById(imgShareId: number): ImgShare {
        const imgShare = this.imgShares.find(imgShare => imgShare.id === imgShareId);
        if (!imgShare) {
            throw new Error('ImgShare not found!');
        } else {
            return imgShare;
        }
    }

    shareImgShareById(imgShareId: number, imgType: 'like' | 'unlike' ): void {
        const imgShare = this.getImgShareById(imgShareId);
        imgType === 'like' ? imgShare.likes++ : imgShare.likes--;
    }

    search(keyword: string): ImgShare[] {
        return this.imgShares.filter(imgShare => {
          return imgShare.title.toLowerCase().includes(keyword.toLowerCase());
        });
    }
}