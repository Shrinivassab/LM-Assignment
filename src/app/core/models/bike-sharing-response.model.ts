export class BikeSharingResponse {
  network: BikeSharingData;
}

export class BikeSharingData {
  company: string[];
  gbfs_href: string;
  href: string;
  id: string;
  location: LocationDetails;
  name: string;
  stations: StationDetails[];
}

export class LocationDetails {
  city: string;
  contry: string;
  latitude: number;
  longtitude: number;
}

export class StationDetails {
  empty_slots: number;
  extra: AdditionalDetails;
  free_bikes: number;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  timestamp: string;
}

export class AdditionalDetails {
  address: null;
  last_updated: number;
  renting: number;
  returning: number;
  uid: string;
}
