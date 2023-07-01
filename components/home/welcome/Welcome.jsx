import {useState} from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES, } from '../../../constants';

const jobTypes =[
  "Tech-Repairs",
  "System-Install",
  "Security-Cameras",
  "AppDesign"
];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setactiveJobType]=useState("Tech-Repairs")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Trevor Jemmott</Text>
        <Text style={styles.welcomeMessage}>what job you have today? </Text>

      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={()=>{}}
            placeholder='What job will you be doing today'
          />

        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>

      </View>
      </View>

    
  )
}

export default Welcome