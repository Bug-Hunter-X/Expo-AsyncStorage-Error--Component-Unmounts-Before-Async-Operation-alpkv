import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        setData(value);
      } catch (e) {
        // Error handling
      }
    };

    fetchData();

    // Cleanup function to handle component unmount
    return () => {
      // Cancel or abort any pending asynchronous operations here, if necessary.
      // In this specific AsyncStorage case, there's no direct way to cancel,
      // so no specific cleanup action is needed, but this is where you would handle it
      // for other async operations that offer cancellation mechanisms. 
    };
  }, []);

  return (
    <View>
      {data !== null ? <Text>{data}</Text> : <Text>Loading...</Text>}
    </View>
  );
};
export default MyComponent;