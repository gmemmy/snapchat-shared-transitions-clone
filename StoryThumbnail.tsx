import React, { useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'
import { Story } from './Model'
import { SharedElement } from 'react-navigation-shared-element'

interface StoryThumbnailProps {
  story: Story
}

const margin = 16;
const borderRadius = 5;
const width = Dimensions.get("window").width / 2 - margin * 2;

const StoryThumbnail = ({ story }: StoryThumbnailProps) => {
  const [opacity, setOpacity] = useState(1)
  const navigation = useNavigation<StackNavigationProp<any, any>>()
  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1)
    }
  })
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        setOpacity(0)
        navigation.navigate('Story', { story })
      }}
    >
      <SharedElement id={story.id} style={{ flex: 1 }}>
        <View style={[styles.container, { opacity }]}>
          <Image source={story.source} style={styles.image} />
        </View>
      </SharedElement>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height: width * 1.77,
    marginTop: 16,
    borderRadius,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    borderRadius,
  },
})

export default StoryThumbnail
