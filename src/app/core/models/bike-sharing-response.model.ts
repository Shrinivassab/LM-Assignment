export class BikeSharingResponse {
  network: BikeSharingData[];
}

export class BikeSharingData {
  company: string[];
  gbfs_href: string;
  href: string;
  id: string;
  location: LocationDetails;
  name: string;
  stations: []
}

export class LocationDetails {
  city: string;
  contry: string;
  latitude: number;
  longtitude: number;
}
