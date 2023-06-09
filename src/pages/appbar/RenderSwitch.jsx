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
            case 'Logout':
                      return (
                          <span>Logout</span>
                      )
            default:
              return (
                <span>Nada</span>
              )
          }
}