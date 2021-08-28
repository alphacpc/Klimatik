import { StyleSheet } from 'react-native';

const PALETTE ={
  BLUE: "#0A1931",
  WHITE: "#FFFFFF",
  RED: "#DA0037",
  YELLOW: "#FFD900",    
}

const COLORS = {
  BLUE: PALETTE.BLUE,
  WHITE: PALETTE.WHITE,
  RED: PALETTE.RED,
  YELLOW: PALETTE,
  Dark: {
      backgroundColor: PALETTE.BLUE,
      color: PALETTE.WHITE,
      active: PALETTE.RED,
      inActive: PALETTE.WHITE,
    },
   Light: {
      backgroundColor: PALETTE.WHITE,
      color: PALETTE.BLUE,
      active: PALETTE.RED,
      inActive: PALETTE.BLUE,
   }
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: PALETTE.WHITE,
      paddingHorizontal: 10,
      paddingTop: 20,
      paddingBottom: 40
    },
});
  

export default Styles;