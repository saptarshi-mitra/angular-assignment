export interface DetailedDesciption{
  name: String,
  rating: number,
  totalRating: number,
  review: number,
  description: string[]
}

export interface Offers{
  noCostEMI: boolean,
  bankOffers: string[]
}

export interface Seller{
  name: string,
  rating: number
}

export interface MobileDataType{
  id: number,
  img: string,
  details: DetailedDesciption,
  offers: Offers,
  seller: Seller,
  isReplacable: boolean,
  isFlipkartAssured: boolean,
  price: number,
  qty?: number
}