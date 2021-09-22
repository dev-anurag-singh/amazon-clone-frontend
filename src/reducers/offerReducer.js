export const offerData = [
  {
    title: 'Up to 70% off | Laptops and Computers',
    image:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg',
    refTo: '/products?term=laptop+computer+pc',
    id: 1,
  },
  {
    title: 'Revamp your home | Home decoration',
    image:
      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Striplighting_758x608_2X_en_US._SY608_CB418597463_.jpg',
    refTo: '/products?term=home+decoration+wall+decoration+decor',
    id: 2,
  },
  {
    title: 'Shop Tech | Mobiles and more...',
    image:
      'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg',
    refTo: '/products?term=mobile+smartphone+cell+phone',
    id: 3,
  },
  {
    title: 'Festive latest launches  | Smart Tv and more...',
    image:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Onam/PC/header/DesktopGateway_CategoryCard_758X608_2x._SY608_CB641189010_.jpg',
    refTo: '/products?term=tv+television+smartTV',
    id: 4,
  },
];

const offerReducer = (state = offerData) => {
  return state;
};

export default offerReducer;
