import { Feather } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import * as React from "react";
import { StyleSheet, View } from "react-native";

const _color = "dodgerblue";
const _size = 100;

const WaveTingy = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 5 }}
              transition={{
                type: "timing",
                duration: 2000,
                delay: index * 400,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          );
        })}

        <Feather name='phone-call' size={32} color='#fff' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WaveTingy;
