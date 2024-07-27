import {TbBrandBooking, TbReportMoney} from "react-icons/tb";
import {PiBuilding} from "react-icons/pi";
import {GiCommercialAirplane} from "react-icons/gi";
import {VscGitPullRequestGoToChanges} from "react-icons/vsc";
import {HiOutlineUsers} from "react-icons/hi2";
import {LuSettings, LuUsers} from "react-icons/lu";
import {RiCustomerService2Line} from "react-icons/ri";
import {GrMapLocation} from "react-icons/gr";
import {BsHouses} from "react-icons/bs";
import {MdOutlinePostAdd} from "react-icons/md";
import {BookingType, CompanyType, EmployeeType, ReportType, RequestType, ServiceType, TourPackType} from "@/types";


export const sidebarLinks = [
  {
    label: "Companies",
    href: "/dashboard/companies",
    icon: (
      <PiBuilding className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Report",
    href: "/dashboard/report",
    icon: (
      <TbReportMoney className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Tour Packs",
    href: "/dashboard/tour-packs",
    icon: (
      <GiCommercialAirplane className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Bookings",
    href: "/dashboard/bookings",
    icon: (
      <TbBrandBooking className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
    badge: 10,
  },
  {
    label: "Requests",
    href: "/dashboard/requests",
    icon: (
      <VscGitPullRequestGoToChanges className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
    badge: 10,
  },
  {
    label: "Employees",
    href: "/dashboard/employees",
    icon: (
      <HiOutlineUsers className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Services",
    href: "/dashboard/services",
    icon: (
      <RiCustomerService2Line className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Locations",
    href: "/dashboard/locations",
    icon: (
      <GrMapLocation className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: (
      <LuUsers className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Houses",
    href: "/dashboard/houses",
    icon: (
      <BsHouses className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Posts",
    href: "/dashboard/posts",
    icon: (
      <MdOutlinePostAdd className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <LuSettings className={"text-gray-800 dark:text-white w-6 h-6"}/>
    ),
  }
]

export const CompanyData: CompanyType[] = [
  {
    id: "m5gr84i9",
    imageURL: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFuaWVzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Google",
    tourCount: 12,
    employeeCount: 5,
  },
  {
    id: "3u1reuv4",
    imageURL: "https://images.unsplash.com/photo-1562783912-21ad31ee2a83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFuaWVzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Jaguar",
    tourCount: 22,
    employeeCount: 15,
  },
  {
    id: "derv1ws0",
    imageURL: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFuaWVzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Slack",
    tourCount: 41,
    employeeCount: 521,
  },
  {
    id: "5kma53ae",
    imageURL: "https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXBhbmllcyUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    name: "Adidas",
    tourCount: 412,
    employeeCount: 213,
  },
  {
    id: "bhqecj4p",
    imageURL: "https://media.istockphoto.com/id/1348212541/photo/red-play-icon-button-on-white-background-social-media-and-sign-concept-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=-8wc9kvDbL1P-j-1I5cpFDIo9z_mISgylwYdfDzy138=",
    name: "Youtube",
    tourCount: 51,
    employeeCount: 5123,
  },
  {
    id: "adas7842",
    imageURL: "https://media.istockphoto.com/id/1018748942/photo/green-leaves-and-electric-plug-at-the-end-sides-of-the-word-clean.webp?b=1&s=170667a&w=0&k=20&c=bOMqzHqj5bhr4fQyjW9jxcWZv4eAzz6Da30AN9jgHpE=",
    name: "Clean",
    tourCount: 414,
    employeeCount: 2134,
  },
  {
    id: "m4531ds9",
    imageURL: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGVzbGF8ZW58MHx8MHx8fDA%3D",
    name: "Tesla",
    tourCount: 12,
    employeeCount: 5,
  },
  {
    id: "3u1rduv4",
    imageURL: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFwcGxlfGVufDB8fDB8fHww",
    name: "Apple",
    tourCount: 22,
    employeeCount: 15,
  },
  {
    id: "der21ws0",
    imageURL: "https://images.unsplash.com/photo-1633113215937-18127a49a8a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Microsoft",
    tourCount: 41,
    employeeCount: 521,
  },
  {
    id: "52ma53ae",
    imageURL: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHdpdHRlciUyMGhlYWRlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Twitter",
    tourCount: 412,
    employeeCount: 213,
  },
  {
    id: "52ma53ae",
    imageURL: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHdpdHRlciUyMGhlYWRlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Twitter 2",
    tourCount: 200,
    employeeCount: 210,
  },
]

export const reportData: ReportType[] = [
  {
    id: "m5gr84i9",
    tourPackName: "Uzbekistan | Turkey",
    price: 1000,
    sold: 10,
    date: "2021-10-10",
    amount: 10000,
  },
  {
    id: "3u1reuv4",
    tourPackName: "Russia | Turkey",
    price: 2000,
    sold: 20,
    date: "2021-10-10",
    amount: 40000,
  },
  {
    id: "derv1ws0",
    tourPackName: "Uzbekistan | China",
    price: 3000,
    sold: 30,
    date: "2021-10-10",
    amount: 90000,
  },
  {
    id: "5kma53ae",
    tourPackName: "Uzbekistan | Russia",
    price: 4000,
    sold: 40,
    date: "2021-10-10",
    amount: 160000,
  },
  {
    id: "bhqecj4p",
    tourPackName: "Uzbekistan | Spain",
    price: 5000,
    sold: 50,
    date: "2021-10-10",
    amount: 250000,
  },
  {
    id: "adas7842",
    tourPackName: "Uzbekistan | Italy",
    price: 6000,
    sold: 60,
    date: "2021-10-10",
    amount: 360000,
  },
  {
    id: "m4531ds9",
    tourPackName: "Uzbekistan | France",
    price: 7000,
    sold: 70,
    date: "2021-10-10",
    amount: 490000,
  },
  {
    id: "3u1rduv4",
    tourPackName: "Uzbekistan | Germany",
    price: 8000,
    sold: 80,
    date: "2021-10-10",
    amount: 640000,
  },
  {
    id: "der21ws0",
    tourPackName: "Uzbekistan | England",
    price: 9000,
    sold: 90,
    date: "2021-10-10",
    amount: 810000,
  },
  {
    id: "52ma53ae",
    tourPackName: "Uzbekistan | Japan",
    price: 10000,
    sold: 100,
    date: "2021-10-10",
    amount: 1000000,
  }
]

export const tourPackData: TourPackType[] = [
  {
    id: "m5gr84i9",
    name: "Uzbekistan | Turkey",
    description: "Come and see the beauty of Uzbekistan and Turkey",
    price: 1000,
    seats: 10,
    feedbacks: 5,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "Turkey, Istanbul",
  },
  {
    id: "3u1reuv4",
    name: "Russia | Turkey",
    description: "Come and see the beauty of Russia and Turkey",
    price: 2000,
    seats: 20,
    feedbacks: 15,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "Russia, Moscow",
  },
  {
    id: "derv1ws0",
    name: "Uzbekistan | China",
    description: "Come and see the beauty of Uzbekistan and China",
    price: 3000,
    seats: 30,
    feedbacks: 25,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "China, Beijing",
  },
  {
    id: "5kma53ae",
    name: "Uzbekistan | Russia",
    description: "Come and see the beauty of Uzbekistan and Russia",
    price: 4000,
    seats: 40,
    feedbacks: 35,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "Russia, Moscow",
  },
  {
    id: "bhqecj4p",
    name: "Uzbekistan | Spain",
    description: "Come and see the beauty of Uzbekistan and Spain",
    price: 5000,
    seats: 50,
    feedbacks: 45,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "Spain, Madrid",
  },
  {
    id: "adas7842",
    name: "Uzbekistan | Italy",
    description: "Come and see the beauty of Uzbekistan and Italy",
    price: 6000,
    seats: 60,
    feedbacks: 55,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "Italy, Rome",
  },
  {
    id: "m4531ds9",
    name: "Uzbekistan | France",
    description: "Come and see the beauty of Uzbekistan and France",
    price: 7000,
    seats: 70,
    feedbacks: 65,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "France, Paris",
  },
  {
    id: "3u1rduv4",
    name: "Uzbekistan | Germany",
    description: "Come and see the beauty of Uzbekistan and Germany",
    price: 8000,
    seats: 80,
    feedbacks: 75,
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    startDate: "2021-10-10",
    endDate: "2021-10-20",
    location: "Germany, Berlin",
  }
]

export const bookingData: BookingType[] = [
  {
    id: "m5gr84i9",
    travellerName: "John Doe",
    bookedTour: "Uzbekistan | Turkey",
    flightTime: "2021-10-10",
    price: 1000,
    bookedAt: "2021-10-10",
  },
  {
    id: "3u1reuv4",
    travellerName: "Jane Doe",
    bookedTour: "Russia | Turkey",
    flightTime: "2021-10-10",
    price: 2000,
    bookedAt: "2021-10-10",
  },
  {
    id: "derv1ws0",
    travellerName: "Cristina Doe",
    bookedTour: "Uzbekistan | China",
    flightTime: "2021-10-10",
    price: 3000,
    bookedAt: "2021-10-10",
  },
  {
    id: "5kma53ae",
    travellerName: "Jacob Doe",
    bookedTour: "Uzbekistan | Russia",
    flightTime: "2021-10-10",
    price: 4000,
    bookedAt: "2021-10-10",
  },
  {
    id: "bhqecj4p",
    travellerName: "Linda Ngo",
    bookedTour: "Uzbekistan | Spain",
    flightTime: "2021-10-10",
    price: 5000,
    bookedAt: "2021-10-10",
  },
  {
    id: "adas7842",
    travellerName: "Bella Thorne",
    bookedTour: "Uzbekistan | Italy",
    flightTime: "2021-10-10",
    price: 6000,
    bookedAt: "2021-10-10",
  },
  {
    id: "m4531ds9",
    travellerName: "Micheal Jackson",
    bookedTour: "Uzbekistan | France",
    flightTime: "2021-10-10",
    price: 7000,
    bookedAt: "2021-10-10",
  },
  {
    id: "3u1rduv4",
    travellerName: "Lam Thanh",
    bookedTour: "Uzbekistan | Germany",
    flightTime: "2021-10-10",
    price: 8000,
    bookedAt: "2021-10-10",
  },
  {
    id: "der21ws0",
    travellerName: "Micheal Jordan",
    bookedTour: "Uzbekistan | England",
    flightTime: "2021-10-10",
    price: 9000,
    bookedAt: "2021-10-10",
  },
  {
    id: "52ma53ae",
    travellerName: "Muhammad Ali",
    bookedTour: "Uzbekistan | Japan",
    flightTime: "2021-10-10",
    price: 10000,
    bookedAt: "2021-10-10",
  }
]

export const requestData: RequestType[] = [
  {
    id: "m5gr84i9",
    companyName: "Google",
    imageURL: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFuaWVzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    type: "Tour agency",
    address: "Mountain View, California",
    registeredAt: "2021-10-10",
  },
  {
    id: "3u1reuv4",
    companyName: "Jaguar",
    imageURL: "https://images.unsplash.com/photo-1562783912-21ad31ee2a83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFuaWVzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    type: "Car manufacturer",
    address: "Whitley, Coventry, England",
    registeredAt: "2021-10-10",
  }, {
    id: "derv1ws0",
    companyName: "Slack",
    imageURL: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFuaWVzJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    type: "Software company",
    address: "San Francisco, California",
    registeredAt: "2021-10-10",
  }, {
    id: "5kma53ae",
    companyName: "Adidas",
    imageURL: "https://images.unsplash.com/photo-1563302111-eab4b145e6c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXBhbmllcyUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    type: "Clothing company",
    address: "Herzogenaurach, Germany",
    registeredAt: "2021-10-10",
  },
  {
    id: "bhqecj4p",
    companyName: "Youtube",
    imageURL: "https://media.istockphoto.com/id/1348212541/photo/red-play-icon-button-on-white-background-social-media-and-sign-concept-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=-8wc9kvDbL1P-j-1I5cpFDIo9z_mISgylwYdfDzy138=",
    type: "Video sharing platform",
    address: "San Bruno, California",
    registeredAt: "2021-10-10",
  },
  {
    id: "adas7842",
    companyName: "Clean",
    imageURL: "https://media.istockphoto.com/id/1018748942/photo/green-leaves-and-electric-plug-at-the-end-sides-of-the-word-clean.webp?b=1&s=170667a&w=0&k=20&c=bOMqzHqj5bhr4fQyjW9jxcWZv4eAzz6Da30AN9jgHpE=",
    type: "Cleaning service",
    address: "San Francisco, California",
    registeredAt: "2021-10-10",
  },
  {
    id: "m4531ds9",
    companyName: "Tesla",
    imageURL: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGVzbGF8ZW58MHx8MHx8fDA%3D",
    type: "Car manufacturer",
    address: "Palo Alto, California",
    registeredAt: "2021-10-10",
  },
  {
    id: "3u1rduv4",
    companyName: "Apple",
    imageURL: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFwcGxlfGVufDB8fDB8fHww",
    type: "Technology company",
    address: "Cupertino, California",
    registeredAt: "2021-10-10",
  }, {
    id: "der21ws0",
    companyName: "Microsoft",
    imageURL: "https://images.unsplash.com/photo-1633113215937-18127a49a8a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pY3Jvc29mdHxlbnwwfHwwfHx8MA%3D%3D",
    type: "Technology company",
    address: "Redmond, Washington",
    registeredAt: "2021-10-10",
  },
  {
    id: "52ma53ae",
    companyName: "Twitter",
    imageURL: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHdpdHRlciUyMGhlYWRlcnxlbnwwfHwwfHx8MA%3D%3D",
    type: "Social media",
    address: "San Francisco, California",
    registeredAt: "2021-10-10",
  }
]

export const employeeData: EmployeeType[] = [
  {
    id: "m5gr84i9",
    fullName: "John Doe",
    occupation: "Driver",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "3u1reuv4",
    fullName: "Jane Doe",
    occupation: "Guide",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "derv1ws0",
    fullName: "Cristina Doe",
    occupation: "Guide",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "5kma53ae",
    fullName: "Jacob Doe",
    occupation: "Driver",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "bhqecj4p",
    fullName: "Linda Ngo",
    occupation: "Guide",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "adas7842",
    fullName: "Bella Thorne",
    occupation: "Guide",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "m4531ds9",
    fullName: "Micheal Jackson",
    occupation: "Driver",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "3u1rduv4",
    fullName: "Lam Thanh",
    occupation: "Driver",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "der21ws0",
    fullName: "Micheal Jordan",
    occupation: "Guide",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  },
  {
    id: "52ma53ae",
    fullName: "Muhammad Ali",
    occupation: "Driver",
    workingSince: "2021-10-10",
    phoneNumber: "+998 99 999 99 99",
  }
]

export const serviceData: ServiceType[] = [
  {
    id: "m5gr84i9",
    name: "Car rental",
    location: "Tashkent, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 100,
  },
  {
    id: "3u1reuv4",
    name: "Tour guide",
    location: "Samarkand, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 200,
  },
  {
    id: "derv1ws0",
    name: "Hotel booking",
    location: "Bukhara, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 300,
  },
  {
    id: "5kma53ae",
    name: "Flight booking",
    location: "Tashkent, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 400,
  },
  {
    id: "bhqecj4p",
    name: "Tour package",
    location: "Tashkent, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 500,
  },
  {
    id: "adas7842",
    name: "Tour guide",
    location: "Samarkand, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 600,
  },
  // generate 4
  {
    id: "m4531ds9",
    name: "Car rental",
    location: "Tashkent, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 700,
  },
  {
    id: "3u1rduv4",
    name: "Tour guide",
    location: "Samarkand, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 800,
  },
  {
    id: "der21ws0",
    name: "Hotel booking",
    location: "Bukhara, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 900,
  },
  {
    id: "52ma53ae",
    name: "Flight booking",
    location: "Tashkent, Uzbekistan",
    imagesURL: [
      "https://plus.unsplash.com/premium_photo-1661963652315-d5a9d26637dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661955588369-b0d28de38b45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535916707207-35f97e715e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVya2V5fGVufDB8fDB8fHww",
    ],
    price: 900,
  },
]