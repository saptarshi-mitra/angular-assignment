import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileserviceService {

  constructor() { }

  private mobiles = new BehaviorSubject<Array<any>>(
    [
      {
        "id": 1,
        "img": "https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/4/f/f/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpeg?q=70",
        "details": {
          "name": "Redmi 8 (Ruby Red, 64GB)",
          "rating": 4.5,
          "totalRating": 5486,
          "review": 2489,
          "description": [
            "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
            "15.8 cm (6.22 inch) HD+ Display",
            "12MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "Qualcomm Snapdragon 439 Processor",
            "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
          ]
        },
        "price": 9999
      },
      {
        "id": 2,
        "img": "https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/k/q/t/realme-c12-rmx2189-original-imafupuyk9wynufy.jpeg?q=70",
        "details": {
          "name": "Realme C12 (Power Blue 32GB)",
          "rating": 4.2,
          "totalRating": 3501,
          "review": 985,
          "description": [
            "3 GB RAM | 32 GB ROM | Expandable Upto 256 GB",
            "16.56 cm (6.52 inch) HD+ Display",
            "13MP + 2MP + 2MP | 5MP Front Camera",
            "6000 mAh Lithium-ion Battery",
            "Mediatek Helio G35 Processor",
            "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
          ]
        },
        "price": 11999
      },
      {
        "id": 3,
        "img": "https://rukminim1.flixcart.com/image/312/312/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
        "details": {
          "name": "Asus ROG Phone 3 (Black 128GB)",
          "rating": 4.6,
          "totalRating": 1289,
          "review": 362,
          "description": [
            "8 GB RAM | 128 GB ROM",
            "16.74 cm (6.59 inch) Full HD+ Display",
            "64MP + 13MP + 5MP | 24MP Front Camera",
            "6000 mAh Lithium Polymer Battery",
            "Qualcomm Snapdragon 865+ (SM8250) Processor",
            "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
          ]
        },
        "price": 49999
      }
    ]
  )
  castMobiles = this.mobiles.asObservable();
  
  private cart = new BehaviorSubject<Array<any>>([])
  castCart = this.cart.asObservable();


  getMessage(){
    return this.mobiles
  }

  setCart(cartItems: any){
    this.cart.next(cartItems)
  }

}
