
export interface IShopsMoongose {
    id?: string;
    hostId: string;
    name: string;
    title?: string;
    description: string;
    location: IListingLocation;
}

export interface IListingLocation {
    country: string;
    state: string;
    city: string;
    address: string;
    zipcode: string;
  }