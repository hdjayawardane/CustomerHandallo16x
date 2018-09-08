import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const startTabs = () => {
    // Promise.all([
    //     Icon.getImageSource("airplane", 30, '#F5002A'),
    //     // Icon.getImageSource("ios-beer", 30, '#F5002A'),
    //     // Icon.getImageSource("ios-bluetooth", 30),
    //     // Icon.getImageSource("ios-bluetooth", 30),
    //  ]).then(sources => {

        Navigation.startTabBasedApp({
    
    
            tabs: [
                // {
                //     screen: "app.ShopSelection",
                //     label: "Select Shop",
                //     title: "Select Shop",
                //    icon: require('../Images/plane.svg'),   
                // },
                {
                    screen: "app.SearchShops", 
                    label: "Search",
                    title: "Search",
                    Icon: sources[1],
                    icon: require('../Images/plane.svg'), 
                        
                },
                // {
                //     screen: "app.Orders",
                //     label: "Orders",
                //     title: "Orders",
                //     Icon: sources[2],
                        
                // },
                // {
                //     screen: "app.Profile",
                //     label: "Profile",
                //     title: "Profile",
                //     Icon: sources[3],
        
                // },
                
               
            ]
        }); 

   // }//);
}
export default startTabs;

//     Navigation.startTabBasedApp({
    
    
//         tabs: [
//             {
//                 screen: "app.ShopSelection",
//                 label: "Select Shop",
//                 title: "Select Shop",
               
                    
//             },
//             {
//                 screen: "app.ShopSelection",
//                 label: "Select Shop",
//                 title: "Select Shop",
                    
//             },
//             {
//                 screen: "app.ShopSelection",
//                 label: "Select Shop",
//                 title: "Select Shop",
                    
//             },
//             {
//                 screen: "app.MealSelection",
//                 label: "Select Meal",
//                 title: "Select Meal",
    
//             },
            
           
//         ]
//     });
// };

