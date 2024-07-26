export interface CompanyType {
  id: string;
  name: string;
  imageURL: string;
  tourCount: number;
  employeeCount: number;
}

export interface ReportType {
  id: string;
  tourPackName: string;
  price: number;
  sold: number;
  date: string;
  amount: number;
}

export interface TourPackType {
  id: string;
  name: string;
  description: string;
  price: number;
  seats: number;
  feedbacks: number;
  imagesURL: string[];
  startDate: string;
  endDate: string;
  location: string;
}

export interface BookingType {
  id: string;
  travellerName: string;
  bookedTour: string;
  flightTime: string;
  price: number;
  bookedAt: string;
}

export interface RequestType {
  id: string;
  companyName: string;
  imageURL: string;
  type: string;
  address: string;
  registeredAt: string;
}

export interface EmployeeType {
  id: string;
  fullName: string;
  occupation: string;
  workingSince: string;
  phoneNumber: string;
}

export interface ServiceType {
  id: string;
  name: string;
  location: string;
  imagesURL: string[];
  price: number;
}

export interface LocationType {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface UserType {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface HouseType {
  id: string;
  name: string;
  location: string;
  imagesURL: string[];
  rooms: number;
  rating: number;
}

export interface PostType {
  id: string;
  title: string;
  description: string;
  imagesURL: string[];
  views: number;
}

export interface PaginationType {
  pageIndex: number
  pageSize: number
}