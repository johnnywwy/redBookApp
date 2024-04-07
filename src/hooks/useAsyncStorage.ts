import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HookReturnType<T> = {
  item: T | null;
  saveItem: (value: T) => void;
  removeItem: () => void;
  getItem: () => Promise<T | null>;
};

export const useAsyncStorageHooks = <T>(key: string): HookReturnType<T> => {
  const [item, setItem] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setItem(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, [key]);

  const saveItem = async (value: T) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setItem(value);
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setItem(null);
    } catch (error) {
      console.error('Error removing data from AsyncStorage:', error);
    }
  };

  const getItem = async (): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error getting data from AsyncStorage:', error);
      return null;
    }
  };

  return {item, saveItem, removeItem, getItem};
};
