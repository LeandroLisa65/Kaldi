import { Default } from "./Default";
import Products from "./Products";

const RenderSwitch = ({page}) => {
  switch(page) 
  {
    case 'PRODUCTS':
      return (
        <Products />
      );
    case 'PRICING':
        return (
            <span>Pricing</span>
        )
    case 'Profile':
          return (
              <span>Profile</span>
          )
    case 'Account':
            return (
                <span>Account</span>
            )
    default:
      return (
        <Default />
      )
  }
}

export default RenderSwitch;