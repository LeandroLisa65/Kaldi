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
            default:
              return (
                <span>Nada</span>
              )
          }
}