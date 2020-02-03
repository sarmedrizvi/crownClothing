import { DirectoryType } from "./Directory.Types";



export const AddCategories = (items) => ({
	type: DirectoryType.categories,
	payload: items
})