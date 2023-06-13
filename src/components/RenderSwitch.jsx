import { Default } from "./Default";

export const RenderSwitch = ({page}) => {
        switch(page) {
            case 'PRODUCTS':
              return (
                <span>Products</span>
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