import { ShopTypes } from "./Shop.Types";



export const ShopAction = (items) => ({
	type: ShopTypes.Add_SHOP_DATA,
	payload: items
})