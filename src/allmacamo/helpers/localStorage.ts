import AsyncStorage from '@react-native-community/async-storage'

/**
 * Function to remove locally stored data
 * @param key key of the stored item
 */
export const removeLocData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('removeData', e)
  }
}

/**
 * Function to save data in local storage
 * @param key key of the item
 * @param value value to be stored
 */
export const saveLocData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log('error save data', e)
  }
}

/**
 * Function to retrieve data stored locally
 * @param key key of the stored item
 */
export const getLocData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key)
    if (data !== null) {
      return JSON.parse(data)
    }
    return []
  } catch (e) {
    console.log('get', e)
  }
}
