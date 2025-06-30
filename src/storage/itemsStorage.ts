import { FilterStatus } from "@/types/FilterStatus"
import AsyncStorage from "@react-native-async-storage/async-storage"


const ITEMS_STORAGE_KEY = "@comprar:items"

export type ItemStorageType = {
    id: string
    description: string
    status: FilterStatus

}



export class ItemStorage {
    static async get(): Promise<ItemStorageType[]> {
        try {

            const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
            return storage ? JSON.parse(storage) : []

        } catch (error: any) {
            throw new Error("GET_ITEMS " + error)
        }
    }

    static async getByStatus(status: FilterStatus): Promise<ItemStorageType[]> {
        try {
            const items = await this.get()
            return items.filter(item => item.status === status)


        } catch (error: any) {
            throw new Error("GET_ITEMS " + error)
        }
    }

    static async save(items: ItemStorageType[]): Promise<void> {
        try {
            await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
        } catch (error) {
            throw new Error("ITEMS_SAVE: " + error)
        }
    }


    static async add(newItem: ItemStorageType): Promise<ItemStorageType[]> {
        const items = await this.get()
        const updatedItems = [...items, newItem]
        await this.save(updatedItems)
        return updatedItems
    }

    static async remove(id: string): Promise<void> {
        const items = await this.get()
        const updatedItems = items.filter((item) => item.id !== id)
        await this.save(updatedItems)
    }

    static async clear(): Promise<void> {
        try {
            await AsyncStorage.removeItem(ITEMS_STORAGE_KEY)
        } catch (error) {
            throw new Error("ITEMS_CLEAR: " + error)
        }
    }

    static async toogleStatus(id : string) : Promise<void> {
        const items = await  this.get()
          const updatedItems = items.map((item) => 
            item.id === id
            ? {
              ...item,
        
              status: item.status === FilterStatus.PENDING
                ? FilterStatus.DONE
               : FilterStatus.PENDING,
            }
            : item
          )
          await this.save(updatedItems)
    }


}